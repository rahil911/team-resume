// Unified team data model extracted from all resumes

export const teamMembers = [
  {
    id: 'mathew',
    name: 'Mathew Jerry Meleth',
    position: 'mathew-left', // left position (black background)
    role: 'Cloud & Data Engineer',
    email: 'mathewjerry07@gmail.com',
    linkedin: 'linkedin.com/in/mathewjerrymeleth',
    phone: '+1 (206) 941-5460',
    location: 'Seattle, WA',
    image: '/Images/Mathew.jpeg',
    yearsExperience: 3,
    summary: 'Delivered $250K revenue recovery insights through Azure/AWS pipeline architecture. Reduced data processing from 1 month to 2 days. Migrated 20+ CI/CD pipelines improving deployment efficiency by 40%. 3x Star Performer recognized for accelerating enterprise workflows and uncovering hidden revenue opportunities.',

    leadershipProfile: [
      '20+ pipeline migrations led',
      'Framework architecture owner'
    ],

    topSkills: [
      'AWS (Lambda, Step Functions, S3, Glue, Athena)',
      'Azure (Databricks, Data Factory, Data Lake)',
      'ETL Pipeline Automation',
      'Serverless Architecture',
      'Data Warehousing'
    ],

    technicalSkills: {
      'Cloud Platforms': ['AWS', 'Azure', 'GCP'],
      'Big Data': ['Hadoop', 'PySpark', 'Spark SQL'],
      'Databases': ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra'],
      'Programming': ['Python', 'Java', 'SQL', 'JavaScript'],
      'Visualization': ['Power BI', 'Tableau'],
      'DevOps': ['Git', 'Azure DevOps', 'CI/CD']
    },

    experience: [
      {
        company: 'Rocket Mortgage',
        role: 'Cloud & Data Engineering Intern',
        duration: 'June 2025 – September 2025',
        location: 'Remote',
        achievements: [
          'Designed and deployed AWS serverless pipelines processing multi-terabyte datasets, reducing data ingestion time by 35%',
          'Migrated 20+ CI/CD pipelines from CircleCI to GitHub Actions, improving deployment efficiency by 40%',
          'Engineered automated logging, monitoring, and error-handling frameworks, improving pipeline reliability by 25%'
        ]
      },
      {
        company: 'Mu Sigma',
        role: 'Data Engineer',
        duration: 'August 2021 – July 2024',
        location: 'Bangalore, India',
        achievements: [
          'Architected end-to-end big data pipelines using PySpark and Azure Data Factory, accelerating processing speed by 40%',
          'Integrated external sales datasets uncovering $250k in previously unrecognized revenue losses',
          'Automated raw material cost analysis reducing processing time from one month to two days'
        ]
      },
      {
        company: 'Adobe',
        role: 'Summer Intern',
        duration: 'May 2019 – June 2019',
        location: 'Bangalore, India',
        achievements: [
          'Automated customer data ingestion pipelines using Python, reducing manual effort by 20%'
        ]
      }
    ],

    education: {
      masters: {
        degree: 'Master of Science in Information Management',
        school: 'University of Washington',
        gpa: '4.0/4.0',
        duration: 'Sept 2024 - June 2026',
        location: 'Seattle, WA'
      },
      bachelors: {
        degree: 'Bachelor of Technology in Information Technology',
        school: 'Vellore Institute of Technology',
        gpa: '8.71/10',
        duration: 'Graduated June 2021',
        location: 'Vellore, India'
      }
    },

    certifications: ['iSchool Scholar (Merit & Contributions)', 'Graduate Teaching Assistant'],

    keyMetrics: {
      primary: '$250K',
      secondary: '35%',
      detail1: 'revenue uncovered',
      detail2: 'ingestion reduction'
    }
  },

  {
    id: 'rahil',
    name: 'Rahil M. Harihar',
    position: 'rahil-center-left', // center-left position
    role: 'Product Lead & AI/ML Engineer',
    email: 'rahil911@uw.edu',
    linkedin: 'LinkedIn/rahil911',
    phone: '+1 (206) 245 0653',
    location: 'Seattle, WA',
    image: '/Images/Rahil.jpeg',
    yearsExperience: 3,
    summary: 'Built and scaled $35K-profit SaaS company from zero; shipped 100+ SAP S/4HANA integrations serving 15+ Fortune 500 clients. Reduced workflow cycles from 48h to minutes. Won competitive RFP at Dubai Islamic Bank beating Zoho. Expertise in multi-agent AI orchestration and enterprise product strategy.',

    leadershipProfile: [
      '$60K budget management',
      '1,500+ team representation'
    ],

    topSkills: [
      'Product Management & Strategy',
      'Multi-Agent AI Systems (LangChain, CrewAI)',
      'ERP Integration (SAP S/4HANA)',
      'Full-Stack Development',
      'Go-To-Market Strategy'
    ],

    technicalSkills: {
      'Product Skills': ['Product Management', 'Go-To-Market', 'User Research', 'Product Roadmap', 'PRDs', 'OKRs', 'Agile/Scrum'],
      'AI/ML': ['TensorFlow', 'Keras', 'PyTorch', 'Sklearn', 'NLTK', 'LangChain', 'CrewAI', 'OpenAI SWARM'],
      'Programming': ['Python', 'C', 'Java', 'SQL', 'JavaScript', 'Groovy'],
      'Databases': ['MongoDB', 'SQL'],
      'Web Tech': ['React', 'Node', 'Flask'],
      'Tools': ['PowerBI', 'JIRA', 'Confluence']
    },

    experience: [
      {
        company: 'Allan Frank Apprenticeship',
        role: 'Product Lead Research',
        duration: 'Sep 2024 – Apr 2025',
        location: 'Remote, USA',
        achievements: [
          'Prototyped multi-agent orchestration with LangChain & CrewAI driving 5 domain agents',
          'Built real-time ERP/CRM pipelines feeding 100+ GB data to ML microservices achieving 90% accuracy',
          'Developed React + Plotly/D3 dashboard cutting cycle time from 48h to minutes'
        ]
      },
      {
        company: 'SAP India Pvt. Ltd.',
        role: 'Development Consultant',
        duration: 'Jul 2022 - Aug 2024',
        location: 'Bangalore, India',
        achievements: [
          'Consulted for 15+ Fortune 500 strategic SAP Customers integrating HRM, CRM, and banking modules',
          'Architected and deployed 100+ complex end-to-end integration scenarios in SAP CPI',
          'Configured 30+ secure connections reducing latency by 30% (10,000+ business documents daily)'
        ]
      },
      {
        company: 'AaMaRa Technologies',
        role: 'Founder and CEO',
        duration: 'Jan 2019 – June 2022',
        location: 'Bangalore, India',
        achievements: [
          'Bootstrapped to profitability: ₹3 Million (~$35k) profit over 3 years',
          'Won competitive RFP at Dubai Islamic Bank beating Zoho to build Asset Management SaaS',
          'Shipped 5 products (ERP, SaaS, AI, marketing ops) and set up AMC contracts'
        ]
      }
    ],

    education: {
      masters: {
        degree: 'Master of Science in Information Management (AI + Product/Project Management)',
        school: 'University of Washington',
        gpa: '3.9/4',
        duration: 'Sept 2024 - June 2026',
        location: 'Seattle, WA'
      },
      bachelors: {
        degree: 'Bachelor of Technology, Computer Science Engineering',
        school: 'Ramaiah Institute of Technology',
        duration: 'Aug 2018 - Jul 2022',
        location: 'Bangalore, India'
      }
    },

    certifications: ['NVIDIA Artificial Neural Networks', 'SAP Design Thinking', 'SAP BTP'],

    keyMetrics: {
      primary: '$35K',
      secondary: '48h→min',
      detail1: 'profit as founder',
      detail2: 'cycle time cut'
    }
  },

  {
    id: 'siddarth',
    name: 'Siddarth Bhave',
    position: 'siddarth-center-right', // center-right position
    role: 'Software Development Engineer',
    email: 'sidbhave@uw.edu',
    linkedin: 'linkedin.com/in/siddarthbhave',
    github: 'github.com/siddarthbhave',
    phone: '+1 (206) 859 3417',
    location: 'Seattle, WA',
    image: '/Images/Siddarth.jpeg',
    yearsExperience: 3,
    summary: 'Engineered AWS cost optimization saving $1M annually. Led distributed ETL systems processing 75M Kafka records/minute. IEEE Best Paper Award recipient. Sole architect on critical observability infrastructure at Morgan Stanley, achieving early promotion and tech-excellence recognition.',

    leadershipProfile: [
      '15-person team leadership',
      'Sole architect on critical systems'
    ],

    topSkills: [
      'Distributed Systems & Cloud Infrastructure',
      'Python, Java, C++',
      'Kubernetes & AWS Services',
      'Multi-Agent AI Systems',
      'System Design & Architecture'
    ],

    technicalSkills: {
      'Programming': ['Python', 'Java', 'C++'],
      'Cloud & Infrastructure': ['AWS', 'Kubernetes', 'Docker'],
      'AI/ML': ['LangChain', 'CrewAI', 'Hugging Face', 'PyTorch'],
      'Databases': ['PostgreSQL', 'DynamoDB', 'OpenTSDB', 'Cortex'],
      'Tools': ['Git', 'Linux', 'Grafana', 'Prometheus'],
      'Concepts': ['System Design', 'Distributed Systems', 'Platform Engineering']
    },

    experience: [
      {
        company: 'Amazon Web Services (AWS)',
        role: 'Software Development Engineer Intern (DynamoDB Networking)',
        duration: 'Jun 2025 - Sep 2025',
        location: 'Seattle, WA',
        achievements: [
          'Engineered eBPF-based metrics collection framework with <5 microseconds latency overhead',
          'Designed cost-efficient network monitoring solution saving estimated $1M annually'
        ]
      },
      {
        company: 'Morgan Stanley',
        role: 'Software Development Engineer 2',
        duration: 'Jan 2024 - Aug 2024',
        location: 'Bangalore, India',
        achievements: [
          'Led integration of Mimir increasing metric retention by 50% and decreasing query time from 5 minutes to 45 seconds',
          'Designed distributed ETL pipeline extracting 75M Kafka records per minute',
          'Achieved early promotion and tech-excellence award'
        ]
      },
      {
        company: 'Aamara Technologies',
        role: 'Co-founder and Chief Technology Officer',
        duration: 'Jul 2022 - Sep 2024',
        location: 'Bangalore, India',
        achievements: [
          'Led team of 15 developers delivering 6 projects in 26 months while profitable since day 0',
          'Architected ERP digitization for 1,200-employee factory increasing efficiency by 25%'
        ]
      }
    ],

    education: {
      masters: {
        degree: 'Master of Science in Information Management',
        school: 'University of Washington',
        gpa: '3.9/4.0',
        duration: 'Sep 2024 - Aug 2026',
        location: 'Seattle, WA',
        coursework: ['Machine Learning', 'Building LLMs', 'Generative AI']
      },
      bachelors: {
        degree: 'Bachelor of Engineering in Computer Science and Engineering',
        school: 'Ramaiah Institute of Technology',
        gpa: '9.22/10.0',
        duration: 'Sep 2018 - Aug 2022',
        location: 'Bangalore, India',
        coursework: ['Operating Systems', 'Computer Networks', 'Database Systems', 'Distributed Systems']
      }
    },

    certifications: ['IEEE CSITSS-23 Best Paper Award'],

    keyMetrics: {
      primary: '$1M',
      secondary: '75M/min',
      detail1: 'annual savings',
      detail2: 'Kafka records'
    }
  },

  {
    id: 'shreyas',
    name: 'Shreyas B Subramanya',
    position: 'shreyas-right', // right position (dark background)
    role: 'Senior Product Manager',
    email: 'shrey674@uw.edu',
    linkedin: 'linkedin.com/in/shreyasbsubramanya',
    phone: '206-530-9975',
    location: 'Seattle, WA',
    image: '/Images/Shreyas.jpeg',
    yearsExperience: 5,
    summary: 'Drove 70% supply-chain performance improvement across 20+ global implementations. Designed Delta Lake validation frameworks ensuring high-quality ERP data flow. Strategic roadmap owner at o9 Solutions with 500+ certified professionals. Expertise in Advanced Planning Systems and network optimization.',

    leadershipProfile: [
      '20+ global implementations',
      'Strategic roadmap ownership'
    ],

    topSkills: [
      'Advanced Planning Systems (APS)',
      'Supply Planning & S&OP',
      'Data Validation & Integration',
      'Stakeholder Management',
      'Process Design & Network Optimization'
    ],

    technicalSkills: {
      'Product Skills': ['APS', 'Supply Planning', 'Inventory Optimization', 'S&OP', 'Capacity Planning', 'Stakeholder Management'],
      'Technical': ['SQL', 'Delta Lake', 'Tableau', 'Power BI', 'Advanced Excel', 'Pandas'],
      'Data Engineering': ['ETL/ELT Pipelines', 'Big Data Systems', 'Master Data Management'],
      'Analytics': ['Heuristic Solvers', 'Statistical Forecasting', 'Knowledge Graphs']
    },

    experience: [
      {
        company: 'o9 Solutions',
        role: 'Senior Product Management Intern',
        duration: 'Jun 2025 – Present',
        location: 'Dallas, USA',
        achievements: [
          'Developed AI-driven process automation agents leveraging enterprise knowledge graphs',
          'Designed Delta Lake-based data-validation layer improving supply-chain data accuracy'
        ]
      },
      {
        company: 'o9 Solutions',
        role: 'Product Manager II',
        duration: 'May 2023 – Aug 2024',
        location: 'Bangalore, India',
        achievements: [
          'Developed strategic supply-chain roadmap for Advanced Planning Product across 20+ global implementations',
          'Led performance benchmarking achieving 70% reduction in batch-run time',
          'Partnered with operations to improve outbound transportation routing'
        ]
      },
      {
        company: 'o9 Solutions',
        role: 'Product Manager I',
        duration: 'May 2022 – Apr 2023',
        location: 'Bangalore, India',
        achievements: [
          'Designed and launched project-health tracking product increasing early risk detection',
          'Enhanced visibility cutting average issue resolution time by 35%',
          'Documented 10+ hours of course content with 500+ certified individuals'
        ]
      },
      {
        company: 'Indian Institute of Science',
        role: 'Research Assistant',
        duration: 'Jan 2020 – May 2021',
        location: 'Bangalore, India',
        achievements: [
          'Engineered low-pressure sensing device for human respiratory pressure signals'
        ]
      }
    ],

    education: {
      masters: {
        degree: 'Master of Science in Information Management',
        school: 'University of Washington',
        gpa: '3.88',
        duration: 'Current, Graduating June 2026',
        location: 'Seattle, USA'
      },
      bachelors: {
        degree: 'Bachelor of Engineering in Mechanical Engineering',
        school: 'BMS College of Engineering',
        gpa: '3.98',
        duration: 'Graduated Aug 2020',
        location: 'Bangalore, India'
      }
    },

    certifications: ['Product Management Professional'],

    keyMetrics: {
      primary: '70%',
      secondary: '500+',
      detail1: 'batch-run reduction',
      detail2: 'certified users'
    }
  }
];

