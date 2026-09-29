// Single source of truth for the site.
// To track career progress, edit this file: add a role to `experience`,
// a case study to `projects`, or a new cert to `certifications`.

export const profile = {
  name: "Arielson Oliveira",
  siteUrl: "https://arielson.dev",
  shortName: "Arielson",
  role: "Platform Engineer",
  tagline: "Cloud, DevOps & AI",
  location: "Portugal · Remote worldwide",
  email: "arielson.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/arielson-oliveira-91a73b1b1/",
  github: "https://github.com/ariel-oliver",
  yearsExperience: 8,
  summary:
    "I design, automate and operate cloud platforms across AWS, Azure and GCP — Terraform, Kubernetes and GitOps — and now wire AI agents into the loop so infrastructure ships faster, costs less and stays secure.",
  availability: "Open to freelance & B2B contracts",
};

export const metrics = [
  { value: 90, suffix: "%", label: "faster deployments", detail: "Terraform/Terragrunt framework across 16 AWS accounts" },
  { value: 70, suffix: "%", label: "faster CI builds", detail: "BuildKit, parallel execution, parameterized Docker builds" },
  { value: 10, prefix: "$", suffix: "k", label: "saved every year", detail: "Harbor to Amazon ECR registry migration" },
  { value: 25, suffix: "k", label: "pipeline runs / week", detail: "Azure DevOps platform for 4,000+ engineers at HP" },
];

export type Service = {
  title: string;
  pitch: string;
  outcomes: string[];
  icon: "cloud" | "k8s" | "pipeline" | "shield" | "coin" | "agent";
};

export const services: Service[] = [
  {
    title: "AI-native platform ops",
    pitch: "Agents that read your infra, review your code and fix incidents with you.",
    outcomes: ["Claude Code & MCP servers for ops", "Automated review & docs", "Agent-assisted troubleshooting"],
    icon: "agent",
  },
  {
    title: "Cloud foundations",
    pitch: "Landing zones and multi-account setups that scale from day one.",
    outcomes: ["Azure Landing Zones", "AWS multi-account with Terragrunt", "Reusable IaC modules"],
    icon: "cloud",
  },
  {
    title: "Kubernetes & GitOps",
    pitch: "Production clusters delivered and reconciled from Git.",
    outcomes: ["EKS / AKS / GKE", "Argo CD & FluxCD", "Custom Operators, Karpenter"],
    icon: "k8s",
  },
  {
    title: "CI/CD acceleration",
    pitch: "Pipelines your developers stop waiting on.",
    outcomes: ["GitHub Actions, GitLab CI, Azure Pipelines", "Build caching & parallelism", "Golden-path templates"],
    icon: "pipeline",
  },
  {
    title: "Security & governance",
    pitch: "Least privilege without slowing teams down.",
    outcomes: ["Entra ID ↔ AWS IAM Identity Center", "RBAC & Azure Policy", "HashiCorp Vault, secret rotation"],
    icon: "shield",
  },
  {
    title: "Cost optimization",
    pitch: "Cut the cloud bill, keep the reliability.",
    outcomes: ["Managed-service consolidation", "Right-sizing & autoscaling", "Observability with Grafana/Prometheus/Thanos"],
    icon: "coin",
  },
];

export type Project = {
  title: string;
  client: string;
  year: string;
  headline: string;
  metric: string;
  metricLabel: string;
  problem: string;
  solution: string;
  stack: string[];
  accent: string; // CSS gradient stops
};

