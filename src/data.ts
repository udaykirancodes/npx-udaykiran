export const USER = {
  name: "UDAY KIRAN",
  email: "udaykiranbandarugalla@gmail.com",
  avatar: "https://udaykiran.dev/assets/uday.jpeg",
  firstName: "Uday Kiran",
  lastName: "Bandarugalla",
  fullName: "Uday Kiran Bandarugalla",
  description: `I'm Udaykiran, a Software Developer at HexaCluster, with 1.5 years of experience building high-quality web applications using Next.js, React, and TypeScript. I also work on scalable backend services using Node.js, Spring Boot, and Golang, focusing on microservices architecture.`,
  gender: "Male",
  portfolio: "https://udaykiran.dev",
  socials: [
    {
      name: "Github",
      href: "https://github.com/udaykirancodes",
      icon: "/assets/github.webp",
      username: "@udaykirancodes",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/udaykiranbandarugalla",
      icon: "/assets/linkedin.webp",
      username: "@udaykiranbandarugalla",
    },
    {
      name: "X",
      href: "https://x.com/udaykirandev",
      icon: "/assets/x.webp",
      username: "@udaykirandev",
    },
  ],
};

export const TECH_STACK = [
  {
    key: "typescript",
    title: "TypeScript",
    category: "Frontend",
  },
  {
    key: "js",
    title: "JavaScript",
    category: "Frontend",
  },
  {
    key: "nodejs",
    title: "Node.js",
    category: "Backend",
  },
  {
    key: "golang",
    title: "GoLang",
    category: "Backend",
  },
  {
    key: "java",
    title: "Java",
    category: "Backend",
  },
  {
    key: "react",
    title: "React",
    category: "Frontend",
  },
  {
    key: "nextjs2",
    title: "Next.js",
    category: "Frontend",
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    category: "Frontend",
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
    category: "Frontend",
  },
  {
    key: "motion",
    title: "Motion",
    category: "Frontend",
  },
  {
    key: "redux",
    title: "Redux",
    category: "Frontend",
  },
  {
    key: "react-router",
    title: "React Router",
    category: "Frontend",
  },
  {
    key: "git",
    title: "Git",
    category: "DevOps",
  },
  {
    key: "docker",
    title: "Docker",
    category: "DevOps",
  },
  {
    key: "figma",
    title: "Figma",
    category: "Others",
  },
  {
    key: "zustand",
    title: "Zustand",
    category: "Frontend",
  },
  {
    key: "postgresql",
    title: "PostgreSQL",
    category: "Database",
  },
  {
    key: "drizzle",
    title: "Drizzle",
    category: "Others",
  },
];