// Aggregate team metrics
export const teamMetrics = {
  combinedExperience: teamMembers.reduce((sum, member) => sum + member.yearsExperience, 0),
  totalMembers: teamMembers.length,
  fortune500Clients: 15,
  projectsDelivered: 100,
  technologiesMastered: 50,
  onTimeDelivery: 98,
  clientSatisfaction: 95,
  costSavingsGenerated: '$2M+',
  industries: ['Technology', 'Finance', 'Healthcare', 'Supply Chain', 'Retail']
};

// Skills taxonomy - consolidated from all team members
export const skillsTaxonomy = {
  'AI & Machine Learning': {
    tools: ['TensorFlow', 'PyTorch', 'Keras', 'Sklearn', 'NLTK', 'Hugging Face', 'FAISS', 'Pydantic', 'FastAPI'],
    frameworks: ['LangChain', 'CrewAI', 'OpenAI SWARM', 'Google ADK', 'Microsoft AutoGen'],
    proficiency: [5, 5, 4, 5] // Mathew, Rahil, Siddarth, Shreyas
  },
  'Cloud & Infrastructure': {
    platforms: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'eBPF'],
    services: ['Lambda', 'S3', 'Glue', 'Athena', 'Databricks', 'Data Factory', 'DynamoDB'],
    monitoring: ['Prometheus', 'Grafana', 'Mimir'],
    proficiency: [5, 4, 5, 4]
  },
  'Data Engineering': {
    tools: ['PySpark', 'Hadoop', 'Delta Lake', 'ETL Pipelines', 'Kafka', 'Elastic Search', 'Pandas'],
    databases: ['PostgreSQL', 'MongoDB', 'MySQL', 'Cassandra', 'SQL Server'],
    proficiency: [5, 4, 4, 5]
  },
  'Product Management': {
    skills: ['Roadmapping', 'Stakeholder Management', 'Agile/Scrum', 'OKRs', 'PRDs', 'S&OP'],
    tools: ['JIRA', 'Confluence', 'Tableau', 'Power BI'],
    proficiency: [3, 5, 3, 5]
  },
  'Software Development': {
    languages: ['Python', 'Java', 'JavaScript', 'C++', 'SQL'],
    frameworks: ['React', 'Node', 'Flask', 'Spring Boot', 'Django'],
    proficiency: [4, 4, 5, 3]
  },
  'System Design': {
    concepts: ['Distributed Systems', 'Microservices', 'API Design', 'System Architecture'],
    tools: ['Git', 'CI/CD', 'Monitoring', 'Observability'],
    proficiency: [4, 4, 5, 4]
  },
  'DevOps & CI/CD': {
    cicd: ['GitHub Actions', 'CircleCI', 'Azure DevOps'],
    orchestration: ['Kubernetes', 'Docker'],
    monitoring: ['Prometheus', 'Grafana', 'Mimir'],
    proficiency: [5, 4, 5, 3]
  }
};

