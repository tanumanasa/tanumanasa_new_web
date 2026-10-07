import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { SITE_URL } from '@/lib/config';

export const metadata = pageMeta({
  title: "Tanumanasa | Building Bharat's Next Foundation Models",
  description: "Deep-tech AI research from Odisha — Antariksha.ai foundation models for India's languages, enterprise AI, and technological independence for India. IndiaAI-backed, AWS Partner.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
    {/* Home page */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"Organization\",\"name\":\"Tanumanasa Research Pvt. Ltd.\",\"description\":\"Deep-tech AI research organisation building foundation models for Indian languages.\",\"address\":{\"@type\":\"PostalAddress\",\"streetAddress\":\"3rd Floor, Tower-A, Odisha Startup Incubation Centre (O-HUB), SEZ Road\",\"addressLocality\":\"Bhubaneswar\",\"postalCode\":\"751024\",\"addressRegion\":\"Odisha\",\"addressCountry\":\"IN\"},\"logo\":\"" + SITE_URL + "/assets/tanumanasa-mark.png\",\"url\":\"" + SITE_URL + "/\",\"sameAs\":[]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"Tanumanasa Research\",\"url\":\"" + SITE_URL + "/\"}" }} />
    <div data-stars="70" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",left:"50%",top:"-340px",transform:"translateX(-50%)",width:"1100px",height:"700px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.9), rgba(245,236,226,0.5) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"8%",top:"120px",width:"260px",height:"260px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.22), rgba(206,169,97,0) 70%)"}}></div>
      <div data-drift="" style={{position:"absolute",right:"6%",top:"360px",width:"320px",height:"320px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(146,13,84,0.10), rgba(146,13,84,0) 70%)",animationDelay:"-9s"}}></div>
      <div data-float="" style={{position:"absolute",left:"50%",top:"96px",marginLeft:"-260px",width:"520px",height:"520px",borderRadius:"50%",border:"1px solid rgba(151,113,62,0.16)"}}></div>
      <div data-spin-rev="" style={{position:"absolute",left:"50%",top:"36px",marginLeft:"-320px",width:"640px",height:"640px",borderRadius:"50%",border:"1px solid rgba(151,113,62,0.10)"}}></div>
      <div data-spin="" style={{position:"absolute",left:"50%",top:"156px",marginLeft:"-200px",width:"400px",height:"400px",borderRadius:"50%",border:"1px dashed rgba(151,113,62,0.25)"}}></div>
      <div data-orbit="" style={{position:"absolute",left:"50%",top:"156px",marginLeft:"-200px",width:"400px",height:"400px",borderRadius:"50%"}}>
        <span style={{position:"absolute",left:"50%",top:"-4px",marginLeft:"-4px",width:"8px",height:"8px",borderRadius:"50%",background:"#CEA961",boxShadow:"0 0 14px 3px rgba(206,169,97,0.55)"}}></span>
      </div>
      <div data-orbit="" style={{position:"absolute",left:"50%",top:"36px",marginLeft:"-320px",width:"640px",height:"640px",borderRadius:"50%",animationDuration:"38s",animationDirection:"reverse"}}>
        <span style={{position:"absolute",left:"50%",top:"-3px",marginLeft:"-3px",width:"6px",height:"6px",borderRadius:"50%",background:"#920D54",boxShadow:"0 0 12px 2px rgba(146,13,84,0.4)"}}></span>
      </div>
      <div data-reveal="" data-hero-scene="" style={{maxWidth:"900px",margin:"0 auto",padding:"130px 32px 96px",position:"relative",textAlign:"center",transformStyle:"preserve-3d",willChange:"transform"}} data-wrap="" data-sec="">
        <div style={{display:"inline-flex",alignItems:"center",gap:"10px",border:"1px solid #E4D3C3",background:"#fff",borderRadius:"999px",padding:"8px 18px",marginBottom:"36px"}}>
          <span data-pulse="" style={{width:"7px",height:"7px",borderRadius:"50%",background:"#920D54"}}></span>
          <span style={{fontFamily:"Manrope,sans-serif",fontSize:"12px",letterSpacing:"0.18em",color:"#97713E"}}>DEEP-TECH AI RESEARCH · FROM ODISHA, FOR BHARAT</span>
        </div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"74px",lineHeight:"1.06",color:"#2A1620",margin:"0 0 30px",fontWeight:"600",letterSpacing:"-0.02em",textWrap:"pretty"}}>Giving form to intelligence. And mind to machines.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"19px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 auto 44px",maxWidth:"600px",textWrap:"pretty"}}>Tanumanasa is a deep-tech company building foundation models for India's languages — toward a technologically independent India.</p>
        <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
          <Link className="hv1" href="/antariksha" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px"}}>Explore Antariksha.ai</Link>
          <Link className="hv2" href="/contact?intent=partnership" style={{border:"1px solid #E4D3C3",background:"#fff",color:"#55092B",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px"}}>Partner with us</Link>
        </div>
      </div>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 32px 72px",position:"relative"}} data-wrap="">
        <div style={{textAlign:"center",fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.24em",color:"#86705B",marginBottom:"8px"}}>OUR SUPPORTERS</div>
        <div style={{textAlign:"center",fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#7A6470",marginBottom:"34px"}}>Trusted within India's AI ecosystem</div>
        <div data-marquee="" style={{overflow:"hidden",maskImage:"linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",WebkitMaskImage:"linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)"}}>
          <div style={{display:"flex",alignItems:"center",gap:"76px",width:"max-content",animation:"ttm-marquee 34s linear infinite"}} role="list" aria-label="Our supporters">
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/indiaai.png" alt="IndiaAI — National AI Mission" width="353" height="160" role="listitem" style={{height:"52px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/stpi.png" alt="STPI" width="289" height="160" role="listitem" style={{height:"58px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/stpinext.png" alt="STPINEXT Initiatives" width="177" height="160" role="listitem" style={{height:"54px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/emtek.png" alt="EmTek CoE Emerging Technologies, Bhubaneswar" width="470" height="160" role="listitem" style={{height:"48px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/startup-odisha.png" alt="Startup Odisha" width="573" height="160" role="listitem" style={{height:"46px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/aic.png" alt="Atal Incubation Centre — Nalanda Institute of Technology Foundation" width="432" height="160" role="listitem" style={{height:"50px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/indiaai.png" alt="" width="353" height="160" style={{height:"52px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/stpi.png" alt="" width="289" height="160" style={{height:"58px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/stpinext.png" alt="" width="177" height="160" style={{height:"54px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/emtek.png" alt="" width="470" height="160" style={{height:"48px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/startup-odisha.png" alt="" width="573" height="160" style={{height:"46px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
            <img className="hv3" loading="lazy" decoding="async" src="/assets/supporters/aic.png" alt="" width="432" height="160" style={{height:"50px",width:"auto",flex:"none",objectFit:"contain",opacity:"0.78",filter:"saturate(0.9)"}} />
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"130px 32px"}} data-wrap="" data-sec="">
        <div data-reveal="" style={{textAlign:"center",maxWidth:"640px",margin:"0 auto 72px"}} data-wrap="">
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"18px"}}>WHAT WE BUILD</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"46px",lineHeight:"1.12",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em"}}>From the lab to the front lines of work</h2>
        </div>
        <div data-reveal="" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}} data-cols="3">
          <div className="hv4" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"44px 38px",display:"flex",flexDirection:"column"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10.5px",letterSpacing:"0.2em",color:"#97713E",marginBottom:"20px"}}>FOUNDATION MODELS</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"28px",color:"#2A1620",marginBottom:"14px"}}>Antariksha.ai</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 28px",flex:"1"}}>Foundation models built for Indian languages — Hindi, Odia, Bengali, Tamil, Telugu, Marathi and beyond — with sovereignty and frugality at the core.</p>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"28px"}}>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",color:"#55092B",background:"#F5ECE2",padding:"5px 12px",borderRadius:"999px"}}>7B–32B</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",color:"#55092B",background:"#F5ECE2",padding:"5px 12px",borderRadius:"999px"}}>22+ languages</span>
            </div>
            <Link className="hv5" href="/antariksha" style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Explore the model →</Link>
          </div>
          <div className="hv4" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"44px 38px",display:"flex",flexDirection:"column"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10.5px",letterSpacing:"0.2em",color:"#97713E",marginBottom:"20px"}}>{"KNOWLEDGE & SEARCH"}</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"28px",color:"#2A1620",marginBottom:"14px"}}>Vichayan AI</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 28px",flex:"1"}}>Ask questions of your own documents and data in natural language, across Indian languages — with sourced, cited answers.</p>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"28px"}}>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",color:"#55092B",background:"#F5ECE2",padding:"5px 12px",borderRadius:"999px"}}>RAG + citations</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",color:"#55092B",background:"#F5ECE2",padding:"5px 12px",borderRadius:"999px"}}>Your data</span>
            </div>
            <Link className="hv5" href="/vichayan" style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>See Vichayan →</Link>
          </div>
          <div className="hv4" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"44px 38px",display:"flex",flexDirection:"column"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10.5px",letterSpacing:"0.2em",color:"#97713E",marginBottom:"20px"}}>AUTOMATION</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"28px",color:"#2A1620",marginBottom:"14px"}}>Enterprise AI Agents</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 28px",flex:"1"}}>Production-grade agents for real workflows — document processing, support, internal knowledge — deployed securely on your cloud.</p>
            <div style={{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"28px"}}>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",color:"#55092B",background:"#F5ECE2",padding:"5px 12px",borderRadius:"999px"}}>Human-in-the-loop</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",color:"#55092B",background:"#F5ECE2",padding:"5px 12px",borderRadius:"999px"}}>AWS</span>
            </div>
            <Link className="hv5" href="/agents" style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>See agents →</Link>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"40px 32px 130px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"96px",alignItems:"center"}} data-cols="2" data-wrap="">
        <div data-reveal="" data-stars="30" style={{position:"relative",height:"440px",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <div data-spin="" style={{position:"absolute",width:"400px",height:"400px",borderRadius:"50%",border:"1px dashed rgba(151,113,62,0.35)"}}></div>
          <div data-spin-rev="" style={{position:"absolute",width:"320px",height:"320px",borderRadius:"50%",border:"1px solid rgba(151,113,62,0.28)"}}></div>
          <div style={{position:"absolute",width:"236px",height:"236px",borderRadius:"50%",border:"1px solid rgba(146,13,84,0.18)"}}></div>
          <div data-orbit="" style={{position:"absolute",width:"320px",height:"320px",borderRadius:"50%",animationDuration:"16s"}}>
            <span style={{position:"absolute",left:"50%",top:"-4px",marginLeft:"-4px",width:"8px",height:"8px",borderRadius:"50%",background:"#CEA961",boxShadow:"0 0 12px 3px rgba(206,169,97,0.5)"}}></span>
          </div>
          <div data-orbit="" style={{position:"absolute",width:"236px",height:"236px",borderRadius:"50%",animationDuration:"26s",animationDirection:"reverse"}}>
            <span style={{position:"absolute",left:"50%",top:"-3px",marginLeft:"-3px",width:"6px",height:"6px",borderRadius:"50%",background:"#920D54",boxShadow:"0 0 10px 2px rgba(146,13,84,0.4)"}}></span>
          </div>
          <img data-float="" src="/assets/logo-340.png" alt="Tanumanasa lotus emblem" width="170" height="170" style={{width:"170px",height:"170px",display:"block",filter:"drop-shadow(0 20px 40px rgba(151,113,62,0.28))"}} />
          <span style={{position:"absolute",top:"26px",left:"50%",transform:"translateX(-50%)",fontFamily:"Manrope,sans-serif",fontSize:"12px",color:"#97713E",background:"#FFFDFB",padding:"4px 12px",border:"1px solid #EFE6DB",borderRadius:"999px"}}>हिन्दी</span>
          <span style={{position:"absolute",bottom:"26px",left:"50%",transform:"translateX(-50%)",fontFamily:"Manrope,sans-serif",fontSize:"12px",color:"#97713E",background:"#FFFDFB",padding:"4px 12px",border:"1px solid #EFE6DB",borderRadius:"999px"}}>ଓଡ଼ିଆ</span>
          <span style={{position:"absolute",left:"34px",top:"50%",transform:"translateY(-50%)",fontFamily:"Manrope,sans-serif",fontSize:"12px",color:"#97713E",background:"#FFFDFB",padding:"4px 12px",border:"1px solid #EFE6DB",borderRadius:"999px"}}>বাংলা</span>
          <span style={{position:"absolute",right:"34px",top:"50%",transform:"translateY(-50%)",fontFamily:"Manrope,sans-serif",fontSize:"12px",color:"#97713E",background:"#FFFDFB",padding:"4px 12px",border:"1px solid #EFE6DB",borderRadius:"999px"}}>தமிழ்</span>
        </div>
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"18px"}}>TANU · MANASA</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"44px",lineHeight:"1.14",color:"#2A1620",margin:"0 0 24px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>A billion people's languages, treated as first-class.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"17px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 18px",textWrap:"pretty"}}>{"The name itself — "}<em style={{color:"#55092B"}}>Tanu</em>{" (body, form) and "}<em style={{color:"#55092B"}}>Manasa</em>{" (mind) — comes from Indian thought: giving form to intelligence, and mind to machines."}</p>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"17px",lineHeight:"1.75",color:"#6B4E5E",margin:"0 0 32px",textWrap:"pretty"}}>That philosophy shapes the work: models built around Indian languages, idioms and knowledge systems rather than translated toward them — from the 22 scheduled languages to the tribal and low-resource ones AI has ignored.</p>
          <Link className="hv5" href="/about" style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Our story →</Link>
        </div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"120px 32px"}} data-wrap="" data-sec="">
        <div data-reveal="" style={{maxWidth:"560px",marginBottom:"80px"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"18px"}}>HOW WE WORK</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"44px",lineHeight:"1.14",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em"}}>One lab. Three disciplines.</h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0"}} data-cols="3">
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"8px 40px 8px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"19px",color:"#97713E",marginBottom:"22px"}}>०१</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"25px",color:"#2A1620",marginBottom:"14px"}}>Research, in the open</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0 0 22px",textWrap:"pretty"}}>Foundation models, agentic systems, multimodal and scientific AI, and AI safety — published as we learn. Frugal, efficient development is our discipline.</p>
            <Link className="hv5" href="/research" style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Read our research →</Link>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"8px 40px 8px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"19px",color:"#97713E",marginBottom:"22px"}}>०२</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"25px",color:"#2A1620",marginBottom:"14px"}}>Technological independence</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0 0 22px",textWrap:"pretty"}}>Models trained, aligned and governed in India — made achievable by cost-efficient development. The goal: an India that builds its own AI rather than importing it.</p>
            <Link className="hv5" href="/vision" style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>The vision →</Link>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"8px 40px 8px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"19px",color:"#97713E",marginBottom:"22px"}}>०३</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"25px",color:"#2A1620",marginBottom:"14px"}}>Research that pays its way</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0 0 22px",textWrap:"pretty"}}>As an AWS Partner we take enterprises from pilot to production — strategy, agents, and cloud infrastructure that holds up in the real world.</p>
            <Link className="hv5" href="/enterprise" style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Enterprise AI →</Link>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderBottom:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"88px 32px",display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"48px",textAlign:"center"}} data-cols="4" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"54px",color:"#55092B",lineHeight:"1"}} data-big="">22+</div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"14px",lineHeight:"1.5",color:"#7A6470",marginTop:"12px"}}>Scheduled languages in our dataset roadmap</div>
        </div>
        <div>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"54px",color:"#55092B",lineHeight:"1"}} data-big="">3</div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"14px",lineHeight:"1.5",color:"#7A6470",marginTop:"12px"}}>Product lines, from models to agents</div>
        </div>
        <div>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"54px",color:"#55092B",lineHeight:"1"}} data-big="">5</div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"14px",lineHeight:"1.5",color:"#7A6470",marginTop:"12px"}}>{"Ecosystem partners across mission & cloud"}</div>
        </div>
        <div>
          <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"54px",color:"#55092B",lineHeight:"1"}} data-big="">Odisha</div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"14px",lineHeight:"1.5",color:"#7A6470",marginTop:"12px"}}>Based at O-HUB, Bhubaneswar</div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"760px",margin:"0 auto",padding:"130px 32px",textAlign:"center"}} data-wrap="" data-sec="">
        <img loading="lazy" decoding="async" src="/assets/logo-340.png" alt="" width="52" height="52" style={{width:"52px",height:"52px",display:"block",margin:"0 auto 30px",opacity:"0.9"}} />
        <blockquote style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"33px",lineHeight:"1.42",color:"#2A1620",margin:"0 0 34px",textWrap:"pretty"}}>"India should not only use the world's AI — it should build its own, in its own languages, on its own terms."</blockquote>
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"600",color:"#55092B"}}>Abinash Das</div>
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.2em",color:"#97713E",margin:"5px 0 34px"}}>{"FOUNDER & CEO"}</div>
        <Link className="hv5" href="/vision" style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>Read the vision →</Link>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"0 32px 130px"}} data-wrap="">
        <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",gap:"24px",marginBottom:"48px",flexWrap:"wrap"}}>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"38px",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em"}}>{"Research & updates"}</h2>
          <Link className="hv5" href="/newsroom" style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>View all →</Link>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"24px"}} data-cols="3">
          <Link className="hv6" href="/newsroom" style={{textDecoration:"none",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 32px",display:"block"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10.5px",letterSpacing:"0.18em",color:"#97713E",marginBottom:"16px"}}>PRESS · JUL 2026</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"21px",lineHeight:"1.35",color:"#2A1620"}}>Antariksha.ai early-access waitlist opens</div>
          </Link>
          <Link className="hv6" href="/newsroom" style={{textDecoration:"none",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 32px",display:"block"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10.5px",letterSpacing:"0.18em",color:"#97713E",marginBottom:"16px"}}>RESEARCH · JUN 2026</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"21px",lineHeight:"1.35",color:"#2A1620"}}>Dataset initiative expands to university partners</div>
          </Link>
          <Link className="hv6" href="/newsroom" style={{textDecoration:"none",background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"34px 32px",display:"block"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"10.5px",letterSpacing:"0.18em",color:"#97713E",marginBottom:"16px"}}>BLOG · MAY 2026</div>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"21px",lineHeight:"1.35",color:"#2A1620"}}>{"Frugal AI as a research discipline, with IIM-K & Cambridge"}</div>
          </Link>
        </div>
      </div>
    </div>

    <div data-stars="50" style={{background:"#F5ECE2",position:"relative",overflow:"hidden"}}>
      <div data-spin="" style={{position:"absolute",left:"50%",top:"50%",margin:"-410px 0 0 -410px",width:"820px",height:"820px",borderRadius:"50%",border:"1px dashed rgba(151,113,62,0.22)"}}></div>
      <div data-spin-rev="" style={{position:"absolute",left:"50%",top:"50%",margin:"-310px 0 0 -310px",width:"620px",height:"620px",borderRadius:"50%",border:"1px solid rgba(151,113,62,0.16)"}}></div>
      <div data-orbit="" style={{position:"absolute",left:"50%",top:"50%",margin:"-310px 0 0 -310px",width:"620px",height:"620px",borderRadius:"50%",animationDuration:"30s"}}>
        <span style={{position:"absolute",left:"50%",top:"-4px",marginLeft:"-4px",width:"8px",height:"8px",borderRadius:"50%",background:"#CEA961",boxShadow:"0 0 14px 3px rgba(206,169,97,0.5)"}}></span>
      </div>
      <div data-drift="" style={{position:"absolute",left:"10%",top:"20%",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-drift="" style={{position:"absolute",right:"8%",bottom:"10%",width:"340px",height:"340px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(146,13,84,0.09), rgba(146,13,84,0) 70%)",animationDelay:"-8s"}}></div>
      <div data-reveal="" style={{maxWidth:"820px",margin:"0 auto",padding:"120px 32px",textAlign:"center",position:"relative"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"48px",lineHeight:"1.14",color:"#2A1620",margin:"0 0 40px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Let's build India's AI future together.</h2>
        <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
          <Link className="hv1" href="/contact?intent=enterprise" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px"}}>Book a consultation</Link>
          <Link className="hv7" href="/careers" style={{border:"1px solid #CEA961",background:"#fff",color:"#55092B",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px"}}>Explore careers</Link>
        </div>
      </div>
    </div>
    </>
  );
}
