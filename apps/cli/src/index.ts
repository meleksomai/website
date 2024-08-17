// import chalk from "chalk";
import path from "path";

import { Command } from "commander";
import * as dotenv from "dotenv";
import figlet from "figlet";

import tts from "./commands/tts";

const program = new Command();

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

console.log(figlet.textSync("Melek Somai CLI"));

program
  .version("1.0.0")
  .description("A CLI for managing administrative tasks.");

// =================
// Generate TTS
// =================
program
  .command("tts", {
    isDefault: false,
  })
  .description("generate text-to-speech using OpenAI's API.")
  .action(async () => {
    await tts();
  });

program.parse();