export type Project = {
  title: string;
  description: string;
  logo: string;
  githubLink: string;
  liveLink: string;
  skills: string[];
  descriptionList: string[];
  isExpanded: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "udaykiran.dev",
    description: "A minimal responsive portfolio with component registry",
    logo: "https://udaykiran.dev/assets/portfolio-light.png",
    githubLink: "https://github.com/udaykirancodes/udaykiran.dev",
    liveLink: "https://udaykiran.dev",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    isExpanded: true,
    descriptionList: [
      "Clean & modern design",
      "Light & Dark theme support",
      "Component registry",
      "Re-Usable components",
      "Shadcn CLI supported",
    ],
  },
  {
    title: "turbo-code",
    description:
      "A collaborative, real-time code playground and microservices-based evaluation platform",
    logo: "https://udaykiran.dev/assets/turbo-code-light.png",
    githubLink: "https://github.com/udaykirancodes/turbo-code",
    liveLink: "https://code.udaykiran.dev",
    skills: ["React", "NodeJS", "TypeScript", "yJS", "Docker", "Microservices"],
    isExpanded: false,
    descriptionList: [
      "Real-time code collaboration via websockets",
      "Interactive code execution environment",
      "Containerized microservice architecture",
      "Project member management and access control",
    ],
  },
  {
    title: "npx-udaykiran",
    description:
      "An interactive terminal UI portfolio built for the modern developer",
    logo: "https://udaykiran.dev/assets/npx-udaykiran-light.png",
    githubLink: "https://github.com/udaykirancodes/npx-udaykiran",
    liveLink: "https://www.npmjs.com/package/udaykiran",
    skills: ["Node.js", "TypeScript", "Terminal UI", "CLI UX", "ESM", "tsup"],
    isExpanded: false,
    descriptionList: [
      "Interactive terminal UI (TUI) experience",
      "Keyboard-driven navigation",
      "Runs directly in terminal via npx udaykiran",
      "Beautiful colored layouts and prompts",
    ],
  },
  {
    title: "kinetic-studio",
    description:
      "A developer-first motion studio for designing and rendering kinetic typography videos with React and Remotion",
    logo: "/assets/kinetic-studio-light.png",
    githubLink: "https://github.com/udaykirancodes/kinetic-studio",
    liveLink: "https://kinetics.udaykiran.dev/",
    skills: ["React", "Next.js", "Remotion", "TypeScript"],
    isExpanded: false,
    descriptionList: [
      "Kinetic typography video editing",
      "Programmatic video rendering using React & Remotion",
      "Live video preview inside the browser",
      "Frame-accurate sequencing and timing control",
      "Editor-style UX inspired by motion design tools",
    ],
  },
  {
    title: "prettiefy",
    description:
      "A client-side screenshot beautifier for creating gorgeous, professional mockups instantly",
    logo: "/assets/prettiefy-light.png",
    githubLink: "https://github.com/udaykirancodes/prettiefy",
    liveLink: "https://prettiefy.udaykiran.dev",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "TypeScript",
      "html-to-image",
    ],
    isExpanded: false,
    descriptionList: [
      "Client-side Canvas rendering architecture",
      "Dynamic macOS and Browser window frames",
      "Responsive image layout constraints",
      "Custom backgrounds and advanced shadow controls",
      "True client-side unique visitor deduplication tracking",
    ],
  },
];

export type Experience = {
  company: string;
  title: string;
  type: string;
  logo: string;
  from: Date;
  to: Date | null;
  descriptionList: string[];
  skills: string[];
  isExpanded: boolean;
};

export const EXPERIENCE: Experience[] = [
  {
    title: "Software Developer Engineer",
    company: "HexaCluster",
    logo: "",
    isExpanded: true,
    descriptionList: [
      "Built custom UI components and extended shadcn/ui primitives to meet specific product requirements",
      "Ensured high code quality using ESLint, Prettier, and Husky as part of the development workflow",
      "Developed responsive, accessible web applications using React, TypeScript, and Tailwind CSS",
      "Built and maintained a production-grade Next.js application",
      "Created scalable server-side applications in TypeScript using Node.js",
      "Implemented Micro Frontend architecture for modular and independently deployable frontend features",
      "Worked on Golang micro-services backend",
      "Worked on Data Migration Tool with spring boot & spring batch",
    ],
    from: new Date(2024, 7, 1),
    to: null,
    type: "Full-time",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Golang",
      "Framer-Motion",
    ],
  },
  {
    title: "UI/UX Developer Intern",
    company: "HexaCluster",
    logo: "",
    isExpanded: false,
    descriptionList: [
      "Designed and developed pixel-perfect web interfaces with a focus on user experience and responsiveness",
      "Implemented a Retrieval-Augmented Generation (RAG) based chatbot using TypeScript",
      "Applied Server-Side Rendering (SSR) and Static Site Generation (SSG) in Next.js to enhance SEO and improve page load performance",
    ],
    from: new Date(2024, 0, 1),
    to: new Date(2024, 6, 30),
    type: "Internship",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer-Motion"],
  },
  {
    title: "Next.js Developer Intern",
    company: "CosEdge",
    logo: "",
    isExpanded: false,
    descriptionList: [
      "Developed pixel-perfect websites following modern UI/UX design practices",
      "Styled applications using Tailwind CSS for utility-first, responsive design",
      "Built dynamic web applications using Next.js and React",
    ],
    from: new Date(2023, 4, 1),
    to: new Date(2023, 5, 30),
    type: "Internship",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
];
