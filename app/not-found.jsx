import Link from 'next/link';

export const metadata = { title: 'Page not found | Tanumanasa Research', robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <>
      <div data-stars="60" style={{background:"#FFFDFB",position:"relative",overflow:"hidden",minHeight:"62vh",display:"flex",alignItems:"center"}}>
        <div data-reveal="" style={{maxWidth:"760px",margin:"0 auto",padding:"110px 32px",textAlign:"center",position:"relative"}} data-wrap="">
          <img src="/assets/logo-340.png" alt="" width="110" height="110" data-float="" style={{width:"110px",height:"110px",display:"block",margin:"0 auto 26px"}} />
          <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"18px"}}>ERROR 404</div>
          <h1 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"50px",lineHeight:"1.1",color:"#2A1620",margin:"0 0 18px",fontWeight:"600",letterSpacing:"-0.015em"}}>This page drifted out of orbit.</h1>
          <p style={{fontFamily:"Manrope,sans-serif",fontSize:"17px",lineHeight:"1.65",color:"#6B4E5E",margin:"0 0 34px"}}>The link may be outdated or the page may have moved.</p>
          <div style={{display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"}}>
            <Link href="/" className="tm-btn tm-btn-lg">Back to home</Link>
            <Link href="/site-map" className="tm-btn tm-btn-ghost tm-btn-lg">Browse all pages</Link>
          </div>
        </div>
      </div>
    </>
  );
}