export const projects: Project[] = [
  {
    title: "Agent-assisted Azure platform",
    client: "Enhesa",
    year: "2026",
    headline: "Landing zones, GitOps and AI agents working together.",
    metric: "AI",
    metricLabel: "in the ops loop",
    problem: "Platform work needs speed without trading away governance.",
    solution:
      "Operates AKS on Azure Landing Zones with FluxCD/Argo CD and custom Operators, and uses Claude Code, MCP and agents for review, docs and troubleshooting.",
    stack: ["Azure", "AKS", "FluxCD", "MCP", "Claude Code"],
    accent: "from-cyan-300 via-blue-500 to-fuchsia-500",
  },
  {
    title: "16-account AWS platform, provisioned in minutes",
    client: "Capgemini Engineering",
    year: "2025",
    headline: "Terraform/Terragrunt framework driven by GitOps.",
    metric: "90%",
    metricLabel: "faster deployments",
    problem: "Sixteen AWS accounts managed by hand-rolled, drifting infrastructure code.",
    solution:
      "Designed a layered Terraform/Terragrunt framework with GitOps workflows, so a full platform can be provisioned from a pull request.",
    stack: ["Terraform", "Terragrunt", "AWS", "GitOps"],
    accent: "from-sky-400 via-indigo-500 to-violet-500",
  },
  {
    title: "Zero-downtime move from on-prem Kubernetes to EKS",
    client: "Capgemini Engineering",
    year: "2025",
    headline: "Stateful workloads migrated with no service interruption.",
    metric: "0",
    metricLabel: "minutes of downtime",
    problem: "On-premise clusters limited scale and carried heavy operational overhead.",
    solution:
      "Orchestrated the migration to Amazon EKS using Velero for stateful workloads and Argo CD for automated, declarative rollouts.",
    stack: ["AWS EKS", "Velero", "Argo CD", "Helm"],
    accent: "from-emerald-400 via-teal-500 to-cyan-500",
  },
  {
    title: "CI builds that finish before the coffee",
    client: "Capgemini Engineering",
    year: "2025",
    headline: "BuildKit, parallelism and parameterized Dockerfiles.",
    metric: "70%",
    metricLabel: "faster builds",
    problem: "Slow, duplicated Docker builds were blocking every merge.",
    solution:
      "Rebuilt pipelines around BuildKit caching and parallel stages, and collapsed Dockerfiles into parameterized templates — halving their maintenance.",
    stack: ["Docker BuildKit", "GitHub Actions", "GitLab CI"],
    accent: "from-amber-300 via-orange-500 to-rose-500",
  },
  {
    title: "Registry migration that pays for itself",
    client: "Capgemini Engineering",
    year: "2024",
    headline: "Self-hosted Harbor replaced by Amazon ECR.",
    metric: "$10k",
    metricLabel: "saved per year",
    problem: "A self-hosted registry cost money and on-call time.",
    solution:
      "Migrated all container images to Amazon ECR with better availability, and consolidated MongoDB into Atlas clusters over private connectivity.",
    stack: ["Amazon ECR", "MongoDB Atlas", "PrivateLink"],
    accent: "from-lime-300 via-green-500 to-emerald-600",
  },
  {
    title: "CI/CD platform for 4,000+ engineers",
    client: "Instituto Atlântico · HP Inc.",
    year: "2022",
    headline: "10,000 pipelines, 400 projects, one Azure DevOps platform.",
    metric: "25k",
    metricLabel: "executions every week",
    problem: "A global engineering org needed reliable, standardized build agents at scale.",
    solution:
      "Ran the enterprise Azure DevOps platform with Packer-built agent images, Terraform-managed AWS capacity and Grafana/Prometheus observability.",
    stack: ["Azure DevOps", "Packer", "Terraform", "Terratest", "Grafana"],
    accent: "from-fuchsia-400 via-purple-500 to-indigo-600",
  },
];

