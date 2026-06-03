/** Portfolio content sourced from Jonas Costa de Lima's resume */

export const resumeSummary = [
  "Full-Stack & AI Engineer with 9+ years of experience building secure, scalable, and high-performance SaaS applications across backend systems, cloud environments, and end-to-end software development lifecycles. Strong expertise in Python (FastAPI, Django, Flask), Node.js, and Java (Spring Boot), with a focus on designing robust RESTful APIs, microservices architectures, and data-intensive systems.",
  "Experienced in developing modern frontend applications using React/Next.js, Angular, and TypeScript, delivering responsive and user-focused interfaces. Proven track record of architecting multi-tenant SaaS platforms, optimizing data layers with PostgreSQL, MongoDB, and Redis, and deploying cloud-native solutions using AWS, Docker, Kubernetes, and CI/CD pipelines.",
  "Hands-on experience integrating AI and LLM-based capabilities into production systems, turning complex models into scalable, user-facing features that enhance automation and decision-making. Recognized for strong ownership, cross-functional collaboration, and the ability to deliver reliable, maintainable systems that drive real business impact.",
];

export const resumeExperience = [
  {
    period: "Sep 2023 - Present",
    company: "MeBeBot",
    role: "Senior Software Engineer",
    location: "Austin, TX, US · Remote",
    highlights: [
      "Build and maintain features for various SaaS platforms across React, React Native, and Angular on the frontend and Python, Node.js, and Java on the backend.",
      "Develop scalable, multi-tenant applications on AWS and GCP for a growing user base.",
      "Integrate AI-driven capabilities to improve user interactions, automate workflows, and enhance platform intelligence.",
      "Design and maintain APIs and backend services for real-time communication and high-volume usage.",
      "Collaborate with product and design teams end-to-end in a fast-paced SaaS environment.",
      "Monitor and improve system performance, stability, and code quality for continuous delivery.",
    ],
  },
  {
    period: "Oct 2019 - Aug 2023",
    company: "OpenAI",
    role: "Software Engineer",
    location: "San Francisco, CA, US · Remote",
    highlights: [
      "Built backend services in Python (FastAPI, Flask, Django) for AI features with clean design and production performance.",
      "Designed and improved microservices architecture for scale, maintainability, and evolution.",
      "Worked with PostgreSQL, MySQL, and Redis under high load.",
      "Containerized with Docker and deployed on Kubernetes; improved CI/CD to reduce release time and production issues.",
      "Partnered with engineers and product to ship ML models as practical, user-facing features.",
    ],
  },
  {
    period: "Aug 2017 - Sep 2019",
    company: "Uber",
    role: "Full-Stack Developer",
    location: "Rio de Janeiro, Brazil · Hybrid",
    highlights: [
      "Developed backend services in Java and Node.js for marketplace and trip-related workflows.",
      "Built Next.js internal tools and dashboards for operations teams.",
      "Contributed to microservices and APIs handling high-volume requests.",
      "Improved reliability and performance through optimization, monitoring, and production debugging.",
      "Collaborated in cross-functional teams aligned with global engineering standards.",
    ],
  },
];

export const resumeEducation = {
  period: "Aug 2013 - May 2017",
  degree: "Bachelor's Degree in Computer Science",
  school: "State University of Goiás (UEG)",
  location: "Goiás, Brazil",
  description:
    "Undergraduate studies in computer science covering algorithms, software engineering, databases, and systems design.",
};

export const resumeAchievements = [
  {
    title: "Scaled AI-Driven Backend Systems",
    description:
      "Led backend services using Python (FastAPI) and microservices for AI-powered SaaS serving 5K+ users. Improved reliability and reduced average response time by ~30% for real-time, high-volume workloads.",
  },
  {
    title: "Integrated LLMs into Production Workflows",
    description:
      "Implemented AI/LLM features (GPT-4 APIs, TensorFlow) for automation, intelligent recommendations, and real-time processing—improving efficiency across backend systems.",
  },
  {
    title: "Accelerated Deployment & System Stability",
    description:
      "Enhanced CI/CD and containerized services with Docker and Kubernetes, reducing deployment time by ~50% and decreasing production incidents through more reliable releases.",
  },
];

