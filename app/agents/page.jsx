import ContactForm from '@/components/ContactForm';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Enterprise AI Agents | Production Agents with Human Oversight | Tanumanasa",
  description: "Production-grade AI agents for document processing, multilingual customer support, internal knowledge and process automation — deployed securely on your cloud with humans in the loop.",
  path: "/agents",
});

export default function AgentsPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 96px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>ENTERPRISE AI AGENTS</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"56px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"860px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Agents that do the work — with people in control.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 40px",maxWidth:"660px",textWrap:"pretty"}}>Production-grade autonomous and assistive agents for document processing, customer support, internal knowledge and process automation, deployed securely on your cloud.</p>
        <div style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
          <a href="#demo" className="tm-btn tm-btn-lg">Request a demo</a>
          <a href="#workflow" className="tm-btn tm-btn-ghost tm-btn-lg">How agents work</a>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>CAPABILITIES</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 0px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Built for real workflows, not demos.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"22px",marginTop:"52px"}} data-cols="3">
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०१</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Document processing</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Extract, classify, validate and file invoices, forms, contracts and reports — including scanned and regional-language documents.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०२</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Multilingual customer support</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Resolve routine requests in the customer’s language and escalate the rest with full context.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०३</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Internal knowledge assistant</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Answer employee questions from policies, manuals and systems, with sources.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०४</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Process automation</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Coordinate multi-step tasks across systems — approvals, updates, notifications.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०५</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>{"Tool & API use"}</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Agents act through your existing systems with scoped, auditable permissions.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०६</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Human-in-the-loop</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Configurable approval points for anything sensitive, costly or irreversible.</p>
          </div>
        </div>
      </div>
    </div>

    <div id="workflow" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>WORKFLOW</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 14px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Every action planned, checked and recorded.</h2>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",maxWidth:"640px",textWrap:"pretty"}}>Agents follow a clear loop, with guardrails at each step and a person in charge of anything that matters.</p>
        <ol style={{listStyle:"none",padding:"0",margin:"56px 0 0",display:"grid",gridTemplateColumns:"repeat(6,minmax(0,1fr))",gap:"0"}} data-cols="6">
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>01 · TRIGGER</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>An email, ticket, upload, schedule or API call starts the task.</p>
          </li>
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>02 · PLAN</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>The agent breaks the goal into steps using your business rules.</p>
          </li>
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>03 · ACT</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>It uses approved tools — read a document, query a system, draft a reply.</p>
          </li>
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>04 · CHECK</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Policies, validations and confidence thresholds are applied before anything is committed.</p>
          </li>
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>05 · HAND OFF</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Sensitive steps go to a person for approval; routine ones complete automatically.</p>
          </li>
          <li style={{borderLeft:"1px solid #E4D3C3",padding:"4px 24px 4px 22px"}}>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px",fontWeight:"700"}}>06 · IMPROVE</div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Every run is logged and reviewed, so accuracy and coverage grow over time.</p>
          </li>
        </ol>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{display:"grid",gridTemplateColumns:"1fr 1.2fr",gap:"72px",alignItems:"start"}} data-cols="2">
          <div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>INTEGRATIONS</div>
            <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 16px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Works with the systems you already run.</h2>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",maxWidth:"480px",textWrap:"pretty"}}>Agents connect through standard APIs and connectors. We scope each integration with your IT team and grant only the access a task needs.</p>
          </div>
          <div style={{display:"flex",gap:"10px",flexWrap:"wrap",alignContent:"flex-start"}}>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#55092B",background:"#fff",border:"1px solid #E4D3C3",padding:"10px 18px",borderRadius:"999px",fontWeight:"600"}}>{"Email & calendars"}</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#55092B",background:"#fff",border:"1px solid #E4D3C3",padding:"10px 18px",borderRadius:"999px",fontWeight:"600"}}>CRM</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#55092B",background:"#fff",border:"1px solid #E4D3C3",padding:"10px 18px",borderRadius:"999px",fontWeight:"600"}}>ERP</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#55092B",background:"#fff",border:"1px solid #E4D3C3",padding:"10px 18px",borderRadius:"999px",fontWeight:"600"}}>{"Helpdesk & ticketing"}</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#55092B",background:"#fff",border:"1px solid #E4D3C3",padding:"10px 18px",borderRadius:"999px",fontWeight:"600"}}>Document management</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#55092B",background:"#fff",border:"1px solid #E4D3C3",padding:"10px 18px",borderRadius:"999px",fontWeight:"600"}}>{"Databases & data warehouses"}</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#55092B",background:"#fff",border:"1px solid #E4D3C3",padding:"10px 18px",borderRadius:"999px",fontWeight:"600"}}>{"WhatsApp & web chat"}</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#55092B",background:"#fff",border:"1px solid #E4D3C3",padding:"10px 18px",borderRadius:"999px",fontWeight:"600"}}>Custom REST APIs</span>
            <span style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",color:"#55092B",background:"#fff",border:"1px solid #E4D3C3",padding:"10px 18px",borderRadius:"999px",fontWeight:"600"}}>Single sign-on</span>
          </div>
        </div>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>DEPLOYMENT</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 0px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Deployed where you need it.</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:"22px",marginTop:"52px"}} data-cols="3">
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०१</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Your AWS account</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>Deployed into your own cloud with your security controls — our default as an AWS Partner.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०२</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Private cloud or on-premises</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>For regulated or air-gapped environments where data cannot leave your network.</p>
          </div>
          <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"32px 28px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"16px",color:"#97713E",marginBottom:"16px"}}>०३</div>
            <h3 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:"600",fontSize:"20px",lineHeight:"1.3",color:"#2A1620",margin:"0 0 10px"}}>Managed by Tanumanasa</h3>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",lineHeight:"1.65",color:"#6B4E5E",margin:"0"}}>We operate, monitor and improve the agents for you, under an agreed service level.</p>
          </div>
        </div>
        <div style={{marginTop:"36px",background:"#F3E2EA",borderRadius:"16px",padding:"28px 30px",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#55092B"}}><b>Observability built in:</b>{" every agent action is logged and replayable, with accuracy, cost and latency tracked per workflow."}</div>
      </div>
    </div>

    <div id="demo" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"72px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>REQUEST A DEMO</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 18px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Start with one workflow.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",maxWidth:"520px",textWrap:"pretty"}}>Tell us which process costs your team the most time. We will scope a pilot agent and show you what it can take on.</p>
        </div>
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"40px 36px"}} data-formcard="">
          <ContactForm id="ad" intent="demo" detailLabel="Product of interest" detailValue="Enterprise AI Agents" messageLabel="Tell us a little more" buttonLabel="Request a demo" />
        </div>
      </div>
    </div>
    </>
  );
}
