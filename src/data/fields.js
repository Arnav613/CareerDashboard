// The career fields, their subfields, and each subfield's roadmap.
// Roadmap = ordered stages (the spine); each stage has nodes referencing
// skill ids from skills.js with a preferred side ('left' | 'right').

export const FIELDS = [
  {
    id: 'swe',
    name: 'Software Engineering',
    short: 'Software',
    tagline: 'Design, build and ship the software the world runs on.',
    accent: 'var(--accent-swe)',
    about: {
      overview:
        'Software engineers design, build, test and maintain software systems — from user-facing apps to the backend services and infrastructure behind them. It is the broadest and most liquid tech career: strong fundamentals (DSA, system design) transfer across every company and domain.',
      dayToDay: [
        'Writing and reviewing code, usually in a team with a shared codebase',
        'Designing features and systems: APIs, data models, architecture docs',
        'Debugging production issues and improving performance/reliability',
        'Sprint planning, standups, and collaborating with product/design',
      ],
      interviewFocus:
        'Interviews are dominated by DSA (LeetCode-style), plus system design for mid/senior roles and behavioral rounds. Internships and projects matter more than any certificate.',
    },
    subfields: [
      {
        id: 'frontend',
        name: 'Frontend',
        blurb: 'Everything the user sees and touches — web UIs, interactivity, performance.',
        roadmap: [
          {
            stage: 'Web Foundations',
            nodes: [
              { skill: 'html-css', side: 'left' },
              { skill: 'javascript', side: 'right' },
              { skill: 'git', side: 'left' },
            ],
          },
          {
            stage: 'Programming Core',
            nodes: [
              { skill: 'ds-basics', side: 'left' },
              { skill: 'algorithms', side: 'right' },
            ],
          },
          {
            stage: 'Framework Era',
            nodes: [
              { skill: 'react', side: 'left' },
              { skill: 'typescript', side: 'right' },
              { skill: 'state-management', side: 'left' },
            ],
          },
          {
            stage: 'Ship Quality',
            nodes: [
              { skill: 'frontend-testing', side: 'left' },
              { skill: 'web-performance', side: 'right' },
              { skill: 'build-tools', side: 'left' },
            ],
          },
          {
            stage: 'Engineer Level',
            nodes: [
              { skill: 'networking-basics', side: 'left' },
              { skill: 'system-design', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'backend',
        name: 'Backend',
        blurb: 'Servers, APIs, databases and the logic that powers products at scale.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'git', side: 'right' },
              { skill: 'linux', side: 'left' },
            ],
          },
          {
            stage: 'CS Core',
            nodes: [
              { skill: 'os-fundamentals', side: 'left' },
              { skill: 'networking-basics', side: 'right' },
            ],
          },
          {
            stage: 'DSA & Interviews',
            nodes: [
              { skill: 'ds-basics', side: 'left' },
              { skill: 'algorithms', side: 'right' },
              { skill: 'trees-graphs', side: 'left' },
              { skill: 'dynamic-programming', side: 'right' },
            ],
          },
          {
            stage: 'Building Servers',
            nodes: [
              { skill: 'backend-framework', side: 'left' },
              { skill: 'rest-apis', side: 'right' },
              { skill: 'sql', side: 'left' },
              { skill: 'auth-security', side: 'right' },
            ],
          },
          {
            stage: 'Data Layer',
            nodes: [
              { skill: 'databases-advanced', side: 'left' },
              { skill: 'nosql', side: 'right' },
              { skill: 'caching', side: 'left' },
            ],
          },
          {
            stage: 'Scale',
            nodes: [
              { skill: 'message-queues', side: 'left' },
              { skill: 'microservices', side: 'right' },
              { skill: 'backend-testing', side: 'left' },
              { skill: 'system-design', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'devops',
        name: 'DevOps & Cloud',
        blurb: 'Infrastructure, deployment pipelines and keeping systems running.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'linux', side: 'left' },
              { skill: 'bash-scripting', side: 'right' },
              { skill: 'git', side: 'left' },
              { skill: 'networking-basics', side: 'right' },
            ],
          },
          {
            stage: 'Containers',
            nodes: [
              { skill: 'docker', side: 'left' },
              { skill: 'kubernetes', side: 'right' },
            ],
          },
          {
            stage: 'Automation',
            nodes: [
              { skill: 'ci-cd', side: 'left' },
              { skill: 'iac-terraform', side: 'right' },
            ],
          },
          {
            stage: 'Cloud & Operations',
            nodes: [
              { skill: 'cloud-aws', side: 'left' },
              { skill: 'monitoring', side: 'right' },
              { skill: 'system-design', side: 'left' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'ai',
    name: 'AI / Machine Learning',
    short: 'AI / ML',
    tagline: 'Build systems that learn — from classic ML to frontier LLMs.',
    accent: 'var(--accent-ai)',
    about: {
      overview:
        'AI roles span training models (research/ML engineering), extracting insight from data (data science), and building products on top of foundation models (LLM engineering). The field pays a premium for people who combine solid math, strong Python engineering, and the ability to ship.',
      dayToDay: [
        'Exploring and cleaning data, building training pipelines',
        'Training, evaluating and iterating on models; reading new papers/techniques',
        'Shipping models or LLM features into products and monitoring them',
        'Communicating results and trade-offs to the wider team',
      ],
      interviewFocus:
        'Interviews mix ML theory (bias/variance, metrics, transformers), applied coding (Python, pandas, sometimes LeetCode), and ML system design. A portfolio of real projects or Kaggle results carries serious weight.',
    },
    subfields: [
      {
        id: 'ml-engineer',
        name: 'ML Engineer',
        blurb: 'Train and productionize models — the engineering side of machine learning.',
        roadmap: [
          {
            stage: 'Programming',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'git', side: 'right' },
              { skill: 'sql', side: 'left' },
            ],
          },
          {
            stage: 'Math Core',
            nodes: [
              { skill: 'linear-algebra', side: 'left' },
              { skill: 'calculus', side: 'right' },
              { skill: 'probability-statistics', side: 'left' },
            ],
          },
          {
            stage: 'Data Tools',
            nodes: [
              { skill: 'numpy-pandas', side: 'left' },
              { skill: 'data-visualization', side: 'right' },
            ],
          },
          {
            stage: 'Core ML',
            nodes: [
              { skill: 'ml-fundamentals', side: 'left' },
              { skill: 'scikit-learn', side: 'right' },
              { skill: 'feature-engineering', side: 'left' },
            ],
          },
          {
            stage: 'Deep Learning',
            nodes: [
              { skill: 'deep-learning', side: 'left' },
              { skill: 'pytorch', side: 'right' },
              { skill: 'computer-vision', side: 'left' },
            ],
          },
          {
            stage: 'Production',
            nodes: [
              { skill: 'docker', side: 'left' },
              { skill: 'mlops', side: 'right' },
              { skill: 'model-deployment', side: 'left' },
            ],
          },
        ],
      },
      {
        id: 'data-science',
        name: 'Data Science',
        blurb: 'Turn messy data into decisions with statistics, ML and clear communication.',
        roadmap: [
          {
            stage: 'Programming',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'sql', side: 'right' },
              { skill: 'git', side: 'left' },
            ],
          },
          {
            stage: 'Statistics',
            nodes: [
              { skill: 'probability-statistics', side: 'left' },
              { skill: 'statistical-inference', side: 'right' },
            ],
          },
          {
            stage: 'Working with Data',
            nodes: [
              { skill: 'numpy-pandas', side: 'left' },
              { skill: 'data-wrangling', side: 'right' },
              { skill: 'data-visualization', side: 'left' },
            ],
          },
          {
            stage: 'Modeling',
            nodes: [
              { skill: 'ml-fundamentals', side: 'left' },
              { skill: 'scikit-learn', side: 'right' },
              { skill: 'time-series', side: 'left' },
            ],
          },
          {
            stage: 'Business Impact',
            nodes: [
              { skill: 'ab-testing', side: 'left' },
              { skill: 'data-storytelling', side: 'right' },
              { skill: 'big-data', side: 'left' },
            ],
          },
        ],
      },
      {
        id: 'llm-engineer',
        name: 'LLM / GenAI Engineer',
        blurb: 'Build products on top of foundation models — the fastest-growing AI role.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'git', side: 'right' },
              { skill: 'deep-learning', side: 'left' },
              { skill: 'pytorch', side: 'right' },
            ],
          },
          {
            stage: 'Understand LLMs',
            nodes: [
              { skill: 'transformers', side: 'left' },
              { skill: 'nlp', side: 'right' },
              { skill: 'llm-fundamentals', side: 'left' },
            ],
          },
          {
            stage: 'Build with LLMs',
            nodes: [
              { skill: 'prompt-engineering', side: 'left' },
              { skill: 'rag', side: 'right' },
              { skill: 'vector-databases', side: 'left' },
              { skill: 'llm-apps', side: 'right' },
            ],
          },
          {
            stage: 'Specialize',
            nodes: [
              { skill: 'fine-tuning', side: 'left' },
              { skill: 'llm-evaluation', side: 'right' },
            ],
          },
          {
            stage: 'Ship It',
            nodes: [
              { skill: 'backend-framework', side: 'left' },
              { skill: 'model-deployment', side: 'right' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'quant',
    name: 'Quantitative Finance',
    short: 'Quant',
    tagline: 'Apply math, statistics and code to trade markets profitably.',
    accent: 'var(--accent-quant)',
    about: {
      overview:
        'Quant firms use mathematical models and fast software to price instruments and trade markets. Roles split into researchers (find signals), developers (build the systems), and traders (run strategies and manage risk). Compensation is the highest of any entry-level technical path, and the bar is correspondingly brutal — especially on probability and mental math.',
      dayToDay: [
        'Researchers: hypothesis-driven analysis of market data, building/validating signals',
        'Developers: building ultra-fast, ultra-reliable trading and research infrastructure',
        'Traders: monitoring live strategies, making pricing/risk decisions in real time',
        'Everyone: probability arguments over lunch — the culture is deeply quantitative',
      ],
      interviewFocus:
        'Probability brainteasers, mental math under time pressure, market-making games, and (for dev roles) hard C++/systems questions. Olympiad/competition math background is a genuine edge.',
    },
    subfields: [
      {
        id: 'quant-researcher',
        name: 'Quant Researcher',
        blurb: 'Find statistical edges in market data — the scientist of the trading floor.',
        roadmap: [
          {
            stage: 'Math Core',
            nodes: [
              { skill: 'probability-statistics', side: 'left' },
              { skill: 'linear-algebra', side: 'right' },
              { skill: 'calculus', side: 'left' },
            ],
          },
          {
            stage: 'Programming',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'numpy-pandas', side: 'right' },
              { skill: 'sql', side: 'left' },
            ],
          },
          {
            stage: 'Statistics & ML',
            nodes: [
              { skill: 'statistical-inference', side: 'left' },
              { skill: 'ml-fundamentals', side: 'right' },
              { skill: 'time-series', side: 'left' },
            ],
          },
          {
            stage: 'Finance Theory',
            nodes: [
              { skill: 'financial-markets', side: 'left' },
              { skill: 'derivatives-pricing', side: 'right' },
              { skill: 'stochastic-calculus', side: 'left' },
              { skill: 'portfolio-theory', side: 'right' },
            ],
          },
          {
            stage: 'Research Craft',
            nodes: [
              { skill: 'backtesting', side: 'left' },
              { skill: 'probability-puzzles', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'quant-dev',
        name: 'Quant Developer',
        blurb: 'Build the low-latency systems that execute trades in microseconds.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'cpp', side: 'left' },
              { skill: 'python', side: 'right' },
              { skill: 'linux', side: 'left' },
              { skill: 'git', side: 'right' },
            ],
          },
          {
            stage: 'DSA & Interviews',
            nodes: [
              { skill: 'ds-basics', side: 'left' },
              { skill: 'algorithms', side: 'right' },
              { skill: 'trees-graphs', side: 'left' },
              { skill: 'dynamic-programming', side: 'right' },
            ],
          },
          {
            stage: 'Systems',
            nodes: [
              { skill: 'os-fundamentals', side: 'left' },
              { skill: 'networking-basics', side: 'right' },
              { skill: 'multithreading-concurrency', side: 'left' },
            ],
          },
          {
            stage: 'Performance',
            nodes: [
              { skill: 'performance-optimization', side: 'left' },
              { skill: 'low-latency', side: 'right' },
            ],
          },
          {
            stage: 'Domain',
            nodes: [
              { skill: 'financial-markets', side: 'left' },
              { skill: 'market-microstructure', side: 'right' },
              { skill: 'system-design', side: 'left' },
            ],
          },
        ],
      },
      {
        id: 'quant-trader',
        name: 'Quant Trader',
        blurb: 'Price risk and make split-second decisions with real money on the line.',
        roadmap: [
          {
            stage: 'Math Under Pressure',
            nodes: [
              { skill: 'probability-statistics', side: 'left' },
              { skill: 'mental-math', side: 'right' },
            ],
          },
          {
            stage: 'Games & Decisions',
            nodes: [
              { skill: 'probability-puzzles', side: 'left' },
              { skill: 'game-theory', side: 'right' },
            ],
          },
          {
            stage: 'Markets',
            nodes: [
              { skill: 'financial-markets', side: 'left' },
              { skill: 'market-microstructure', side: 'right' },
              { skill: 'derivatives-pricing', side: 'left' },
            ],
          },
          {
            stage: 'Trading',
            nodes: [
              { skill: 'trading-strategies', side: 'left' },
              { skill: 'risk-management', side: 'right' },
            ],
          },
          {
            stage: 'Tooling',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'numpy-pandas', side: 'right' },
              { skill: 'backtesting', side: 'left' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'cyber',
    name: 'Cybersecurity',
    short: 'Cyber',
    tagline: 'Defend systems, hunt threats and break things — legally.',
    accent: 'var(--accent-cyber)',
    about: {
      overview:
        'Security professionals protect organizations from attackers: monitoring and responding to threats (blue team), finding vulnerabilities before criminals do (red team), and building security into software from the start (AppSec). Demand massively outstrips supply, and the field rewards curiosity — the best security people are the ones who cannot stop asking "but what if I did this instead?"',
      dayToDay: [
        'Analysts: triaging alerts, investigating incidents, writing detections',
        'Pentesters: running engagements, exploiting findings, writing reports',
        'AppSec: reviewing code and designs, building guardrails for dev teams',
        'Everyone: keeping up with new CVEs, attacker techniques and tooling',
      ],
      interviewFocus:
        'Interviews test networking and OS fundamentals, hands-on skills (labs like TryHackMe/HackTheBox carry real weight), and scenario walkthroughs ("you see this alert — what do you do?"). Certifications (Security+, eJPT, OSCP) matter more here than in any other tech field.',
    },
    subfields: [
      {
        id: 'security-analyst',
        name: 'Security Analyst',
        blurb: 'Blue team — detect, investigate and respond to threats in real time.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'security-fundamentals', side: 'left' },
              { skill: 'networking-basics', side: 'right' },
              { skill: 'linux', side: 'left' },
            ],
          },
          {
            stage: 'Tools of the Trade',
            nodes: [
              { skill: 'bash-scripting', side: 'left' },
              { skill: 'python', side: 'right' },
              { skill: 'network-security', side: 'left' },
            ],
          },
          {
            stage: 'Detection',
            nodes: [
              { skill: 'siem-logging', side: 'left' },
              { skill: 'cryptography', side: 'right' },
            ],
          },
          {
            stage: 'Response',
            nodes: [
              { skill: 'incident-response', side: 'left' },
              { skill: 'threat-modeling', side: 'right' },
            ],
          },
          {
            stage: 'Cloud Era',
            nodes: [
              { skill: 'cloud-aws', side: 'left' },
              { skill: 'cloud-security', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'pentest',
        name: 'Penetration Tester',
        blurb: 'Red team — think like an attacker and find the holes before they do.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'security-fundamentals', side: 'left' },
              { skill: 'linux', side: 'right' },
              { skill: 'networking-basics', side: 'left' },
            ],
          },
          {
            stage: 'Scripting',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'bash-scripting', side: 'right' },
            ],
          },
          {
            stage: 'Breaking In',
            nodes: [
              { skill: 'web-vulns', side: 'left' },
              { skill: 'pentest-tools', side: 'right' },
              { skill: 'network-security', side: 'left' },
            ],
          },
          {
            stage: 'Deep Knowledge',
            nodes: [
              { skill: 'cryptography', side: 'left' },
              { skill: 'os-fundamentals', side: 'right' },
            ],
          },
          {
            stage: 'Professional',
            nodes: [
              { skill: 'threat-modeling', side: 'left' },
              { skill: 'cloud-security', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'appsec',
        name: 'Application Security',
        blurb: 'Build security into software — the engineer side of security.',
        roadmap: [
          {
            stage: 'Developer Roots',
            nodes: [
              { skill: 'git', side: 'left' },
              { skill: 'python', side: 'right' },
              { skill: 'backend-framework', side: 'left' },
            ],
          },
          {
            stage: 'Web Security',
            nodes: [
              { skill: 'auth-security', side: 'left' },
              { skill: 'web-vulns', side: 'right' },
            ],
          },
          {
            stage: 'Secure Building',
            nodes: [
              { skill: 'secure-coding', side: 'left' },
              { skill: 'cryptography', side: 'right' },
              { skill: 'threat-modeling', side: 'left' },
            ],
          },
          {
            stage: 'Infrastructure',
            nodes: [
              { skill: 'docker', side: 'left' },
              { skill: 'ci-cd', side: 'right' },
              { skill: 'cloud-security', side: 'left' },
            ],
          },
          {
            stage: 'Practice',
            nodes: [
              { skill: 'pentest-tools', side: 'left' },
              { skill: 'incident-response', side: 'right' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'data-eng',
    name: 'Data Engineering',
    short: 'Data Eng',
    tagline: "Build the pipelines that turn raw data into a company's memory.",
    accent: 'var(--accent-data-eng)',
    about: {
      overview:
        'Data engineers build and run the systems that move, transform and serve data — the plumbing every dashboard, ML model and business decision depends on. It is one of the most in-demand and least crowded data careers: strong SQL and Python plus distributed-systems thinking, without the research bar of ML roles.',
      dayToDay: [
        'Building and maintaining pipelines that ingest and transform data',
        'Modeling warehouses so analysts can answer questions in one query',
        'Debugging why last night\'s job failed or produced weird numbers',
        'Working with analysts, scientists and backend teams on data contracts',
      ],
      interviewFocus:
        'Interviews lean on SQL (hard, window-function-heavy), Python coding, data modeling exercises and pipeline/system design ("design a daily ETL for X"). Portfolio pipelines with real orchestration beat certificates.',
    },
    subfields: [
      {
        id: 'analytics-engineer',
        name: 'Analytics Engineer',
        blurb: 'The SQL-first path — model, transform and test the data analysts rely on.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'sql', side: 'left' },
              { skill: 'git', side: 'right' },
              { skill: 'python', side: 'left' },
            ],
          },
          {
            stage: 'Modeling',
            nodes: [
              { skill: 'data-modeling', side: 'left' },
              { skill: 'data-warehousing', side: 'right' },
            ],
          },
          {
            stage: 'Transformation',
            nodes: [
              { skill: 'dbt', side: 'left' },
              { skill: 'data-wrangling', side: 'right' },
            ],
          },
          {
            stage: 'Quality',
            nodes: [
              { skill: 'data-quality', side: 'left' },
              { skill: 'dashboarding-bi', side: 'right' },
            ],
          },
          {
            stage: 'Stakeholders',
            nodes: [
              { skill: 'data-storytelling', side: 'left' },
              { skill: 'business-metrics', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'batch-pipelines',
        name: 'Pipeline Engineer',
        blurb: 'Orchestrated batch pipelines — the classic data engineering core.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'sql', side: 'right' },
              { skill: 'linux', side: 'left' },
              { skill: 'git', side: 'right' },
            ],
          },
          {
            stage: 'Systems',
            nodes: [
              { skill: 'bash-scripting', side: 'left' },
              { skill: 'databases-advanced', side: 'right' },
            ],
          },
          {
            stage: 'Orchestration',
            nodes: [
              { skill: 'airflow-orchestration', side: 'left' },
              { skill: 'docker', side: 'right' },
              { skill: 'data-modeling', side: 'left' },
            ],
          },
          {
            stage: 'Warehouse & Lake',
            nodes: [
              { skill: 'data-warehousing', side: 'left' },
              { skill: 'big-data', side: 'right' },
              { skill: 'nosql', side: 'left' },
            ],
          },
          {
            stage: 'Production',
            nodes: [
              { skill: 'ci-cd', side: 'left' },
              { skill: 'cloud-aws', side: 'right' },
              { skill: 'iac-terraform', side: 'left' },
            ],
          },
        ],
      },
      {
        id: 'streaming',
        name: 'Streaming & Big Data',
        blurb: 'Real-time pipelines and datasets that don\'t fit on one machine.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'sql', side: 'right' },
              { skill: 'linux', side: 'left' },
            ],
          },
          {
            stage: 'Messaging',
            nodes: [
              { skill: 'message-queues', side: 'left' },
              { skill: 'stream-processing', side: 'right' },
            ],
          },
          {
            stage: 'Big Data',
            nodes: [
              { skill: 'big-data', side: 'left' },
              { skill: 'nosql', side: 'right' },
            ],
          },
          {
            stage: 'Reliability',
            nodes: [
              { skill: 'data-quality', side: 'left' },
              { skill: 'monitoring', side: 'right' },
              { skill: 'docker', side: 'left' },
            ],
          },
          {
            stage: 'Scale',
            nodes: [
              { skill: 'cloud-aws', side: 'left' },
              { skill: 'system-design', side: 'right' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'product',
    name: 'Product Management',
    short: 'Product',
    tagline: 'Decide what gets built — and make sure it matters.',
    accent: 'var(--accent-product)',
    about: {
      overview:
        'Product managers own the "what" and "why" of a product: understanding users, prioritizing what the team builds, and connecting daily work to business outcomes. There is no single PM degree — the role rewards clear thinking, data literacy and communication. Tech PMs increasingly need real fluency in APIs, data and AI to earn engineering teams\' trust.',
      dayToDay: [
        'Talking to users and synthesizing what they actually need',
        'Writing specs, prioritizing the backlog and running planning',
        'Analyzing product metrics and experiment results',
        'Aligning engineering, design, marketing and leadership',
      ],
      interviewFocus:
        'Interviews test product sense ("improve X", "design Y for Z"), analytical/metrics cases, execution questions and behavioral depth. A portfolio of shipped things — even side projects with real users — is the strongest signal for breaking in.',
    },
    subfields: [
      {
        id: 'core-pm',
        name: 'Core Product',
        blurb: 'The generalist PM path — discovery, delivery and everything between.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'product-sense', side: 'left' },
              { skill: 'user-research', side: 'right' },
            ],
          },
          {
            stage: 'Data Literacy',
            nodes: [
              { skill: 'sql', side: 'left' },
              { skill: 'product-analytics', side: 'right' },
            ],
          },
          {
            stage: 'Execution',
            nodes: [
              { skill: 'prioritization-roadmapping', side: 'left' },
              { skill: 'agile-delivery', side: 'right' },
              { skill: 'stakeholder-communication', side: 'left' },
            ],
          },
          {
            stage: 'Validation',
            nodes: [
              { skill: 'ab-testing', side: 'left' },
              { skill: 'usability-testing', side: 'right' },
            ],
          },
          {
            stage: 'Leadership',
            nodes: [
              { skill: 'product-strategy', side: 'left' },
              { skill: 'data-storytelling', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'growth-pm',
        name: 'Growth PM',
        blurb: 'Move the numbers — acquisition, activation, retention and experiments.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'product-sense', side: 'left' },
              { skill: 'product-analytics', side: 'right' },
            ],
          },
          {
            stage: 'Numbers',
            nodes: [
              { skill: 'sql', side: 'left' },
              { skill: 'probability-statistics', side: 'right' },
              { skill: 'business-metrics', side: 'left' },
            ],
          },
          {
            stage: 'Experiments',
            nodes: [
              { skill: 'ab-testing', side: 'left' },
              { skill: 'growth-loops', side: 'right' },
            ],
          },
          {
            stage: 'User Insight',
            nodes: [
              { skill: 'user-research', side: 'left' },
              { skill: 'data-visualization', side: 'right' },
            ],
          },
          {
            stage: 'Strategy',
            nodes: [
              { skill: 'product-strategy', side: 'left' },
              { skill: 'stakeholder-communication', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'technical-pm',
        name: 'Technical PM',
        blurb: 'PM for platforms, APIs and AI products — engineering fluency required.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'product-sense', side: 'left' },
              { skill: 'agile-delivery', side: 'right' },
            ],
          },
          {
            stage: 'Speak Engineering',
            nodes: [
              { skill: 'rest-apis', side: 'left' },
              { skill: 'sql', side: 'right' },
              { skill: 'system-design', side: 'left' },
            ],
          },
          {
            stage: 'AI Fluency',
            nodes: [
              { skill: 'llm-fundamentals', side: 'left' },
              { skill: 'prompt-engineering', side: 'right' },
            ],
          },
          {
            stage: 'Ship',
            nodes: [
              { skill: 'prioritization-roadmapping', side: 'left' },
              { skill: 'product-analytics', side: 'right' },
            ],
          },
          {
            stage: 'Influence',
            nodes: [
              { skill: 'stakeholder-communication', side: 'left' },
              { skill: 'product-strategy', side: 'right' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'data-science',
    name: 'Data Science & Analytics',
    short: 'Data Science',
    tagline: 'Turn data into decisions — statistics, experiments and clear stories.',
    accent: 'var(--accent-data-science)',
    about: {
      overview:
        'Data scientists and analysts answer business questions with data: measuring what is happening, running experiments to learn what works, and modeling what will happen next. The field splits into product analytics (metrics and experiments), modeling-heavy data science, and decision science (causal reasoning for big bets). SQL + statistics + communication is the universal core.',
      dayToDay: [
        'Pulling and cleaning data with SQL and Python',
        'Building dashboards and deep-dive analyses for product teams',
        'Designing and reading A/B tests; arguing about statistical validity',
        'Presenting recommendations that change what the company does',
      ],
      interviewFocus:
        'Interviews mix SQL screens, statistics and probability questions, product-metrics cases ("our DAU dropped 10% — investigate") and a presentation or take-home analysis. Clear communication of trade-offs is weighted as heavily as technical skill.',
    },
    subfields: [
      {
        id: 'product-analyst',
        name: 'Product Analyst',
        blurb: 'The metrics expert — dashboards, funnels and answering "what happened?"',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'sql', side: 'left' },
              { skill: 'python', side: 'right' },
            ],
          },
          {
            stage: 'Statistics',
            nodes: [
              { skill: 'probability-statistics', side: 'left' },
              { skill: 'statistical-inference', side: 'right' },
            ],
          },
          {
            stage: 'Analysis Tools',
            nodes: [
              { skill: 'numpy-pandas', side: 'left' },
              { skill: 'data-wrangling', side: 'right' },
              { skill: 'data-visualization', side: 'left' },
            ],
          },
          {
            stage: 'Product Impact',
            nodes: [
              { skill: 'product-analytics', side: 'left' },
              { skill: 'ab-testing', side: 'right' },
              { skill: 'business-metrics', side: 'left' },
            ],
          },
          {
            stage: 'Communication',
            nodes: [
              { skill: 'dashboarding-bi', side: 'left' },
              { skill: 'data-storytelling', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'ml-scientist',
        name: 'ML Data Scientist',
        blurb: 'The modeling path — prediction, forecasting and machine learning at work.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'python', side: 'left' },
              { skill: 'sql', side: 'right' },
              { skill: 'git', side: 'left' },
            ],
          },
          {
            stage: 'Math',
            nodes: [
              { skill: 'linear-algebra', side: 'left' },
              { skill: 'calculus', side: 'right' },
              { skill: 'probability-statistics', side: 'left' },
            ],
          },
          {
            stage: 'Modeling',
            nodes: [
              { skill: 'ml-fundamentals', side: 'left' },
              { skill: 'scikit-learn', side: 'right' },
              { skill: 'feature-engineering', side: 'left' },
            ],
          },
          {
            stage: 'Advanced',
            nodes: [
              { skill: 'time-series', side: 'left' },
              { skill: 'bayesian-statistics', side: 'right' },
              { skill: 'big-data', side: 'left' },
            ],
          },
          {
            stage: 'Ship Insight',
            nodes: [
              { skill: 'ab-testing', side: 'left' },
              { skill: 'data-storytelling', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'decision-science',
        name: 'Decision Scientist',
        blurb: 'Causal reasoning for the big bets — "will X actually cause Y?"',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'sql', side: 'left' },
              { skill: 'python', side: 'right' },
              { skill: 'probability-statistics', side: 'left' },
            ],
          },
          {
            stage: 'Inference',
            nodes: [
              { skill: 'statistical-inference', side: 'left' },
              { skill: 'causal-inference', side: 'right' },
            ],
          },
          {
            stage: 'Bayesian Thinking',
            nodes: [
              { skill: 'bayesian-statistics', side: 'left' },
              { skill: 'ab-testing', side: 'right' },
            ],
          },
          {
            stage: 'Business Frame',
            nodes: [
              { skill: 'business-metrics', side: 'left' },
              { skill: 'game-theory', side: 'right' },
            ],
          },
          {
            stage: 'Influence',
            nodes: [
              { skill: 'data-storytelling', side: 'left' },
              { skill: 'dashboarding-bi', side: 'right' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'mobile',
    name: 'Mobile Development',
    short: 'Mobile',
    tagline: "Build the apps living in everyone's pocket.",
    accent: 'var(--accent-mobile)',
    about: {
      overview:
        'Mobile developers build the apps people spend most of their screen time in. The field splits by platform: native Android (Kotlin), native iOS (Swift), and cross-platform (React Native/Flutter) — with native paying a premium at big companies and cross-platform dominating startups. Shipping a real app to a store is the single best portfolio move in all of tech: it is public, testable and shows end-to-end ownership.',
      dayToDay: [
        'Building UI and features against designs, handling device quirks',
        'Integrating REST APIs, auth, storage and push notifications',
        'Profiling performance, fixing crashes surfaced by monitoring',
        'Shipping releases through review, staged rollouts and hotfixes',
      ],
      interviewFocus:
        'Interviews combine DSA (lighter than backend at most companies), platform-specific questions (lifecycle, concurrency, architecture) and app design. Published apps with real users regularly beat resumes without them.',
    },
    subfields: [
      {
        id: 'android',
        name: 'Android',
        blurb: 'Native Android with Kotlin and Jetpack Compose — the largest user base on earth.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'kotlin', side: 'left' },
              { skill: 'git', side: 'right' },
            ],
          },
          {
            stage: 'CS Core',
            nodes: [
              { skill: 'ds-basics', side: 'left' },
              { skill: 'algorithms', side: 'right' },
            ],
          },
          {
            stage: 'Android Core',
            nodes: [
              { skill: 'android-fundamentals', side: 'left' },
              { skill: 'jetpack-compose', side: 'right' },
            ],
          },
          {
            stage: 'Connected Apps',
            nodes: [
              { skill: 'rest-apis', side: 'left' },
              { skill: 'auth-security', side: 'right' },
              { skill: 'mobile-architecture', side: 'left' },
            ],
          },
          {
            stage: 'Ship',
            nodes: [
              { skill: 'ci-cd', side: 'left' },
              { skill: 'app-store-shipping', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'ios',
        name: 'iOS',
        blurb: 'Native iOS with Swift and SwiftUI — the premium mobile ecosystem.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'swift', side: 'left' },
              { skill: 'git', side: 'right' },
            ],
          },
          {
            stage: 'CS Core',
            nodes: [
              { skill: 'ds-basics', side: 'left' },
              { skill: 'algorithms', side: 'right' },
            ],
          },
          {
            stage: 'iOS Core',
            nodes: [
              { skill: 'swiftui', side: 'left' },
              { skill: 'mobile-architecture', side: 'right' },
            ],
          },
          {
            stage: 'Connected Apps',
            nodes: [
              { skill: 'rest-apis', side: 'left' },
              { skill: 'networking-basics', side: 'right' },
              { skill: 'auth-security', side: 'left' },
            ],
          },
          {
            stage: 'Ship',
            nodes: [
              { skill: 'ci-cd', side: 'left' },
              { skill: 'app-store-shipping', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'cross-platform',
        name: 'Cross-Platform',
        blurb: 'One codebase, both stores — React Native and Flutter.',
        roadmap: [
          {
            stage: 'Web Roots',
            nodes: [
              { skill: 'javascript', side: 'left' },
              { skill: 'typescript', side: 'right' },
              { skill: 'git', side: 'left' },
            ],
          },
          {
            stage: 'The React Way',
            nodes: [
              { skill: 'react', side: 'left' },
              { skill: 'react-native', side: 'right' },
            ],
          },
          {
            stage: 'Alternative Stack',
            nodes: [
              { skill: 'flutter-dart', side: 'left' },
              { skill: 'mobile-architecture', side: 'right' },
            ],
          },
          {
            stage: 'Connected Apps',
            nodes: [
              { skill: 'rest-apis', side: 'left' },
              { skill: 'auth-security', side: 'right' },
            ],
          },
          {
            stage: 'Ship',
            nodes: [
              { skill: 'ci-cd', side: 'left' },
              { skill: 'app-store-shipping', side: 'right' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'cloud',
    name: 'Cloud & DevOps',
    short: 'Cloud',
    tagline: 'Run the infrastructure the internet lives on — reliably, at scale.',
    accent: 'var(--accent-cloud)',
    about: {
      overview:
        'Cloud, DevOps and SRE roles own the layer between code and users: cloud infrastructure, deployment pipelines, Kubernetes platforms and production reliability. It goes deeper than the DevOps basics inside a SWE path — SLOs and error budgets, GitOps, service meshes and being the person a company trusts when production is down. Every completed skill here also counts toward the SWE DevOps roadmap.',
      dayToDay: [
        'Building and evolving infrastructure with Terraform and Kubernetes',
        'Automating deployments, scaling and failure recovery',
        'Improving observability: dashboards, alerts, traces',
        'Running incident response and blameless postmortems',
      ],
      interviewFocus:
        'Interviews test Linux and networking depth, a scripting language, cloud architecture scenarios and troubleshooting walkthroughs ("this service is slow — debug it live"). SRE loops add SLO reasoning and light DSA. Home labs and real IaC repos are strong signals.',
    },
    subfields: [
      {
        id: 'cloud-engineer',
        name: 'Cloud Engineer',
        blurb: 'Design and run cloud infrastructure — the modern sysadmin, levelled up.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'linux', side: 'left' },
              { skill: 'networking-basics', side: 'right' },
              { skill: 'git', side: 'left' },
            ],
          },
          {
            stage: 'Scripting',
            nodes: [
              { skill: 'bash-scripting', side: 'left' },
              { skill: 'python', side: 'right' },
            ],
          },
          {
            stage: 'Core Cloud',
            nodes: [
              { skill: 'cloud-aws', side: 'left' },
              { skill: 'cloud-networking', side: 'right' },
              { skill: 'iac-terraform', side: 'left' },
            ],
          },
          {
            stage: 'Containers',
            nodes: [
              { skill: 'docker', side: 'left' },
              { skill: 'kubernetes', side: 'right' },
            ],
          },
          {
            stage: 'Operate',
            nodes: [
              { skill: 'monitoring', side: 'left' },
              { skill: 'cloud-security', side: 'right' },
              { skill: 'ci-cd', side: 'left' },
            ],
          },
        ],
      },
      {
        id: 'sre',
        name: 'Site Reliability Engineer',
        blurb: 'Keep systems up with engineering, not heroics — SLOs, automation, incident response.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'linux', side: 'left' },
              { skill: 'python', side: 'right' },
              { skill: 'networking-basics', side: 'left' },
            ],
          },
          {
            stage: 'Systems Depth',
            nodes: [
              { skill: 'os-fundamentals', side: 'left' },
              { skill: 'system-design', side: 'right' },
            ],
          },
          {
            stage: 'Reliability',
            nodes: [
              { skill: 'sre-practices', side: 'left' },
              { skill: 'monitoring', side: 'right' },
              { skill: 'observability', side: 'left' },
            ],
          },
          {
            stage: 'When It Breaks',
            nodes: [
              { skill: 'incident-response', side: 'left' },
              { skill: 'performance-optimization', side: 'right' },
            ],
          },
          {
            stage: 'Automation',
            nodes: [
              { skill: 'ci-cd', side: 'left' },
              { skill: 'kubernetes', side: 'right' },
              { skill: 'iac-terraform', side: 'left' },
            ],
          },
        ],
      },
      {
        id: 'platform-engineer',
        name: 'Platform Engineer',
        blurb: 'Build the internal platform other engineers deploy on.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'linux', side: 'left' },
              { skill: 'git', side: 'right' },
              { skill: 'docker', side: 'left' },
            ],
          },
          {
            stage: 'Orchestration',
            nodes: [
              { skill: 'kubernetes', side: 'left' },
              { skill: 'kubernetes-advanced', side: 'right' },
            ],
          },
          {
            stage: 'Delivery',
            nodes: [
              { skill: 'ci-cd', side: 'left' },
              { skill: 'gitops', side: 'right' },
              { skill: 'iac-terraform', side: 'left' },
            ],
          },
          {
            stage: 'Traffic & Mesh',
            nodes: [
              { skill: 'cloud-networking', side: 'left' },
              { skill: 'service-mesh', side: 'right' },
            ],
          },
          {
            stage: 'Platform Craft',
            nodes: [
              { skill: 'observability', side: 'left' },
              { skill: 'system-design', side: 'right' },
              { skill: 'message-queues', side: 'left' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'design',
    name: 'UI/UX Design',
    short: 'Design',
    tagline: 'Design products people love — from research to pixels.',
    accent: 'var(--accent-design)',
    about: {
      overview:
        'Designers decide how products look, feel and behave: researching what users need, structuring flows, and crafting the interfaces engineers build. The role splits into UX (research and flows), UI/visual (the craft of the pixels) and product design (the full loop, including metrics). No degree required — a portfolio of thoughtful case studies is the entire hiring currency.',
      dayToDay: [
        'Designing flows and screens in Figma, iterating with feedback',
        'Running user interviews and usability tests',
        'Working with PMs on what to build and engineers on what ships',
        'Maintaining design systems so the product stays coherent',
      ],
      interviewFocus:
        'Interviews center on your portfolio walkthrough (process matters more than pretty output), an app-critique exercise, and a whiteboard/take-home design challenge. Two or three deep case studies beat ten shallow shots.',
    },
    subfields: [
      {
        id: 'ux-design',
        name: 'UX Designer',
        blurb: 'Research, flows and structure — making products make sense.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'ux-principles', side: 'left' },
              { skill: 'design-fundamentals', side: 'right' },
            ],
          },
          {
            stage: 'Research',
            nodes: [
              { skill: 'user-research', side: 'left' },
              { skill: 'usability-testing', side: 'right' },
            ],
          },
          {
            stage: 'Structure',
            nodes: [
              { skill: 'interaction-design', side: 'left' },
              { skill: 'prototyping', side: 'right' },
            ],
          },
          {
            stage: 'Craft',
            nodes: [
              { skill: 'figma', side: 'left' },
              { skill: 'accessibility', side: 'right' },
            ],
          },
          {
            stage: 'Career',
            nodes: [
              { skill: 'portfolio-craft', side: 'left' },
              { skill: 'stakeholder-communication', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'visual-ui',
        name: 'UI / Visual Designer',
        blurb: 'The craft of the pixels — typography, color, layout and systems.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'design-fundamentals', side: 'left' },
              { skill: 'ux-principles', side: 'right' },
            ],
          },
          {
            stage: 'Tools',
            nodes: [
              { skill: 'figma', side: 'left' },
              { skill: 'prototyping', side: 'right' },
            ],
          },
          {
            stage: 'Craft',
            nodes: [
              { skill: 'interaction-design', side: 'left' },
              { skill: 'accessibility', side: 'right' },
            ],
          },
          {
            stage: 'Systems',
            nodes: [
              { skill: 'design-systems', side: 'left' },
              { skill: 'html-css', side: 'right' },
            ],
          },
          {
            stage: 'Career',
            nodes: [
              { skill: 'portfolio-craft', side: 'left' },
              { skill: 'usability-testing', side: 'right' },
            ],
          },
        ],
      },
      {
        id: 'product-design',
        name: 'Product Designer',
        blurb: 'The full loop — research, design, ship, measure. Closest to PM.',
        roadmap: [
          {
            stage: 'Foundations',
            nodes: [
              { skill: 'ux-principles', side: 'left' },
              { skill: 'product-sense', side: 'right' },
            ],
          },
          {
            stage: 'Research',
            nodes: [
              { skill: 'user-research', side: 'left' },
              { skill: 'usability-testing', side: 'right' },
            ],
          },
          {
            stage: 'Design',
            nodes: [
              { skill: 'figma', side: 'left' },
              { skill: 'interaction-design', side: 'right' },
              { skill: 'design-systems', side: 'left' },
            ],
          },
          {
            stage: 'Validate',
            nodes: [
              { skill: 'product-analytics', side: 'left' },
              { skill: 'ab-testing', side: 'right' },
            ],
          },
          {
            stage: 'Influence',
            nodes: [
              { skill: 'stakeholder-communication', side: 'left' },
              { skill: 'portfolio-craft', side: 'right' },
            ],
          },
        ],
      },
    ],
  },
]

export function getField(fieldId) {
  return FIELDS.find((f) => f.id === fieldId)
}

export function getSubfield(fieldId, subfieldId) {
  return getField(fieldId)?.subfields.find((s) => s.id === subfieldId)
}

// All unique skill ids used by a subfield's roadmap
export function subfieldSkillIds(subfield) {
  const ids = []
  for (const stage of subfield.roadmap) {
    for (const node of stage.nodes) {
      if (!ids.includes(node.skill)) ids.push(node.skill)
    }
  }
  return ids
}

// All unique skill ids across a whole field
export function fieldSkillIds(field) {
  const ids = new Set()
  for (const sub of field.subfields) {
    for (const id of subfieldSkillIds(sub)) ids.add(id)
  }
  return [...ids]
}

// For a given skill id: which fields/subfields include it (for the "shared" badge)
export function skillAppearances(skillId) {
  const appearances = []
  for (const field of FIELDS) {
    for (const sub of field.subfields) {
      if (subfieldSkillIds(sub).includes(skillId)) {
        appearances.push({ fieldId: field.id, fieldName: field.name, subfieldId: sub.id, subfieldName: sub.name })
      }
    }
  }
  return appearances
}
