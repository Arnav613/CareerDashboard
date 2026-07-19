// Tiered target-company lists per field, transcribed from companies.txt.

const c = (name, url) => ({ name, url })

const QUANT_S = [
  c('Jane Street', 'https://www.janestreet.com/join-jane-street/'),
  c('Citadel', 'https://www.citadel.com/careers/'),
  c('Citadel Securities', 'https://www.citadelsecurities.com/careers/'),
  c('Hudson River Trading', 'https://www.hudsonrivertrading.com/careers/'),
  c('Optiver', 'https://optiver.com/working-at-optiver/'),
  c('IMC', 'https://careers.imc.com/'),
  c('Jump Trading', 'https://www.jumptrading.com/careers/'),
  c('Tower Research', 'https://www.tower-research.com/careers/'),
  c('DRW', 'https://www.drw.com/careers/'),
  c('Five Rings', 'https://fiverings.com/careers/'),
  c('Akuna Capital', 'https://akunacapital.com/careers/'),
  c('SIG', 'https://careers.sig.com/'),
]

const BIG_TECH = [
  c('OpenAI', 'https://openai.com/careers'),
  c('Anthropic', 'https://www.anthropic.com/careers'),
  c('Google', 'https://careers.google.com/'),
  c('NVIDIA', 'https://www.nvidia.com/en-us/about-nvidia/careers/'),
  c('Meta', 'https://www.metacareers.com/'),
  c('Apple', 'https://jobs.apple.com/'),
  c('Microsoft', 'https://careers.microsoft.com/'),
  c('Databricks', 'https://www.databricks.com/company/careers'),
  c('Stripe', 'https://stripe.com/jobs'),
]

const TIER_A_PLUS = [
  c('Amazon', 'https://www.amazon.jobs/'),
  c('Adobe', 'https://careers.adobe.com/'),
  c('Atlassian', 'https://www.atlassian.com/company/careers'),
  c('Salesforce', 'https://careers.salesforce.com/'),
  c('Snowflake', 'https://careers.snowflake.com/'),
  c('Cloudflare', 'https://www.cloudflare.com/careers/'),
  c('Airbnb', 'https://careers.airbnb.com/'),
  c('Uber', 'https://www.uber.com/careers/'),
  c('DoorDash', 'https://careers.doordash.com/'),
  c('LinkedIn', 'https://careers.linkedin.com/'),
  c('Netflix', 'https://jobs.netflix.com/'),
  c('Dropbox', 'https://jobs.dropbox.com/'),
]

const AI_LABS = [
  c('Cohere', 'https://cohere.com/careers'),
  c('Hugging Face', 'https://huggingface.co/jobs'),
  c('Perplexity', 'https://www.perplexity.ai/careers'),
  c('Mistral AI', 'https://mistral.ai/careers'),
  c('xAI', 'https://x.ai/careers'),
]

const ENTERPRISE = [
  c('Oracle', 'https://careers.oracle.com/'),
  c('Cisco', 'https://jobs.cisco.com/'),
  c('SAP', 'https://www.sap.com/about/careers.html'),
  c('ServiceNow', 'https://careers.servicenow.com/'),
  c('Palo Alto Networks', 'https://jobs.paloaltonetworks.com/'),
  c('Qualcomm', 'https://www.qualcomm.com/company/careers'),
  c('AMD', 'https://careers.amd.com/'),
  c('Arm', 'https://careers.arm.com/'),
  c('Red Hat', 'https://www.redhat.com/en/jobs'),
]

const INDIAN_FINTECH = [
  c('Razorpay', 'https://razorpay.com/jobs/'),
  c('CRED', 'https://careers.cred.club/'),
  c('PhonePe', 'https://www.phonepe.com/careers/'),
  c('Groww', 'https://groww.in/careers'),
  c('Zerodha', 'https://careers.zerodha.com/'),
  c('Rippling', 'https://www.rippling.com/careers'),
]

const SECURITY = [
  c('CrowdStrike', 'https://www.crowdstrike.com/careers/'),
  c('Palo Alto Networks', 'https://jobs.paloaltonetworks.com/'),
  c('Wiz', 'https://www.wiz.io/careers'),
  c('SentinelOne', 'https://www.sentinelone.com/careers/'),
  c('Okta', 'https://www.okta.com/company/careers/'),
  c('Zscaler', 'https://www.zscaler.com/careers'),
  c('Fortinet', 'https://www.fortinet.com/corporate/careers'),
  c('Cloudflare', 'https://www.cloudflare.com/careers/'),
]

const DATA_INFRA = [
  c('Databricks', 'https://www.databricks.com/company/careers'),
  c('Snowflake', 'https://careers.snowflake.com/'),
  c('Confluent', 'https://www.confluent.io/careers/'),
  c('Fivetran', 'https://www.fivetran.com/careers'),
  c('dbt Labs', 'https://www.getdbt.com/careers'),
  c('MongoDB', 'https://www.mongodb.com/careers'),
  c('Elastic', 'https://www.elastic.co/careers/'),
  c('Datadog', 'https://careers.datadoghq.com/'),
]

