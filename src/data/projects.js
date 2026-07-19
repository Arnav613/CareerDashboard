// 5 high-quality portfolio projects per field, ordered as a difficulty ramp.
// `skills` reference ids from skills.js — the card shows which ones you
// already have, so you can see when a project is within reach.

export const PROJECTS = {
  swe: [
    {
      id: 'swe-portfolio',
      name: 'Portfolio Site with Real CI/CD',
      difficulty: 'Starter',
      description:
        'Personal site + blog built with React, deployed automatically on every push (GitHub Actions → cloud host). What makes it high quality: Lighthouse score 95+, responsive, and the deploy pipeline is documented in the README like a real engineering project.',
      skills: ['html-css', 'javascript', 'react', 'git', 'ci-cd'],
    },
    {
      id: 'swe-fullstack-app',
      name: 'Full-Stack Kanban App with Auth',
      difficulty: 'Intermediate',
      description:
        'A Trello-style board: drag-and-drop UI, REST API, relational schema, and proper login (hashed passwords, sessions/JWT). High quality = real auth done correctly, input validation everywhere, and a test suite that runs in CI.',
      skills: ['react', 'backend-framework', 'rest-apis', 'sql', 'auth-security', 'backend-testing'],
    },
    {
      id: 'swe-realtime-chat',
      name: 'Real-Time Chat with Presence',
      difficulty: 'Intermediate',
      description:
        'WebSocket chat with rooms, typing indicators, online presence and message history. High quality = handles reconnects gracefully, persists history, and you can explain the socket lifecycle in an interview.',
      skills: ['backend-framework', 'react', 'networking-basics', 'nosql', 'caching'],
    },
    {
      id: 'swe-scalable-api',
      name: 'URL Shortener Built to Scale',
      difficulty: 'Advanced',
      description:
        'The classic system-design interview question, actually built: link shortening + analytics with Redis caching, rate limiting, Dockerized and deployed to AWS with monitoring dashboards. High quality = a load test report showing what it handles and where it breaks.',
      skills: ['backend-framework', 'databases-advanced', 'caching', 'docker', 'cloud-aws', 'monitoring', 'system-design'],
    },
    {
      id: 'swe-microservices',
      name: 'Event-Driven Microservices Backend',
      difficulty: 'Flagship',
      description:
        'An order-processing backend (e.g. mini e-commerce) split into services communicating over Kafka/RabbitMQ, orchestrated with Kubernetes, with retries, dead-letter queues and distributed tracing. High quality = an architecture diagram + a write-up of one failure mode you engineered around.',
      skills: ['microservices', 'message-queues', 'kubernetes', 'ci-cd', 'system-design', 'monitoring'],
    },
  ],

  ai: [
    {
      id: 'ai-kaggle',
      name: 'Kaggle Competition — Top 25% Finish',
      difficulty: 'Starter',
      description:
        'Pick a live tabular competition, do rigorous EDA, feature engineering and cross-validation, and grind to a top-quartile finish. High quality = a clean public notebook that explains every decision — leaderboard rank is proof of skill.',
      skills: ['python', 'numpy-pandas', 'data-visualization', 'ml-fundamentals', 'scikit-learn', 'feature-engineering'],
    },
    {
      id: 'ai-nn-scratch',
      name: 'Neural Network from Scratch',
      difficulty: 'Intermediate',
      description:
        'Implement backprop with pure NumPy — no PyTorch — and train it to 97%+ on MNIST. High quality = derive the gradients in the README, then benchmark your implementation against the PyTorch equivalent. This is the project that proves you understand deep learning.',
      skills: ['python', 'linear-algebra', 'calculus', 'deep-learning', 'numpy-pandas'],
    },
    {
      id: 'ai-vision-app',
      name: 'Deployed Vision Model',
      difficulty: 'Intermediate',
      description:
        'Fine-tune a pretrained CNN/ViT on a custom dataset you collected, then ship it as a web app anyone can try (upload image → prediction + confidence). High quality = an honest error analysis of where the model fails and why.',
      skills: ['pytorch', 'computer-vision', 'deep-learning', 'model-deployment', 'docker'],
    },
    {
      id: 'ai-rag-chatbot',
      name: 'RAG Chatbot with Evals',
      difficulty: 'Advanced',
      description:
        'A chatbot grounded in your own documents (notes, textbooks, a codebase): chunking, embeddings, retrieval, citations. What separates it from every other RAG demo: a real eval set with measured answer accuracy, and a before/after of one retrieval improvement.',
      skills: ['llm-fundamentals', 'rag', 'vector-databases', 'prompt-engineering', 'llm-apps', 'llm-evaluation'],
    },
    {
      id: 'ai-mlops-pipeline',
      name: 'End-to-End MLOps Pipeline',
      difficulty: 'Flagship',
      description:
        'A model that retrains itself: data ingestion → training with experiment tracking → registry → containerized serving → drift monitoring that triggers retraining. High quality = one command (or one push) runs the whole lifecycle, with dashboards to watch it.',
      skills: ['mlops', 'model-deployment', 'docker', 'ci-cd', 'cloud-aws', 'scikit-learn'],
    },
  ],

  quant: [
    {
      id: 'quant-monte-carlo',
      name: 'Monte Carlo Casino Lab',
      difficulty: 'Starter',
      description:
        'Simulate blackjack, poker hands and classic probability puzzles (birthday problem, Monty Hall, gambler’s ruin) and compare empirical results to closed-form answers. High quality = each simulation ships with the analytical derivation — exactly the muscle quant interviews test.',
      skills: ['python', 'numpy-pandas', 'probability-statistics', 'probability-puzzles'],
    },
    {
      id: 'quant-options-pricer',
      name: 'Options Pricer & Greeks Visualizer',
      difficulty: 'Intermediate',
      description:
        'Price European/American options with Black-Scholes, binomial trees and Monte Carlo; plot the Greeks and implied-vol surfaces interactively. High quality = the three methods cross-validate each other and you can explain every assumption they rest on.',
      skills: ['derivatives-pricing', 'stochastic-calculus', 'python', 'numpy-pandas', 'data-visualization'],
    },
    {
      id: 'quant-backtester',
      name: 'Backtesting Engine with Honest Costs',
      difficulty: 'Advanced',
      description:
        'A vectorized backtester, then momentum and mean-reversion strategies run through it with transaction costs, slippage and out-of-sample validation. High quality = a write-up showing how a "profitable" strategy dies once costs and look-ahead bias are removed — that honesty is what impresses quant firms.',
      skills: ['backtesting', 'time-series', 'trading-strategies', 'financial-markets', 'numpy-pandas', 'statistical-inference'],
    },
    {
      id: 'quant-orderbook',
      name: 'Limit Order Book + Market Maker',
      difficulty: 'Advanced',
      description:
        'Build a limit order book engine (price-time priority, C++ preferred for speed) and run a simple market-making bot against simulated order flow, tracking P&L and inventory risk. High quality = benchmark the matching engine’s throughput and explain your quoting logic.',
      skills: ['cpp', 'ds-basics', 'market-microstructure', 'multithreading-concurrency', 'trading-strategies', 'risk-management'],
    },
    {
      id: 'quant-portfolio',
      name: 'Portfolio Optimizer & Risk Dashboard',
      difficulty: 'Flagship',
      description:
        'Mean-variance and factor-model portfolio construction over real market data, with a dashboard showing efficient frontiers, VaR, drawdowns and stress tests. High quality = compare naive equal-weight vs optimized out-of-sample and be honest about estimation error.',
      skills: ['portfolio-theory', 'linear-algebra', 'statistical-inference', 'risk-management', 'numpy-pandas', 'data-visualization'],
    },
  ],

  cyber: [
    {
      id: 'cyber-home-lab',
      name: 'Home Detection Lab',
      difficulty: 'Starter',
      description:
        'Build a small SOC in VMs: an attacker box, a victim box, and a SIEM ingesting logs from both. Simulate attacks and write detections that catch them. High quality = a repo documenting the lab setup and each detection with the attack it catches.',
      skills: ['linux', 'networking-basics', 'security-fundamentals', 'siem-logging'],
    },
    {
      id: 'cyber-ctf-writeups',
      name: 'CTF Season with Public Write-ups',
      difficulty: 'Intermediate',
      description:
        'Work through TryHackMe/HackTheBox paths and publish write-ups of every box you root: methodology, dead ends, the actual exploit chain. High quality = the write-ups teach — recruiters and hiring managers genuinely read these.',
      skills: ['pentest-tools', 'web-vulns', 'linux', 'bash-scripting'],
    },
    {
      id: 'cyber-recon-tool',
      name: 'Python Recon & Scanning Tool',
      difficulty: 'Intermediate',
      description:
        'A CLI tool that port-scans a target you own, grabs banners, checks TLS configuration and flags known-vulnerable versions. High quality = respects scope (only scans authorized hosts), handles errors gracefully, and the README explains what each finding means.',
      skills: ['python', 'networking-basics', 'network-security', 'cryptography'],
    },
    {
      id: 'cyber-break-and-fix',
      name: 'Break Then Fix Your Own App',
      difficulty: 'Advanced',
      description:
        'Build a small web app, then attack it: SQLi, XSS, broken auth, IDOR. Document each exploit, then patch it and show the fix blocks the attack. High quality = a threat model written before coding, and before/after proof for every vulnerability.',
      skills: ['web-vulns', 'secure-coding', 'auth-security', 'backend-framework', 'threat-modeling'],
    },
    {
      id: 'cyber-detection-pipeline',
      name: 'Cloud Detection & Response Pipeline',
      difficulty: 'Flagship',
      description:
        'Deploy cloud infra with Terraform, stream its logs into a SIEM, write detections-as-code for real attack techniques, and an incident-response runbook for each alert. High quality = run one simulated incident end-to-end and publish the postmortem.',
      skills: ['cloud-security', 'siem-logging', 'incident-response', 'cloud-aws', 'iac-terraform'],
    },
  ],

  'data-eng': [
    {
      id: 'de-warehouse-dbt',
      name: 'Analytics Warehouse with dbt',
      difficulty: 'Starter',
      description:
        'Take a messy public dataset, load it into a warehouse and model it with dbt: staging → marts, with tests and documentation. High quality = an analyst could answer real questions with one clean query — show three examples in the README.',
      skills: ['sql', 'dbt', 'data-modeling', 'git'],
    },
    {
      id: 'de-batch-pipeline',
      name: 'Orchestrated Daily Pipeline',
      difficulty: 'Intermediate',
      description:
        'An Airflow DAG that pulls from a public API daily, transforms and loads to a warehouse — idempotent, backfillable and containerized. High quality = kill a run halfway and show it recovers; backfill a month with one command.',
      skills: ['python', 'airflow-orchestration', 'data-warehousing', 'docker', 'data-quality'],
    },
    {
      id: 'de-analytics-stack',
      name: 'End-to-End Analytics Stack',
      difficulty: 'Intermediate',
      description:
        'Ingestion → warehouse → modeled tables → a live BI dashboard answering real questions about the dataset. High quality = the dashboard is designed around decisions, not charts, and the modeling layer is documented.',
      skills: ['sql', 'data-modeling', 'dashboarding-bi', 'data-storytelling'],
    },
    {
      id: 'de-streaming',
      name: 'Real-Time Event Pipeline',
      difficulty: 'Advanced',
      description:
        'Stream events through Kafka into a processor and on to a queryable store, handling late and duplicate events. High quality = a load test with measured throughput/lag, and a write-up of your exactly-once (or not) guarantees.',
      skills: ['message-queues', 'stream-processing', 'big-data', 'docker', 'monitoring'],
    },
    {
      id: 'de-lakehouse',
      name: 'Mini Lakehouse Platform',
      difficulty: 'Flagship',
      description:
        'A cloud lakehouse from scratch: infra as code, Spark transformations, orchestration, data-quality gates that block bad loads, and CI on every change. High quality = an architecture diagram plus the cost breakdown of running it — data engineers who think about cost stand out.',
      skills: ['cloud-aws', 'iac-terraform', 'big-data', 'airflow-orchestration', 'data-quality', 'ci-cd'],
    },
  ],

  product: [
    {
      id: 'pm-teardowns',
      name: 'Product Teardown Series',
      difficulty: 'Starter',
      description:
        'Three deep teardowns of products you use: what job they do, their metric tree, one growth lever and one thing you would change — with the reasoning. High quality = published publicly and specific enough that the product\'s own PM would learn something.',
      skills: ['product-sense', 'business-metrics', 'data-storytelling'],
    },
    {
      id: 'pm-discovery',
      name: 'Discovery Sprint → PRD',
      difficulty: 'Intermediate',
      description:
        'Pick a real problem, interview ten people who have it, synthesize the findings and write a full PRD with prioritized scope and success metrics. High quality = the interviews change your mind about something — document what you believed before vs after.',
      skills: ['user-research', 'product-sense', 'prioritization-roadmapping', 'stakeholder-communication'],
    },
    {
      id: 'pm-metrics-case',
      name: 'SQL Metrics Investigation',
      difficulty: 'Intermediate',
      description:
        'Take a public product dataset and run a real analytics case: build the funnel, find where users drop off, propose and size an experiment. High quality = every claim is backed by a query in the repo and the writeup reads like a memo to a real team.',
      skills: ['sql', 'product-analytics', 'ab-testing', 'data-visualization'],
    },
    {
      id: 'pm-side-product',
      name: 'Ship a Side Product to Real Users',
      difficulty: 'Advanced',
      description:
        'Take one idea from landing page to MVP to 100 real users. Instrument activation and retention, run one growth experiment, iterate once based on data. High quality = the honest numbers, including the experiments that failed.',
      skills: ['product-sense', 'growth-loops', 'product-analytics', 'agile-delivery', 'prioritization-roadmapping'],
    },
    {
      id: 'pm-ai-product',
      name: 'AI Product 0 → 1',
      difficulty: 'Flagship',
      description:
        'Build and launch an LLM-powered tool: define the user, prototype with prompting, build an eval set that measures quality, and write the launch/pricing strategy. High quality = you can defend both the product bet and the eval methodology in an interview.',
      skills: ['llm-fundamentals', 'prompt-engineering', 'product-strategy', 'product-analytics', 'stakeholder-communication'],
    },
  ],

  'data-science': [
    {
      id: 'ds-eda-deep-dive',
      name: 'Deep-Dive EDA on Messy Data',
      difficulty: 'Starter',
      description:
        'Take a genuinely messy public dataset, clean it reproducibly, and publish an analysis with five non-obvious insights. High quality = the cleaning pipeline is code (not clicks) and each insight names the decision it would change.',
      skills: ['python', 'numpy-pandas', 'data-wrangling', 'data-visualization'],
    },
    {
      id: 'ds-ab-test',
      name: 'A/B Test — Design to Decision',
      difficulty: 'Intermediate',
      description:
        'Design and analyze an experiment end-to-end: hypothesis, power analysis, randomization checks, analysis and a ship/no-ship recommendation. High quality = a section on the ways this experiment could silently lie (peeking, novelty effects, interference).',
      skills: ['ab-testing', 'probability-statistics', 'statistical-inference', 'data-storytelling'],
    },
    {
      id: 'ds-exec-dashboard',
      name: 'Executive Metrics Dashboard',
      difficulty: 'Intermediate',
      description:
        'Build a metric tree for a business you understand, then a BI dashboard on real data that answers "how are we doing and why?" at a glance. High quality = every chart earns its place; a stakeholder can act on it without asking you anything.',
      skills: ['sql', 'business-metrics', 'dashboarding-bi', 'data-visualization'],
    },
    {
      id: 'ds-causal-study',
      name: 'Causal Inference Study',
      difficulty: 'Advanced',
      description:
        'Answer a "did X cause Y?" question from observational data using difference-in-differences or matching, with explicit assumptions and robustness checks. High quality = you show where the naive correlation answer would have been wrong, and by how much.',
      skills: ['causal-inference', 'statistical-inference', 'python', 'numpy-pandas'],
    },
    {
      id: 'ds-forecasting',
      name: 'Forecasting System with Honest Backtests',
      difficulty: 'Flagship',
      description:
        'A forecasting model (demand, traffic, prices) with proper time-series cross-validation, compared against naive baselines, served in a dashboard that shows its own error. High quality = the naive baseline comparison — most "ML forecasts" lose to it, and showing yours doesn\'t is the credential.',
      skills: ['time-series', 'ml-fundamentals', 'scikit-learn', 'feature-engineering', 'data-storytelling'],
    },
  ],

  mobile: [
    {
      id: 'mobile-first-ship',
      name: 'First App on the Play Store',
      difficulty: 'Starter',
      description:
        'A focused single-purpose app (habit tracker, timer, converter) built with Kotlin + Compose and actually published. High quality = it is live — a store listing with screenshots beats any tutorial project, and the review process teaches you real shipping.',
      skills: ['kotlin', 'android-fundamentals', 'jetpack-compose', 'app-store-shipping'],
    },
    {
      id: 'mobile-ios-app',
      name: 'SwiftUI App with API + Offline',
      difficulty: 'Intermediate',
      description:
        'An iOS app over a public API (weather, movies, transit) that caches for offline use and handles loading/error states properly. High quality = it feels native — pull-to-refresh, haptics, dark mode — and survives airplane mode gracefully.',
      skills: ['swift', 'swiftui', 'rest-apis', 'mobile-architecture'],
    },
    {
      id: 'mobile-cross-platform',
      name: 'Cross-Platform App, Both Stores',
      difficulty: 'Intermediate',
      description:
        'One React Native codebase shipped to both iOS and Android. High quality = a README section on what was genuinely shared vs what needed platform-specific work — that nuance is exactly what interviews probe.',
      skills: ['javascript', 'typescript', 'react', 'react-native', 'app-store-shipping'],
    },
    {
      id: 'mobile-auth-sync',
      name: 'Multi-User App with Auth & Sync',
      difficulty: 'Advanced',
      description:
        'A shared-data app (expense splitter, group planner) with real login, a backend, and offline-first sync that resolves conflicts. High quality = you can explain your sync/conflict strategy and show it working with two devices side by side.',
      skills: ['flutter-dart', 'auth-security', 'rest-apis', 'mobile-architecture'],
    },
    {
      id: 'mobile-production',
      name: 'Production App with Real Users',
      difficulty: 'Flagship',
      description:
        'Take your best app to production standards: CI/CD building every release, crash reporting, analytics, staged rollouts — and 100+ real installs. High quality = a dashboard of retention and crash-free rate, plus one release you rolled back and why.',
      skills: ['ci-cd', 'app-store-shipping', 'mobile-architecture', 'auth-security', 'product-analytics'],
    },
  ],

  cloud: [
    {
      id: 'cloud-three-ways',
      name: 'Deploy One App Three Ways',
      difficulty: 'Starter',
      description:
        'Deploy the same small app as a static site (S3 + CDN), on a VM, and as a container — comparing cost, effort and failure modes. High quality = the comparison table; understanding trade-offs is the whole job.',
      skills: ['linux', 'cloud-aws', 'docker', 'git'],
    },
    {
      id: 'cloud-terraform-env',
      name: 'Reproducible Environment with Terraform',
      difficulty: 'Intermediate',
      description:
        'A full environment — VPC, subnets, security groups, compute, database — created and destroyed entirely from code. High quality = `terraform destroy && terraform apply` rebuilds everything identically, and state is managed remotely like a real team would.',
      skills: ['iac-terraform', 'cloud-aws', 'cloud-networking', 'bash-scripting'],
    },
    {
      id: 'cloud-k8s-platform',
      name: 'Kubernetes Cluster from Scratch',
      difficulty: 'Intermediate',
      description:
        'Stand up a cluster, deploy a multi-service app with ingress, autoscaling and rolling updates, and wire up metrics dashboards. High quality = kill a pod and a node on video and show the system healing itself.',
      skills: ['kubernetes', 'docker', 'ci-cd', 'monitoring'],
    },
    {
      id: 'cloud-gitops',
      name: 'GitOps Delivery Platform',
      difficulty: 'Advanced',
      description:
        'Argo CD or Flux managing a cluster where git is the only way anything changes: Helm charts, automated sync, preview environments per branch. High quality = demonstrate drift correction — change something by hand and watch the platform revert it.',
      skills: ['gitops', 'kubernetes-advanced', 'ci-cd', 'iac-terraform'],
    },
    {
      id: 'cloud-sre-project',
      name: 'SRE-Grade Service with SLOs',
      difficulty: 'Flagship',
      description:
        'Run a service like an SRE: define SLIs/SLOs, build the full observability stack (metrics, logs, traces), inject failures chaos-style, and run a real incident with a blameless postmortem. High quality = the error-budget policy and the postmortem doc — that is the actual SRE work product.',
      skills: ['sre-practices', 'observability', 'monitoring', 'incident-response', 'kubernetes', 'system-design'],
    },
  ],

  design: [
    {
      id: 'design-redesign',
      name: 'Redesign Case Study',
      difficulty: 'Starter',
      description:
        'Pick one broken flow in an app you use, diagnose it against usability principles, and redesign it in Figma with before/after rationale. High quality = the write-up shows process — problem, constraints, options considered — not just prettier screens.',
      skills: ['ux-principles', 'figma', 'design-fundamentals', 'portfolio-craft'],
    },
    {
      id: 'design-usability-study',
      name: 'Usability Study on a Real Product',
      difficulty: 'Intermediate',
      description:
        'Run five moderated usability tests on a real product (yours or a friend\'s side project), synthesize findings and deliver a prioritized fix list. High quality = video clips of users failing tasks the team thought were obvious — nothing persuades like that.',
      skills: ['usability-testing', 'user-research', 'ux-principles', 'stakeholder-communication'],
    },
    {
      id: 'design-system',
      name: 'Mini Design System',
      difficulty: 'Intermediate',
      description:
        'Build a small but complete design system in Figma: tokens, type scale, core components with variants, and usage documentation — then prove it by building three screens with it. High quality = a second person could design a consistent screen without asking you anything.',
      skills: ['design-systems', 'figma', 'design-fundamentals', 'html-css'],
    },
    {
      id: 'design-zero-to-one',
      name: '0 → 1 Product Design',
      difficulty: 'Advanced',
      description:
        'Design a product from nothing: research the problem, map flows, wireframe, build a high-fidelity interactive prototype, test it with five users and iterate. High quality = version one vs version two of the prototype, with the test findings that drove every change.',
      skills: ['user-research', 'interaction-design', 'prototyping', 'usability-testing', 'figma'],
    },
    {
      id: 'design-shipped',
      name: 'Shipped Design with Measured Impact',
      difficulty: 'Flagship',
      description:
        'Get a design shipped for real — partner with a developer, contribute to open source, or build it yourself — then measure the impact on real usage. High quality = a full case study with metrics and an accessibility audit; "designs that shipped" is the strongest line a junior portfolio can have.',
      skills: ['product-sense', 'product-analytics', 'ab-testing', 'accessibility', 'portfolio-craft'],
    },
  ],
}

export const PROJECT_COUNT = Object.values(PROJECTS).reduce((n, list) => n + list.length, 0)
