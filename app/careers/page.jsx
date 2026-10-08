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
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 14px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Current Openings</h2>
         <div style={{marginTop:"40px"}}>
          <details className="tm-job">
            <summary>
              <span className="ti">
                <b>Indigenous Language &amp; AI Data Contributor</b>
                <span>Native-language contribution to AI and language technology datasets</span>
              </span>
              <span className="tag">Data · On-site / Hybrid · Internship / Contributor</span>
              <span className="details-label">View Details</span>
            </summary>
            <div className="body">
              <div style={{gridColumn:"1/-1"}}>
                <p>Tanumanasa Research Pvt. Ltd. is looking for passionate <b>native speakers of indigenous and tribal languages</b> from Assam, Arunachal Pradesh, Manipur, and Sikkim to contribute to an exciting <b>AI and Language Technology project.</b></p>
                <p>The role is ideal for individuals who have strong command of their native language and a good understanding of its vocabulary, cultural context, and everyday usage. You will contribute to the development of language datasets that help improve <b>AI/LLM systems' ability to understand and process India's diverse and underrepresented languages.</b></p>
                <p>We welcome <b>students, freshers, language enthusiasts, and working professionals</b> with 0–2 years of relevant experience.</p>
                <h4>Languages of interest</h4>
                <p>We are particularly looking for native speakers of languages such as:</p>
                <ul>
                  <li><b>Mising</b> — Assam</li>
                  <li><b>Wancho</b> — Arunachal Pradesh</li>
                  <li><b>Tangkhul</b> — Manipur</li>
                  <li><b>Lepcha</b> — Sikkim</li>
                </ul>
                <p>Candidates proficient in other indigenous or tribal languages from these regions are also encouraged to apply.</p>
                <p><b>Location:</b> On-site / Hybrid<br /><b>Experience:</b> 0–2 Years<br /><b>Engagement Type:</b> Internship / Contributor Opportunity</p>
              </div>
              <div>
                <h4>What you'll do</h4>
                <ul>
                  <li>Contribute language data and linguistic knowledge for AI and language technology projects</li>
                  <li>Document vocabulary, cultural context and everyday usage in your native language</li>
                  <li>Support datasets for indigenous and tribal languages</li>
                  <li>Help improve AI and LLM systems' understanding of diverse Indian languages</li>
                </ul>
              </div>
              <div>
                <h4>What you'll bring</h4>
                <ul>
                  <li>Native-speaker proficiency in an indigenous or tribal language</li>
                  <li>Strong command of vocabulary, cultural context and everyday usage</li>
                  <li>Students, freshers, language enthusiasts and working professionals are welcome</li>
                  <li>0–2 years of relevant experience</li>
                </ul>
              </div>
              <div className="apply">
                <Link className="tm-btn" href={`https://docs.google.com/forms/d/1sfu4i5yhuDAtO_hrnw-JYcaobku84Dq6Afft4EGW_FQ/viewform?ts=6ac78d30&edit_requested=true`}>Apply</Link>
                <span style={{fontSize:"13px",color:"#75606C"}}>Include a link to your CV, LinkedIn or portfolio.</span>
              </div>
            </div>
          </details>
          <details className="tm-job">
            <summary>
              <span className="ti">
                <b>AI/LLM Data Curation Intern</b>
                <span>Multilingual dataset curation for foundation models</span>
              </span>
              <span className="tag">Data · On-site / Hybrid · Internship / Contributor</span>
              <span className="details-label">View Details</span>
            </summary>
            <div className="body">
              <div style={{gridColumn:"1/-1"}}>
                <p><b>Tanumanasa Research Pvt. Ltd.</b> is building a multilingual, multimodal Large Language Model (LLM) designed to support all 22 scheduled Indian languages.</p>
                <p>We are looking for detail-oriented and technically curious individuals to join our team as AI/LLM Data Curation Interns. In this role, you will work with large-scale multilingual datasets that directly contribute to the training and improvement of our flagship AI models.</p>
                <p>You will gain hands-on experience in data cleaning, preprocessing, deduplication, language and script validation, PII removal, quality control, and data pipeline development across multiple Indian languages and scripts.</p>
                <p>We are looking for someone who is <b>curious, detail-oriented, technically inclined, and passionate about AI and language technology.</b> You should be comfortable working with large datasets, willing to learn new tools, and capable of maintaining a high level of accuracy while handling repetitive data-quality tasks.</p>
                <p><b>Location:</b> On-site / Hybrid<br /><b>Experience:</b> 0–2 Years<br /><b>Engagement Type:</b> Internship / Contributor Opportunity</p>
              </div>
              <div>
                <h4>What you'll do</h4>
                <ul>
                  <li>Work with large-scale multilingual datasets supporting foundation model training</li>
                  <li>Clean, preprocess and deduplicate data across Indian languages and scripts</li>
                  <li>Perform language and script validation, PII removal and quality control</li>
                  <li>Support data pipeline development and maintain high-quality dataset records</li>
                </ul>
              </div>
              <div>
                <h4>What you'll bring</h4>
                <ul>
                  <li>Curiosity, attention to detail and a passion for AI and language technology</li>
                  <li>Comfort working with large datasets and repetitive data-quality tasks</li>
                  <li>Willingness to learn new tools while maintaining high accuracy</li>
                  <li>0–2 years of relevant experience</li>
                </ul>
              </div>
              <div className="apply">
                <Link className="tm-btn" href="https://docs.google.com/forms/d/1sfu4i5yhuDAtO_hrnw-JYcaobku84Dq6Afft4EGW_FQ/viewform?ts=6ac78d30&edit_requested=true">Apply</Link>
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
