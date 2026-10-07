import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { JOBS } from '@/lib/jobs';

export const metadata = pageMeta({
  title: "Careers | Build India's AI Future at Tanumanasa",
  description: "Join Tanumanasa — open roles, internships and research fellowships building Bharat's next foundation models from Odisha.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 100px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>CAREERS</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"56px",lineHeight:"1.1",color:"#2A1620",margin:"0 0 24px",maxWidth:"820px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Few people get to build the first of anything.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 40px",maxWidth:"640px",textWrap:"pretty"}}>Foundation models are built by small teams with real ownership. Join one — in Odisha, or remote.</p>
        <a className="hv1" href="#roles" style={{background:"#920D54",color:"#fff",fontFamily:"Manrope,sans-serif",fontSize:"15.5px",fontWeight:"600",textDecoration:"none",padding:"15px 32px",borderRadius:"999px",display:"inline-block"}}>View open roles</a>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",alignItems:"start"}} data-cols="2" data-wrap="" data-sec="">
        <div>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>WHY WORK HERE</div>
          <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"38px",lineHeight:"1.18",color:"#2A1620",margin:"0 0 20px",fontWeight:"600",letterSpacing:"-0.015em"}}>A mission you can explain to your grandmother — in Odia.</h2>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",textWrap:"pretty"}}>At Tanumanasa you work on foundation models for a billion people's languages, ship enterprise AI that pays for the research, and help prove that deep-tech can begin in Kendujhar as credibly as in California. Small team. Real ownership.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}} data-cols="2">
          <div style={{background:"#F5ECE2",borderRadius:"12px",padding:"26px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"19px",color:"#2A1620",marginBottom:"6px"}}>Rigour</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",lineHeight:"1.6",color:"#6B4E5E"}}>Honest benchmarks, verified claims, reproducible work.</div>
          </div>
          <div style={{background:"#F5ECE2",borderRadius:"12px",padding:"26px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"19px",color:"#2A1620",marginBottom:"6px"}}>Frugality</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",lineHeight:"1.6",color:"#6B4E5E"}}>Efficiency as a discipline, not a limitation.</div>
          </div>
          <div style={{background:"#F5ECE2",borderRadius:"12px",padding:"26px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"19px",color:"#2A1620",marginBottom:"6px"}}>Impact</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",lineHeight:"1.6",color:"#6B4E5E"}}>Work that reaches languages AI has ignored.</div>
          </div>
          <div style={{background:"#F5ECE2",borderRadius:"12px",padding:"26px"}}>
            <div style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"19px",color:"#2A1620",marginBottom:"6px"}}>Integrity</div>
            <div style={{fontFamily:"Manrope,sans-serif",fontSize:"13.5px",lineHeight:"1.6",color:"#6B4E5E"}}>Responsible AI, ethically sourced data, no shortcuts.</div>
          </div>
        </div>
      </div>
    </div>

    <div id="roles" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#97713E",marginBottom:"16px"}}>OPEN POSITIONS</div>
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 14px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Current openings.</h2>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"16.5px",lineHeight:"1.75",color:"#6B4E5E",margin:"0",maxWidth:"640px",textWrap:"pretty"}}>All roles are based at O-HUB, Bhubaneswar, with remote options where noted. Select a role to see the details.</p>
        <div style={{marginTop:"40px"}}>
          <details className="tm-job" open>
            <summary>
              <span className="ti">
                <b>Research Engineer — Foundation Models</b>
                <span>Pre-training, fine-tuning and evaluation for Indian-language LLMs</span>
              </span>
              <span className="tag">Research · Bhubaneswar / Remote · Full-time</span>
              <span className="plus" aria-hidden="true">+</span>
            </summary>
            <div className="body">
              <div>
                <h4>What you'll do</h4>
                <ul>
                  <li>Run continued pre-training, SFT and preference-tuning experiments on Antariksha.ai models</li>
                  <li>Build evaluation suites for Indian-language understanding, reasoning and translation</li>
                  <li>Improve training and inference efficiency — PEFT, quantisation, distillation</li>
                  <li>Write up results for model cards and technical reports</li>
                </ul>
              </div>
              <div>
                <h4>What you'll bring</h4>
                <ul>
                  <li>Strong Python and PyTorch; hands-on LLM training or fine-tuning</li>
                  <li>Solid grasp of transformer architectures and evaluation methodology</li>
                  <li>Interest in Indian languages — fluency in one or more is a plus</li>
                  <li>Degree in CS/ML or equivalent research experience</li>
                </ul>
              </div>
              <div className="apply">
                <Link className="tm-btn" href={`/careers/${JOBS[0].slug}`}>View role and apply</Link>
                <span style={{fontSize:"13px",color:"#75606C"}}>Include a link to your CV, LinkedIn or portfolio.</span>
              </div>
            </div>
          </details>
          <details className="tm-job">
            <summary>
              <span className="ti">
                <b>Data Engineer — Indian-Language Corpora</b>
                <span>Pipelines for the 22 scheduled plus tribal and low-resource languages</span>
              </span>
              <span className="tag">Data · Bhubaneswar · Full-time</span>
              <span className="plus" aria-hidden="true">+</span>
            </summary>
            <div className="body">
              <div>
                <h4>What you'll do</h4>
                <ul>
                  <li>Design pipelines to collect, clean, deduplicate and document multilingual corpora</li>
                  <li>Work with university partners on ethically sourced, well-documented datasets</li>
                  <li>Build quality filters and language identification for Indic scripts</li>
                  <li>Maintain dataset cards, provenance and licensing records</li>
                </ul>
              </div>
              <div>
                <h4>What you'll bring</h4>
                <ul>
                  <li>Python, SQL and large-scale data processing (Spark, Ray or similar)</li>
                  <li>Experience with text processing, Unicode and multilingual data</li>
                  <li>Care for data ethics, consent and documentation</li>
                  <li>Reading knowledge of an Indian language is a plus</li>
                </ul>
              </div>
              <div className="apply">
                <Link className="tm-btn" href={`/careers/${JOBS[1].slug}`}>View role and apply</Link>
                <span style={{fontSize:"13px",color:"#75606C"}}>Include a link to your CV, LinkedIn or portfolio.</span>
              </div>
            </div>
          </details>
          <details className="tm-job">
            <summary>
              <span className="ti">
                <b>AI Solutions Engineer — Enterprise</b>
                <span>Agents, retrieval pipelines and AWS deployments for enterprise clients</span>
              </span>
              <span className="tag">Enterprise · Bhubaneswar / Remote · Full-time</span>
              <span className="plus" aria-hidden="true">+</span>
            </summary>
            <div className="body">
              <div>
                <h4>What you'll do</h4>
                <ul>
                  <li>Scope use cases with clients and design agent and retrieval architectures</li>
                  <li>Build and deploy solutions on AWS with security and observability</li>
                  <li>Integrate with client systems — documents, CRMs, ticketing, databases</li>
                  <li>Measure outcomes and iterate with humans in the loop</li>
                </ul>
              </div>
              <div>
                <h4>What you'll bring</h4>
                <ul>
                  <li>3+ years building production software in Python or TypeScript</li>
                  <li>Hands-on with LLM APIs, retrieval pipelines and cloud (AWS preferred)</li>
                  <li>Clear communication with technical and non-technical stakeholders</li>
                  <li>Able to work on client sites in Odisha when needed</li>
                </ul>
              </div>
              <div className="apply">
                <Link className="tm-btn" href={`/careers/${JOBS[2].slug}`}>View role and apply</Link>
                <span style={{fontSize:"13px",color:"#75606C"}}>Include a link to your CV, LinkedIn or portfolio.</span>
              </div>
            </div>
          </details>
        </div>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15px",color:"#6B4E5E",margin:"28px 0 0"}}>{"Don't see your role? "}<Link href="/contact?intent=careers" className="tm-link">Send us your profile →</Link></p>
      </div>
    </div>

    <div style={{background:"#FFFDFB"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"22px"}} data-cols="2" data-wrap="" data-sec="">
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"38px 36px"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px"}}>INTERNSHIPS</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0 0 18px"}}>A structured programme: real model work, a named mentor, and a final artefact you can publish. Open to students across India.</p>
          <Link className="hv5" href="/contact?intent=careers" style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>How to apply →</Link>
        </div>
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"38px 36px"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:"0.2em",color:"#920D54",marginBottom:"12px"}}>RESEARCH FELLOWSHIPS</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",lineHeight:"1.7",color:"#6B4E5E",margin:"0 0 18px"}}>For academics and advanced students — tied to the Research Lab and our university collaborations on frugal AI and Indic datasets.</p>
          <Link className="hv5" href="/research" style={{fontFamily:"Manrope,sans-serif",fontSize:"14.5px",fontWeight:"700",color:"#920D54",textDecoration:"none"}}>See the lab →</Link>
        </div>
      </div>
    </div>
    </>
  );
}
