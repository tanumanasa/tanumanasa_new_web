import ContactForm from '@/components/ContactForm';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Vichayan AI | Multilingual Search & Reasoning with Citations | Tanumanasa",
  description: "Vichayan AI is intelligent search and reasoning over your own documents and data, across Indian languages, with every answer tied to its source. Secure deployment in your environment.",
  path: "/vichayan",
});

export default function VichayanPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 96px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>{"VICHAYAN AI · KNOWLEDGE & SEARCH"}</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"56px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"860px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Ask your organisation anything — and see where the answer came from.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 40px",maxWidth:"660px",textWrap:"pretty"}}>Vichayan (विचयन — inquiry, discernment) is intelligent search and reasoning over your own documents and data, across Indian languages, with every answer tied to its source.</p>
        <div style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
          <a href="#demo" className="tm-btn tm-btn-lg">Request a demo</a>
          <a href="#architecture" className="tm-btn tm-btn-ghost tm-btn-lg">How it works</a>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>FEATURES</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 0px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Search that understands, answers that can be checked.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"22px",marginTop:"52px"}} data-cols="3">
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०१</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Multilingual semantic search</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Ask in Hindi, Odia, Bengali, Tamil, Telugu or English and find meaning, not just matching keywords.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०२</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Answers with citations</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Every answer links to the exact passages it came from, so people can verify before they act.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०३</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Reasoning across documents</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Compare circulars, summarise changes over time, and pull facts together from many sources.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०४</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Connects to your sources</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>File shares, document management systems, databases and archives — indexed with their structure intact.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०५</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Access that mirrors yours</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Results respect existing permissions, so people only see what they are already allowed to see.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०६</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Deploys where your data lives</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Runs in your cloud account or on-premises, with no data leaving your environment.</p>
          </div>
        </div>
      </div>
    </div>

    <div id="architecture" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>ARCHITECTURE</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 14px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Retrieval first. Generation second. Citations always.</h2>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",maxWidth:"640px",textWrap:"pretty"}}>Vichayan grounds every response in your own content. If the sources do not support an answer, it says so instead of guessing.</p>
        <ol style={{listStyle:"none",padding:"0",margin:"56px 0 0",display:"grid",gridTemplateColumns:"repeat(5,minmax(0,1fr))",gap:"0"}} data-cols="5">
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>01 · INGEST</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Documents, scans and records are collected from connected sources and kept in sync.</p>
          </li>
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>02 · UNDERSTAND</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>OCR, language detection and Indic-aware chunking and embeddings prepare content for search.</p>
          </li>
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>03 · RETRIEVE</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Hybrid keyword and semantic search finds the most relevant passages, filtered by permissions.</p>
          </li>
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>04 · REASON</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>A language model — Antariksha.ai or your model of choice — composes an answer only from those passages.</p>
          </li>
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>05 · CITE</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Answers link back to sources; unsupported questions are declined rather than invented.</p>
          </li>
        </ol>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>USE CASES</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 0px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Where Vichayan earns its keep.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:"22px",marginTop:"52px"}} data-cols="4">
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०१</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>{"Government & public institutions"}</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Circulars, schemes and records — searchable by staff and citizens in regional languages.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०२</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>{"Mining & heavy industry"}</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Safety regulations, SOPs and incident history, answered in seconds on site.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०३</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>{"Education & research"}</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Institutional knowledge and research archives, discoverable across languages.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०४</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Enterprise operations</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Policies, contracts and support knowledge for faster, consistent answers.</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.1fr",gap:"72px",alignItems:"start"}} data-cols="2">
          <div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>SECURITY</div>
            <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 16px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Your knowledge stays yours.</h2>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",maxWidth:"480px",textWrap:"pretty"}}>Vichayan is built for organisations whose documents cannot leave their control.</p>
          </div>
          <ul style={{listStyle:"none",padding:"0",margin:"0",display:"flex",flexDirection:"column",gap:"14px"}}>
            <li style={{display:"flex",gap:"14px",alignItems:"flex-start",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.6",color:"#4A3540"}}>
              <span aria-hidden="true" style={{flex:"none",width:"22px",height:"22px",borderRadius:"50%",background:"#F3E2EA",color:"#920D54",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"700",marginTop:"1px"}}>✓</span>
              <span>Deployed in your cloud account or on-premises — your data stays in your environment</span>
            </li>
            <li style={{display:"flex",gap:"14px",alignItems:"flex-start",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.6",color:"#4A3540"}}>
              <span aria-hidden="true" style={{flex:"none",width:"22px",height:"22px",borderRadius:"50%",background:"#F3E2EA",color:"#920D54",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"700",marginTop:"1px"}}>✓</span>
              <span>Search results respect existing document permissions and roles</span>
            </li>
            <li style={{display:"flex",gap:"14px",alignItems:"flex-start",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.6",color:"#4A3540"}}>
              <span aria-hidden="true" style={{flex:"none",width:"22px",height:"22px",borderRadius:"50%",background:"#F3E2EA",color:"#920D54",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"700",marginTop:"1px"}}>✓</span>
              <span>Encryption in transit and at rest</span>
            </li>
            <li style={{display:"flex",gap:"14px",alignItems:"flex-start",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.6",color:"#4A3540"}}>
              <span aria-hidden="true" style={{flex:"none",width:"22px",height:"22px",borderRadius:"50%",background:"#F3E2EA",color:"#920D54",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"700",marginTop:"1px"}}>✓</span>
              <span>Query and access audit logs for compliance review</span>
            </li>
            <li style={{display:"flex",gap:"14px",alignItems:"flex-start",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.6",color:"#4A3540"}}>
              <span aria-hidden="true" style={{flex:"none",width:"22px",height:"22px",borderRadius:"50%",background:"#F3E2EA",color:"#920D54",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"700",marginTop:"1px"}}>✓</span>
              <span>Your content is never used to train shared models without explicit written consent</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div id="demo" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>REQUEST A DEMO</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 18px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>See Vichayan on your own documents.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",maxWidth:"520px",textWrap:"pretty"}}>Tell us about your content and languages. We will set up a short demo on a representative sample.</p>
        </div>
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"40px 36px"}} data-formcard="">
          <ContactForm id="vd" intent="demo" detailLabel="Product of interest" detailValue="Vichayan AI" messageLabel="Tell us a little more" buttonLabel="Request a demo" />
        </div>
      </div>
    </div>
    </>
  );
}
