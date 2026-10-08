import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "AWS Partner | Cloud & GenAI Infrastructure | Tanumanasa",
  description: "As an AWS Partner, Tanumanasa delivers cloud modernisation, GenAI infrastructure, GPU compute and managed services for AI at scale.",
  path: "/cloud",
});

export default function CloudPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 100px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>{"AWS & CLOUD"}</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"58px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"760px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Cloud infrastructure built for AI.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 40px",maxWidth:"600px",textWrap:"pretty"}}>An AWS Partner helping you modernise, scale and run generative AI in production.</p>
        <Link className="hv1" href="/contact?intent=enterprise" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px",display:"inline-block"}}>Talk to our cloud team</Link>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"72px 32px",display:"grid",gridTemplateColumns:"auto 1fr",gap:"48px",alignItems:"center"}} data-cols="2" data-wrap="" data-sec="">
        <div style={{background:"#fff",border:"1px solid #EFE6DB", borderRadius:"16px",padding:"24px 34px",textAlign:"center"}}>
          <svg aria-label="AWS" role="img" viewBox="0 0 120 58" style={{display:"block",width:"100px",height:"48px",scale:"1.3", margin:"0 auto"}}>
            <text x="60" y="29" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="700" fill="#232F3E">aws</text>
            <path d="M24 39c19 12 49 12 70 0" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round"></path>
            <path d="M89 37l7 2-5 5" fill="none" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10px",letterSpacing:"0.2em",color:"#97713E",marginTop:"4px"}}>PARTNER</div>
        </div>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",maxWidth:"740px",textWrap:"pretty"}}>Our AWS partnership means clients get proven architecture patterns, partner-tier access and credits, security best practices, and co-selling support — cloud work grounded in what actually runs well in production.</p>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",color:"#2A1620",margin:"0 0 56px",fontWeight:"600",letterSpacing:"-0.015em"}}>Four layers of capability.</h2>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"22px"}} data-cols="2">
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"36px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०१</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"10px"}}>Cloud Modernisation</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.7",color:"#6B4E5E",margin:"0"}}>Migration, re-architecture and cost optimisation for AI-ready infrastructure.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"36px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०२</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"10px"}}>GenAI Infrastructure</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.7",color:"#6B4E5E",margin:"0"}}>RAG pipelines, model hosting, vector databases, MLOps.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"36px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०३</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"10px"}}>GPU Infrastructure</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.7",color:"#6B4E5E",margin:"0"}}>Training and inference compute, scaling, efficiency.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"36px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०४</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"23px",color:"#2A1620",marginBottom:"10px"}}>Managed Services</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.7",color:"#6B4E5E",margin:"0"}}>Ongoing operations, monitoring, security and support.</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px",flexWrap:"wrap"}} data-wrap="" data-sec="">
        <div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"36px",color:"#2A1620",margin:"0 0 8px",fontWeight:"600",letterSpacing:"-0.015em"}}>Infrastructure is half the story.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16px",color:"#6B4E5E",margin:"0"}}>See how we put AI to work on top of it.</p>
        </div>
        <div style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
          <Link className="hv1" href="/enterprise" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px"}}>Enterprise AI services</Link>
          <Link className="hv7" href="/contact?intent=enterprise" style={{border:"1px solid #CEA961",background:"#fff",color:"#55092B",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px"}}>Talk to our cloud team</Link>
        </div>
      </div>
    </div>
    </>
  );
}
