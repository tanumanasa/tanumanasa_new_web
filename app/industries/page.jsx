import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "AI by Industry | Mining, Healthcare, Government & more | Tanumanasa",
  description: "How Tanumanasa applies AI across mining, education, healthcare, government, manufacturing and research institutions.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 100px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>INDUSTRIES</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"58px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"800px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Domain depth, sector by sector.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0",maxWidth:"640px",textWrap:"pretty"}}>How we apply AI across mining, education, healthcare, government, manufacturing and research institutions.</p>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"22px"}} data-cols="3" data-wrap="" data-sec="">
        <a className="hv6" href="#mining" style={{textDecoration:"none",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 30px",display:"block"}}>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"8px"}}>Mining</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.6",color:"#6B4E5E",margin:"0"}}>Safety, productivity, prediction</p>
        </a>
        <a className="hv6" href="#education" style={{textDecoration:"none",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 30px",display:"block"}}>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"8px"}}>Education</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.6",color:"#6B4E5E",margin:"0"}}>Multilingual learning, access</p>
        </a>
        <a className="hv6" href="#healthcare" style={{textDecoration:"none",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 30px",display:"block"}}>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"8px"}}>Healthcare</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.6",color:"#6B4E5E",margin:"0"}}>Access, documentation, triage support</p>
        </a>
        <a className="hv6" href="#government" style={{textDecoration:"none",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 30px",display:"block"}}>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"8px"}}>Government</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.6",color:"#6B4E5E",margin:"0"}}>Citizen services in regional languages</p>
        </a>
        <a className="hv6" href="#manufacturing" style={{textDecoration:"none",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 30px",display:"block"}}>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"8px"}}>Manufacturing</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.6",color:"#6B4E5E",margin:"0"}}>Quality, maintenance, automation</p>
        </a>
        <a className="hv6" href="#research-inst" style={{textDecoration:"none",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 30px",display:"block"}}>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"8px"}}>Research Institutions</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.6",color:"#6B4E5E",margin:"0"}}>Discovery, data, collaboration</p>
        </a>
      </div>
    </div>

    <div id="mining" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"grid",gridTemplateColumns:"300px 1fr",gap:"64px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.22em",color:"#920D54",marginBottom:"12px"}}>०१ · MINING</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"33px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em",lineHeight:"1.2"}}>Safer mines, sharper prediction.</h2>
        </div>
        <div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 20px",textWrap:"pretty"}}>Mining operations run on incident reports, compliance registers and sensor data that rarely talk to each other. Our mining AI research feeds domain models, safety systems, and predictive analytics that surface risk before it becomes an incident.</p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#fff",border:"1px solid #EFE6DB",padding:"7px 16px",borderRadius:"999px"}}>Safety agents</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#fff",border:"1px solid #EFE6DB",padding:"7px 16px",borderRadius:"999px"}}>Predictive analytics</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#fff",border:"1px solid #EFE6DB",padding:"7px 16px",borderRadius:"999px"}}>Simulators</span>
          </div>
        </div>
      </div>
    </div>

    <div id="education" style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"grid",gridTemplateColumns:"300px 1fr",gap:"64px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.22em",color:"#920D54",marginBottom:"12px"}}>०२ · EDUCATION</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"33px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em",lineHeight:"1.2"}}>Learning in the learner's language.</h2>
        </div>
        <div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 20px",textWrap:"pretty"}}>Most Indian students learn best in a language global AI barely speaks. Antariksha.ai and Vichayan AI power multilingual tutoring, content generation and institutional knowledge access — from Odia-medium classrooms to national platforms.</p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F3E2EA",padding:"7px 16px",borderRadius:"999px"}}>Antariksha.ai</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F3E2EA",padding:"7px 16px",borderRadius:"999px"}}>Vichayan AI</span>
          </div>
        </div>
      </div>
    </div>

    <div id="healthcare" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"grid",gridTemplateColumns:"300px 1fr",gap:"64px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.22em",color:"#920D54",marginBottom:"12px"}}>०३ · HEALTHCARE</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"33px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em",lineHeight:"1.2"}}>Access where doctors are scarce.</h2>
        </div>
        <div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 20px",textWrap:"pretty"}}>Multilingual AI can shrink the distance between a rural patient and a specialist: documentation assistants that give clinicians hours back, triage support in regional languages, and knowledge tools for frontline health workers.</p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#fff",border:"1px solid #EFE6DB",padding:"7px 16px",borderRadius:"999px"}}>Multilingual AI</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#fff",border:"1px solid #EFE6DB",padding:"7px 16px",borderRadius:"999px"}}>Clinical agents</span>
          </div>
        </div>
      </div>
    </div>

    <div id="government" style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"grid",gridTemplateColumns:"300px 1fr",gap:"64px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.22em",color:"#920D54",marginBottom:"12px"}}>०४ · GOVERNMENT</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"33px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em",lineHeight:"1.2"}}>Citizen services, in citizens' languages.</h2>
        </div>
        <div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 20px",textWrap:"pretty"}}>Sovereign models mean public services that don't route citizen data through foreign infrastructure. We work with government and mission partners on regional-language service delivery, grievance handling and document intelligence.</p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F3E2EA",padding:"7px 16px",borderRadius:"999px"}}>Sovereign AI</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F3E2EA",padding:"7px 16px",borderRadius:"999px"}}>Multilingual models</span>
          </div>
        </div>
      </div>
    </div>

    <div id="manufacturing" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"grid",gridTemplateColumns:"300px 1fr",gap:"64px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.22em",color:"#920D54",marginBottom:"12px"}}>०५ · MANUFACTURING</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"33px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em",lineHeight:"1.2"}}>Quality and uptime, systematised.</h2>
        </div>
        <div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 20px",textWrap:"pretty"}}>From quality inspection to predictive maintenance and process automation, agents and scientific AI turn plant data into fewer defects, less downtime, and documented know-how that survives shift changes.</p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#fff",border:"1px solid #EFE6DB",padding:"7px 16px",borderRadius:"999px"}}>Agents</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#fff",border:"1px solid #EFE6DB",padding:"7px 16px",borderRadius:"999px"}}>Scientific AI</span>
          </div>
        </div>
      </div>
    </div>

    <div id="research-inst" style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"grid",gridTemplateColumns:"300px 1fr",gap:"64px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.22em",color:"#920D54",marginBottom:"12px"}}>०६ · RESEARCH INSTITUTIONS</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"33px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em",lineHeight:"1.2"}}>Partners in discovery.</h2>
        </div>
        <div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 20px",textWrap:"pretty"}}>Universities and labs partner with us on datasets, frugal-AI methods and scientific AI — shared infrastructure, shared authorship, shared credit. Our collaborations already span from Nalanda to Cambridge.</p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F3E2EA",padding:"7px 16px",borderRadius:"999px"}}>Scientific AI</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F3E2EA",padding:"7px 16px",borderRadius:"999px"}}>Research collaboration</span>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px",flexWrap:"wrap"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"36px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em"}}>Don't see your sector? Let's talk anyway.</h2>
        <Link className="hv1" href="/contact?intent=enterprise" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px",flex:"none"}}>Discuss your sector →</Link>
      </div>
    </div>
    </>
  );
}