const CLOUD_INFRA = [
  c('HashiCorp', 'https://www.hashicorp.com/careers'),
  c('Grafana Labs', 'https://grafana.com/about/careers/'),
  c('Docker', 'https://www.docker.com/careers/'),
  c('GitLab', 'https://about.gitlab.com/jobs/'),
  c('Vercel', 'https://vercel.com/careers'),
  c('DigitalOcean', 'https://www.digitalocean.com/careers'),
  c('Datadog', 'https://careers.datadoghq.com/'),
  c('Red Hat', 'https://www.redhat.com/en/jobs'),
]

const PRODUCT_LED = [
  c('Figma', 'https://www.figma.com/careers/'),
  c('Notion', 'https://www.notion.so/careers'),
  c('Canva', 'https://www.canva.com/careers/'),
  c('Linear', 'https://linear.app/careers'),
  c('Spotify', 'https://www.lifeatspotify.com/'),
  c('Duolingo', 'https://careers.duolingo.com/'),
  c('Discord', 'https://discord.com/careers'),
  c('Snap', 'https://careers.snap.com/'),
]

const INDIAN_CONSUMER = [
  c('Flipkart', 'https://www.flipkartcareers.com/'),
  c('Zomato', 'https://www.zomato.com/careers'),
  c('Swiggy', 'https://careers.swiggy.com/'),
  c('Meesho', 'https://www.meesho.io/jobs'),
  c('Paytm', 'https://jobs.paytm.com/'),
]

const CONSULTING = [
  c('McKinsey', 'https://www.mckinsey.com/careers'),
  c('BCG', 'https://careers.bcg.com/'),
  c('Bain', 'https://www.bain.com/careers/'),
  c('EY', 'https://www.ey.com/en_gl/careers'),
  c('Deloitte', 'https://www2.deloitte.com/global/en/careers.html'),
  c('Accenture', 'https://www.accenture.com/careers'),
]

export const COMPANY_TIERS = {
  swe: [
    { tier: 'Tier S — Big Tech & Elite Product', companies: BIG_TECH },
    { tier: 'Tier A+ — Top Product Companies', companies: TIER_A_PLUS },
    { tier: 'Enterprise Software', companies: ENTERPRISE },
    { tier: 'Indian Fintech & High-Growth', companies: INDIAN_FINTECH },
    { tier: 'Adjacent Exit — Consulting', companies: CONSULTING },
  ],
  ai: [
    { tier: 'Tier S — Frontier Labs & Big Tech AI', companies: BIG_TECH },
    { tier: 'AI-Native Companies', companies: AI_LABS },
    { tier: 'Strong AI Teams — Tier A+', companies: TIER_A_PLUS },
  ],
  quant: [
    { tier: 'Tier S — Elite Quant Firms', companies: QUANT_S },
    { tier: 'Quant-Adjacent — Fintech', companies: INDIAN_FINTECH },
  ],
  cyber: [
    { tier: 'Tier S — Security Leaders', companies: SECURITY },
    { tier: 'Big Tech Security Teams', companies: BIG_TECH },
    { tier: 'Enterprise & Network Security', companies: ENTERPRISE },
  ],
  'data-eng': [
    { tier: 'Tier S — Data Infrastructure', companies: DATA_INFRA },
    { tier: 'Big Tech Data Teams', companies: BIG_TECH },
    { tier: 'Tier A+ — Top Product Companies', companies: TIER_A_PLUS },
    { tier: 'Indian Fintech & High-Growth', companies: INDIAN_FINTECH },
  ],
  product: [
    { tier: 'Tier S — Big Tech PM', companies: BIG_TECH },
    { tier: 'Product-Led Companies', companies: PRODUCT_LED },
    { tier: 'Indian Consumer & Commerce', companies: INDIAN_CONSUMER },
    { tier: 'Adjacent Exit — Consulting', companies: CONSULTING },
  ],
  'data-science': [
    { tier: 'Tier S — Big Tech & Data-Led', companies: BIG_TECH },
    { tier: 'Data Infrastructure', companies: DATA_INFRA },
    { tier: 'Consumer & Product-Led', companies: PRODUCT_LED },
    { tier: 'Analytics-Heavy Consulting', companies: CONSULTING },
  ],
  mobile: [
    { tier: 'Tier S — Big Tech', companies: BIG_TECH },
    { tier: 'Consumer App Leaders', companies: PRODUCT_LED },
    { tier: 'Indian Consumer & Commerce', companies: INDIAN_CONSUMER },
    { tier: 'Tier A+ — Top Product Companies', companies: TIER_A_PLUS },
  ],
  cloud: [
    { tier: 'Tier S — Cloud & Infra Companies', companies: CLOUD_INFRA },
    { tier: 'Big Tech Cloud Teams', companies: BIG_TECH },
    { tier: 'Enterprise Infrastructure', companies: ENTERPRISE },
    { tier: 'Tier A+ — Top Product Companies', companies: TIER_A_PLUS },
  ],
  design: [
    { tier: 'Tier S — Design-Led Companies', companies: PRODUCT_LED },
    { tier: 'Big Tech Design Teams', companies: BIG_TECH },
    { tier: 'Tier A+ — Top Product Companies', companies: TIER_A_PLUS },
    { tier: 'Indian Consumer & Commerce', companies: INDIAN_CONSUMER },
  ],
}
