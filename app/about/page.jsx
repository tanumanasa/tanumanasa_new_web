import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "About Tanumanasa | India's Deep-Tech AI Research Company",
  description: "From Kendujhar to global AI — the story, mission and vision of Tanumanasa Research, an Odisha-born foundation-model lab and enterprise AI partner.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-spin="" style={{position:"absolute",right:"-120px",top:"-120px",width:"420px",height:"420px",borderRadius:"50%",border:"1px dashed rgba(151,113,62,0.24)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 100px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>ABOUT TANUMANASA</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"58px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"740px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>A lab that began in Kendujhar, aimed at the world.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0",maxWidth:"600px",textWrap:"pretty"}}>The story, mission and long horizon of an Odisha-born foundation-model lab and enterprise AI partner.</p>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:"88px"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>OUR STORY</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Form, mind, and a stubborn conviction.</h2>
        </div>
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"17px",lineHeight:"1.75",color:"#6B4E5E"}}>
          <p style={{margin:"0 0 20px",textWrap:"pretty"}}>Tanumanasa was founded on a simple conviction: that world-class artificial intelligence can be built from India, for India, and for the world — and that it can begin in Odisha. From the Odisha Startup Incubation Centre (O-HUB) in Bhubaneswar, we build foundation models and enterprise AI that understand the languages, knowledge, and realities of Bharat.</p>
          <p style={{margin:"0",textWrap:"pretty"}}>{"The name carries the work: "}<em style={{color:"#55092B"}}>Tanu</em>{" (body, form) and "}<em style={{color:"#55092B"}}>Manasa</em>{" (mind) — giving form to intelligence, and mind to machines, grounded in Indian thought."}</p>
        </div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px"}} data-cols="2" data-wrap="" data-sec="">
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"48px 44px"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.24em",color:"#920D54",marginBottom:"18px"}}>MISSION</div>
          <p style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"24px",lineHeight:"1.45",color:"#2A1620",margin:"0",textWrap:"pretty"}}>To build sovereign, efficient, and trustworthy foundation models for India's languages, and to make India technologically independent in AI — helping enterprises and institutions adopt it responsibly.</p>
        </div>
        <div style={{background:"#F3E2EA",borderRadius:"16px",padding:"48px 44px",position:"relative",overflow:"hidden"}}>
          <div data-spin="" style={{position:"absolute",right:"-70px",bottom:"-70px",width:"240px",height:"240px",borderRadius:"50%",border:"1px dashed rgba(151,113,62,0.35)"}}></div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.24em",color:"#920D54",marginBottom:"18px"}}>VISION 2035</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.7",color:"#55092B",margin:"0",position:"relative",textWrap:"pretty"}}>To be among the deep-tech companies that made India technologically independent in AI — with genuine foundation-model sovereignty — widely-used models across the 22 scheduled languages and key low-resource and tribal languages, a respected research output, and deep enterprise adoption across mining, education, healthcare, government, and manufacturing.</p>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>LEADERSHIP</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",color:"#2A1620",margin:"0 0 48px",fontWeight:"600",letterSpacing:"-0.015em"}}>The people behind the work.</h2>
        <div style={{display:"flex",flexWrap:"wrap",gap:"32px",alignItems:"flex-start",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"44px",maxWidth:"840px"}}>
          <div aria-hidden="true" style={{width:"132px",height:"150px",flex:"none",borderRadius:"14px",background:"#F5ECE2",border:"1px solid #EFE6DB",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"40px",color:"#97713E",letterSpacing:".04em"}}>AD</div>
          <div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"27px",color:"#2A1620"}}>Abinash Das</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.2em",color:"#920D54",margin:"6px 0 16px"}}>{"FOUNDER & CEO"}</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0 0 16px",textWrap:"pretty"}}>Abinash Das founded Tanumanasa Research in Odisha with a single conviction — that India should build its own foundation models, in its own languages. He leads the company’s work across Antariksha.ai, applied research and enterprise AI.</p>
            <a className="hv5" href="https://www.linkedin.com/company/tanumanasa/" target="_blank" rel="noopener noreferrer" style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Tanumanasa on LinkedIn →<span className="sr-only">{" (opens in a new tab)"}</span></a>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>WHY WE EXIST</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",color:"#2A1620",margin:"0 0 64px",fontWeight:"600",letterSpacing:"-0.015em",maxWidth:"620px"}}>Four convictions drive everything we build.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"0"}} data-cols="4">
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 32px 4px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"18px",color:"#97713E",marginBottom:"18px"}}>०१</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>Most foundation models are built elsewhere, in other languages, for other contexts — India deserves its own.</p>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 32px 4px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"18px",color:"#97713E",marginBottom:"18px"}}>०२</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>Indian languages, including tribal and low-resource ones, are under-served by current AI.</p>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 32px 4px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"18px",color:"#97713E",marginBottom:"18px"}}>०३</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>Enterprises here need partners fluent in both frontier research and on-the-ground deployment.</p>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 32px 4px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"18px",color:"#97713E",marginBottom:"18px"}}>०४</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>Frugal, efficient model development makes sovereign AI achievable, not aspirational.</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px",flexWrap:"wrap"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"36px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em"}}>Read where this is going.</h2>
        <div style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
          <Link className="hv1" href="/vision" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px"}}>Read the Founder Vision</Link>
          <Link className="hv7" href="/contact?intent=enterprise" style={{border:"1px solid #CEA961",background:"#fff",color:"#55092B",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px"}}>Work with us</Link>
        </div>
      </div>
    </div>
    </>
  );
}