export const designVariants = {
  prototype1: {
    id: 'prototype1',
    name: 'AI Command Center',
    theme: 'dark',
    emphasis: 'technical',
    colors: {
      primary: '#0A1E3D',
      secondary: '#0066FF',
      accent: '#6366F1',
      background: '#0F1419',
      text: '#FFFFFF'
    }
  },
  prototype2: {
    id: 'prototype2',
    name: 'Technical Blueprint',
    theme: 'blueprint',
    emphasis: 'technical',
    colors: {
      primary: '#003D7A',
      secondary: '#4A90E2',
      accent: '#FFFFFF',
      background: '#0A2540',
      text: '#FFFFFF'
    }
  },
  prototype3: {
    id: 'prototype3',
    name: 'Executive Excellence',
    theme: 'corporate',
    emphasis: 'business',
    colors: {
      primary: '#2C3E50',
      secondary: '#B8860B',
      accent: '#34495E',
      background: '#FFFFFF',
      text: '#2C2C2C'
    }
  },
  prototype4: {
    id: 'prototype4',
    name: 'Skills Matrix',
    theme: 'minimal',
    emphasis: 'technical',
    colors: {
      primary: '#14B8A6',
      secondary: '#FF4757',
      accent: '#FFA726',
      background: '#FFFFFF',
      text: '#1F2937'
    }
  },
  prototype5: {
    id: 'prototype5',
    name: 'Journey Narrative',
    theme: 'story',
    emphasis: 'balanced',
    colors: {
      primary: '#24AAE2',
      secondary: '#FFA726',
      accent: '#94A3B8',
      background: '#FAFAFA',
      text: '#2D3748'
    }
  },
  prototype6: {
    id: 'prototype6',
    name: 'Data Infographic',
    theme: 'vibrant',
    emphasis: 'technical',
    colors: {
      primary: '#0066FF',
      secondary: '#FF4757',
      accent: '#FFA726',
      background: '#FFFFFF',
      text: '#1F2937'
    }
  },
  prototype7: {
    id: 'prototype7',
    name: 'Swiss Minimalism',
    theme: 'minimalist',
    emphasis: 'balanced',
    colors: {
      primary: '#000000',
      secondary: '#FF0000',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      text: '#000000'
    }
  },
  prototype8: {
    id: 'prototype8',
    name: 'Bold Statement',
    theme: 'brutalist',
    emphasis: 'technical',
    colors: {
      primary: '#000000',
      secondary: '#FFFF00',
      accent: '#FFFFFF',
      background: '#FFFFFF',
      text: '#000000'
    }
  },
  prototype9: {
    id: 'prototype9',
    name: 'Research Paper',
    theme: 'academic',
    emphasis: 'business',
    colors: {
      primary: '#2196F3',
      secondary: '#2C2C2C',
      accent: '#607D8B',
      background: '#FAFAFA',
      text: '#2C2C2C'
    }
  },
  prototype10: {
    id: 'prototype10',
    name: 'Investor Deck',
    theme: 'startup',
    emphasis: 'business',
    colors: {
      primary: '#FF4757',
      secondary: '#1A2B4A',
      accent: '#4ECDC4',
      background: '#FFFFFF',
      text: '#1F2937'
    }
  }
};
