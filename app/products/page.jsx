import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Products | Antariksha.ai, Vichayan AI & Enterprise Agents | Tanumanasa",
  description: "Tanumanasa's AI products: Antariksha.ai foundation models, Vichayan AI intelligent search, and production-grade enterprise AI agents.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 100px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>PRODUCTS</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"58px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"800px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Research, shipped as product.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0",maxWidth:"620px",textWrap:"pretty"}}>Foundation models, intelligent search, and production-grade agents — built in the lab, proven in the field.</p>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}} data-cols="3" data-wrap="" data-sec="">
        <div className="hv4" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"44px 38px",display:"flex",flexDirection:"column"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10.5px",letterSpacing:"0.2em",color:"#97713E",marginBottom:"18px"}}>FOUNDATION MODELS</div>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"28px",color:"#2A1620",marginBottom:"12px"}}>Antariksha.ai</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 24px",flex:"1"}}>Foundation models for India's languages — Hindi, Odia, Bengali, Tamil, Telugu, Marathi and beyond, in a frugal 7B–32B range.</p>
          <Link className="hv5" href="/antariksha" style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Learn more →</Link>
        </div>
        <div className="hv4" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"44px 38px",display:"flex",flexDirection:"column"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10.5px",letterSpacing:"0.2em",color:"#97713E",marginBottom:"18px"}}>{"KNOWLEDGE & SEARCH"}</div>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"28px",color:"#2A1620",marginBottom:"12px"}}>Vichayan AI</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 24px",flex:"1"}}>{"Intelligent search & reasoning over your own knowledge — ask in natural language, get sourced answers across Indian languages."}</p>
          <Link className="hv5" href="/vichayan" style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Learn more →</Link>
        </div>
        <div className="hv4" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"44px 38px",display:"flex",flexDirection:"column"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10.5px",letterSpacing:"0.2em",color:"#97713E",marginBottom:"18px"}}>AUTOMATION</div>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"28px",color:"#2A1620",marginBottom:"12px"}}>Enterprise AI Agents</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 24px",flex:"1"}}>Production-grade agents for real workflows — deployed securely on your cloud, with humans in the loop.</p>
          <Link className="hv5" href="/agents" style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Learn more →</Link>
        </div>
      </div>
    </div>

    <div id="vichayan" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:"80px",alignItems:"center"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>VICHAYAN AI · "INQUIRY / DISCERNMENT"</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"42px",lineHeight:"1.14",color:"#2A1620",margin:"0 0 20px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Ask your documents anything. In any Indian language.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 28px",textWrap:"pretty"}}>Vichayan AI lets organisations question their own documents and data in natural language, across Indian languages, with sourced answers — not guesses.</p>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginBottom:"32px"}} data-cols="2">
            <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"10px",padding:"14px 18px",fontFamily:"Manrope,sans-serif",fontSize:"14px",color:"#2A1620"}}>Multilingual semantic search</div>
            <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"10px",padding:"14px 18px",fontFamily:"Manrope,sans-serif",fontSize:"14px",color:"#2A1620"}}>Answers with citations</div>
            <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"10px",padding:"14px 18px",fontFamily:"Manrope,sans-serif",fontSize:"14px",color:"#2A1620"}}>Secure deployment on your data</div>
            <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"10px",padding:"14px 18px",fontFamily:"Manrope,sans-serif",fontSize:"14px",color:"#2A1620"}}>Role-based access</div>
          </div>
          <Link className="hv1" href="/contact?intent=demo" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px",display:"inline-block"}}>Request a demo →</Link>
        </div>
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px",fontFamily:"Manrope,sans-serif",boxShadow:"0 20px 50px rgba(151,113,62,0.12)"}}>
          <div style={{fontSize:"11px",letterSpacing:"0.18em",color:"#97713E",marginBottom:"20px"}}>VICHAYAN · QUERY</div>
          <div style={{background:"#F5ECE2",border:"1px solid #E4D3C3",borderRadius:"10px",padding:"14px 16px",fontSize:"13px",color:"#2A1620",marginBottom:"18px"}}>ଖଣି ସୁରକ୍ଷା ନିୟମାବଳୀ ୨୦୨୫ ର ମୁଖ୍ୟ ପରିବର୍ତ୍ତନ କ'ଣ?</div>
          <div style={{fontSize:"12px",lineHeight:"1.7",color:"#6B4E5E",marginBottom:"14px"}}>Answering from 3 sourced documents — mine safety circular (2025), DGMS amendment note, internal compliance register…</div>
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
            <span style={{fontSize:"10.5px",color:"#97713E",border:"1px solid #E4D3C3",padding:"4px 10px",borderRadius:"999px"}}>[1] circular_2025.pdf</span>
            <span style={{fontSize:"10.5px",color:"#97713E",border:"1px solid #E4D3C3",padding:"4px 10px",borderRadius:"999px"}}>[2] dgms_note.docx</span>
            <span style={{fontSize:"10.5px",color:"#97713E",border:"1px solid #E4D3C3",padding:"4px 10px",borderRadius:"999px"}}>[3] register.xlsx</span>
          </div>
        </div>
      </div>
    </div>

    <div id="agents" style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1.1fr",gap:"80px",alignItems:"center"}} data-cols="2" data-wrap="" data-sec="">
        <div style={{display:"flex",flexDirection:"column",gap:"14px"}}>
          <div style={{background:"#F3E2EA",borderRadius:"12px",padding:"20px 24px",display:"flex",gap:"16px",alignItems:"center"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.14em",color:"#920D54",flex:"none"}}>AGENT</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#2A1620"}}>Document processing — extract, classify, file</span>
          </div>
          <div style={{background:"#F3E2EA",borderRadius:"12px",padding:"20px 24px",display:"flex",gap:"16px",alignItems:"center",marginLeft:"28px"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.14em",color:"#920D54",flex:"none"}}>AGENT</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#2A1620"}}>Customer support — multilingual, escalation-aware</span>
          </div>
          <div style={{background:"#F3E2EA",borderRadius:"12px",padding:"20px 24px",display:"flex",gap:"16px",alignItems:"center"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.14em",color:"#920D54",flex:"none"}}>AGENT</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#2A1620"}}>Internal knowledge — answers grounded in your systems</span>
          </div>
          <div style={{background:"#F3E2EA",borderRadius:"12px",padding:"20px 24px",display:"flex",gap:"16px",alignItems:"center",marginLeft:"28px"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.14em",color:"#920D54",flex:"none"}}>AGENT</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#2A1620"}}>Process automation — hours saved, faster cycles</span>
          </div>
        </div>
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>ENTERPRISE AI AGENTS</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"42px",lineHeight:"1.14",color:"#2A1620",margin:"0 0 20px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>The result first. The technology second.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 24px",textWrap:"pretty"}}>Autonomous and assistive agents built for real enterprise workflows — document processing, customer support, internal knowledge, and process automation — deployed securely on your cloud. This is where our research earns its keep.</p>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginBottom:"32px"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F5ECE2",padding:"7px 16px",borderRadius:"999px"}}>Workflow agents</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F5ECE2",padding:"7px 16px",borderRadius:"999px"}}>{"Tool & integration use"}</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F5ECE2",padding:"7px 16px",borderRadius:"999px"}}>Human-in-the-loop</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#55092B",background:"#F5ECE2",padding:"7px 16px",borderRadius:"999px"}}>Observability</span>
          </div>
          <Link className="hv1" href="/enterprise" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px",display:"inline-block"}}>See enterprise services →</Link>
        </div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px",flexWrap:"wrap"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"36px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em"}}>See the products in action.</h2>
        <Link className="hv1" href="/contact?intent=demo" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px",flex:"none"}}>Request a demo →</Link>
      </div>
    </div>
    </>
  );
}
