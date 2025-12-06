import { input } from "@inquirer/prompts";
import Markdoc from "@markdoc/markdoc";
import chalk from "chalk";
import Ffmpeg from "fluent-ffmpeg";
import fs from "fs";
import { convert } from "html-to-text";
import OpenAI from "openai";
import path from "path";

import { chunkText } from "./utils/chunkText";

const TEMP_FOLDER = path.resolve(process.cwd(), "temp");
const TEMP_SUBFOLDER = new Date().getTime().toString();

const tts = async () => {
  try {
    console.log(chalk.green("Generating text-to-speech..."));

    const openai = new OpenAI();
    const ffmpeg = Ffmpeg();

    // 1. Parameters
    const source = await input({
      message: "Enter the source to generate the text-to-speech from",
    });
    const output = await input({
      message: "Enter the destination of the generated audio file",
    });

    const outputFolder = path.resolve(process.cwd(), output);
    const sourceFile = path.resolve(process.cwd(), source);
    const tempFolder = path.join(TEMP_FOLDER, TEMP_SUBFOLDER);
    const outputFileName = path.basename(sourceFile, path.extname(sourceFile));
    const outputPath = path.join(outputFolder, `${outputFileName}.mp3`);

    // Create the temporary folder
    if (!fs.existsSync(tempFolder)) {
      await fs.promises.mkdir(tempFolder, { recursive: true });
    }

    // If the sourceFile is test/markdown.md, the speechFile will be `markdown`.
    const speechFile = path.basename(sourceFile, path.extname(sourceFile));

    // 2. Retrieve the source file content as markdown
    const file = await fs.promises.readFile(sourceFile, "utf-8");
    const ast = Markdoc.parse(file);
    const content = Markdoc.transform(ast /* config */);

    const html = Markdoc.renderers.html(content);
    const textInput = convert(html, {
      selectors: [{ selector: "a", format: "inline" }],
    });

    // 3. Chunk the text.
    // Note: OpenAI has a limit of 4096 tokens per request.
    // We need to chunk the text into smaller parts.
    const chunkSize = 4096;
    const chunks = chunkText(textInput, chunkSize);

    console.log(chalk.green("Text chunked into", chunks.length, "parts"));

    // 4. Generate the text-to-speech for each chunk
    const audioFiles: string[] = [];
    for (let i = 0; i < chunks.length; i++) {
      const chunk = chunks[i];

      // The temp audio file for the chunk
      const audioFilePath = path.join(tempFolder, `${speechFile}-${i}.mp3`);
      audioFiles.push(audioFilePath);

      console.log(chalk.yellow("Generating audio for chunk", i));
      // 1. Generate the audio file for the chunk
      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: "alloy",
        input: chunk,
      });
      const buffer = Buffer.from(await mp3.arrayBuffer());

      console.log(chalk.gray("Saving audio file to", audioFilePath));
      // 2. Save the audio file to the temp folder
      await fs.promises.writeFile(audioFilePath, buffer);

      // 3. Add the audio file to the ffmpeg input
      ffmpeg.addInput(audioFilePath);

      console.log(chalk.gray("Speech generated for chunk", i));
    }

    console.log(chalk.green("Concatenating audio files..."));
    // 5. Concatenate the audio files
    ffmpeg.mergeToFile(outputPath, tempFolder).on("end", () => {
      console.log(chalk.green("Audio file generated at", outputPath));
    });

    // 6. Cleanup
    console.log(chalk.green("Cleaning up..."));
    // Remove the temp folder
    // await fs.promises.rm(tempFolder, { recursive: true });
  } catch (error) {
    console.error(chalk.red("Error: ", error));
  }
};

export default tts;
