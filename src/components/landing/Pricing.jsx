import { ArrowRight, CheckCircle2, Crown, ShieldCheck, Sparkles, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import SITE_CONFIG from "../../config/siteConfig";

const includedFeatures = ["14-Day Full FoodOS Access", "30 AI Credits in Free Trial", "Unlimited Digital Menu", "Unlimited QR Tables", "Unlimited Orders", "Kitchen Display System", "Counter Billing & Receipts", "Offers & Coupons", "Reports & Analytics", "Staff Role Access", "Live Notifications", "Secure Cloud Access", "All Future Core Updates"];

export default function Pricing() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="foodos-container">
        <div className="pricing-head">
          <span>Simple Pricing</span>
          <h2>One plan. Every feature. AI credits included.</h2>
          <p>Start with a 14-day full FoodOS free trial and 30 AI credits. Paid plans include monthly or yearly AI credits, so AI usage stays transparent and controlled.</p>
        </div>

        <div className="pricing-layout">
          <div className="pricing-card monthly">
            <div className="plan-badge">
              <Crown size={17} />
              BR30 FoodOS Pro
            </div>

            <h3>Monthly Plan</h3>

            <div className="price">
              <span>{SITE_CONFIG.pricing.currency}</span>
              {SITE_CONFIG.pricing.monthly.toLocaleString("en-IN")}
              <small>/month</small>
            </div>

            <p>Best for food businesses that want full FoodOS access with ordering, kitchen, billing, analytics and AI-powered productivity.</p>

            <div className="ai-credit-box">
              <Bot size={18} />
              <strong>1,000 AI Credits / month</strong>
            </div>

            <Link className="price-btn" to="/register">
              Start 14-Day Free Trial
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="pricing-card yearly">
            <div className="save-badge">
              <Sparkles size={16} />
              Save {SITE_CONFIG.pricing.yearlyDiscount}%
            </div>

            <h3>Yearly Plan</h3>

            <div className="price">
              <span>{SITE_CONFIG.pricing.currency}</span>
              {SITE_CONFIG.pricing.yearly.toLocaleString("en-IN")}
              <small>/year</small>
            </div>

            <p>Best value for growing restaurants, cafes, cloud kitchens and food brands that want long-term stability and extra AI credits.</p>

            <div className="ai-credit-box highlight">
              <Bot size={18} />
              <strong>15,000 AI Credits / year</strong>
            </div>

            <Link className="price-btn highlight" to="/register">
              Choose Yearly Plan
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="included-card">
            <div className="included-top">
              <ShieldCheck size={22} />
              <div>
                <span>Everything Included</span>
                <strong>No feature locking</strong>
              </div>
            </div>

            <div className="included-grid">
              {includedFeatures.map((feature) => (
                <div className="included-item" key={feature}>
                  <CheckCircle2 size={16} />
                  {feature}
                </div>
              ))}
            </div>

            <div className="ai-note">
              <Bot size={18} />
              <p>
                <strong>AI Credits Policy:</strong> Free trial includes 30 AI credits. Monthly plan includes 1,000 AI credits per month. Yearly plan includes 15,000 AI credits per year. Extra AI credit packs can be added later when needed.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
.pricing-section{padding:18px 0 104px;position:relative}.pricing-head{max-width:860px;margin:0 auto 42px;text-align:center}.pricing-head span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.pricing-head h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.pricing-head p{max-width:790px;margin:18px auto 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.pricing-layout{display:grid;grid-template-columns:1fr 1fr;gap:16px}.pricing-card,.included-card{position:relative;border:1px solid var(--border);border-radius:34px;background:linear-gradient(135deg,rgba(0,229,168,.045),rgba(34,199,255,.03)),var(--card);backdrop-filter:blur(22px);box-shadow:var(--shadow-soft);overflow:hidden}.pricing-card::before,.included-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.13),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.09),transparent 30%);pointer-events:none}.pricing-card{padding:28px}.pricing-card.yearly{border-color:rgba(0,229,168,.28)}.plan-badge,.save-badge{position:relative;z-index:1;width:max-content;min-height:38px;padding:0 13px;border-radius:999px;border:1px solid rgba(0,229,168,.2);background:rgba(0,229,168,.08);color:var(--primary);display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:600}.save-badge{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;border-color:transparent}.pricing-card h3{position:relative;z-index:1;margin:28px 0 12px;color:var(--text);font-size:28px;font-weight:700;letter-spacing:-.035em}.price{position:relative;z-index:1;display:flex;align-items:flex-end;gap:4px;color:var(--text);font-size:58px;line-height:1;font-weight:700;letter-spacing:-.055em}.price span{font-size:26px;margin-bottom:8px;color:var(--text-soft)}.price small{font-size:15px;font-weight:500;letter-spacing:-.01em;color:var(--text-muted);margin:0 0 8px 4px}.pricing-card p{position:relative;z-index:1;max-width:520px;margin:18px 0 18px;color:var(--text-soft);font-size:16px;line-height:1.7;font-weight:400}.ai-credit-box{position:relative;z-index:1;min-height:48px;margin:0 0 22px;padding:0 16px;border-radius:16px;border:1px solid rgba(0,229,168,.22);background:rgba(0,229,168,.08);color:var(--primary);display:flex;align-items:center;gap:10px;font-size:14px}.ai-credit-box.highlight{background:linear-gradient(135deg,rgba(0,229,168,.14),rgba(34,199,255,.1));border-color:rgba(34,199,255,.24)}.price-btn{position:relative;z-index:1;width:100%;min-height:52px;border-radius:999px;border:1px solid var(--border-strong);background:var(--surface);color:var(--text);display:inline-flex;align-items:center;justify-content:center;gap:10px;font-size:15px;font-weight:600;transition:all .25s ease}.price-btn.highlight,.price-btn:hover{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;border-color:transparent;box-shadow:var(--shadow-glow);transform:translateY(-2px)}.included-card{grid-column:1/-1;padding:24px}.included-top{position:relative;z-index:1;display:flex;align-items:center;gap:14px;margin-bottom:20px}.included-top svg{color:var(--primary)}.included-top span{display:block;color:var(--text-muted);font-size:13px;font-weight:500}.included-top strong{display:block;margin-top:3px;color:var(--text);font-size:22px;font-weight:700;letter-spacing:-.025em}.included-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,1fr);gap:10px}.included-item{min-height:48px;padding:0 14px;border-radius:16px;border:1px solid var(--border);background:rgba(255,255,255,.03);color:var(--text-soft);display:flex;align-items:center;gap:9px;font-size:14px;font-weight:500}.included-item svg{color:var(--primary);flex:0 0 auto}.ai-note{position:relative;z-index:1;margin-top:18px;padding:16px;border-radius:18px;border:1px solid rgba(0,229,168,.2);background:linear-gradient(135deg,rgba(0,229,168,.08),rgba(34,199,255,.045));display:flex;align-items:flex-start;gap:12px}.ai-note svg{color:var(--primary);flex:0 0 auto;margin-top:3px}.ai-note p{margin:0;color:var(--text-soft);font-size:14px;line-height:1.7}.ai-note strong{color:var(--text)}@media(max-width:980px){.pricing-layout{grid-template-columns:1fr}.included-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.pricing-section{padding:10px 0 70px}.pricing-head p{font-size:16px}.pricing-card,.included-card{border-radius:26px;padding:18px}.price{font-size:48px}.included-grid{grid-template-columns:1fr}.ai-note{flex-direction:column}}
      `}</style>
    </section>
  );
}
