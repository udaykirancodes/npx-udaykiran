import boxen from "boxen";
import chalk from "chalk";
import ora from "ora";
import { EXPERIENCE, PROJECTS, TECH_STACK, USER } from "./data";
import { formatTimeline } from "./utils";

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

export async function showLoading(message: string = "Loading", timeout = 1000) {
  const spinner = ora({
    text: chalk.dim(message),
    spinner: "dots12",
    color: "cyan",
  }).start();

  await new Promise((resolve) => setTimeout(resolve, timeout));
  spinner.stop();
}

export function showHeader() {
  console.clear();
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
      borderStyle: "classic",
      borderColor: "cyan",
      align: "center",
    }),
  );
}

export const showMiniHeader = () => {
  console.clear();
  const tagline = [
    theme.primary(
      chalk.bold(USER.fullName.toUpperCase()) +
        " | " +
        theme.highlight("Full-Stack Developer"),
    ),
    "",
    theme.muted("React • Next.js • Node.js • TypeScript • Golang"),
  ].join("\n");
  console.log(
    boxen(tagline, {
      padding: { top: 1, bottom: 1, left: 3, right: 3 },
      margin: { top: 1, bottom: 1 },
      borderStyle: "classic",
      borderColor: "cyan",
      align: "center",
    }),
  );
};

export function showAbout() {
  console.log(theme.warning.bold("\n  👋  ABOUT ME\n"));
  
  // Profile card with enhanced styling
  const profileContent = [
    theme.primary("📧 ") + theme.muted(USER.email),
    "",
    chalk.white(USER.description),
  ].join("\n");

  console.log(
    boxen(profileContent, {
      padding: 1,
      margin: { left: 2, right: 2 },
      borderStyle: "round",
      borderColor: "green",
    }),
  );

  console.log();

  // Quick stats with better formatting
  console.log(theme.muted("  ─".repeat(30)));
  console.log();
  console.log(`  ${theme.success("✓")} 1.5+ years of professional experience`);
  console.log(`  ${theme.success("✓")} Full-stack development expertise`);
  console.log(`  ${theme.success("✓")} Worked on micro-frontend architecture`);
  console.log(`  ${theme.success("✓")} Building animated components with motion`);
  console.log();
  console.log(theme.muted("  ─".repeat(30)));
  console.log();
}

export function showTechStack() {
  console.log(theme.warning.bold("\n  🛠️  TECH STACK\n"));
  
  const categories = TECH_STACK.reduce(
    (acc, tech) => {
      const category = tech.category || "Others";
      if (!acc[category]) acc[category] = [];
      acc[category].push(tech);
      return acc;
    },
    {} as Record<string, typeof TECH_STACK>,
  );

  console.log(theme.muted("  ─".repeat(30)));
  console.log();
  console.log(theme.primary("  Frontend"));
  console.log(
    theme.muted("  " + categories.Frontend.map((t) => t.title).join(" • ")),
  );
  console.log();
  console.log(theme.primary("  Backend"));
  console.log(
    theme.muted("  " + categories.Backend.map((t) => t.title).join(" • ")),
  );
  console.log();
  console.log(theme.primary("  Database"));
  console.log(
    theme.muted("  " + categories.Database.map((t) => t.title).join(" • ")),
  );
  console.log();
  console.log(theme.primary("  DevOps"));
  console.log(
    theme.muted("  " + categories.DevOps.map((t) => t.title).join(" • ")),
  );
  console.log();
  console.log(theme.primary("  Others"));
  console.log(
    theme.muted("  " + categories.Others.map((t) => t.title).join(" • ")),
  );
  console.log();
  console.log(theme.muted("  ─".repeat(30)));
  console.log();
}

export function showProjects() {
  console.log(theme.secondary.bold("\n  🚀  PROJECTS\n"));
  let str = "";

  PROJECTS.forEach((project, idx) => {
    // Minimal project display matching Experience section style
    const projectCard = [
      theme.muted("─".repeat(50)),
      "",
      theme.highlight(project.title),
      chalk.white(project.description),
      "",
      theme.muted("Stack: ") +
        project.skills.slice(0, 5).map((s) => theme.primary(s)).join(theme.muted(" • ")) +
        (project.skills.length > 5 ? theme.muted(` +${project.skills.length - 5}`) : ""),
      "",
      theme.primary("🔗 ") +
        theme.secondary.underline(project.liveLink) +
        theme.muted("  │  ") +
        theme.primary("</> ") +
        theme.secondary.underline(project.githubLink),
      "",
    ]
      .filter(Boolean)
      .join("\n");

    str += "  " + projectCard.split("\n").join("\n  ") + "\n";
  });

  console.log(str);
  console.log(theme.muted("  ─".repeat(50)));
  console.log();
}

export function showExperience() {
  console.log(theme.secondary.bold("\n  💼  WORK EXPERIENCE\n"));
  let str = "";

  EXPERIENCE.forEach((exp, idx) => {
    const timeline = formatTimeline(exp.from, exp.to);

    // Experience card
    const expCard = [
      theme.muted("─".repeat(50)),
      "",
      theme.highlight(exp.title),
      theme.primary(`@ ${exp.company}`) + theme.muted(` • ${exp.type}`),
      theme.muted(timeline),
      "",
    ]
      .filter(Boolean)
      .join("\n");

    str += "  " + expCard.split("\n").join("\n  ") + "\n";
  });

  console.log(str);
  console.log(theme.muted("  ─".repeat(50)));
  console.log();
}

export async function showContact() {
  console.log(theme.success.bold("\n  📬  GET IN TOUCH\n"));

  // Contact info card with enhanced formatting
  const contactCard = [
    theme.highlight("Let's Connect!"),
    "",
    theme.primary("💌 Email"),
    chalk.white(`   ${USER.email}`),
    "",
    theme.primary("💻 Portfolio"),
    chalk.white(`   ${theme.secondary.underline("https://udaykiran.dev")}`),
    "",
    theme.primary("🌐 Socials"),
    ...USER.socials.map((social) =>
      chalk.white(
        `   ${social.name.padEnd(10)} ${theme.secondary.underline(social.href)}`,
      ),
    ),
  ].join("\n");

  console.log(
    boxen(contactCard, {
      padding: 1,
      margin: { left: 2, right: 2 },
      borderStyle: "round",
      borderColor: "green",
    }),
  );

  console.log();
  console.log(theme.muted("  Looking forward to hearing from you! 👋"));
  console.log();
}