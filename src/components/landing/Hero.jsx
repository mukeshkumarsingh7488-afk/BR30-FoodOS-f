import { ArrowRight, CheckCircle2, Clock, Store, UtensilsCrossed } from "lucide-react";
import SITE_CONFIG from "../../config/siteConfig";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="foodos-container hero-grid">
        <div className="hero-content">
          <h1 className="hero-title">
            The Complete
            <br />
            Operating System for
            <br />
            <span className="gradient-text">Every Food Business.</span>
          </h1>

          <p className="hero-description">Replace multiple food business tools with one intelligent cloud platform. Manage QR ordering, digital menus, kitchen workflow, billing, staff, customer engagement and analytics from a single dashboard.</p>

          <div className="hero-actions">
            <a className="primary-btn" href="#pricing">
              {SITE_CONFIG.cta.primary}
              <ArrowRight size={18} />
            </a>

            <a className="secondary-btn" href="#features">
              Explore Features
            </a>
          </div>

          <div className="hero-points">
            <span>
              <CheckCircle2 size={17} /> No Credit Card Required
            </span>
            <span>
              <CheckCircle2 size={17} /> Secure & Reliable
            </span>
            <span>
              <CheckCircle2 size={17} /> Built for Scale
            </span>
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-glow" />

          <div className="dashboard-card">
            <div className="dashboard-top">
              <div>
                <span>Live Dashboard</span>
                <strong>BR30 FoodOS</strong>
              </div>
              <div className="live-dot">Live</div>
            </div>

            <div className="stats-grid">
              <div className="stat-box">
                <Store size={20} />
                <span>Orders</span>
                <strong>128</strong>
              </div>

              <div className="stat-box">
                <Clock size={20} />
                <span>Avg Time</span>
                <strong>14m</strong>
              </div>

              <div className="stat-box">
                <UtensilsCrossed size={20} />
                <span>Tables</span>
                <strong>42</strong>
              </div>
            </div>

            <div className="order-list">
              <div className="order-row">
                <span>Table 07</span>
                <strong>Preparing</strong>
              </div>

              <div className="order-row">
                <span>Table 12</span>
                <strong>Ready in 10m</strong>
              </div>

              <div className="order-row">
                <span>Counter</span>
                <strong>Ready</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
.hero-section{min-height:auto;padding:118px 0 48px;display:flex;align-items:flex-start}.hero-grid{display:grid;grid-template-columns:1fr .95fr;gap:54px;align-items:center}.hero-content{padding-top:0}.hero-title{margin:0 0 20px;font-size:clamp(48px,5.2vw,78px);line-height:.96;letter-spacing:-.055em;font-weight:700;max-width:760px;color:var(--text)}.hero-description{max-width:720px;margin:0;color:var(--text-soft);font-size:19px;line-height:1.7;font-weight:400;letter-spacing:-.01em}.hero-actions{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-top:28px}.hero-points{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:22px;color:var(--text-soft);font-size:13px;font-weight:500}.hero-points span{display:inline-flex;align-items:center;gap:8px}.hero-points svg{color:var(--primary)}.hero-preview{position:relative;min-height:430px;display:grid;place-items:center}.preview-glow{position:absolute;width:430px;height:430px;border-radius:50%;background:radial-gradient(circle,rgba(0,229,168,.28),transparent 62%);filter:blur(12px)}.dashboard-card{position:relative;width:min(100%,540px);padding:22px;border:1px solid var(--border-strong);border-radius:34px;background:linear-gradient(135deg,rgba(0,229,168,.055),rgba(34,199,255,.035)),var(--surface);box-shadow:var(--shadow-soft);backdrop-filter:blur(24px);overflow:hidden}.dashboard-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.14),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.1),transparent 30%);pointer-events:none}.dashboard-top,.stats-grid,.order-list{position:relative;z-index:1}.dashboard-top{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:18px}.dashboard-top span{display:block;color:var(--text-muted);font-size:13px;font-weight:500}.dashboard-top strong{display:block;margin-top:4px;color:var(--text);font-size:22px;font-weight:700;letter-spacing:-.02em}.live-dot{padding:8px 12px;border-radius:999px;background:rgba(0,229,168,.13);border:1px solid rgba(0,229,168,.28);color:var(--primary);font-size:12px;font-weight:600}.stats-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.stat-box{padding:18px;border-radius:22px;background:rgba(255,255,255,.035);border:1px solid var(--border)}.stat-box svg{color:var(--primary)}.stat-box span{display:block;margin-top:12px;color:var(--text-muted);font-size:12px;font-weight:500}.stat-box strong{display:block;margin-top:5px;color:var(--text);font-size:24px;font-weight:700;letter-spacing:-.02em}.order-list{margin-top:16px;display:grid;gap:12px}.order-row{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:16px 17px;border-radius:18px;background:var(--card);border:1px solid var(--border)}.order-row span{color:var(--text-soft);font-weight:500}.order-row strong{color:var(--primary);font-size:13px;font-weight:600}.live-dot,.stat-box,.order-row{transition:all .25s ease}.dashboard-card:hover{transform:translateY(-4px)}@media(max-width:980px){.hero-grid{grid-template-columns:1fr}.hero-section{padding-top:104px}.hero-preview{min-height:auto}}@media(max-width:560px){.hero-section{padding:92px 0 48px}.hero-title{font-size:42px;line-height:.98;letter-spacing:-.05em}.hero-description{font-size:16px;line-height:1.65}.hero-actions a{width:100%}.stats-grid{grid-template-columns:1fr}.dashboard-card{border-radius:26px;padding:16px}.hero-points{gap:12px}}
`}</style>
    </section>
  );
}
