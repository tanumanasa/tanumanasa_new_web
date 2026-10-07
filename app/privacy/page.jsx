import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Privacy Policy | Tanumanasa Research",
  description: "How Tanumanasa Research collects, uses, stores and protects personal data submitted through this website, and your rights under India’s Digital Personal Data Protection Act, 2023.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 96px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>LEGAL</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"56px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"860px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Privacy Policy</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0",maxWidth:"660px",textWrap:"pretty"}}>How we handle the information you share with us through this website.</p>
      </div>
    </div>

    <div style={{background:"#FFFDFB",borderTop:"1px solid #EFE6DB"}}>
      <article className="tm-prose">
        <p className="upd">Last updated: 27 September 2026</p>
        <h2>Who we are</h2>
        <p>This website is operated by Tanumanasa Research Pvt. Ltd., 3rd Floor, Tower-A, Odisha Startup Incubation Centre (O-HUB), SEZ Road, Bhubaneswar 751024, Odisha, India (“Tanumanasa”, “we”, “us”).</p>
        <h2>What we collect</h2>
        <ul>
          <li><b>Enquiry forms</b>{" (contact, demo, early access, careers): your name, organisation, email address, optional phone number, the enquiry type and the message you write."}</li>
          <li><b>Newsletter</b>: your email address and the page where you subscribed.</li>
          <li><b>Security data</b>: a one-way hash of your IP address and your browser’s user-agent, used only to prevent spam and abuse.</li>
        </ul>
        <p>We do not use advertising or tracking cookies. A single strictly necessary session cookie protects our forms against forged submissions.</p>
        <h2>Why we use it</h2>
        <ul>
          <li>To respond to your enquiry and route it to the right team.</li>
          <li>To send updates you have subscribed to — you can unsubscribe at any time using the link in every email.</li>
          <li>To keep this website secure and prevent spam.</li>
        </ul>
        <h2>Legal basis</h2>
        <p>We process personal data on the basis of the consent you give when you submit a form, in line with the Digital Personal Data Protection Act, 2023. You may withdraw consent at any time.</p>
        <h2>Storage and retention</h2>
        <p>Enquiries are stored in a secured database accessible only to authorised Tanumanasa staff. We keep enquiries for up to 24 months after our last contact with you, and newsletter records until you unsubscribe, unless a longer period is required by law.</p>
        <h2>Sharing</h2>
        <p>We do not sell personal data. We share it only with service providers who help us operate this website and our email, under confidentiality obligations, or where required by law.</p>
        <h2>Your rights</h2>
        <p>{"You may request access to, correction of, or erasure of your personal data, withdraw consent, or raise a grievance by writing to "}<a href="mailto:hello@tanumanasa.com">hello@tanumanasa.com</a>. We will respond within a reasonable time and in any case as required by law.</p>
        <h2>Children</h2>
        <p>This website is not directed at children, and we do not knowingly collect data from anyone under 18.</p>
        <h2>Changes</h2>
        <p>We may update this policy from time to time. The date at the top of this page shows when it last changed.</p>
      </article>
    </div>
    </>
  );
}
