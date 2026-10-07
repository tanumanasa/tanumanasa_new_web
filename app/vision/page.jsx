import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "A Vision for India's AI Future | Abinash Das, Tanumanasa",
  description: "Founder Abinash Das on sovereign AI, Indian-language foundation models, and building world-class AI from Odisha.",
  path: "/vision",
  type: 'article',
});

export default function VisionPage() {
  return (
    <>
    <div data-stars="60" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",left:"50%",top:"-300px",transform:"translateX(-50%)",width:"1000px",height:"640px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.9), rgba(245,236,226,0.5) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-spin="" style={{position:"absolute",left:"50%",top:"120px",marginLeft:"-280px",width:"560px",height:"560px",borderRadius:"50%",border:"1px dashed rgba(151,113,62,0.2)"}}></div>
      <div data-reveal="" style={{maxWidth:"820px",margin:"0 auto",padding:"130px 32px 130px",textAlign:"center",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"28px"}}>FOUNDER VISION · ABINASH DAS</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"60px",lineHeight:"1.1",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>A vision for India's AI future</h1>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"680px",margin:"0 auto",padding:"60px 32px 40px",fontFamily:"Manrope,sans-serif",fontSize:"19px",lineHeight:"1.8",color:"#4A3540"}} data-wrap="" data-sec="">
        <p style={{margin:"0 0 32px",textWrap:"pretty"}}><span style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"78px",lineHeight:"0.8",color:"#920D54",float:"left",margin:"8px 14px 0 0"}} data-big="">I</span>ndia gave the world the zero. There is no reason it cannot give the world its next foundation models — and every reason it should build them in its own languages, on its own terms.</p>
        <p style={{margin:"0 0 32px",textWrap:"pretty"}}>For most of the AI era, we have been consumers of intelligence built elsewhere. The models that increasingly mediate knowledge, commerce and public life were trained on other languages, aligned to other contexts, and governed under other laws. That is not a criticism of those who built them. It is a description of a gap — and gaps this fundamental do not close themselves.</p>
        <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"30px",lineHeight:"1.42",color:"#55092B",borderLeft:"3px solid #CEA961",paddingLeft:"28px",margin:"48px 0",textWrap:"pretty"}}>Technological independence is not isolation. It is the ability to build, understand and govern the intelligence your society runs on.</div>
        <p style={{margin:"0 0 32px",textWrap:"pretty"}}>That is why Tanumanasa builds foundation models for Bharat: models where Hindi, Odia, Bengali, Tamil and the languages of a billion people are first-class citizens, not translation targets. Where the idioms, knowledge systems and realities of India shape the training data rather than appearing in it by accident.</p>
        <p style={{margin:"0 0 32px",textWrap:"pretty"}}>We build from Odisha deliberately. Kendujhar and Bhubaneswar are not the periphery of the technology world — they are proof that the next generation of deep-tech can begin anywhere there is conviction, discipline and talent. The state that carved the Konark wheel can build the machinery of intelligence.</p>
        <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"30px",lineHeight:"1.42",color:"#55092B",borderLeft:"3px solid #CEA961",paddingLeft:"28px",margin:"48px 0",textWrap:"pretty"}}>Frugality is not a constraint we tolerate. It is the discipline that makes sovereign AI achievable.</div>
        <p style={{margin:"0 0 32px",textWrap:"pretty"}}>{"The Indian way in AI, as I see it, is efficient, responsible and plural: models that are affordable at Indian scale, evaluated honestly, deployed with care, and informed by our own intellectual traditions — "}<em>Tanu</em>{", the form; "}<em>Manasa</em>, the mind. Giving form to intelligence, and mind to machines.</p>
        <p style={{margin:"0",textWrap:"pretty"}}>This will take a decade, many partners, and a generation of researchers who choose to build here. If any part of that sounds like you — a policymaker, a scientist, an engineer, a student in a district school asking questions in her own language — this vision has room for you in it.</p>
      </div>
      <div data-reveal="" style={{maxWidth:"680px",margin:"0 auto",padding:"24px 32px 110px"}} data-wrap="">
        <svg width="200" height="56" viewBox="0 0 200 56">
          <path d="M10,40 C30,10 44,44 62,26 C74,15 82,38 100,30 C122,20 132,42 158,24 C170,16 182,30 192,22" fill="none" stroke="#55092B" strokeWidth="1.6" strokeLinecap="round"></path>
        </svg>
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",color:"#55092B",marginTop:"6px"}}>Abinash Das</div>
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.2em",color:"#97713E",marginTop:"3px"}}>{"FOUNDER & CEO · TANUMANASA RESEARCH"}</div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"32px",flexWrap:"wrap"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"36px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em"}}>Build this with us.</h2>
        <div style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
          <Link className="hv1" href="/contact?intent=partnership" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px"}}>Partner with us</Link>
          <Link className="hv7" href="/research" style={{border:"1px solid #CEA961",background:"#fff",color:"#55092B",fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",textDecoration:"none",padding:"14px 28px",borderRadius:"999px"}}>Read our research</Link>
        </div>
      </div>
    </div>
    </>
  );
}
