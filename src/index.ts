#!/usr/bin/env node

import inquirer from "inquirer";
import {
  showAbout,
  showContact,
  showExperience,
  showHeader,
  showProjects,
  showTechStack,
} from "./ui";

async function mainMenu() {
  const { choice } = await inquirer.prompt([
    {
      type: "select",
      name: "choice",
      message: "What would you like to explore?",
      choices: [
        { name: "👋 About Me", value: "about" },
        { name: "🛠 Tech Stack", value: "tech" },
        { name: "🚀 Projects", value: "projects" },
        { name: "💼 Experience", value: "experience" },
        { name: "📬 Contact", value: "contact" },
        { name: "❌ Exit", value: "exit" },
      ],
    },
  ]);

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

showHeader();
mainMenu();
