export const USER = {
  name: "UDAY KIRAN",
  email: "udaykiranbandarugalla@gmail.com",
  avatar: "https://udaykiran.dev/assets/uday.jpeg",
  firstName: "Uday Kiran",
  lastName: "Bandarugalla",
  fullName: "Uday Kiran Bandarugalla",
  description: `I'm Udaykiran, a Software Developer at HexaCluster, with 1.5 years of experience building high-quality web applications using Next.js, React, and TypeScript. I also work on scalable backend services using Node.js, Spring Boot, and Golang, focusing on microservices architecture.`,
  gender: "Male",
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
      href: "https://x.com/udaykirancodes",
      icon: "/assets/x.webp",
      username: "@udaykirancodes",
    },
  ],
};

export const TECH_STACK = [
  {
    key: "typescript",
    title: "TypeScript",
  },
  {
    key: "js",
    title: "JavaScript",
  },
  {
    key: "golang",
    title: "GoLang",
  },
  {
    key: "java",
    title: "Java",
  },
  {
    key: "nodejs",
    title: "Node.js",
  },
  {
    key: "react",
    title: "React",
  },
  {
    key: "nextjs2",
    title: "Next.js",
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
  },
  {
    key: "shadcn-ui",
    title: "shadcn/ui",
  },
  {
    key: "motion",
    title: "Motion",
  },
  {
    key: "redux",
    title: "Redux",
  },
  {
    key: "react-router",
    title: "React Router",
  },
  {
    key: "git",
    title: "Git",
  },
  {
    key: "docker",
    title: "Docker",
  },
  {
    key: "figma",
    title: "Figma",
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
    logo: "/assets/tech-stack/react.svg",
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
