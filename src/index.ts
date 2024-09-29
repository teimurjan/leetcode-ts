import { ExitPromptError } from "@inquirer/core";
import { search } from "@inquirer/prompts";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import Fuse from "fuse.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const files = fs
  .readdirSync(__dirname)
  .filter((file) => file.endsWith(".ts"))
  .filter((file) => !file.endsWith("index.ts"));

const kebabToTitleCase = (str: string): string => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const choices = files.map((file) => ({
  name: kebabToTitleCase(file.replace(".ts", "")),
  value: file,
}));

const fuse = new Fuse(choices, {
  keys: ["name", "value"],
});

search({
  message: "Select problem",
  source: async (input, { signal }) => {
    if (process.argv.length > 2) {
      const problem = process.argv.pop();
      const results = fuse.search(problem);
      if (results.length > 0) {
        return [results[0].item];
      }
    }

    if (!input) {
      return [];
    }

    return fuse.search(input).map((result) => result.item);
  },
})
  .then(async (problem) => {
    const { test } = await import(path.join(__dirname, problem));

    if (!test) {
      throw new Error("No test function found");
    }

    try {
      await test();
      console.log("✅  All tests passed");
    } catch (e) {
      throw e;
    }
  })
  .catch((e) => {
    if (e instanceof ExitPromptError) {
      console.log("👋 Bye");
    } else {
      throw e;
    }
  });
