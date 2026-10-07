import ContactSwitcher from '@/components/ContactSwitcher';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Contact Tanumanasa | Partnership, Enterprise & Media",
  description: "Get in touch with Tanumanasa Research — government partnership, research collaboration, enterprise AI, startup support and media enquiries.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px 80px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>CONTACT / COLLABORATE</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"54px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 18px",maxWidth:"760px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Tell us who you are. We'll route you right.</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"17px",color:"#6B4E5E",margin:"0",maxWidth:"600px"}}>Each enquiry type reaches the right person directly — no shared inbox black hole.</p>
      </div>
    </div>

    <ContactSwitcher />
    </>
  );
}
