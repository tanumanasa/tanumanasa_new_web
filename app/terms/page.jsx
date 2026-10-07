import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Terms of Use | Tanumanasa Research",
  description: "Terms governing the use of the Tanumanasa Research website and its content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 96px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>LEGAL</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"56px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"860px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Terms of Use</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0",maxWidth:"660px",textWrap:"pretty"}}>The terms that apply when you use this website.</p>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <article className="tm-prose">
        <p className="upd">Last updated: 27 September 2026</p>
        <h2>Acceptance</h2>
        <p>By using this website you agree to these terms. If you do not agree, please do not use the website.</p>
        <h2>Use of the website</h2>
        <p>You may browse and share content from this website for lawful, non-commercial purposes. You must not attempt to disrupt, probe or gain unauthorised access to the website, its forms or its systems, or submit unlawful, misleading or automated content.</p>
        <h2>Intellectual property</h2>
        <p>The Tanumanasa name, lotus mark, Antariksha.ai and Vichayan AI names, text, graphics and design of this website belong to Tanumanasa Research Pvt. Ltd. or its licensors. Open-source releases are governed by the licence published with each release.</p>
        <h2>Information on this website</h2>
        <p>Content is provided for general information. Product descriptions, roadmaps and availability may change and do not form an offer. Access to products and services is subject to separate written agreements.</p>
        <h2>Third-party links</h2>
        <p>Links to external sites such as Hugging Face, GitHub, LinkedIn, X and YouTube are provided for convenience. We are not responsible for their content or practices.</p>
        <h2>Limitation of liability</h2>
        <p>To the extent permitted by law, Tanumanasa is not liable for any indirect or consequential loss arising from the use of this website. The website is provided “as is” without warranties of any kind.</p>
        <h2>Governing law</h2>
        <p>These terms are governed by the laws of India. Courts at Bhubaneswar, Odisha have exclusive jurisdiction.</p>
        <h2>Contact</h2>
        <p>{"Questions about these terms: "}<a href="mailto:hello@tanumanasa.com">hello@tanumanasa.com</a>.</p>
      </article>
    </div>
    </>
  );
}
