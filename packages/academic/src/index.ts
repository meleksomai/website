import figlet from "figlet";
import { Command } from "commander";

import { listAllPublications, cacheAllPublications } from "./papers";

const program = new Command();

console.log(figlet.textSync("Academic Publication"));

program
  .version("1.0.0")
  .description("CLI for managing academic publications")
  .option("-c, --cache <value>", "Cache all the publications in JSON.")
  .option("-l, --ls <value>", "List available publications")
  // .option("-m, --mkdir <value>", "Create a directory")
  // .option("-t, --touch <value>", "Create a file")
  .parse(process.argv);

const options = program.opts();


async function listPublications(filepath: string) {
  try {
    const papers= await listAllPublications(filepath)
    console.table(papers);
  } catch (error) {
    console.error("Error occurred while reading the directory!", error);
  }
}

async function cachePublications(filepath: string) {
  try {
    const papers= await cacheAllPublications(filepath)
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
  const filepath = typeof options.cache === "string" ? options.cache : __dirname;
  cachePublications(filepath);
}