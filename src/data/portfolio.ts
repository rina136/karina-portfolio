// Edit all personal content and links here.
export const profile = {
  name: "Karina",
  role: "Computer Science Student / Backend Developer",
  intro:
    "I'm a Computer Science student who enjoys building reliable backend systems, designing clean APIs and working with databases and cloud tools.",
  email: "karina@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile",
  resume: "#", // replace with a link to your resume PDF
  photo: "", // replace with an image URL; leave empty for placeholder
};

export const about = {
  paragraphs: [
    "I'm studying Computer Science, where I've built a foundation in programming, data structures, databases and software engineering.",
    "I'm especially interested in backend development, software engineering practices, databases and cloud technologies — the parts of a system that keep everything running reliably.",
  ],
  interests: ["Backend development", "Software engineering", "Databases", "Cloud technologies"],
  hobbies: ["Reading", "Art", "Football"],
};

export const projects = [
  {
    name: "SecureLink URL Shortener",
    file: "securelink.ts",
    description:
      "A URL shortening service with a REST API for creating and resolving short links, backed by a relational database and packaged with Docker.",
    tech: ["Node.js", "Express", "PostgreSQL", "Docker"],
    github: "#",
    demo: "#",
  },
  {
    name: "Mental Health Support App",
    file: "MentalHealthApp.java",
    description:
      "A desktop application offering mental health support features, with a Swing interface and persistent data stored in MySQL via JDBC.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    name: "Container Health Monitor",
    file: "container-monitor.js",
    description:
      "A dashboard for monitoring the status of Docker containers, with an Express backend using Dockerode and a React frontend.",
    tech: ["Node.js", "Express", "Dockerode", "React"],
    github: "#",
    demo: "#",
  },
];

export const skills: Record<string, string[]> = {
  languages: ["Java", "Python", "C", "C++", "JavaScript", "SQL"],
  backend: ["Node.js", "Express", "FastAPI", "REST APIs"],
  frontend: ["React", "HTML", "CSS"],
  databases: ["PostgreSQL", "MySQL"],
  tools: ["Git", "GitHub", "Docker", "Postman"],
};

export const experience = [
  {
    org: "Mahatma Phule Apang Prashikshan Kendra",
    role: "Service-Learning Volunteer",
    period: "120 hours",
    points: [
      "Taught spoken English to young adults.",
      "Taught SQL / MySQL fundamentals.",
      "Taught Microsoft Excel basics.",
    ],
  },
  {
    org: "Lila Poonawalla Foundation",
    role: "Volunteer English Teacher",
    period: "",
    points: ["Taught English language to young girls."],
  },
];
