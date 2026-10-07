import ContactForm from '@/components/ContactForm';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Antariksha.ai | Foundation Models for India's Languages",
  description: "Antariksha.ai is a domain-specific foundation model family for Indian languages — language coverage, research direction, roadmap and early access.",
  path: "/antariksha",
});

export default function AntarikshaPage() {
  return (
    <>
    <div data-stars="60" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",left:"50%",top:"-320px",transform:"translateX(-50%)",width:"1100px",height:"680px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.9), rgba(245,236,226,0.5) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <svg viewBox="0 0 1440 200" style={{position:"absolute",left:"0",right:"0",bottom:"0",width:"100%",opacity:"0.6"}} preserveAspectRatio="none">
        <path d="M0,190 L180,90 L320,150 L520,34 L720,132 L940,58 L1140,124 L1300,76 L1440,116" fill="none" stroke="#CEA961" strokeWidth="1.5"></path>
        <path d="M0,196 L200,140 L400,176 L620,96 L860,168 L1080,120 L1440,150" fill="none" stroke="#CEA961" strokeWidth="1" opacity="0.4"></path>
      </svg>
      <div data-reveal="" style={{maxWidth:"900px",margin:"0 auto",padding:"120px 32px 150px",position:"relative",textAlign:"center"}} data-wrap="" data-sec="">
        <div style={{display:"inline-flex",alignItems:"center",gap:"10px",border:"1px solid #E4D3C3",background:"#fff",borderRadius:"999px",padding:"8px 18px",marginBottom:"34px"}}>
          <span data-pulse="" style={{width:"7px",height:"7px",borderRadius:"50%",background:"#920D54"}}></span>
          <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.18em",color:"#97713E"}}>FLAGSHIP FOUNDATION MODEL FAMILY</span>
        </div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"80px",lineHeight:"1.02",color:"#2A1620",margin:"0 0 26px",fontWeight:"600",letterSpacing:"-0.015em"}}>Antariksha.ai</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"19px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 auto 42px",maxWidth:"620px",textWrap:"pretty"}}>A foundation model family built for Indian languages — with the reasoning depth, efficiency, and sovereignty India's future demands.</p>
        <div style={{display:"flex",gap:"14px",justifyContent:"center",flexWrap:"wrap"}}>
          <a className="hv1" href="#early-access" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px"}}>Request early access</a>
          <a className="hv2" href="https://huggingface.co/tanumanasa" target="_blank" rel="noopener noreferrer" style={{border:"1px solid #E4D3C3",background:"#fff",color:"#55092B",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px"}}>Follow on Hugging Face<span className="sr-only">{" (opens in a new tab)"}</span></a>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:"88px"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>WHAT IS ANTARIKSHA.AI?</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Indian languages as first-class citizens, not an afterthought.</h2>
        </div>
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"17px",lineHeight:"1.75",color:"#6B4E5E"}}>
          <p style={{margin:"0",textWrap:"pretty"}}>Antariksha.ai is a domain-specific foundation model family developed by Tanumanasa, focused on India's languages — including Hindi, Odia, Bengali, Tamil, Telugu, Marathi and others. Rather than treating Indian languages as an afterthought, Antariksha.ai is built around them: continued pre-training on Indian-language corpora, instruction tuning, and alignment for the contexts where it will actually be used.</p>
        </div>
      </div>
    </div>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",color:"#2A1620",margin:"0 0 56px",fontWeight:"600",letterSpacing:"-0.015em",maxWidth:"620px",textWrap:"pretty"}}>Why India needs its own foundation model</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"22px"}} data-cols="4">
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"20px",color:"#2A1620",marginBottom:"12px"}}>Linguistic coverage</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Global models under-serve Indian languages, especially low-resource and tribal ones.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"20px",color:"#2A1620",marginBottom:"12px"}}>Sovereignty</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Critical infrastructure should not depend entirely on models built and governed elsewhere.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"20px",color:"#2A1620",marginBottom:"12px"}}>Contextual fidelity</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Indian knowledge, idioms and use-cases need models trained on them.</p>
          </div>
          <div className="hv6" style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"20px",color:"#2A1620",marginBottom:"12px"}}>{"Cost & efficiency"}</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Frugal model development makes capable AI affordable at Indian scale.</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1.3fr",gap:"80px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>MODEL DEVELOPMENT</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 20px",fontWeight:"600",letterSpacing:"-0.015em"}}>Research led by Indian-language needs.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>Antariksha.ai development focuses on high-quality Indian-language data, instruction following, responsible evaluation and practical deployment. Model architecture and release specifications will be published with each verified model release.</p>
        </div>
        <div style={{border:"1px solid #EFE6DB",borderRadius:"16px",overflow:"hidden",background:"#fff"}}>
          <div style={{background:"#F5ECE2",padding:"16px 26px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid #EFE6DB"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.18em",color:"#97713E"}}>RESEARCH FOCUS · ANTARIKSHA.AI</span>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"180px 1fr",fontFamily:"Manrope,sans-serif",fontSize:"15px"}} data-cols="2">
            <div style={{padding:"16px 26px",borderBottom:"1px solid #EFE6DB",fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.1em",color:"#97713E"}}>DATA</div>
            <div style={{padding:"16px 26px",borderBottom:"1px solid #EFE6DB",color:"#2A1620"}}>Indian-language corpora and representative, documented datasets</div>
            <div style={{padding:"16px 26px",borderBottom:"1px solid #EFE6DB",fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.1em",color:"#97713E"}}>QUALITY</div>
            <div style={{padding:"16px 26px",borderBottom:"1px solid #EFE6DB",color:"#2A1620"}}>Language quality, instruction following and responsible evaluation</div>
            <div style={{padding:"16px 26px",fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.1em",color:"#97713E"}}>RELEASES</div>
            <div style={{padding:"16px 26px",color:"#2A1620"}}>Verified specifications and results published with each model release</div>
          </div>
        </div>
      </div>
    </div>

    <div id="languages" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>LANGUAGES</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 14px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Built for India's languages — in phases.</h2>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",maxWidth:"640px",textWrap:"pretty"}}>The currently supported languages are listed separately from languages planned for later phases. Coverage is updated with each verified model release.</p>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"22px",marginTop:"44px"}} data-cols="2">
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 30px"}}>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",color:"#2A1620",margin:"0 0 6px"}}>Currently supported</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14px",color:"#75606C",margin:"0 0 20px"}}>Available in the current Antariksha.ai release</p>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#55092B",background:"#fff",border:"1.5px solid #CEA961",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Hindi · हिन्दी</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#55092B",background:"#fff",border:"1.5px solid #CEA961",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Odia · ଓଡ଼ିଆ</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#55092B",background:"#fff",border:"1.5px solid #CEA961",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Bengali · বাংলা</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#55092B",background:"#fff",border:"1.5px solid #CEA961",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Tamil · தமிழ்</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#55092B",background:"#fff",border:"1.5px solid #CEA961",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Telugu · తెలుగు</span>
            </div>
          </div>
          <div style={{background:"rgba(255,255,255,0.6)",border:"1px dashed #C9B49A",borderRadius:"16px",padding:"32px 30px"}}>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",color:"#2A1620",margin:"0 0 6px"}}>Roadmap</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14px",color:"#75606C",margin:"0 0 20px"}}>Planned for later releases</p>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#6B4E5E",background:"#fff",border:"1px dashed #C9B49A",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Marathi · मराठी</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#6B4E5E",background:"#fff",border:"1px dashed #C9B49A",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Gujarati · ગુજરાતી</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#6B4E5E",background:"#fff",border:"1px dashed #C9B49A",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Kannada · ಕನ್ನಡ</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#6B4E5E",background:"#fff",border:"1px dashed #C9B49A",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Malayalam · മലയാളം</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#6B4E5E",background:"#fff",border:"1px dashed #C9B49A",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Punjabi · ਪੰਜਾਬੀ</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#6B4E5E",background:"#fff",border:"1px dashed #C9B49A",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Assamese · অসমীয়া</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#6B4E5E",background:"#fff",border:"1px dashed #C9B49A",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>Santali · ᱥᱟᱱᱛᱟᱲᱤ</span>
              <span style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#6B4E5E",background:"#fff",border:"1px dashed #C9B49A",padding:"9px 18px",borderRadius:"999px",fontWeight:"600"}}>{"+ other scheduled & tribal languages"}</span>
            </div>
          </div>
        </div>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",color:"#75606C",margin:"20px 0 0"}}>Availability of each language is confirmed in the model card at release.</p>
      </div>
    </div>

    <div id="training" style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>TRAINING VISION</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"38px",lineHeight:"1.18",color:"#2A1620",margin:"0 0 20px",fontWeight:"600",letterSpacing:"-0.015em"}}>Data India can trust.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>Our dataset initiative catalogues existing corpora and creates new, high-quality data across India's 22 scheduled languages plus tribal and low-resource languages, in partnership with universities. The goal is not just more data, but representative, ethically-sourced, well-documented data — the foundation of a model India can trust.</p>
        </div>
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>EVALUATION</div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 30px"}}>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"21px",color:"#2A1620",margin:"0 0 14px"}}>How we will report results</h3>
            <ul style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.8",color:"#6B4E5E",margin:"0 0 16px",paddingLeft:"20px"}}>
              <li>Indian-language understanding</li>
              <li>Reasoning in Indian contexts</li>
              <li>Translation quality</li>
              <li>Safety and bias evaluations</li>
            </ul>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0 0 18px"}}>Evaluation results are published with the methodology, baselines and reproducible settings for the relevant model release.</p>
            <a href="https://huggingface.co/tanumanasa" target="_blank" rel="noopener noreferrer" className="tm-link">Follow releases on Hugging Face →<span className="sr-only">{" (opens in a new tab)"}</span></a>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>ROADMAP</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",color:"#2A1620",margin:"0 0 64px",fontWeight:"600",letterSpacing:"-0.015em"}}>Three phases to sovereignty.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"0"}} data-cols="3">
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 40px 4px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"44px",color:"#CEA961",lineHeight:"1"}} data-big="">I</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",margin:"16px 0 12px"}}>PHASE 1 · NOW</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>Core Indian languages, base + instruct models, early access.</p>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 40px 4px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"44px",color:"#CEA961",lineHeight:"1"}} data-big="">II</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",margin:"16px 0 12px"}}>PHASE 2</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>Expansion toward 22 scheduled languages, multimodal exploration.</p>
          </div>
          <div style={{borderLeft:"1px solid #E4D3C3",padding:"4px 40px 4px 32px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"44px",color:"#CEA961",lineHeight:"1"}} data-big="">III</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",margin:"16px 0 12px"}}>PHASE 3</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>{"Tribal & low-resource coverage, domain variants, broader availability."}</p>
          </div>
        </div>
      </div>
    </div>

    <div id="early-access" style={{background:"#F5ECE2",position:"relative",overflow:"hidden"}}>
      <div data-spin="" style={{position:"absolute",right:"-160px",top:"-160px",width:"520px",height:"520px",borderRadius:"50%",border:"1px dashed rgba(151,113,62,0.24)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"center",position:"relative"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>EARLY ACCESS</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"44px",lineHeight:"1.14",color:"#2A1620",margin:"0 0 18px",fontWeight:"600",letterSpacing:"-0.015em"}}>Build with Antariksha.ai first.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>Join the waitlist for early model and API access. We'll confirm by email and respond as cohorts open.</p>
        </div>
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"40px 36px"}} data-formcard="">
          <ContactForm id="ea" intent="early-access" detailLabel="Language(s) of interest" detailPlaceholder="e.g. Odia, Hindi" messageLabel="Your use case" buttonLabel="Request early access" />
        </div>
      </div>
    </div>
    </>
  );
}
