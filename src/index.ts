import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// @ts-ignore
import inquirerSearchList from "inquirer-search-list";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

inquirer.registerPrompt("search-list", inquirerSearchList);

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

inquirer
  .prompt([
    {
      type: "search-list",
      message: "Select problem",
      name: "problem",
      choices: files.map((file) => ({
        name: kebabToTitleCase(file.replace(".ts", "")),
        value: file,
      })),
    },
  ])
  .then(async (answer) => {
    const { test } = await import(path.join(__dirname, answer.problem));

    if (!test) {
      throw new Error("No test function found");
    }

    try {
      await test();
      console.log('✅  All tests passed')
    } catch (e) {
      throw e
    }
  });
