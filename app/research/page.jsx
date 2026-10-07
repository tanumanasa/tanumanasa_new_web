import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Research Lab | Tanumanasa AI Research",
  description: "Foundation models, agentic AI, multimodal, scientific and mining AI, and AI safety — the research directions behind Tanumanasa's work.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-spin="" style={{position:"absolute",right:"-100px",top:"-100px",width:"380px",height:"380px",borderRadius:"50%",border:"1px dashed rgba(151,113,62,0.24)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 100px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>RESEARCH LAB</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"58px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"760px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Research that India can build on.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 40px",maxWidth:"600px",textWrap:"pretty"}}>We work on the hard problems behind sovereign, efficient AI — and we publish what we learn.</p>
        <Link className="hv1" href="/contact?intent=research" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px",display:"inline-block"}}>Collaborate with the lab</Link>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>RESEARCH AREAS</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",color:"#2A1620",margin:"0 0 56px",fontWeight:"600",letterSpacing:"-0.015em"}}>Six problems worth a decade.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"22px"}} data-cols="3">
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०१</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"22px",color:"#2A1620",marginBottom:"10px"}}>Foundation Models</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Efficient, multilingual base models for Indian languages.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०२</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"22px",color:"#2A1620",marginBottom:"10px"}}>Agentic AI</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Reliable autonomous agents for real workflows.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०३</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"22px",color:"#2A1620",marginBottom:"10px"}}>Multimodal AI</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Vision, speech and text for Indian contexts.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०४</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"22px",color:"#2A1620",marginBottom:"10px"}}>Mining AI</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Domain models and safety systems for mining.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०५</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"22px",color:"#2A1620",marginBottom:"10px"}}>Scientific AI</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>AI for research, simulation and discovery.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०६</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"22px",color:"#2A1620",marginBottom:"10px"}}>AI Safety</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Alignment, evaluation and responsible deployment.</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"22px"}} data-cols="3" data-wrap="" data-sec="">
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"14px"}}>RESEARCH POSITION</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 18px"}}>Our current position statement on why efficient model development matters for sovereign AI.</p>
          <Link className="hv5" href="/resources#research" style={{fontFamily:"Manrope,sans-serif",fontSize:"14px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Read →</Link>
        </div>
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"14px"}}>OPEN SOURCE</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 18px"}}>Public code repositories from the Tanumanasa organisation, where available.</p>
          <a className="hv5" href="https://github.com/tanumanasa" target="_blank" rel="noopener noreferrer" style={{fontFamily:"Manrope,sans-serif",fontSize:"14px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>GitHub →<span className="sr-only">{" (opens in a new tab)"}</span></a>
        </div>
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"14px"}}>COLLABORATIONS</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 18px"}}>Research collaboration is welcome across efficient AI, Indian languages, and responsible deployment.</p>
          <Link className="hv5" href="/contact?intent=research" style={{fontFamily:"Manrope,sans-serif",fontSize:"14px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Propose one →</Link>
        </div>
      </div>
    </div>

    <div id="manifesto" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div data-spin="" style={{position:"absolute",left:"50%",top:"50%",margin:"-400px 0 0 -400px",width:"800px",height:"800px",borderRadius:"50%",border:"1px dashed rgba(151,113,62,0.18)"}}></div>
      <div data-reveal="" style={{maxWidth:"840px",margin:"0 auto",padding:"120px 32px",textAlign:"center",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"28px"}}>THE FRUGAL AI MANIFESTO</div>
        <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"32px",lineHeight:"1.42",color:"#2A1620",margin:"0 0 28px",textWrap:"pretty"}}>Frontier capability does not require frontier budgets. We treat cost-effective, efficient model development as a research discipline in its own right — because that is how sovereign AI becomes achievable at Indian scale.</p>
        <div style={{width:"60px",height:"2px",background:"#CEA961",margin:"0 auto"}}></div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px",flexWrap:"wrap"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"36px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em"}}>Have a problem worth researching together?</h2>
        <Link className="hv1" href="/contact?intent=research" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px",flex:"none"}}>Collaborate with the lab →</Link>
      </div>
    </div>
    </>
  );
}
