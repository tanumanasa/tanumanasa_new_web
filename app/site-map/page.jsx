import Link from 'next/link';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Sitemap | Tanumanasa Research",
  description: "Every page on the Tanumanasa Research website.",
  path: "/site-map",
});

export default function SiteMapPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-110px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"110px 32px 96px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>SITEMAP</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"56px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 24px",maxWidth:"860px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>Every page on tanumanasa.com</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.65",color:"#6B4E5E",margin:"0",maxWidth:"660px",textWrap:"pretty"}}>Find your way around.</p>
      </div>
    </div>

    <section aria-labelledby="find-us-heading"  >
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"22px 12px 20px"}} data-wrap="">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"end",gap:"24px",marginBottom:"24px",flexWrap:"wrap"}}>
          <div>
            <p style={{fontFamily:"Manrope,sans-serif",fontSize:"11px",letterSpacing:".22em",color:"#8A6534",margin:"0 0 12px",fontWeight:"700",textTransform:"uppercase"}}>Find us</p>
            <h2 id="find-us-heading" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"32px",lineHeight:"1.15",color:"#2A1620",margin:"0",fontWeight:"600"}}>Tanumanasa Research, Bhubaneswar</h2>
          </div>
          <a href="https://maps.app.goo.gl/LJAXhUh7M99s8jXv8" target="_blank" rel="noopener noreferrer" className="tm-link" style={{fontSize:"15.5px"}}>Open in Google Maps <span aria-hidden="true">↗</span></a>
        </div>
         
      </div>
    </section>
 
    </>
  );
}
