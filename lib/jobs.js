export const JOBS = [
  {
    slug: 'indigenous-language-ai-data-contributor',
    title: 'Indigenous Language & AI Data Contributor',
    summary: 'Contribute native-language knowledge and cultural context to AI and language technology datasets',
    category: 'Data',
    location: 'On-site / Hybrid',
    type: 'Internship / Contributor Opportunity',
    introduction: [
      "Tanumanasa Research Pvt. Ltd. is looking for passionate native speakers of indigenous and tribal languages from Assam, Arunachal Pradesh, Manipur, and Sikkim to contribute to an exciting AI and Language Technology project.",
      "The role is ideal for individuals who have strong command of their native language and a good understanding of its vocabulary, cultural context, and everyday usage. You will contribute to the development of language datasets that help improve AI/LLM systems' ability to understand and process India's diverse and underrepresented languages.",
      "We welcome students, freshers, language enthusiasts, and working professionals with 0–2 years of relevant experience.",
    ],
    languages: [
      'Mising — Assam',
      'Wancho — Arunachal Pradesh',
      'Tangkhul — Manipur',
      'Lepcha — Sikkim',
      'Candidates proficient in other indigenous or tribal languages from these regions are also encouraged to apply.',
    ],
    duties: [
      'Contribute language data and linguistic knowledge for AI and language technology projects',
      'Help document vocabulary, cultural context and everyday usage in your native language',
      'Support the development of datasets for indigenous and tribal languages',
      'Help improve AI and LLM systems\u2019 understanding of diverse Indian languages',
    ],
    requirements: [
      'Native speaker of an indigenous or tribal language',
      'Strong command of your native language, including vocabulary and cultural context',
      'Students, freshers, language enthusiasts and working professionals are welcome',
      '0\u20132 years of relevant experience',
    ],
  },
  {
    slug: 'ai-llm-data-curation-intern',
    title: 'AI/LLM Data Curation Intern',
    summary: 'Curate multilingual datasets that support large language models for India\u2019s scheduled languages',
    category: 'Data',
    location: 'On-site / Hybrid',
    type: 'Internship / Contributor Opportunity',
    introduction: [
      "Tanumanasa Research Pvt. Ltd. is building a multilingual, multimodal Large Language Model (LLM) designed to support all 22 scheduled Indian languages.",
      "We are looking for detail-oriented and technically curious individuals to join our team as AI/LLM Data Curation Interns. In this role, you will work with large-scale multilingual datasets that directly contribute to the training and improvement of our flagship AI models.",
      "You will gain hands-on experience in data cleaning, preprocessing, deduplication, language and script validation, PII removal, quality control, and data pipeline development across multiple Indian languages and scripts.",
      "We are looking for someone who is curious, detail-oriented, technically inclined, and passionate about AI and language technology. You should be comfortable working with large datasets, willing to learn new tools, and capable of maintaining a high level of accuracy while handling repetitive data-quality tasks.",
    ],
    duties: [
      'Work with large-scale multilingual datasets that support the training of foundation models',
      'Clean, preprocess and deduplicate data across multiple Indian languages and scripts',
      'Perform language and script validation, PII removal and quality control',
      'Support data pipeline development and maintain high-quality dataset records',
    ],
    requirements: [
      'Curious, detail-oriented, technically inclined and passionate about AI and language technology',
      'Comfortable working with large datasets and repetitive data-quality tasks',
      'Willingness to learn new tools and maintain a high level of accuracy',
      '0\u20132 years of relevant experience',
    ],
  },
];

export function getJob(slug) {
  return JOBS.find((job) => job.slug === slug);
}
