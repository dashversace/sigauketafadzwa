export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  overview: string;
  problem: string;
  objectives: string[];
  solution: string;
  techStack: string[];
  architectureSummary: string;
  keyFeatures: string[];
  implementationDetails: string;
  challenges: string;
  githubUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: "broiler-disease-detection",
    number: "01",
    title: "AI-Powered Broiler Disease Detection",
    subtitle: "Multimodal Machine Learning Model for Early Detection",
    category: "AI & Computer Vision",
    overview: "A research and development system exploring early disease detection in broiler chickens by combining image-based classification with behavioral and posture telemetry.",
    problem: "Traditional poultry health monitoring relies heavily on manual, reactive visual inspection by farm managers, often detecting infections after symptoms have already caused significant productivity losses or mortality.",
    objectives: [
      "Develop a robust image classifier using Convolutional Neural Networks (CNNs).",
      "Integrate behavioral posture tracking metrics with image predictions.",
      "Design an intuitive web interface for real-time model inference and diagnostic reporting."
    ],
    solution: "Built a multimodal pipeline utilizing OpenCV for video frame extraction, custom CNN architectures trained in PyTorch/Python for visual anomaly detection, backed by a Django REST API and SQLite storage.",
    techStack: ["Python", "PyTorch", "OpenCV", "Convolutional Neural Networks", "Django", "React", "SQLite"],
    architectureSummary: "Input video feeds and image frames are processed via OpenCV feature extractors, fed into a dual-stream multimodal neural network combining spatial visual features and behavioral posture vectors, outputting structured probability metrics via a Django backend.",
    keyFeatures: [
      "Image-based disease classification and lesion identification",
      "Behavioral and movement posture analysis",
      "Multimodal data fusion pipeline",
      "Interactive dashboard for confidence score visualization"
    ],
    implementationDetails: "Engineered data pipelines to normalize varying lighting conditions in poultry environments. Utilized transfer learning on pre-trained CNN backbones to accelerate convergence on specialized poultry datasets.",
    challenges: "Handling class imbalance across rare disease manifestations and mitigating environmental noise in farm camera feeds through aggressive data augmentation.",
    githubUrl: "https://github.com/tafadzwasigauke"
  },
  {
    id: "smc-trading-bot",
    number: "02",
    title: "Algorithmic Trading & Market Intelligence",
    subtitle: "Smart Money Concepts (SMC) Automated System",
    category: "Algorithmic Systems",
    overview: "A Python-based algorithmic trading automation project integrated with MetaTrader 5, engineered for multi-timeframe structural market analysis, liquidity tracking, and disciplined risk management.",
    problem: "Manual execution of Smart Money Concepts (CHoCH, BOS, order blocks, and liquidity sweeps) is emotionally taxing and prone to human latency across fast-moving foreign exchange and financial instruments.",
    objectives: [
      "Automate high-precision market structure detection (BOS/CHoCH).",
      "Implement dynamic position sizing and automated risk-reward boundaries.",
      "Provide real-time terminal telemetry and performance logging."
    ],
    solution: "Developed an asynchronous Python trading daemon connecting directly to MetaTrader 5 via MetaTrader5 Python API, utilizing pandas and NumPy for vectorised indicator calculation and custom risk engines.",
    techStack: ["Python", "MetaTrader 5 API", "NumPy", "Pandas", "Streamlit", "Plotly"],
    architectureSummary: "Data ingestion pipeline pulls tick and OHLCV data from MT5 -> Pandas engine calculates liquidity pools and order blocks -> Risk module computes lot sizes and stop-loss parameters -> Execution API places limit/market orders with automated logging.",
    keyFeatures: [
      "Multi-timeframe market structure evaluation",
      "Automated liquidity pool and order block identification",
      "Configurable stop-loss, take-profit, and trailing stop rules",
      "Interactive Streamlit telemetry monitoring dashboard"
    ],
    implementationDetails: "Built robust error-handling wrappers around broker API connections to prevent orphaned orders during network interruptions or latency spikes.",
    challenges: "Calibrating structural swing-point algorithms to filter out micro-market noise in lower timeframes while maintaining responsiveness.",
    githubUrl: "https://github.com/tafadzwasigauke"
  },
  {
    id: "dry-cleaners-platform",
    number: "03",
    title: "Paperless Dry-Cleaning Management System",
    subtitle: "Digital Business Operations Platform for New Image Dry Cleaners",
    category: "Full-Stack Web App",
    overview: "A comprehensive business application designed to digitize dry-cleaning operations, replacing manual paper carbon books with structured order tracking, customer ledgers, and automated status workflows.",
    problem: "Manual paper-based receipting and garment tracking resulted in misplaced tickets, inventory bottlenecks, delayed customer notifications, and fragmented daily revenue reconciliation.",
    objectives: [
      "Digitize the end-to-end garment intake, processing, and collection lifecycle.",
      "Provide secure role-based access for front-desk cashiers and store managers.",
      "Generate digital receipts and real-time revenue analytics."
    ],
    solution: "Engineered a full-stack platform featuring a responsive React frontend, Tailwind CSS styling, and a secure Django REST Framework backend backed by PostgreSQL.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Django REST Framework", "PostgreSQL"],
    architectureSummary: "Client-side React SPA communicates via secure JWT tokens with a modular Django monolith, persisting relational data across customer profiles, garment categories, transaction ledgers, and operational statuses.",
    keyFeatures: [
      "Digital order intake and custom receipt generation with unique watermarks",
      "Real-time garment status tracking (Received -> Cleaning -> Quality Check -> Ready -> Collected)",
      "Automated balance tracking and payment reconciliation",
      "Role-based dashboards for administrators and staff"
    ],
    implementationDetails: "Designed normalized database schemas to handle complex multi-item garment orders with specific cleaning instructions, add-on treatments, and split payment methods.",
    challenges: "Ensuring lightning-fast client-side search across historical customer records and offline resilience during intermittent utility outages.",
    githubUrl: "https://github.com/tafadzwasigauke"
  }
];

