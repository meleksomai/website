// import chalk from "chalk";
import path from "path";

import { Command } from "commander";
import * as dotenv from "dotenv";
import figlet from "figlet";

import { cacheAllPublications, listAllPublications } from "@thugga/academic";

import tts from "./commands/tts/command";

const program = new Command();

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

console.log(figlet.textSync("Melek Somai CLI"));

program
  .version("1.0.0")
  .description("A CLI for managing administrative tasks.");

// ==================================
// Generate TTS
// ==================================
program
  .command("tts", {
    isDefault: false,
  })
  .description("generate text-to-speech using OpenAI's API.")
  .action(async () => {
    await tts();
  });

// ==================================
// Build the academic publications
// ==================================

program
  .command("academic")
  .description("CLI for managing academic publications")
  .option("-c, --cache <value>", "Cache all the publications in JSON.")
  .option("-l, --ls <value>", "List available publications")
  // .option("-m, --mkdir <value>", "Create a directory")
  // .option("-t, --touch <value>", "Create a file")
  .action(async () => {
    const options = program.opts();

    async function listPublications(filepath: string) {
      try {
        const papers = await listAllPublications(filepath);
        console.table(papers);
      } catch (error) {
        console.error("Error occurred while reading the directory!", error);
      }
    }

    async function cachePublications(filepath: string) {
      try {
        const papers = await cacheAllPublications(filepath);
        console.table(papers);
      } catch (error) {
        console.error("Error occurred while reading the directory!", error);
      }
    }

    // check if the option has been used the user
    if (options.ls) {
      const filepath = typeof options.ls === "string" ? options.ls : __dirname;
      listPublications(filepath);
    } else if (options.cache) {
      const filepath =
        typeof options.cache === "string" ? options.cache : __dirname;
      cachePublications(filepath);
    }
  });

program.parse();
