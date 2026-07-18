import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Restaurant Owner",
    location: "Bengaluru",
    text: "BR30 FoodOS feels like one complete command center for our restaurant. QR orders, kitchen status and billing become much easier to manage.",
    business: "Restaurant",
  },
  {
    name: "Cafe Manager",
    location: "Whitefield",
    text: "The best part is that customers can order directly from the table and our team can track everything live without confusion.",
    business: "Cafe",
  },
  {
    name: "Cloud Kitchen Founder",
    location: "India",
    text: "A system like this can replace multiple tools. Menu, orders, offers, reports and staff workflow in one place is exactly what food businesses need.",
    business: "Cloud Kitchen",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="foodos-container">
        <div className="testimonials-head">
          <span>Restaurant Owner Testimonials</span>
          <h2>Built for owners who want speed, control and clarity.</h2>
          <p>BR30 FoodOS is designed around real food business workflows — from table ordering to kitchen preparation, counter billing and business growth.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="quote-icon">
                <Quote size={22} />
              </div>

              <div className="stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>

              <p>"{item.text}"</p>

              <div className="testimonial-bottom">
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.location}</span>
                </div>

                <small>{item.business}</small>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
.testimonials-section{padding:18px 0 104px;position:relative}.testimonials-head{max-width:820px;margin:0 auto 42px;text-align:center}.testimonials-head span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.testimonials-head h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.testimonials-head p{max-width:760px;margin:18px auto 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}.testimonial-card{position:relative;min-height:360px;padding:24px;border:1px solid var(--border);border-radius:34px;background:linear-gradient(135deg,rgba(0,229,168,.045),rgba(34,199,255,.03)),var(--card);backdrop-filter:blur(22px);box-shadow:var(--shadow-soft);overflow:hidden;transition:all .25s ease}.testimonial-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.13),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.09),transparent 30%);opacity:0;pointer-events:none;transition:opacity .25s ease}.testimonial-card:hover{transform:translateY(-5px);border-color:var(--border-strong)}.testimonial-card:hover::before{opacity:1}.quote-icon,.stars,.testimonial-card p,.testimonial-bottom{position:relative;z-index:1}.quote-icon{width:52px;height:52px;border-radius:18px;display:grid;place-items:center;color:#031015;background:linear-gradient(135deg,var(--primary),var(--secondary));margin-bottom:22px}.stars{display:flex;gap:5px;color:var(--accent);margin-bottom:20px}.testimonial-card p{margin:0;color:var(--text-soft);font-size:17px;line-height:1.75;font-weight:400}.testimonial-bottom{position:absolute;left:24px;right:24px;bottom:24px;display:flex;align-items:center;justify-content:space-between;gap:14px;padding-top:18px;border-top:1px solid var(--border)}.testimonial-bottom strong{display:block;color:var(--text);font-size:16px;font-weight:600;letter-spacing:-.015em}.testimonial-bottom span{display:block;margin-top:4px;color:var(--text-muted);font-size:13px;font-weight:500}.testimonial-bottom small{min-height:34px;padding:0 12px;border-radius:999px;border:1px solid rgba(0,229,168,.18);background:rgba(0,229,168,.07);color:var(--primary);display:inline-flex;align-items:center;font-size:12px;font-weight:600;white-space:nowrap}@media(max-width:980px){.testimonials-grid{grid-template-columns:1fr}.testimonial-card{min-height:310px}}@media(max-width:560px){.testimonials-section{padding:10px 0 70px}.testimonials-head p{font-size:16px}.testimonial-card{border-radius:26px;padding:18px}.testimonial-bottom{position:relative;left:auto;right:auto;bottom:auto;margin-top:26px;align-items:flex-start;flex-direction:column}.testimonial-card{min-height:auto}}
      `}</style>
    </section>
  );
}