export type Role = {
  company: string;
  title: string;
  location: string;
  start: string;
  end: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: "Enhesa",
    title: "Platform Engineer · Cloud, DevOps & AI",
    location: "Portugal",
    start: "Apr 2026",
    end: "Present",
    highlights: [
      "Azure Landing Zones, Terraform, Terragrunt and AKS",
      "GitOps delivery with FluxCD and Argo CD; custom Kubernetes Operators",
      "Governance with IAM, RBAC and Azure Policy",
      "Claude Code, MCP and AI agents for review, docs and troubleshooting",
    ],
  },
  {
    company: "Capgemini Engineering",
    title: "DevOps Engineer",
    location: "Porto, Portugal",
    start: "Oct 2024",
    end: "Apr 2026",
    highlights: [
      "Terraform/Terragrunt framework for 16 AWS accounts — 90% faster deploys",
      "70% faster CI builds with BuildKit and parallel execution",
      "Zero-downtime on-prem Kubernetes to EKS migration",
      "$10k/year saved moving Harbor to Amazon ECR",
    ],
  },
  {
    company: "Next Engineering",
    title: "DevOps Engineer",
    location: "Lisbon, Portugal",
    start: "Mar 2023",
    end: "Oct 2024",
    highlights: [
      "Led DevOps culture adoption across the organization",
      "Azure IaC with Terraform and Terragrunt",
      "Azure Pipelines and Jenkins for .NET, Kotlin and Python",
      "Legacy apps containerized onto Kubernetes",
    ],
  },
  {
    company: "Instituto Atlântico · HP Inc.",
    title: "DevOps Engineer",
    location: "Fortaleza, Brazil",
    start: "Sep 2021",
    end: "Mar 2023",
    highlights: [
      "Azure DevOps platform: 4,000+ users, 10,000 pipelines",
      "AWS infrastructure with Terraform, Terragrunt and Packer",
      "Serverless in Python and Go, tested with Terratest",
      "Global teams across India, the US and Brazil",
    ],
  },
  {
    company: "Municipal Government of Sobral",
    title: "DevOps Engineer",
    location: "Sobral, Brazil",
    start: "Jun 2019",
    end: "Sep 2021",
    highlights: [
      "End-to-end CI/CD with GitLab CI and Docker",
      "Ansible automation — 60% less manual setup time",
      "Zabbix monitoring across the infrastructure",
    ],
  },
  {
    company: "Municipal Government of Sobral",
    title: "IT Tech Support",
    location: "Sobral, Brazil",
    start: "Mar 2018",
    end: "May 2019",
    highlights: ["Where it started: hardware, software and people"],
  },
];

export const certifications = [
  { name: "HashiCorp Certified: Terraform Associate (003)", issuer: "HashiCorp", date: "Jul 2025" },
  { name: "AWS Certified Cloud Practitioner", issuer: "AWS", date: "Jul 2025" },
  { name: "GitLab Certified Associate", issuer: "GitLab", date: "May 2025" },
];

export const education = [
  { school: "Universidade de Fortaleza — UNIFOR", degree: "Systems Analysis and Development", date: "2022" },
  { school: "Universidade Estadual Vale do Acaraú — UVA", degree: "B.Sc. Accounting Sciences", date: "2020" },
];

export const stack = [
  "Terraform", "Terragrunt", "Kubernetes", "Docker", "Argo CD", "FluxCD", "Helm", "Karpenter",
  "AWS", "Azure", "GCP", "GitHub Actions", "GitLab CI", "Azure Pipelines", "Ansible", "Packer",
  "HashiCorp Vault", "Grafana", "Prometheus", "Thanos", "Python", "Go", "Linux",
  "Claude Code", "MCP", "RAG", "AI Agents",
];

export const engagements = [
  {
    name: "Platform assessment",
    duration: "1–2 weeks",
    description: "Audit of your cloud, pipelines, security and spend. You get a prioritized roadmap with quick wins.",
  },
  {
    name: "Project delivery",
    duration: "Fixed scope",
    description: "A migration, landing zone, GitOps rollout or CI/CD overhaul — delivered end to end and documented.",
  },
  {
    name: "Fractional platform team",
    duration: "Monthly retainer",
    description: "Senior platform engineering on demand, embedded in your team, with AI-assisted ops built in.",
  },
];
