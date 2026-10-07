export const JOBS = [
  {
    slug: 'research-engineer-foundation-models',
    title: 'Research Engineer — Foundation Models',
    summary: 'Pre-training, fine-tuning and evaluation for Indian-language LLMs',
    category: 'Research',
    location: 'Bhubaneswar / Remote',
    type: 'Full-time',
    duties: [
      'Run continued pre-training, fine-tuning and evaluation experiments for Indian-language models',
      'Build evaluation suites for Indian-language understanding, reasoning and translation',
      'Improve training and inference efficiency through reproducible experiments',
      'Write up results for model cards and technical reports',
    ],
    requirements: [
      'Strong Python and PyTorch; hands-on LLM training or fine-tuning',
      'Solid grasp of transformer architectures and evaluation methodology',
      'Interest in Indian languages; fluency in one or more is a plus',
      'Degree in CS/ML or equivalent research experience',
    ],
  },
  {
    slug: 'data-engineer-indian-language-corpora',
    title: 'Data Engineer — Indian-Language Corpora',
    summary: 'Pipelines for scheduled, tribal and low-resource languages',
    category: 'Data',
    location: 'Bhubaneswar',
    type: 'Full-time',
    duties: [
      'Design pipelines to collect, clean, deduplicate and document multilingual corpora',
      'Work with university partners on ethically sourced, well-documented datasets',
      'Build quality filters and language identification for Indic scripts',
      'Maintain dataset cards, provenance and licensing records',
    ],
    requirements: [
      'Python, SQL and large-scale data processing experience',
      'Experience with text processing, Unicode and multilingual data',
      'Care for data ethics, consent and documentation',
      'Reading knowledge of an Indian language is a plus',
    ],
  },
  {
    slug: 'ai-solutions-engineer-enterprise',
    title: 'AI Solutions Engineer — Enterprise',
    summary: 'Agents, retrieval pipelines and AWS deployments for enterprise clients',
    category: 'Enterprise',
    location: 'Bhubaneswar / Remote',
    type: 'Full-time',
    duties: [
      'Scope use cases with clients and design agent and retrieval architectures',
      'Build and deploy solutions on AWS with security and observability',
      'Integrate with client systems including documents, CRMs and databases',
      'Measure outcomes and iterate with humans in the loop',
    ],
    requirements: [
      'Three or more years building production software in Python or TypeScript',
      'Hands-on experience with LLM APIs, retrieval pipelines and cloud systems',
      'Clear communication with technical and non-technical stakeholders',
      'Able to work on client sites in Odisha when needed',
    ],
  },
];

export function getJob(slug) {
  return JOBS.find((job) => job.slug === slug);
}
