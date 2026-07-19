// Canonical skill registry. Every skill exists exactly ONCE here.
// Roadmaps in fields.js reference skills by id — so marking a skill done
// counts in every roadmap that includes it.
// courses: free-first, courses only (no books / reference sites).

export const SKILLS = {
  // ── Universal foundations ────────────────────────────────────────────
  python: {
    name: 'Python',
    description:
      'The lingua franca of AI, data science and quant research, and a strong general-purpose backend language. Comfort with syntax, functions, OOP, and the standard library.',
    courses: [
      { name: 'CS50P — Intro to Programming with Python (Harvard, free)', url: 'https://cs50.harvard.edu/python/' },
      { name: 'freeCodeCamp — Scientific Computing with Python', url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/' },
    ],
  },
  cpp: {
    name: 'C++',
    description:
      'The performance language of trading systems, game engines and infrastructure. Pointers, RAII, templates, the STL, and modern C++ (11/17/20) idioms.',
    courses: [
      { name: 'freeCodeCamp — C++ Full Course (YouTube, free)', url: 'https://www.youtube.com/watch?v=8jLOx1hD3_o' },
      { name: 'Codecademy — Learn C++ (free tier)', url: 'https://www.codecademy.com/learn/learn-c-plus-plus' },
    ],
  },
  git: {
    name: 'Git & Version Control',
    description:
      'Branching, merging, rebasing, pull requests and collaborative workflows. Table stakes for every technical role.',
    courses: [
      { name: 'Git & GitHub for Beginners — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=RGOj5yH7evk' },
    ],
  },
  linux: {
    name: 'Linux & Command Line',
    description:
      'Navigating the shell, file permissions, processes, ssh, and package management. Production systems and trading infra all run on Linux.',
    courses: [
      { name: 'The Linux Foundation — Intro to Linux (edX, free audit)', url: 'https://www.edx.org/learn/linux/the-linux-foundation-introduction-to-linux' },
    ],
  },
  'bash-scripting': {
    name: 'Bash Scripting',
    description:
      'Automating tasks with shell scripts: variables, loops, pipes, cron, and text-processing tools like grep, sed and awk.',
    courses: [
      { name: 'Bash Scripting Full Course — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=tK9Oc6AEnR4' },
    ],
  },
  'ds-basics': {
    name: 'Arrays, Strings & Hashmaps',
    description:
      'Core data structures: arrays, strings, hashmaps, stacks, queues, linked lists — and the two-pointer / sliding-window patterns built on them.',
    courses: [
      { name: 'NeetCode — Data Structures for Beginners (free)', url: 'https://neetcode.io/courses/dsa-for-beginners/0' },
    ],
  },
  algorithms: {
    name: 'Sorting, Searching & Recursion',
    description:
      'Classic algorithms and complexity analysis: binary search, merge/quick sort, recursion and Big-O reasoning.',
    courses: [
      { name: 'Algorithms Part I — Princeton (Coursera, free audit)', url: 'https://www.coursera.org/learn/algorithms-part1' },
    ],
  },
  'trees-graphs': {
    name: 'Trees & Graphs',
    description:
      'Binary trees, BSTs, heaps, tries, and graph traversal (BFS/DFS), shortest paths and topological sort — the heart of interview problem solving.',
    courses: [
      { name: 'NeetCode — Advanced Algorithms (free)', url: 'https://neetcode.io/courses/advanced-algorithms/0' },
      { name: 'Algorithms Part II — Princeton (Coursera, free audit)', url: 'https://www.coursera.org/learn/algorithms-part2' },
    ],
  },
  'dynamic-programming': {
    name: 'Dynamic Programming',
    description:
      'Memoization, tabulation, and the standard DP families (knapsack, LIS, grid paths, intervals). The hardest common interview topic — practice heavy.',
    courses: [
      { name: 'Dynamic Programming — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=oBt53YbR9Kk' },
    ],
  },
  sql: {
    name: 'SQL',
    description:
      'Querying relational data: joins, aggregation, window functions and subqueries. Used daily in backend, data science and quant research alike.',
    courses: [
      { name: 'Kaggle Learn — Intro to SQL (free)', url: 'https://www.kaggle.com/learn/intro-to-sql' },
      { name: 'Kaggle Learn — Advanced SQL (free)', url: 'https://www.kaggle.com/learn/advanced-sql' },
    ],
  },
  'os-fundamentals': {
    name: 'Operating Systems',
    description:
      'Processes vs threads, scheduling, memory management, virtual memory, and file systems. Essential for systems roles and low-latency work.',
    courses: [
      { name: 'MIT 6.S081 / OS Engineering (OCW, free)', url: 'https://ocw.mit.edu/courses/6-828-operating-system-engineering-fall-2012/' },
    ],
  },
  'networking-basics': {
    name: 'Computer Networking',
    description:
      'TCP/IP, UDP, DNS, HTTP(S), sockets and latency. How data actually moves — critical for backend, DevOps and trading systems.',
    courses: [
      { name: 'Computer Networking Full Course — Kurose/Ross style (YouTube, free)', url: 'https://www.youtube.com/watch?v=qiQR5rTSshw' },
    ],
  },
  'system-design': {
    name: 'System Design',
    description:
      'Designing scalable systems: load balancing, sharding, replication, CAP theorem, queues and caches. The senior-engineer interview round.',
    courses: [
      { name: 'System Design Full Course — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=F2FmTdLtb_4' },
    ],
  },

  // ── Frontend ─────────────────────────────────────────────────────────
  'html-css': {
    name: 'HTML & CSS',
    description:
      'Semantic markup, flexbox, grid, and responsive layouts — the foundation every web interface is built on.',
    courses: [
      { name: 'freeCodeCamp — Responsive Web Design (free cert)', url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/' },
    ],
  },
  javascript: {
    name: 'JavaScript',
    description:
      'The language of the browser: closures, async/await, the event loop, DOM manipulation and ES6+ features.',
    courses: [
      { name: 'freeCodeCamp — JavaScript Algorithms & Data Structures (free cert)', url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/' },
    ],
  },
  typescript: {
    name: 'TypeScript',
    description:
      'Typed JavaScript used by nearly every serious frontend and Node codebase: interfaces, generics, and strict-mode thinking.',
    courses: [
      { name: 'Learn TypeScript — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=30LWjhZzg50' },
    ],
  },
  react: {
    name: 'React',
    description:
      'The dominant UI library: components, hooks, state, effects and rendering behavior.',
    courses: [
      { name: 'Full Stack Open — University of Helsinki (free)', url: 'https://fullstackopen.com/en/' },
      { name: 'Scrimba — Learn React (free)', url: 'https://scrimba.com/learn-react-c0e' },
    ],
  },
  'state-management': {
    name: 'State Management & Data Fetching',
    description:
      'Managing app-wide state and server data: context, Redux/Zustand, and query libraries like TanStack Query.',
    courses: [
      { name: 'Redux Essentials + React (official free tutorial course)', url: 'https://redux.js.org/tutorials/essentials/part-1-overview-concepts' },
    ],
  },
  'frontend-testing': {
    name: 'Frontend Testing',
    description:
      'Unit and component tests with Vitest/Jest and Testing Library; end-to-end tests with Playwright or Cypress.',
    courses: [
      { name: 'Testing JavaScript apps — Full Stack Open Part 5 (free)', url: 'https://fullstackopen.com/en/part5' },
    ],
  },
  'web-performance': {
    name: 'Web Performance',
    description:
      'Core Web Vitals, code splitting, lazy loading, caching and bundle analysis — making real apps feel fast.',
    courses: [
      { name: 'web.dev — Learn Performance (Google, free)', url: 'https://web.dev/learn/performance' },
    ],
  },
  'build-tools': {
    name: 'Build Tools & Tooling',
    description:
      'npm/pnpm, Vite/webpack, ESLint and Prettier — the toolchain that turns source into shipped product.',
    courses: [
      { name: 'Modern JavaScript Tooling — Frontend Masters (free courses tier)', url: 'https://frontendmasters.com/courses/free/' },
    ],
  },

  // ── Backend ──────────────────────────────────────────────────────────
  'backend-framework': {
    name: 'Backend Framework',
    description:
      'Building servers in one mainstream stack — Node/Express, Python/FastAPI or Django. Routing, middleware, validation and error handling.',
    courses: [
      { name: 'freeCodeCamp — Back End Development & APIs (free cert)', url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/' },
      { name: 'CS50W — Web Programming (Harvard, free)', url: 'https://cs50.harvard.edu/web/' },
    ],
  },
  'rest-apis': {
    name: 'REST API Design',
    description:
      'Resource modeling, HTTP semantics, status codes, versioning, pagination and idempotency — designing APIs other teams enjoy using.',
    courses: [
      { name: 'APIs for Beginners — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=WXsD0ZgxjRw' },
    ],
  },
  'databases-advanced': {
    name: 'Database Internals & Modeling',
    description:
      'Schema design, normalization, indexing, transactions, isolation levels and query planning — beyond just writing queries.',
    courses: [
      { name: 'CMU 15-445 Intro to Database Systems (free lectures + assignments)', url: 'https://15445.courses.cs.cmu.edu/' },
    ],
  },
  nosql: {
    name: 'NoSQL & Caching Stores',
    description:
      'Document, key-value and columnar stores (MongoDB, Redis, DynamoDB): when to use them and their consistency trade-offs.',
    courses: [
      { name: 'MongoDB University — free courses', url: 'https://learn.mongodb.com/' },
    ],
  },
  'auth-security': {
    name: 'Auth & Web Security',
    description:
      'Sessions, JWTs, OAuth, password hashing, OWASP Top 10 (XSS, CSRF, SQL injection) and secure-by-default habits.',
    courses: [
      { name: 'PortSwigger Web Security Academy (free)', url: 'https://portswigger.net/web-security' },
    ],
  },
  caching: {
    name: 'Caching',
    description:
      'Cache-aside, write-through, TTLs, invalidation and CDNs — the highest-leverage performance tool in backend systems.',
    courses: [
      { name: 'Redis University — free courses', url: 'https://redis.io/university/' },
    ],
  },
  'message-queues': {
    name: 'Message Queues & Async Processing',
    description:
      'Decoupling services with Kafka/RabbitMQ/SQS: producers, consumers, at-least-once delivery and dead-letter queues.',
    courses: [
      { name: 'Apache Kafka for Beginners — Confluent (free course)', url: 'https://developer.confluent.io/courses/apache-kafka/events/' },
    ],
  },
  microservices: {
    name: 'Microservices & Distributed Systems',
    description:
      'Service boundaries, API gateways, service discovery, distributed tracing and the failure modes of splitting a monolith.',
    courses: [
      { name: 'MIT 6.824 Distributed Systems (free lectures)', url: 'https://pdos.csail.mit.edu/6.824/' },
    ],
  },
  'backend-testing': {
    name: 'Backend Testing',
    description:
      'Unit, integration and contract tests; mocking external services; CI-friendly test suites.',
    courses: [
      { name: 'Test-Driven Development — freeCodeCamp Quality Assurance (free cert)', url: 'https://www.freecodecamp.org/learn/quality-assurance/' },
    ],
  },

  // ── DevOps & Cloud ───────────────────────────────────────────────────
  docker: {
    name: 'Docker & Containers',
    description:
      'Images, containers, Dockerfiles, volumes and networking — packaging software so it runs the same everywhere.',
    courses: [
      { name: 'Docker Tutorial for Beginners — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=fqMOX6JJhGo' },
    ],
  },
  kubernetes: {
    name: 'Kubernetes',
    description:
      'Orchestrating containers at scale: pods, deployments, services, ingress and autoscaling.',
    courses: [
      { name: 'Kubernetes Course — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=d6WC5n9G_sM' },
    ],
  },
  'ci-cd': {
    name: 'CI/CD',
    description:
      'Automated build-test-deploy pipelines with GitHub Actions or GitLab CI; artifact versioning and safe rollouts.',
    courses: [
      { name: 'GitHub Actions — official Learning Path (free)', url: 'https://learn.microsoft.com/en-us/training/paths/automate-workflow-github-actions/' },
    ],
  },
  'cloud-aws': {
    name: 'Cloud (AWS)',
    description:
      'Core AWS services: EC2, S3, RDS, Lambda, IAM and VPCs. Enough to design, deploy and secure a real workload.',
    courses: [
      { name: 'AWS Cloud Practitioner Essentials (free, AWS Skill Builder)', url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials' },
    ],
  },
  'iac-terraform': {
    name: 'Infrastructure as Code',
    description:
      'Declaring infrastructure with Terraform: providers, state, modules and plan/apply workflows.',
    courses: [
      { name: 'Terraform Course — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=SLB_c_ayRMo' },
    ],
  },
  monitoring: {
    name: 'Monitoring & Observability',
    description:
      'Metrics, logs and traces with Prometheus/Grafana; SLOs, alerting and debugging production incidents.',
    courses: [
      { name: 'Prometheus & Grafana — Grafana Labs free training', url: 'https://grafana.com/tutorials/' },
    ],
  },

  // ── Math for AI / Quant ──────────────────────────────────────────────
  'linear-algebra': {
    name: 'Linear Algebra',
    description:
      'Vectors, matrices, eigenvalues, SVD and matrix decompositions — the language of ML models and quantitative finance.',
    courses: [
      { name: 'MIT 18.06 Linear Algebra — Gilbert Strang (OCW, free)', url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/' },
    ],
  },
  calculus: {
    name: 'Calculus & Optimization',
    description:
      'Derivatives, gradients, chain rule, convexity and gradient descent — how models learn and how prices are sensitivity-analyzed.',
    courses: [
      { name: 'MIT 18.01 Single Variable Calculus (OCW, free)', url: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/' },
      { name: 'Mathematics for Machine Learning — Imperial (Coursera, free audit)', url: 'https://www.coursera.org/specializations/mathematics-machine-learning' },
    ],
  },
  'probability-statistics': {
    name: 'Probability & Statistics',
    description:
      'Random variables, distributions, expectation, conditional probability, CLT and hypothesis testing. THE core skill for both AI and quant.',
    courses: [
      { name: 'Stat 110: Probability — Harvard (free)', url: 'https://projects.iq.harvard.edu/stat110/home' },
      { name: 'MIT 6.041 Probabilistic Systems (OCW, free)', url: 'https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/' },
    ],
  },
  'statistical-inference': {
    name: 'Statistical Inference',
    description:
      'Estimators, confidence intervals, p-values, Bayesian vs frequentist reasoning and regression analysis — drawing honest conclusions from data.',
    courses: [
      { name: 'Statistical Learning — Stanford Online (free)', url: 'https://www.statlearning.com/online-course' },
    ],
  },

  // ── AI / ML ──────────────────────────────────────────────────────────
  'numpy-pandas': {
    name: 'NumPy & Pandas',
    description:
      'Vectorized computation and dataframe wrangling — the daily tools of every data scientist, ML engineer and quant researcher.',
    courses: [
      { name: 'Kaggle Learn — Pandas (free)', url: 'https://www.kaggle.com/learn/pandas' },
      { name: 'Kaggle Learn — Python (free)', url: 'https://www.kaggle.com/learn/python' },
    ],
  },
  'data-wrangling': {
    name: 'Data Cleaning & Wrangling',
    description:
      'Missing values, outliers, joins across messy sources, and reproducible cleaning pipelines — 70% of real data work.',
    courses: [
      { name: 'Kaggle Learn — Data Cleaning (free)', url: 'https://www.kaggle.com/learn/data-cleaning' },
    ],
  },
  'data-visualization': {
    name: 'Data Visualization',
    description:
      'Communicating results with matplotlib/seaborn/plotly: choosing the right chart, avoiding misleading encodings.',
    courses: [
      { name: 'Kaggle Learn — Data Visualization (free)', url: 'https://www.kaggle.com/learn/data-visualization' },
    ],
  },
  'ml-fundamentals': {
    name: 'ML Fundamentals',
    description:
      'Supervised vs unsupervised learning, regression, classification, overfitting, cross-validation and evaluation metrics.',
    courses: [
      { name: 'Machine Learning Specialization — Andrew Ng (Coursera, free audit)', url: 'https://www.coursera.org/specializations/machine-learning-introduction' },
    ],
  },
  'scikit-learn': {
    name: 'scikit-learn in Practice',
    description:
      'Building real ML pipelines: preprocessing, model selection, hyperparameter tuning and leakage-free validation.',
    courses: [
      { name: 'Kaggle Learn — Intro + Intermediate ML (free)', url: 'https://www.kaggle.com/learn/intro-to-machine-learning' },
    ],
  },
  'feature-engineering': {
    name: 'Feature Engineering',
    description:
      'Encoding, scaling, target transforms and domain-driven features — often worth more than a fancier model.',
    courses: [
      { name: 'Kaggle Learn — Feature Engineering (free)', url: 'https://www.kaggle.com/learn/feature-engineering' },
    ],
  },
  'deep-learning': {
    name: 'Deep Learning',
    description:
      'Neural networks, backprop, CNNs, RNNs, regularization and training dynamics.',
    courses: [
      { name: 'fast.ai — Practical Deep Learning for Coders (free)', url: 'https://course.fast.ai/' },
      { name: 'Deep Learning Specialization — Andrew Ng (Coursera, free audit)', url: 'https://www.coursera.org/specializations/deep-learning' },
    ],
  },
  pytorch: {
    name: 'PyTorch',
    description:
      'The dominant research/production DL framework: tensors, autograd, training loops, and debugging models.',
    courses: [
      { name: 'Learn PyTorch for Deep Learning — Zero to Mastery (free)', url: 'https://www.learnpytorch.io/' },
    ],
  },
  transformers: {
    name: 'Transformers & Attention',
    description:
      'Self-attention, positional encoding, encoder/decoder stacks — the architecture behind every modern LLM.',
    courses: [
      { name: 'Neural Networks: Zero to Hero — Andrej Karpathy (free)', url: 'https://karpathy.ai/zero-to-hero.html' },
      { name: 'Hugging Face — LLM Course (free)', url: 'https://huggingface.co/learn/llm-course' },
    ],
  },
  nlp: {
    name: 'NLP',
    description:
      'Tokenization, embeddings, text classification and sequence tasks with modern transformer models.',
    courses: [
      { name: 'Hugging Face — NLP Course (free)', url: 'https://huggingface.co/learn/nlp-course' },
    ],
  },
  'computer-vision': {
    name: 'Computer Vision',
    description:
      'Image classification, detection and segmentation with CNNs and vision transformers.',
    courses: [
      { name: 'Stanford CS231n — CNNs for Visual Recognition (free lectures)', url: 'http://cs231n.stanford.edu/' },
    ],
  },
  mlops: {
    name: 'MLOps',
    description:
      'Experiment tracking, model registries, data/model versioning and monitoring models in production.',
    courses: [
      { name: 'MLOps Zoomcamp — DataTalks.Club (free)', url: 'https://github.com/DataTalksClub/mlops-zoomcamp' },
    ],
  },
  'model-deployment': {
    name: 'Model Serving & Deployment',
    description:
      'Serving models behind APIs, batching, GPUs vs CPUs, latency budgets and cost — turning a notebook into a product.',
    courses: [
      { name: 'Full Stack Deep Learning (free course)', url: 'https://fullstackdeeplearning.com/course/' },
    ],
  },

  // ── LLM / GenAI ──────────────────────────────────────────────────────
  'llm-fundamentals': {
    name: 'LLM Fundamentals',
    description:
      'Pretraining vs fine-tuning vs RLHF, context windows, sampling parameters and the capabilities/limits of current models.',
    courses: [
      { name: 'Intro to Large Language Models — Karpathy (free)', url: 'https://www.youtube.com/watch?v=zjkBMFhNj_g' },
      { name: 'Hugging Face — LLM Course (free)', url: 'https://huggingface.co/learn/llm-course' },
    ],
  },
  'prompt-engineering': {
    name: 'Prompt Engineering',
    description:
      'System prompts, few-shot examples, structured outputs and evaluation-driven iteration on prompts.',
    courses: [
      { name: 'ChatGPT Prompt Engineering for Developers — DeepLearning.AI (free)', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/' },
    ],
  },
  rag: {
    name: 'RAG (Retrieval-Augmented Generation)',
    description:
      'Chunking, embedding, retrieval and grounding LLM answers in your own data — the most common production LLM pattern.',
    courses: [
      { name: 'LangChain: Chat with Your Data — DeepLearning.AI (free)', url: 'https://www.deeplearning.ai/short-courses/langchain-chat-with-your-data/' },
    ],
  },
  'vector-databases': {
    name: 'Embeddings & Vector Databases',
    description:
      'Semantic similarity, ANN indexes (HNSW), and stores like pgvector/Pinecone/Chroma.',
    courses: [
      { name: 'Vector Databases — DeepLearning.AI short course (free)', url: 'https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/' },
    ],
  },
  'llm-apps': {
    name: 'LLM Apps & Agents',
    description:
      'Tool use / function calling, agent loops, orchestration frameworks and guardrails for real products.',
    courses: [
      { name: 'AI Agents in LangGraph — DeepLearning.AI (free)', url: 'https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/' },
    ],
  },
  'fine-tuning': {
    name: 'Fine-tuning LLMs',
    description:
      'LoRA/QLoRA, instruction tuning, dataset curation and when fine-tuning beats prompting or RAG.',
    courses: [
      { name: 'Finetuning Large Language Models — DeepLearning.AI (free)', url: 'https://www.deeplearning.ai/short-courses/finetuning-large-language-models/' },
    ],
  },
  'llm-evaluation': {
    name: 'LLM Evaluation',
    description:
      'Building eval sets, LLM-as-judge, regression testing prompts and measuring hallucination — how serious teams ship LLM features.',
    courses: [
      { name: 'Evaluating and Debugging Generative AI — DeepLearning.AI (free)', url: 'https://www.deeplearning.ai/short-courses/evaluating-debugging-generative-ai/' },
    ],
  },

  // ── Data science specifics ───────────────────────────────────────────
  'ab-testing': {
    name: 'A/B Testing & Experimentation',
    description:
      'Designing experiments, power analysis, significance testing and the many ways experiments silently go wrong.',
    courses: [
      { name: 'A/B Testing — Udacity (free)', url: 'https://www.udacity.com/course/ab-testing--ud257' },
    ],
  },
  'data-storytelling': {
    name: 'Data Storytelling & Communication',
    description:
      'Turning analysis into decisions: framing the question, structuring the narrative and presenting to non-technical stakeholders.',
    courses: [
      { name: 'Data Visualization & Communication — see Kaggle Learn + freeCodeCamp Data Analysis (free)', url: 'https://www.freecodecamp.org/learn/data-analysis-with-python/' },
    ],
  },
  'big-data': {
    name: 'Big Data (Spark)',
    description:
      'Distributed data processing with Spark/PySpark: partitions, shuffles and working with data that does not fit in memory.',
    courses: [
      { name: 'Data Engineering Zoomcamp — DataTalks.Club (free)', url: 'https://github.com/DataTalksClub/data-engineering-zoomcamp' },
    ],
  },

  // ── Quant finance ────────────────────────────────────────────────────
  'financial-markets': {
    name: 'Financial Markets',
    description:
      'Asset classes, market participants, order types, exchanges and how prices form — the domain layer under every quant role.',
    courses: [
      { name: 'Financial Markets — Robert Shiller, Yale (Coursera, free audit)', url: 'https://www.coursera.org/learn/financial-markets-global' },
    ],
  },
  'stochastic-calculus': {
    name: 'Stochastic Calculus',
    description:
      'Brownian motion, Ito calculus and SDEs — the mathematics of derivative pricing and continuous-time finance.',
    courses: [
      { name: 'MIT 18.S096 Math with Applications in Finance (OCW, free)', url: 'https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/' },
    ],
  },
  'time-series': {
    name: 'Time Series Analysis',
    description:
      'Stationarity, ARIMA/GARCH, autocorrelation and forecasting — the statistician’s toolkit for market data.',
    courses: [
      { name: 'Time Series Analysis — MIT 18.S096 lectures (free)', url: 'https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/video_galleries/video-lectures/' },
    ],
  },
  'derivatives-pricing': {
    name: 'Options & Derivatives Pricing',
    description:
      'Forwards, futures, options, the Greeks, Black-Scholes and binomial trees — pricing and hedging risk.',
    courses: [
      { name: 'Financial Engineering & Risk Management — Columbia (Coursera, free audit)', url: 'https://www.coursera.org/specializations/financialengineering' },
    ],
  },
  'portfolio-theory': {
    name: 'Portfolio Theory & Risk',
    description:
      'Mean-variance optimization, CAPM, factor models, VaR and drawdowns — how capital is allocated and risk measured.',
    courses: [
      { name: 'Investment Management with Python — EDHEC (Coursera, free audit)', url: 'https://www.coursera.org/specializations/investment-management-python-machine-learning' },
    ],
  },
  backtesting: {
    name: 'Backtesting & Strategy Research',
    description:
      'Building and validating trading strategies: signal research, transaction costs, overfitting traps and walk-forward testing.',
    courses: [
      { name: 'Machine Learning for Trading — Georgia Tech (Udacity, free)', url: 'https://www.udacity.com/course/machine-learning-for-trading--ud501' },
    ],
  },
  'market-microstructure': {
    name: 'Market Microstructure',
    description:
      'Limit order books, bid-ask spreads, market making, adverse selection and how liquidity actually works tick by tick.',
    courses: [
      { name: 'Financial Markets Microstructure — Copenhagen (free lecture course)', url: 'https://www.youtube.com/playlist?list=PLbq3EHAmnW1CSTU_2F1BDvw9lXpLcElvA' },
    ],
  },
  'probability-puzzles': {
    name: 'Probability Puzzles & Brainteasers',
    description:
      'Expected-value games, combinatorics puzzles and market-making games — the signature quant interview format.',
    courses: [
      { name: 'Jane Street — Probability & Markets bootcamp lectures (free)', url: 'https://www.youtube.com/@janestreet/playlists' },
    ],
  },
  'mental-math': {
    name: 'Mental Math & Speed Arithmetic',
    description:
      'Fast, accurate arithmetic under pressure — screened directly in trading interviews (e.g. 80-in-8 style tests).',
    courses: [
      { name: 'Arithmetic speed training — TradingInterview/Zetamac-style drills (free)', url: 'https://arithmetic.zetamac.com/' },
    ],
  },
  'game-theory': {
    name: 'Game Theory & Decision Making',
    description:
      'Nash equilibria, auctions, expected utility and betting/sizing decisions under uncertainty.',
    courses: [
      { name: 'Game Theory — Stanford/UBC (Coursera, free audit)', url: 'https://www.coursera.org/learn/game-theory-1' },
    ],
  },
  'risk-management': {
    name: 'Risk Management & Position Sizing',
    description:
      'Kelly criterion, variance vs edge, drawdown control and the discipline that keeps traders solvent.',
    courses: [
      { name: 'Portfolio & Risk Management — EDHEC (Coursera, free audit)', url: 'https://www.coursera.org/learn/introduction-portfolio-construction-python' },
    ],
  },
  'trading-strategies': {
    name: 'Trading Strategy Classes',
    description:
      'Market making, arbitrage, momentum, mean reversion and stat-arb — the main families of systematic strategies.',
    courses: [
      { name: 'Machine Learning for Trading — Georgia Tech (Udacity, free)', url: 'https://www.udacity.com/course/machine-learning-for-trading--ud501' },
    ],
  },
  'multithreading-concurrency': {
    name: 'Multithreading & Concurrency',
    description:
      'Threads, locks, atomics, lock-free structures and memory models — required for high-performance C++ systems.',
    courses: [
      { name: 'C++ Concurrency — CppCon talks curriculum (free)', url: 'https://www.youtube.com/user/CppCon' },
    ],
  },
  'low-latency': {
    name: 'Low-Latency Systems',
    description:
      'Cache-friendly code, kernel bypass, NUMA, and measuring nanoseconds — the craft of HFT engineering.',
    courses: [
      { name: 'CppCon — Low Latency Trading Systems talks (free)', url: 'https://www.youtube.com/results?search_query=cppcon+low+latency+trading' },
    ],
  },
  'performance-optimization': {
    name: 'Profiling & Performance Optimization',
    description:
      'Profilers, benchmarks, memory layout and algorithmic wins — finding and fixing the actual bottleneck.',
    courses: [
      { name: 'MIT 6.172 Performance Engineering (OCW, free)', url: 'https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/' },
    ],
  },

  // ── Cybersecurity ────────────────────────────────────────────────────
  'security-fundamentals': {
    name: 'Security Fundamentals',
    description:
      'The CIA triad, threat actors, attack surfaces, defense in depth and core security vocabulary — the base layer of every security role.',
    courses: [
      { name: 'Professor Messer — Security+ SY0-701 (YouTube, free)', url: 'https://www.professormesser.com/security-plus/sy0-701/sy0-701-video/sy0-701-comptia-security-plus-course/' },
      { name: 'Cisco Networking Academy — Introduction to Cybersecurity (free)', url: 'https://www.netacad.com/courses/introduction-to-cybersecurity' },
    ],
  },
  cryptography: {
    name: 'Cryptography',
    description:
      'Symmetric vs asymmetric encryption, hashing, TLS, PKI and where crypto breaks in practice — misuse, not math, causes most failures.',
    courses: [
      { name: 'Cryptography I — Dan Boneh, Stanford (Coursera, free audit)', url: 'https://www.coursera.org/learn/crypto' },
      { name: 'CryptoHack — hands-on crypto challenges (free)', url: 'https://cryptohack.org/' },
    ],
  },
  'web-vulns': {
    name: 'Web Vulnerabilities & Exploitation',
    description:
      'SQL injection, XSS, CSRF, SSRF, IDOR and auth flaws — finding and fixing the OWASP Top 10 in real applications.',
    courses: [
      { name: 'PortSwigger Web Security Academy (free)', url: 'https://portswigger.net/web-security' },
    ],
  },
  'network-security': {
    name: 'Network Security',
    description:
      'Firewalls, VPNs, IDS/IPS, network segmentation and packet analysis with Wireshark — defending the wire.',
    courses: [
      { name: 'Cisco Networking Academy — Network Defense (free)', url: 'https://www.netacad.com/courses/network-defense' },
    ],
  },
  'siem-logging': {
    name: 'SIEM & Log Analysis',
    description:
      'Collecting and correlating logs, writing detections and triaging alerts in tools like Splunk or Sentinel — the SOC analyst core loop.',
    courses: [
      { name: 'Splunk — free training courses', url: 'https://www.splunk.com/en_us/training/free-courses/overview.html' },
      { name: 'TryHackMe — SOC Level 1 path (free rooms)', url: 'https://tryhackme.com/path/outline/soclevel1' },
    ],
  },
  'incident-response': {
    name: 'Incident Response',
    description:
      'Detection, containment, eradication, recovery and postmortems — the playbook when something is actively on fire, in security and in production ops alike.',
    courses: [
      { name: 'TryHackMe — Cyber Defence Frameworks & IR rooms (free tier)', url: 'https://tryhackme.com/' },
      { name: 'PagerDuty — Incident Response training (free)', url: 'https://response.pagerduty.com/' },
    ],
  },
  'pentest-tools': {
    name: 'Penetration Testing',
    description:
      'Recon, scanning, exploitation and reporting with nmap, Burp Suite and Metasploit — thinking like an attacker, legally.',
    courses: [
      { name: 'TryHackMe — Jr Penetration Tester path (free tier)', url: 'https://tryhackme.com/path/outline/jrpenetrationtester' },
      { name: 'OverTheWire — wargames (free)', url: 'https://overthewire.org/wargames/' },
    ],
  },
  'threat-modeling': {
    name: 'Threat Modeling',
    description:
      'STRIDE, attack trees and data-flow diagrams — systematically asking "what can go wrong?" before shipping.',
    courses: [
      { name: 'Microsoft Learn — Threat Modeling fundamentals (free)', url: 'https://learn.microsoft.com/en-us/training/paths/tm-threat-modeling-fundamentals/' },
    ],
  },
  'secure-coding': {
    name: 'Secure Coding',
    description:
      'Input validation, output encoding, dependency hygiene and secrets management — writing code that survives contact with attackers.',
    courses: [
      { name: 'Kontra — OWASP Top 10 interactive labs (free)', url: 'https://application.security/free/owasp-top-10' },
    ],
  },
  'cloud-security': {
    name: 'Cloud Security',
    description:
      'IAM policies, security groups, encryption at rest/in transit and cloud misconfiguration — the #1 modern breach vector.',
    courses: [
      { name: 'AWS Security Fundamentals (free, AWS Skill Builder)', url: 'https://explore.skillbuilder.aws/learn/course/external/view/elearning/48/aws-security-fundamentals' },
    ],
  },

  // ── Data engineering ─────────────────────────────────────────────────
  'data-modeling': {
    name: 'Data Modeling',
    description:
      'Star schemas, dimensional modeling, slowly changing dimensions and normalization trade-offs — designing tables analysts can actually use.',
    courses: [
      { name: 'Database Design Full Course — freeCodeCamp (YouTube, free)', url: 'https://www.youtube.com/watch?v=ztHopE5Wnpc' },
    ],
  },
  'airflow-orchestration': {
    name: 'Workflow Orchestration (Airflow)',
    description:
      'DAGs, scheduling, retries, backfills and idempotent tasks — making hundreds of daily pipeline runs boring and reliable.',
    courses: [
      { name: 'Astronomer Academy — Airflow 101 (free)', url: 'https://academy.astronomer.io/' },
    ],
  },
  dbt: {
    name: 'dbt & Analytics Engineering',
    description:
      'SQL-based transformations with version control, testing and documentation — the modern standard between raw data and dashboards.',
    courses: [
      { name: 'dbt Fundamentals — dbt Learn (free)', url: 'https://learn.getdbt.com/' },
    ],
  },
  'stream-processing': {
    name: 'Stream Processing',
    description:
      'Real-time pipelines with Kafka Streams/Flink: windowing, watermarks, exactly-once semantics and late-arriving data.',
    courses: [
      { name: 'Confluent Developer — Kafka Streams & Flink courses (free)', url: 'https://developer.confluent.io/courses/' },
    ],
  },
  'data-warehousing': {
    name: 'Data Warehousing',
    description:
      'Columnar storage, partitioning and query optimization in BigQuery/Snowflake/Redshift — plus the lakehouse pattern.',
    courses: [
      { name: 'Data Engineering Zoomcamp — DataTalks.Club (free)', url: 'https://github.com/DataTalksClub/data-engineering-zoomcamp' },
    ],
  },
  'data-quality': {
    name: 'Data Quality & Testing',
    description:
      'Schema checks, freshness monitors, anomaly detection and data contracts — because a silently wrong pipeline is worse than a broken one.',
    courses: [
      { name: 'Great Expectations — official quickstart & tutorials (free)', url: 'https://docs.greatexpectations.io/docs/' },
    ],
  },

  // ── Product management ───────────────────────────────────────────────
  'product-sense': {
    name: 'Product Sense',
    description:
      'Identifying user problems worth solving, sizing opportunities and reasoning about trade-offs — the signature PM interview skill.',
    courses: [
      { name: 'Digital Product Management — UVA Darden (Coursera, free audit)', url: 'https://www.coursera.org/learn/uva-darden-digital-product-management' },
    ],
  },
  'user-research': {
    name: 'User Research',
    description:
      'Interviews, surveys, personas and jobs-to-be-done — learning what users actually need instead of what they say they want.',
    courses: [
      { name: 'Understanding User Needs — University of Michigan (Coursera, free audit)', url: 'https://www.coursera.org/learn/understanding-user-needs' },
    ],
  },
  'product-analytics': {
    name: 'Product Analytics',
    description:
      'Funnels, retention curves, cohorts and North Star metrics in tools like Amplitude/Mixpanel — measuring whether the product is working.',
    courses: [
      { name: 'Amplitude Academy (free)', url: 'https://academy.amplitude.com/' },
    ],
  },
  'prioritization-roadmapping': {
    name: 'Prioritization & Roadmapping',
    description:
      'RICE, opportunity trees and saying no — turning infinite requests into a sequenced roadmap the team believes in.',
    courses: [
      { name: 'Agile Meets Design Thinking — UVA Darden (Coursera, free audit)', url: 'https://www.coursera.org/learn/uva-darden-getting-started-agile' },
    ],
  },
  'product-strategy': {
    name: 'Product Strategy',
    description:
      'Market positioning, competitive moats, pricing and go-to-market — connecting this quarter\'s work to how the product wins.',
    courses: [
      { name: 'Y Combinator — Startup School (free)', url: 'https://www.startupschool.org/' },
    ],
  },
  'growth-loops': {
    name: 'Growth & Experimentation',
    description:
      'Acquisition channels, activation, viral and content loops, and running growth experiments without fooling yourself.',
    courses: [
      { name: 'Y Combinator — growth lectures (YouTube, free)', url: 'https://www.youtube.com/@ycombinator/playlists' },
    ],
  },
  'stakeholder-communication': {
    name: 'Stakeholder Communication',
    description:
      'Writing crisp specs and updates, running alignment meetings and influencing without authority — most of the actual PM job.',
    courses: [
      { name: 'Successful Negotiation — University of Michigan (Coursera, free audit)', url: 'https://www.coursera.org/learn/negotiation-skills' },
    ],
  },
  'agile-delivery': {
    name: 'Agile Delivery',
    description:
      'Scrum/Kanban mechanics, sprint planning, estimation and working with engineers — shipping predictably without process theater.',
    courses: [
      { name: 'Agile with Atlassian Jira (Coursera, free audit)', url: 'https://www.coursera.org/learn/agile-atlassian-jira' },
    ],
  },

  // ── Data science specifics (advanced) ────────────────────────────────
  'causal-inference': {
    name: 'Causal Inference',
    description:
      'Confounders, natural experiments, difference-in-differences and uplift — answering "did X cause Y?" when you can\'t run an A/B test.',
    courses: [
      { name: 'Causal Diagrams — HarvardX (edX, free audit)', url: 'https://www.edx.org/learn/data-analysis/harvard-university-causal-diagrams-draw-your-assumptions-before-your-conclusions' },
    ],
  },
  'bayesian-statistics': {
    name: 'Bayesian Statistics',
    description:
      'Priors, posteriors, MCMC and Bayesian A/B testing — reasoning about uncertainty the way decision-makers actually need.',
    courses: [
      { name: 'Statistical Rethinking — Richard McElreath (YouTube, free)', url: 'https://www.youtube.com/@rmcelreath/playlists' },
      { name: 'Bayesian Statistics — UC Santa Cruz (Coursera, free audit)', url: 'https://www.coursera.org/learn/bayesian-statistics' },
    ],
  },
  'business-metrics': {
    name: 'Business Metrics & KPIs',
    description:
      'Revenue drivers, unit economics, LTV/CAC and metric trees — translating between data and what the business actually optimizes.',
    courses: [
      { name: 'Business Metrics for Data-Driven Companies — Duke (Coursera, free audit)', url: 'https://www.coursera.org/learn/analytics-business-metrics' },
    ],
  },
  'dashboarding-bi': {
    name: 'Dashboarding & BI Tools',
    description:
      'Building self-serve dashboards in Power BI/Tableau/Looker that answer questions instead of generating them.',
    courses: [
      { name: 'Microsoft Learn — Power BI training paths (free)', url: 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi' },
    ],
  },

  // ── Mobile ───────────────────────────────────────────────────────────
  kotlin: {
    name: 'Kotlin',
    description:
      'The official Android language: null safety, coroutines, extension functions and idiomatic JVM interop.',
    courses: [
      { name: 'Kotlin for Java Developers — JetBrains (Coursera, free audit)', url: 'https://www.coursera.org/learn/kotlin-for-java-developers' },
    ],
  },
  'android-fundamentals': {
    name: 'Android Fundamentals',
    description:
      'Activities, lifecycle, intents, navigation and app resources — how an Android app is actually structured.',
    courses: [
      { name: 'Android Basics with Compose — Google (free)', url: 'https://developer.android.com/courses/android-basics-compose/course' },
    ],
  },
  'jetpack-compose': {
    name: 'Jetpack Compose',
    description:
      'Android\'s modern declarative UI toolkit: composables, state hoisting, recomposition and Material design.',
    courses: [
      { name: 'Jetpack Compose course — Google (free)', url: 'https://developer.android.com/courses/jetpack-compose/course' },
    ],
  },
  swift: {
    name: 'Swift',
    description:
      'Apple\'s language for iOS/macOS: optionals, protocols, value types and memory management with ARC.',
    courses: [
      { name: '100 Days of Swift — Hacking with Swift (free)', url: 'https://www.hackingwithswift.com/100' },
    ],
  },
  swiftui: {
    name: 'SwiftUI',
    description:
      'Declarative iOS UI: views, state and bindings, navigation and animation — Apple\'s answer to React-style UI.',
    courses: [
      { name: 'Stanford CS193p — Developing Apps for iOS (free)', url: 'https://cs193p.sites.stanford.edu/' },
      { name: '100 Days of SwiftUI — Hacking with Swift (free)', url: 'https://www.hackingwithswift.com/100/swiftui' },
    ],
  },
  'react-native': {
    name: 'React Native',
    description:
      'Building iOS and Android apps with React: native components, navigation, and the Expo toolchain.',
    courses: [
      { name: 'Expo — official tutorial (free)', url: 'https://docs.expo.dev/tutorial/introduction/' },
    ],
  },
  'flutter-dart': {
    name: 'Flutter & Dart',
    description:
      'Google\'s cross-platform toolkit: widgets, state management and one codebase shipping to both stores.',
    courses: [
      { name: 'Flutter — official codelabs (free)', url: 'https://docs.flutter.dev/codelabs' },
    ],
  },
  'mobile-architecture': {
    name: 'Mobile App Architecture',
    description:
      'MVVM, unidirectional data flow, offline-first storage and dependency injection — keeping a growing app maintainable.',
    courses: [
      { name: 'Android Architecture — Google pathway (free)', url: 'https://developer.android.com/courses/pathways/android-architecture' },
    ],
  },
  'app-store-shipping': {
    name: 'Shipping & Store Publishing',
    description:
      'Signing, store listings, review guidelines, staged rollouts and crash monitoring — getting and keeping an app in users\' hands.',
    courses: [
      { name: 'Google Play Academy (free)', url: 'https://playacademy.withgoogle.com/' },
    ],
  },

  // ── Cloud & SRE (advanced) ───────────────────────────────────────────
  'kubernetes-advanced': {
    name: 'Advanced Kubernetes',
    description:
      'Helm charts, operators, RBAC, resource limits and debugging workloads — running Kubernetes for real, not just deploying to it.',
    courses: [
      { name: 'Kubernetes the Hard Way — Kelsey Hightower (free)', url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way' },
    ],
  },
  observability: {
    name: 'Distributed Tracing & OpenTelemetry',
    description:
      'Traces, spans and context propagation across services — understanding a request\'s life beyond single-service metrics and logs.',
    courses: [
      { name: 'OpenTelemetry — official docs & getting started (free)', url: 'https://opentelemetry.io/docs/' },
    ],
  },
  'sre-practices': {
    name: 'SRE Practices',
    description:
      'SLIs, SLOs, error budgets and toil reduction — Google\'s framework for keeping systems reliable without burning out teams.',
    courses: [
      { name: 'Site Reliability Engineering: SLOs — Google (Coursera, free audit)', url: 'https://www.coursera.org/learn/site-reliability-engineering-slos' },
    ],
  },
  gitops: {
    name: 'GitOps',
    description:
      'Declarative deployments with Argo CD/Flux: git as the source of truth, automated drift correction and auditable rollbacks.',
    courses: [
      { name: 'GitOps Fundamentals — Codefresh (free)', url: 'https://learning.codefresh.io/' },
    ],
  },
  'cloud-networking': {
    name: 'Cloud Networking',
    description:
      'VPCs, subnets, routing, load balancers, DNS and private connectivity — the network layer under every cloud architecture.',
    courses: [
      { name: 'AWS Skill Builder — networking courses (free tier)', url: 'https://explore.skillbuilder.aws/' },
    ],
  },
  'service-mesh': {
    name: 'Service Mesh',
    description:
      'Istio/Linkerd sidecars, mTLS, traffic shifting and canary releases — platform-level control over service-to-service traffic.',
    courses: [
      { name: 'Istio Fundamentals — Tetrate Academy (free)', url: 'https://academy.tetrate.io/' },
    ],
  },

  // ── Design ───────────────────────────────────────────────────────────
  'design-fundamentals': {
    name: 'Visual Design Fundamentals',
    description:
      'Typography, color, hierarchy, spacing and layout — the craft skills that make interfaces feel intentional.',
    courses: [
      { name: 'Graphic Design Specialization — CalArts (Coursera, free audit)', url: 'https://www.coursera.org/specializations/graphic-design' },
    ],
  },
  figma: {
    name: 'Figma',
    description:
      'The industry-standard design tool: frames, auto layout, components, variants and multiplayer collaboration.',
    courses: [
      { name: 'Figma for Beginners — official tutorial series (free)', url: 'https://help.figma.com/hc/en-us/sections/4405269443991-Figma-for-beginners-4-part-tutorial' },
    ],
  },
  'ux-principles': {
    name: 'UX Principles',
    description:
      'Usability heuristics, mental models, information architecture and cognitive load — why some products feel obvious and others exhausting.',
    courses: [
      { name: 'Foundations of UX Design — Google (Coursera, free audit)', url: 'https://www.coursera.org/learn/foundations-user-experience-design' },
    ],
  },
  'interaction-design': {
    name: 'Interaction Design',
    description:
      'Flows, states, affordances, feedback and micro-interactions — designing what happens between the screens.',
    courses: [
      { name: 'Interaction Design Specialization — UC San Diego (Coursera, free audit)', url: 'https://www.coursera.org/specializations/interaction-design' },
    ],
  },
  'design-systems': {
    name: 'Design Systems',
    description:
      'Tokens, component libraries and documentation — scaling consistent design across teams and codebases.',
    courses: [
      { name: 'Design Systems for Developers — Storybook (free)', url: 'https://storybook.js.org/tutorials/design-systems-for-developers/' },
    ],
  },
  prototyping: {
    name: 'Prototyping',
    description:
      'Low-fi wireframes to high-fi interactive prototypes — testing ideas cheaply before anyone writes code.',
    courses: [
      { name: 'Build Wireframes & Low-Fidelity Prototypes — Google (Coursera, free audit)', url: 'https://www.coursera.org/learn/wireframes-low-fidelity-prototypes' },
    ],
  },
  'usability-testing': {
    name: 'Usability Testing',
    description:
      'Moderated and unmoderated tests, task design and synthesizing findings — watching five users beats a hundred opinions.',
    courses: [
      { name: 'Conduct UX Research & Test Early Concepts — Google (Coursera, free audit)', url: 'https://www.coursera.org/learn/conduct-ux-research' },
    ],
  },
  accessibility: {
    name: 'Accessibility',
    description:
      'WCAG, semantic structure, contrast, keyboard navigation and screen readers — design that works for everyone is just good design.',
    courses: [
      { name: 'Learn Accessibility — web.dev (Google, free)', url: 'https://web.dev/learn/accessibility' },
    ],
  },
  'portfolio-craft': {
    name: 'Design Portfolio & Case Studies',
    description:
      'Framing problems, showing process and measuring outcomes in case studies — the artifact that actually gets design interviews.',
    courses: [
      { name: 'Design a UX for Social Good & Prepare for Jobs — Google (Coursera, free audit)', url: 'https://www.coursera.org/learn/ux-design-jobs' },
    ],
  },
}

export function getSkill(id) {
  return SKILLS[id]
}
