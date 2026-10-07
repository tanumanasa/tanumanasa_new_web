import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Partners & Ecosystem | Tanumanasa",
  description: "The institutions, programmes, and collaborators that form Tanumanasa's working ecosystem.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 90px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>{"PARTNERS & ECOSYSTEM"}</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"58px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"720px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>No lab builds alone.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0",maxWidth:"640px",textWrap:"pretty"}}>Our work sits within an ecosystem of public programmes, incubation, cloud infrastructure, and academic and industry collaboration.</p>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px",textAlign:"center"}} data-wrap="" data-sec="">
        <div style={{position:"relative",width:"640px",height:"520px",margin:"0 auto",maxWidth:"100%"}} data-map="">
          <svg viewBox="0 0 640 520" style={{position:"absolute",inset:"0",width:"100%",height:"100%"}}>
            <line x1="320" y1="260" x2="320" y2="80" stroke="#CEA961" strokeWidth="1"></line>
            <line x1="320" y1="260" x2="110" y2="180" stroke="#CEA961" strokeWidth="1"></line>
            <line x1="320" y1="260" x2="530" y2="180" stroke="#CEA961" strokeWidth="1"></line>
            <line x1="320" y1="260" x2="110" y2="380" stroke="#CEA961" strokeWidth="1"></line>
            <line x1="320" y1="260" x2="530" y2="380" stroke="#CEA961" strokeWidth="1"></line>
            <line x1="320" y1="260" x2="320" y2="450" stroke="#CEA961" strokeWidth="1"></line>
            <circle cx="320" cy="260" r="150" fill="none" stroke="rgba(151,113,62,0.35)" strokeWidth="1" strokeDasharray="3 5"></circle>
          </svg>
          <div data-float="" style={{position:"absolute",left:"320px",top:"260px",transform:"translate(-50%,-50%)",width:"120px",height:"120px",borderRadius:"50%",background:"#fff",border:"1.5px solid #CEA961",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:"0 16px 40px rgba(151,113,62,0.2)"}}>
            <img loading="lazy" decoding="async" src="/assets/logo-340.png" alt="" width="56" height="56" style={{width:"56px",height:"56px",display:"block"}} />
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"8px",letterSpacing:"0.22em",color:"#55092B",marginTop:"4px"}}>TANUMANASA</div>
          </div>
          <div style={{position:"absolute",left:"320px",top:"80px",transform:"translate(-50%,-50%)",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"12px",padding:"10px 18px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"15px",color:"#2A1620"}}>IndiaAI</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"9px",letterSpacing:"0.16em",color:"#97713E"}}>NATIONAL MISSION</div>
          </div>
          <div style={{position:"absolute",left:"110px",top:"180px",transform:"translate(-50%,-50%)",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"12px",padding:"10px 18px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"15px",color:"#2A1620"}}>STPI</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"9px",letterSpacing:"0.16em",color:"#97713E"}}>INCUBATION</div>
          </div>
          <div style={{position:"absolute",left:"530px",top:"180px",transform:"translate(-50%,-50%)",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"12px",padding:"10px 18px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"15px",color:"#2A1620"}}>AWS</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"9px",letterSpacing:"0.16em",color:"#97713E"}}>CLOUD PLATFORM</div>
          </div>
          <div style={{position:"absolute",left:"110px",top:"380px",transform:"translate(-50%,-50%)",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"12px",padding:"10px 18px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"15px",color:"#2A1620"}}>Startup Odisha</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"9px",letterSpacing:"0.16em",color:"#97713E"}}>INSTITUTIONAL</div>
          </div>
          <div style={{position:"absolute",left:"530px",top:"380px",transform:"translate(-50%,-50%)",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"12px",padding:"10px 18px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"15px",color:"#2A1620"}}>AIC Nalanda</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"9px",letterSpacing:"0.16em",color:"#97713E"}}>INCUBATION</div>
          </div>
          <div style={{position:"absolute",left:"320px",top:"450px",transform:"translate(-50%,-50%)",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"12px",padding:"10px 18px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"15px",color:"#2A1620"}}>Universities</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"9px",letterSpacing:"0.16em",color:"#97713E"}}>ACADEMIC</div>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"38px",color:"#2A1620",margin:"0 0 48px",fontWeight:"600",letterSpacing:"-0.015em"}}>The ecosystem, in plain words.</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"18px"}} data-cols="2">
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"28px 30px",display:"flex",gap:"20px",alignItems:"baseline"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.16em",color:"#920D54",flex:"none",width:"150px"}}>INSTITUTIONAL</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E"}}><a href="https://stpi.in/" target="_blank" rel="noopener noreferrer" className="tm-link">STPI</a> · <a href="https://startupodisha.gov.in/" target="_blank" rel="noopener noreferrer" className="tm-link">Startup Odisha</a> · AIC Nalanda · O-HUB — incubation, infrastructure, and state ecosystem context.</span>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"28px 30px",display:"flex",gap:"20px",alignItems:"baseline"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.16em",color:"#920D54",flex:"none",width:"150px"}}>CLOUD / TECH</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E"}}><a href="https://aws.amazon.com/" target="_blank" rel="noopener noreferrer" className="tm-link">AWS</a> — cloud infrastructure and services used for enterprise cloud work.</span>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"28px 30px",display:"flex",gap:"20px",alignItems:"baseline"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.16em",color:"#920D54",flex:"none",width:"150px"}}>NATIONAL MISSION</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E"}}><a href="https://indiaai.gov.in/" target="_blank" rel="noopener noreferrer" className="tm-link">IndiaAI</a> — the national mission and public resource for indigenous AI capability.</span>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"28px 30px",display:"flex",gap:"20px",alignItems:"baseline"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.16em",color:"#920D54",flex:"none",width:"150px"}}>ACADEMIC</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E"}}>Academic collaborators, dataset contributors, and research studies inform our work.</span>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px",flexWrap:"wrap"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"36px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em"}}>Join the ecosystem.</h2>
        <Link className="hv1" href="/contact?intent=partnership" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px",flex:"none"}}>Become a partner →</Link>
      </div>
    </div>
    </>
  );
}