export const EXPERTISE_DATA = [
  {
    category: "Software Engineering & Architecture",
    items: ["Full-Stack Web Development", "RESTful APIs & Microservices", "Object-Oriented Programming", "System Design & Modeling", "Version Control (Git/GitHub)"]
  },
  {
    category: "AI, Machine Learning & Data",
    items: ["Python Data Science Stack", "Computer Vision (OpenCV)", "Convolutional Neural Networks", "PyTorch / Scikit-Learn", "Data Preprocessing & EDA"]
  },
  {
    category: "Frontend & User Experience",
    items: ["React.js & TypeScript", "Tailwind CSS & Modern UI", "State Management", "Responsive Mobile-First Design", "Framer Motion Animations"]
  },
  {
    category: "IT Infrastructure, Networks & Support",
    items: ["IT Systems Troubleshooting", "Computer Maintenance & Hardware", "Network Configuration & Security", "OS Deployment & Administration", "Technical Documentation"]
  }
];

export const EXPERIENCE_DATA = [
  {
    period: "2024 — 2025",
    role: "Real Estate Industrial Attachment",
    company: "WealthCare Real Estate",
    location: "Harare, Zimbabwe",
    description: "Completed a comprehensive 52-week industrial attachment focusing on property management, spatial asset valuations, commercial spatial conversions, and digital workflow optimization at the Lookout Hub."
  },
  {
    period: "Leadership & Community",
    role: "Primary School Headmaster & Administrator",
    company: "Baring Primary School",
    location: "Manicaland, Zimbabwe",
    description: "Spearheaded administrative operations, curriculum delivery, and educational infrastructure programs for 876 learners. Managed staff coordination, student development records, and institutional resource allocation."
  },
  {
    period: "Field Operations & Data",
    role: "Team Leader Field Worker",
    company: "Zimbabwe Statistics Agency (ZIMSTAT)",
    location: "Zimbabwe",
    description: "Supervised a team of 12 enumerators during district-level census data collection, beneficiary registration, quality audits, and Computer Assisted Personal Interviewing (CAPI) tablet deployment."
  },
  {
    period: "Community Development",
    role: "Community Coordinator",
    company: "World Vision & USAID",
    location: "Manicaland, Zimbabwe",
    description: "Directed community visioning sessions, stakeholder engagement, participatory project implementation, and household profiling initiatives to drive sustainable regional development."
  }
];