export const resumeSkillGroups = [
  {
    label: "Backend",
    items: ["Python (FastAPI, Django, Flask)", "Java (Spring Boot)", "Node.js"],
  },
  {
    label: "Frontend",
    items: ["React", "React Native", "Next.js", "Angular", "TypeScript", "JavaScript"],
  },
  {
    label: "AI/ML & LLMs",
    items: ["GPT-4 API", "OpenAI", "TensorFlow", "Transformers", "Conversational AI"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL", "MongoDB", "DynamoDB", "MySQL", "SQLAlchemy", "Firestore"],
  },
  {
    label: "Cloud & DevOps",
    items: ["AWS", "GCP", "Kubernetes", "Docker", "Git", "Jenkins", "Terraform", "Azure DevOps"],
  },
  {
    label: "Testing & Architecture",
    items: ["JUnit", "PyTest", "Jest", "React Testing Library", "TDD", "SOLID"],
  },
  {
    label: "Other",
    items: ["RESTful APIs", "GraphQL", "WebSocket", "Kafka", "Agile/Scrum"],
  },
];

export const resumeTypewriterWords = [
  "AI & LLM Integration",
  "Multi-Tenant SaaS",
  "Microservices",
  "Cloud-Native Systems",
  "RESTful APIs",
  "Full-Stack Development",
];

export const resumeTimeline = [
  {
    id: 1,
    date: "Aug 2013 - May 2017",
    title: "Computer Science — UEG",
    description: resumeEducation.description,
    category: "education" as const,
    isKeyMilestone: true,
  },
  {
    id: 2,
    date: "Aug 2017",
    title: "Full-Stack Developer at Uber",
    description:
      "Joined Uber in Rio de Janeiro to build Java and Node.js services and Next.js tools for marketplace and operations teams.",
    category: "work" as const,
    isKeyMilestone: true,
  },
  {
    id: 3,
    date: "Oct 2019",
    title: "Software Engineer at OpenAI",
    description:
      "Remote role building Python backends, microservices, and production ML integrations with Docker, Kubernetes, and CI/CD.",
    category: "work" as const,
    isKeyMilestone: true,
  },
  {
    id: 4,
    date: "2019 - 2023",
    title: "LLMs & Production AI Features",
    description:
      "Integrated GPT-4 APIs and TensorFlow into backend workflows for automation, recommendations, and real-time processing.",
    category: "achievement" as const,
    isKeyMilestone: true,
  },
  {
    id: 5,
    date: "Sep 2023",
    title: "Senior Software Engineer at MeBeBot",
    description:
      "Leading full-stack SaaS delivery with AI integrations across AWS/GCP, React ecosystem, and polyglot backends.",
    category: "work" as const,
    isKeyMilestone: true,
  },
  {
    id: 6,
    date: "2023 - Present",
    title: "~30% Faster API Response Times",
    description:
      "Scaled FastAPI microservices for AI-powered SaaS (5K+ users), improving reliability and average response time for high-volume workloads.",
    category: "achievement" as const,
    isKeyMilestone: true,
  },
  {
    id: 7,
    date: "2023 - Present",
    title: "~50% Faster Deployments",
    description:
      "Improved CI/CD and Kubernetes deployments, cutting release time and reducing production incidents.",
    category: "achievement" as const,
    isKeyMilestone: false,
  },
];

export const resumeProjects = [
  {
    title: "MeBeBot — Multi-Tenant SaaS Platform",
    image: "portfolio.jpeg",
    desc: "Full-stack SaaS across React, React Native, and Angular with Python, Node.js, and Java backends. Multi-tenant architecture on AWS and GCP with AI-driven workflows and real-time APIs.",
    technologies: ["React", "React Native", "Angular", "Python", "Java", "AWS", "GCP"],
  },
  {
    title: "AI Backend Services (OpenAI-era)",
    image: "ai-lms.png",
    desc: "Python microservices (FastAPI, Flask, Django) for AI features in production. GPT-4 APIs, TensorFlow, PostgreSQL, Redis, Docker, and Kubernetes at scale.",
    technologies: ["Python", "FastAPI", "GPT-4 API", "TensorFlow", "PostgreSQL", "Kubernetes"],
  },
  {
    title: "Uber Marketplace & Operations Tools",
    image: "streamix.png",
    desc: "Java and Node.js services for riders and drivers, plus Next.js dashboards for operations. Microservices and high-volume APIs with strong reliability practices.",
    technologies: ["Java", "Node.js", "Next.js", "Microservices", "PostgreSQL"],
  },
  {
    title: "Real-Time & High-Volume APIs",
    image: "pong.png",
    desc: "REST and WebSocket APIs for real-time communication and heavy traffic, with Redis caching and performance tuning under load.",
    technologies: ["Node.js", "WebSocket", "Redis", "REST", "Kafka"],
  },
  {
    title: "CI/CD & Cloud Infrastructure",
    image: "portfolio.jpeg",
    desc: "Docker and Kubernetes on AWS/GCP with Jenkins and Terraform. CI/CD improvements cut deployment time by ~50% and improved release stability.",
    technologies: ["Docker", "Kubernetes", "AWS", "Jenkins", "Terraform", "CI/CD"],
  },
  {
    title: "Portfolio Website",
    image: "portfolio.jpeg",
    desc: "This site — Next.js, TypeScript, Tailwind CSS, and Framer Motion. Showcases experience, projects, and skills with a responsive, animated UI.",
    repo: "https://github.com/humordev/portfolio",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
];
