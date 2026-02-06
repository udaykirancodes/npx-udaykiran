#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import {
  showAbout,
  showContact,
  showExperience,
  showHeader,
  showLoading,
  showProjects,
  showTechStack,
} from "./ui";

async function mainMenu() {
  const WIDTH = 20;
  const { choice } = await inquirer.prompt([
    {
      type: "select",
      name: "choice",
      message: chalk.bold("What would you like to explore?\n"),
      pageSize: 10,
      choices: [
        {
          name: "👋 About Me".padEnd(WIDTH, " ") + chalk.dim(" — Who I am"),
          value: "about",
        },
        {
          name:
            "🛠  Tech Stack".padEnd(WIDTH + 1, " ") +
            chalk.dim(" — Tools & Technologies"), // +1 for the extra space because of the emoji
          value: "tech",
        },
        {
          name:
            "🚀 Projects".padEnd(WIDTH, " ") +
            chalk.dim(" — Things I've built"),
          value: "projects",
        },
        {
          name:
            "💼 Experience".padEnd(WIDTH, " ") +
            chalk.dim(" — Where I've worked"),
          value: "experience",
        },
        {
          name: "📬 Contact".padEnd(WIDTH, " ") + chalk.dim(" — Let's connect"),
          value: "contact",
        },
        { name: "❌ Exit", value: "exit" },
      ],
    },
  ]);

  await showLoading("Loading...", 300);

  switch (choice) {
    case "about":
      showAbout();
      break;
    case "tech":
      showTechStack();
      break;
    case "projects":
      showProjects();
      break;
    case "experience":
      showExperience();
      break;
    case "contact":
      showContact();
      break;
    case "exit":
      process.exit(0);
  }

  await pause();
  await mainMenu();
}

async function pause() {
  await inquirer.prompt([
    {
      type: "input",
      name: "continue",
      message: "Press Enter to go back",
    },
  ]);
}

async function init() {
  // Clear the console
  console.clear();
  // Show loading spinner
  // await showLoading("Initializing portfolio...");

  showHeader();
  mainMenu();
}
init();
