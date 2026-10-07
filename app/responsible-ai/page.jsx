import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Responsible AI | Tanumanasa Research",
  description: "The principles that guide how Tanumanasa builds, evaluates and deploys AI — data with consent, honest evaluation, safety, human oversight and transparency.",
  path: "/responsible-ai",
});

export default function ResponsibleAiPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 96px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>RESPONSIBLE AI</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"56px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"860px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>How we build AI responsibly</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0",maxWidth:"660px",textWrap:"pretty"}}>The principles behind Antariksha.ai, our products and our enterprise work.</p>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <article className="tm-prose">
        <p className="upd">Last updated: 27 September 2026</p>
        <h2>Built for India’s people and contexts</h2>
        <p>We design for India’s languages, cultures and realities from the start — including low-resource and tribal languages that AI has often ignored.</p>
        <h2>Data with consent and provenance</h2>
        <p>We favour representative, ethically sourced and well-documented data. Datasets we release carry cards describing their sources, licences and known limitations.</p>
        <h2>Honest evaluation</h2>
        <p>We publish results only after verification, alongside methodology and baselines, and we report limitations as clearly as strengths.</p>
        <h2>Safety and alignment</h2>
        <p>Models are aligned and evaluated for harmful outputs, bias across languages and communities, and misuse risks before release.</p>
        <h2>Human oversight</h2>
        <p>In enterprise deployments, people remain in charge of consequential decisions. Our agents include approval points and full audit trails.</p>
        <h2>Privacy and security</h2>
        <p>Client data stays in client environments by default and is never used to train shared models without explicit written consent.</p>
        <h2>Transparency</h2>
        <p>Each model release ships with a model card describing intended use, training approach, evaluation and known limitations.</p>
        <h2>Accountability</h2>
        <p>{"If you have a concern about how our AI behaves, write to "}<a href="mailto:hello@tanumanasa.com">hello@tanumanasa.com</a>. We review every report.</p>
      </article>
    </div>
    </>
  );
}
