import ContactForm from '@/components/ContactForm';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Enterprise AI Consulting & Transformation | Tanumanasa",
  description: "AI strategy, agent development, GenAI adoption and cloud migration — Tanumanasa helps enterprises move from pilot to production, responsibly.",
  path: "/enterprise",
});

export default function EnterprisePage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 100px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>ENTERPRISE AI</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"56px",lineHeight:"1.1",color:"#2A1620",margin:"0 0 24px",maxWidth:"820px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>From pilot to production — AI that works in your business.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 40px",maxWidth:"620px",textWrap:"pretty"}}>We help enterprises and institutions adopt generative AI with strategy, agents, and cloud done right.</p>
        <a className="hv1" href="#consult" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px",display:"inline-block"}}>Book a consultation</a>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>SERVICES</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",color:"#2A1620",margin:"0 0 56px",fontWeight:"600",letterSpacing:"-0.015em"}}>What we do, end to end.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"22px"}} data-cols="3">
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"21px",color:"#2A1620",marginBottom:"10px"}}>AI Consulting</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Assess readiness, identify high-value use cases, build the business case.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"21px",color:"#2A1620",marginBottom:"10px"}}>AI Transformation</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Roadmap and execution across people, process and technology.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"21px",color:"#2A1620",marginBottom:"10px"}}>Agent Development</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Build and deploy production agents on your data and tools.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"21px",color:"#2A1620",marginBottom:"10px"}}>AI Strategy</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Governance, build-vs-buy, model selection, responsible-AI policy.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"21px",color:"#2A1620",marginBottom:"10px"}}>Cloud Migration</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Modernise infrastructure for AI workloads on AWS.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 30px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"21px",color:"#2A1620",marginBottom:"10px"}}>GenAI Adoption</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Enablement, change management and training for teams.</p>
          </div>
        </div>
      </div>
    </div>

    <div id="framework" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>SUCCESS FRAMEWORK</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",color:"#2A1620",margin:"0 0 64px",fontWeight:"600",letterSpacing:"-0.015em",maxWidth:"620px"}}>What working with us looks like.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"0"}} data-cols="5">
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 28px 4px 24px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"14px"}}>01 · DISCOVER</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Understand goals, data and constraints.</p>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 28px 4px 24px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"14px"}}>02 · DESIGN</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Prioritise use cases, define architecture and success metrics.</p>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 28px 4px 24px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"14px"}}>03 · BUILD</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Develop, integrate and test with humans in the loop.</p>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 28px 4px 24px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"14px"}}>04 · DEPLOY</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Ship securely to production on your cloud.</p>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 28px 4px 24px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"14px"}}>05 · SCALE</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Measure, optimise and expand.</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderBottom:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"56px 32px",display:"flex",gap:"40px",alignItems:"center",justifyContent:"center",flexWrap:"wrap"}} data-wrap="" data-sec="">
        <span style={{fontFamily:"Manrope,sans-serif",fontSize:"12px",letterSpacing:"0.18em",color:"#97713E"}}>AWS PARTNER</span>
        <span style={{width:"4px",height:"4px",borderRadius:"50%",background:"#CEA961"}}></span>
        <span style={{fontFamily:"Manrope,sans-serif",fontSize:"12px",letterSpacing:"0.18em",color:"#97713E"}}>SECURITY-FIRST</span>
        <span style={{width:"4px",height:"4px",borderRadius:"50%",background:"#CEA961"}}></span>
        <span style={{fontFamily:"Manrope,sans-serif",fontSize:"12px",letterSpacing:"0.18em",color:"#97713E"}}>YOUR DATA STAYS IN YOUR ENVIRONMENT</span>
      </div>
    </div>

    <div id="consult" style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"center"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>BOOK A CONSULTATION</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"42px",lineHeight:"1.14",color:"#2A1620",margin:"0 0 18px",fontWeight:"600",letterSpacing:"-0.015em"}}>Tell us what you want to solve.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>A short call with our team — no decks, no pressure. We'll tell you honestly whether AI is the right tool for your problem, and what it would take.</p>
        </div>
        <div style={{background:"#F5ECE2",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"40px 36px"}} data-formcard="">
          <ContactForm id="ent" intent="enterprise" detailLabel="Use case you want to solve" detailPlaceholder="e.g. Automate invoice processing" messageLabel="Tell us a little more" buttonLabel="Book a consultation" />
        </div>
      </div>
    </div>
    </>
  );
}
