import boxen from "boxen";
import chalk from "chalk";
import { EXPERIENCE, PROJECTS, TECH_STACK, USER } from "./data";

export function showHeader() {
  console.clear();

  const content = [
    chalk.cyanBright.bold(USER.fullName),
    chalk.white("Full-Stack Developer"),
    chalk.gray("React • Next.js • Node • TypeScript"),
  ].join("\n");

  console.log(
    boxen(content, {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "cyan",
      align: "center",
    }),
  );
  console.log();
  console.log(USER.description);
  console.log();
}

export function showAbout() {
  showHeader();
  console.log(chalk.green("👋 About Me\n"));
  console.log(
    `${USER.fullName}\n\n` +
      "Full-stack developer passionate about building scalable web apps,\n" +
      "CLI tools, and clean developer experiences.\n",
  );
}

export function showTechStack() {
  showHeader();
  console.log(chalk.yellow("🛠 Tech Stack\n"));

  TECH_STACK.forEach((tech) => {
    console.log(`• ${tech.title}`);
  });
}

export function showProjects() {
  showHeader();
  console.log(chalk.magenta("🚀 Projects\n"));

  PROJECTS.forEach((project) => {
    console.log(chalk.bold(project.title));
    console.log(project.description);
    console.log(chalk.gray("Tech:"), project.skills.join(", "));
    console.log(chalk.blue("GitHub:"), project.githubLink);
    console.log(chalk.blue("Live  :"), project.liveLink);

    project.descriptionList.forEach((d) => {
      console.log("  -", d);
    });

    console.log();
  });
}

export function showExperience() {
  showHeader();
  console.log(chalk.blue("💼 Experience\n"));

  EXPERIENCE.forEach((exp) => {
    console.log(chalk.bold(`${exp.title} @ ${exp.company}`));
    console.log(chalk.gray(exp.type));

    exp.descriptionList.forEach((d) => {
      console.log("  -", d);
    });

    console.log(chalk.gray("Skills:"), exp.skills.join(", "));
    console.log();
  });
}

export function showContact() {
  showHeader();
  console.log(chalk.cyan("📬 Contact\n"));

  console.log("Email:", USER.email);
  USER.socials.forEach((s) => {
    console.log(`${s.name}: ${s.href}`);
  });
}
