import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: 'Tanumanasa: Building Sovereign, Multilingual AI for Bharat',
  description: 'Tanumanasa Research announces its vision for sovereign, multilingual AI rooted in Bharat and built from Odisha.',
  path: '/newsroom/tanumanasa-building-sovereign-multilingual-ai-for-bharat',
});

export default function PressReleasePage() {
  return (
    <main style={{background:"#FFFDFB"}}>
      <article data-reveal="" style={{maxWidth:"900px",margin:"0 auto",padding:"100px 32px 110px"}}>
        <Link href="/newsroom" className="tm-link">← Back to newsroom</Link>
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",margin:"38px 0 20px"}}>PRESS RELEASE · 29 SEP 2026</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"52px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 22px",fontWeight:"600",letterSpacing:"-0.015em"}}>Tanumanasa: Building Sovereign, Multilingual AI for Bharat</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"19px",lineHeight:"1.7",color:"#6B4E5E",margin:"0 0 42px"}}><strong>Bhubaneswar, Odisha — 29th September 2026:</strong> Tanumanasa Research Pvt. Ltd. is a proudly Indian company building intelligent technologies for Bharat's future.</p>

        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"17px",lineHeight:"1.85",color:"#402832"}}>
          <p>Born in Bharat and built for Bharat, the company believes AI should be able to understand the country's languages, cultures, industries and aspirations. The name, Tanu (body, form) and Manasa (mind), reflects the commitment to build intelligent AI solutions and make cutting-edge technology accessible to all.</p>
          <p>Tanumanasa is backed for GPU under the Government of India's IndiaAI Mission. The company's ambition is to build AI products that reach across the nation and establish Tanumanasa as a leading force in Bharat's AI ecosystem. It aims to contribute to Bharat's journey toward becoming a global leader in artificial intelligence by developing technology rooted in local understanding and capable of global impact.</p>
          <p>The company is built around Bharatiya languages, Bharatiya use cases, and Bharatiya technology and science.</p>

          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"30px",lineHeight:"1.2",color:"#2A1620",margin:"48px 0 16px"}}>Antariksha.ai: sovereign AI from Odisha</h2>
          <p>Antariksha.ai is Tanumanasa's flagship sovereign AI, backed by Startup Odisha, an initiative of the Government of Odisha (MSME Department), with a vision to build AI rooted in Bharat's languages, needs and ground realities.</p>
          <p>Built in the practical 7B–32B parameter range, Antariksha.ai combines a capable open base, continued pre-training on Indian-language corpora, supervised fine-tuning and preference alignment. Its vision is to build a trillion-parameter foundational language model from Odisha, natively supporting 22+ Bharatiya languages including tribal and low-resource languages, and grounded in Indian Knowledge Systems.</p>
          <p>It is designed for Indian-language applications, research, education, public-sector applications, multilingual interfaces and domain-specific AI systems. Built on IndiaAI Mission GPU infrastructure and aligned with Digital India and the Odisha AI Policy 2025, Antariksha.ai is designed so that the weights, the data and the reasoning stay within Indian jurisdiction.</p>
          <p>Antariksha.ai is coming soon. The next chapter of sovereign AI begins with a wide range of capabilities, including conversational chat, Indian-language understanding and translation, access to Indian Knowledge Systems, history and scriptures, developer APIs and SDKs, multimodal intelligence, and research intelligence for reading, reasoning over and synthesising papers, patents and datasets at scale.</p>

          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"30px",lineHeight:"1.2",color:"#2A1620",margin:"48px 0 16px"}}>Innovation rooted in Kendujhar</h2>
          <p>Founded by Abinash Das, a native of Kendujhar, Odisha, Tanumanasa represents a powerful narrative of innovation emerging from a tribal and mining region.</p>
          <blockquote style={{borderLeft:"3px solid #920D54",margin:"30px 0",padding:"4px 0 4px 24px",color:"#6B4E5E"}}>“While many LLMs are being developed in India, Tanumanasa's approach is different — we are building AI from the grassroots up, rooted in Bharat's real-world needs, languages and communities. Our growth reflects the untapped potential of districts like Kendujhar to contribute to global technology ecosystems.”<br /><strong>— Abinash Das</strong></blockquote>

          <p>Tanumanasa has been incubated and supported by premier innovation ecosystems, including:</p>
          <ul>
            <li>Startup Odisha</li>
            <li>IndiaAI Mission</li>
            <li>EmTek Centre of Excellence (STPI Bhubaneswar)</li>
            <li>AIC Nalanda Technology Foundation</li>
          </ul>
          <p>These collaborations have played a crucial role in shaping the company's research capabilities, infrastructure access and go-to-market readiness.</p>

          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"30px",lineHeight:"1.2",color:"#2A1620",margin:"48px 0 16px"}}>Founder's message</h2>
          <blockquote style={{borderLeft:"3px solid #920D54",margin:"30px 0",padding:"4px 0 4px 24px",color:"#6B4E5E"}}>“At Tanumanasa, our vision is to harness the power of artificial intelligence to make technology and innovation more accessible to all. Our goal is to build intelligent solutions rooted in human understanding and responsible innovation. We want to prove that Bharat is capable enough to develop AI from grassroots levels, not just from tier-1 cities or IITs. We want to take homegrown innovation from a tribal region like Kendujhar, across Bharat, and to the global stage. As we grow, we remain committed to developing technology that is inclusive and future-ready. This is not just a company's achievement; it is a milestone for Odisha. We envision building a globally competitive AI ecosystem rooted in our land, our languages and our cultural intelligence. We are building intelligence, grounded in Bharat.”<br /><strong>— Abinash Das</strong></blockquote>

          </div>
      </article>
    </main>
  );
}
