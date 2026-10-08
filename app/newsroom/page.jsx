import Link from 'next/link';
import CardList from '@/components/CardList';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Newsroom | Tanumanasa Announcements & Press",
  description: "Public announcements, press resources and media contact details from Tanumanasa Research.",
  path: "/newsroom",
});

export default function NewsroomPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px 60px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>NEWSROOM</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"54px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 18px",fontWeight:"600",letterSpacing:"-0.015em"}}>{"News, press & announcements"}</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"17px",color:"#6B4E5E",margin:"0",maxWidth:"560px"}}>Public announcements, press resources and a direct line for journalists.</p>
      </div>
    </div>

    <section data-list="news" aria-label="News and announcements" style={{background:"#FFFDFB"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"10px 32px 100px"}} data-wrap="">
        <CardList kind="news" label="Filter news" categories={["Press Releases"]} showAll={false} />
      </div>
    </section>

    <div id="press-kit" style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"96px 32px"}} data-wrap="" data-sec="">
        <div style={{background:"#fff",border:"1px solid #EFE6DB",borderRadius:"16px",padding:"46px 44px"}}>
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.24em",color:"#920D54",marginBottom:"18px"}}>PRESS KIT</div>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"18px",lineHeight:"1.55",color:"#6B4E5E",margin:"0 0 26px",maxWidth:"680px"}}>Logos, brand guide, founder bio and headshots, and company boilerplate — everything a journalist needs.</p>
          <a href="/tanumanasa-press-kit.zip" download="tanumanasa-press-kit.zip" className="tm-link">Download press kit →</a>
        </div>
      </div>
    </div>
    </>
  );
}
