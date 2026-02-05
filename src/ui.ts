import boxen from "boxen";
import chalk from "chalk";
import ora from "ora";
import { EXPERIENCE, PROJECTS, TECH_STACK, USER } from "./data";

const theme = {
  primary: chalk.cyan,
  secondary: chalk.blue,
  accent: chalk.magenta,
  success: chalk.green,
  warning: chalk.yellow,
  error: chalk.red,
  muted: chalk.dim,
  highlight: chalk.bold.white,
};

export async function showLoading(message: string = "Loading", timeout = 1200) {
  const spinner = ora({
    text: chalk.dim(message),
    spinner: "dots12",
    color: "cyan",
  }).start();

  await new Promise((resolve) => setTimeout(resolve, timeout));
  spinner.stop();
}

export function showHeader() {
  const tagline = [
    theme.primary(chalk.bold(USER.fullName.toUpperCase())),
    "",
    theme.highlight("Full-Stack Developer"),
    "",
    theme.muted("React • Next.js • Node.js • TypeScript • Golang"),
    "",
    theme.muted(
      "Building scalable web applications & solving real-world problems",
    ),
  ].join("\n");

  console.log(
    boxen(tagline, {
      padding: { top: 1, bottom: 1, left: 3, right: 3 },
      margin: { top: 1, bottom: 1 },
      borderStyle: "round",
      borderColor: "cyan",
      align: "center",
    }),
  );
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
