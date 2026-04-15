// Mock data for Nandan Bhandary's Portfolio

export const personalInfo = {
  name: "Nandan Bhandary",
  title: "Full Stack Developer",
  tagline: "Building scalable web solutions with Python & React",
  bio: "A highly motivated Information Science graduate with strong proficiency in Python along with Data Structures & Algorithms. Skilled in problem-solving and developing efficient, scalable solutions, with a keen interest in applying technical expertise to real-world challenges.",
  email: "nandanbhandary24@gmail.com",
  phone: "+91 9483277896",
  location: "Bengaluru, Karnataka, India",
  avatar: "https://customer-assets.emergentagent.com/job_portfolio-showcase-1339/artifacts/1mq5msqz_image.png",
  resumeUrl: "#"
};

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nandan-bhandary/",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/nandanbhandary1",
    icon: "github"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/nandan_bhandary/",
    icon: "code"
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/nandanbhandary24",
    icon: "trophy"
  }
];

export const skills = {
  "Languages": [
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" }
  ],
  "Frameworks & Libraries": [
    { name: "React", icon: "react" },
    { name: "Redux", icon: "redux" },
    { name: "Django", icon: "django" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Bootstrap", icon: "bootstrap" }
  ],
  "Databases": [
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "SQLite", icon: "sqlite" },
    { name: "SQLAlchemy", icon: "database" }
  ],
  "Data Science": [
    { name: "NumPy", icon: "numpy" },
    { name: "Pandas", icon: "pandas" }
  ],
  "Tools & DevOps": [
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Docker", icon: "docker" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "AWS", icon: "aws" },
    { name: "Pytest", icon: "pytest" }
  ],
  "IDEs & Development": [
    { name: "VS Code", icon: "vscode" },
    { name: "PyCharm", icon: "pycharm" },
    { name: "Jupyter", icon: "jupyter" },
    { name: "Anaconda", icon: "anaconda" },
    { name: "Jira", icon: "jira" },
    { name: "Postman", icon: "postman" },
    { name: "Swagger", icon: "swagger" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "IMDB API Clone",
    description: "Designed and developed a RESTful backend application using Django and Django REST Framework, implementing well-structured APIs that strictly follow REST principles, proper HTTP methods and standardized HTTP status codes.",
    longDescription: "Built and managed relational database models using Django ORM, defining relationships between users, streaming platforms, watchlists, and reviews. Implemented secure authentication mechanisms including Token Authentication and JWT Authentication, ensuring safe user login, session handling, and scalable stateless authentication.",
    technologies: ["Python", "Django", "Django REST Framework", "JWT", "PostgreSQL"],
    duration: "Oct 2024 – Dec 2024",
    highlights: [
      "RESTful API design following best practices",
      "Token & JWT Authentication",
      "Complex relational database models",
      "Django ORM with migrations"
    ]
  },
  {
    id: 2,
    title: "Blogging Application - Full Stack Platform",
    description: "Developed a full-stack blog application using Python and Django, enabling administrators to create, update, and manage blog posts via the Django Admin panel, while allowing users to browse all published posts.",
    longDescription: "Implemented dynamic post detail pages, displaying complete article content, author information, last-updated timestamps, and supporting user comment submission, with comments securely stored in the database using Django's MVT architecture.",
    technologies: ["Python", "Django", "HTML", "CSS", "SQLite"],
    duration: "Jul 2024 – Sep 2024",
    highlights: [
      "Full-stack MVT architecture",
      "Admin panel for content management",
      "Dynamic post detail views",
      "User comment system"
    ]
  }
];

export const experience = [
  {
    id: 1,
    company: "DHEE CODING LAB",
    role: "Python Full Stack Intern",
    duration: "Jun 2024 – Present",
    location: "Remote",
    type: "Internship",
    responsibilities: [
      "Developed a full-stack chatbot application with secure JWT-based authentication, enabling user registration and login",
      "Integrated OpenRouter API to generate real-time responses using large language models",
      "Designed backend APIs to manage user queries and built an interactive chat interface for seamless conversational experience"
    ],
    technologies: ["Python", "FastAPI", "React", "JWT", "OpenRouter API"]
  },
  {
    id: 2,
    company: "ROOOMAN TECHNOLOGIES",
    role: "Backend Developer Intern",
    duration: "Sep 2024 – Feb 2025",
    location: "Remote",
    type: "Internship",
    project: "JWT-Based Authentication System using Django REST Framework",
    responsibilities: [
      "Designed and developed a secure authentication and authorization REST API using Django REST Framework",
      "Implemented JWT-based access and refresh token authentication",
      "Built complete authentication flows including user registration, login, profile access, password change, and password reset via email"
    ],
    technologies: ["Python", "Django", "Django REST Framework", "JWT"]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering",
    field: "Information Science and Engineering",
    institution: "MVJ College of Engineering",
    location: "Bengaluru, Karnataka",
    duration: "2021 - 2025",
    cgpa: "8.21/10.0",
    highlights: [
      "Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Management System",
      "Participated in algorithmic coding hackathon at VERTECHX, MVJCE's national tech festival"
    ]
  },
  {
    degree: "Pre-University Course (XII)",
    institution: "Sri Venkataramana Dev Educational and Cultural Trust",
    location: "Kundapura, Karnataka",
    duration: "2021",
    percentage: "92.33%"
  },
  {
    degree: "Secondary School (X)",
    institution: "Sri Venkataramana Dev Educational and Cultural Trust",
    location: "Kundapura, Karnataka",
    duration: "2019",
    percentage: "93.28%"
  }
];

export const certifications = [
  {
    title: "Python Full Stack Training and Certification",
    issuer: "Dhee Coding Lab",
    status: "In Progress",
    date: "2024 - Present"
  },
  {
    title: "Python and Data Structures and Algorithms",
    issuer: "Code and Debug",
    status: "Completed",
    date: "2024"
  },
  {
    title: "Django & Building REST APIs with Django REST Framework",
    issuer: "Udemy",
    status: "Completed",
    date: "2024"
  }
];

export const stats = [
  { label: "Years of Learning", value: "3+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "25+" },
  { label: "Certifications", value: "3+" }
];

// Mock function to simulate contact form submission
export const submitContactForm = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Mock: Form submitted', formData);
      resolve({ success: true, message: 'Message sent successfully!' });
    }, 1000);
  });
};