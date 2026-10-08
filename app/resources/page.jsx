import CardList from '@/components/CardList';
import SubscribeForm from '@/components/SubscribeForm';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta({
  title: "Resources | Essays, Product Briefs & AI Guides | Tanumanasa",
  description: "Essays, product briefs, research positions, practical AI guides and public code from Tanumanasa.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
    <div data-stars="50" style={{background:"#FFFDFB",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",right:"-260px",top:"-260px",width:"760px",height:"560px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(243,226,234,0.85), rgba(245,236,226,0.4) 55%, rgba(255,253,251,0) 75%)"}}></div>
      <div data-drift="" style={{position:"absolute",left:"4%",bottom:"-80px",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(closest-side, rgba(206,169,97,0.18), rgba(206,169,97,0) 70%)"}}></div>
      <div data-reveal="" style={{maxWidth:"1280px",margin:"0 auto",padding:"100px 32px 60px",position:"relative"}} data-wrap="" data-sec="">
        <div style={{fontFamily:"Manrope,sans-serif",fontSize:"11.5px",letterSpacing:"0.26em",color:"#97713E",marginBottom:"20px"}}>RESOURCES</div>
        <h1 data-shimmer="" style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"54px",lineHeight:"1.08",color:"#2A1620",margin:"0 0 18px",fontWeight:"600",letterSpacing:"-0.015em"}}>{"Essays, briefs & guides"}</h1>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"17px",color:"#6B4E5E",margin:"0",maxWidth:"600px"}}>A focused collection of essays, product briefs, research positions, practical AI guides and public code.</p>
      </div>
    </div>

    <section data-list="resources" aria-label="Resources" style={{background:"#FFFDFB"}}>
      <div style={{maxWidth:"1280px",margin:"0 auto",padding:"10px 32px 100px"}} data-wrap="">
        <CardList kind="resources" label="Filter resources" categories={["Blog", "Research Report", "Case Study", "White Paper", "AI Guide"]} />
      </div>
    </section>

    <div style={{background:"#F5ECE2"}}>
      <div data-reveal="" style={{maxWidth:"640px",margin:"0 auto",padding:"96px 32px",textAlign:"center"}} data-wrap="" data-sec="">
        <h2 style={{fontFamily:"'Plus Jakarta Sans',sans-serif",fontSize:"40px",lineHeight:"1.16",color:"#2A1620",margin:"0 0 14px",fontWeight:"600",letterSpacing:"-0.015em",textWrap:"pretty"}}>One email a month. Only when we have something to say.</h2>
        <p style={{fontFamily:"Manrope,sans-serif",fontSize:"15.5px",color:"#6B4E5E",margin:"0 0 28px"}}>New essays, product updates and practical guides when we have something useful to share.</p>
        <div style={{maxWidth:"420px",margin:"0 auto",textAlign:"left"}}>
          <SubscribeForm id="res" source="resources" hideLabel />
        </div>
      </div>
    </div>
    </>
  );
}
