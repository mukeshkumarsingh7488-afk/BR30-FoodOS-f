import { CheckCircle2, Infinity, Layers3, ShieldCheck, Sparkles, X } from "lucide-react";

const comparisons = [
  ["Multiple disconnected tools", "One connected platform"],
  ["Manual table orders", "QR ordering with table tracking"],
  ["No kitchen visibility", "Live kitchen display system"],
  ["Basic billing only", "Billing, receipts and history"],
  ["No business insights", "Reports and analytics"],
  ["Hard to scale", "Cloud SaaS architecture"],
];

const stats = [
  { value: "12+", label: "Core Modules" },
  { value: "22+", label: "Business Types" },
  { value: "14 Days", label: "Free Trial" },
  { value: "24/7", label: "Cloud Access" },
];

export default function WhyChoose() {
  return (
    <section className="why-section" id="why-choose">
      <div className="foodos-container">
        <div className="why-head">
          <span>Why Choose BR30 FoodOS</span>
          <h2>Replace scattered restaurant tools with one modern food business OS.</h2>
          <p>BR30 FoodOS is designed to simplify ordering, kitchen operations, billing, analytics and growth for every food business.</p>
        </div>

        <div className="why-layout">
          <div className="why-card main">
            <div className="why-icon">
              <Layers3 size={22} />
            </div>
            <h3>One platform. Every workflow.</h3>
            <p>From QR menu to kitchen display, billing, reports and staff access — everything works together in one clean dashboard.</p>

            <div className="why-benefits">
              <span>
                <CheckCircle2 size={17} /> Real-time order flow
              </span>
              <span>
                <CheckCircle2 size={17} /> Secure business data
              </span>
              <span>
                <CheckCircle2 size={17} /> Built for future modules
              </span>
            </div>
          </div>

          <div className="comparison-card">
            <div className="comparison-top">
              <span>Traditional Setup</span>
              <strong>BR30 FoodOS</strong>
            </div>

            <div className="comparison-list">
              {comparisons.map(([oldWay, foodosWay]) => (
                <div className="comparison-row" key={oldWay}>
                  <div>
                    <X size={16} /> {oldWay}
                  </div>
                  <div>
                    <CheckCircle2 size={16} /> {foodosWay}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="why-stats">
          {stats.map((item) => (
            <div className="why-stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}

          <div className="why-stat future">
            <Infinity size={28} />
            <span>Future Ready</span>
          </div>

          <div className="why-stat future">
            <Sparkles size={28} />
            <span>AI Ready</span>
          </div>

          <div className="why-stat future">
            <ShieldCheck size={28} />
            <span>Secure SaaS</span>
          </div>
        </div>
      </div>

      <style>{`
.why-section{padding:20px 0 104px;position:relative}.why-head{max-width:860px;margin:0 auto 42px;text-align:center}.why-head span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.why-head h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.why-head p{max-width:760px;margin:18px auto 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.why-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:16px}.why-card,.comparison-card{position:relative;border:1px solid var(--border);border-radius:34px;background:linear-gradient(135deg,rgba(0,229,168,.045),rgba(34,199,255,.03)),var(--card);backdrop-filter:blur(22px);box-shadow:var(--shadow-soft);overflow:hidden}.why-card::before,.comparison-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.13),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.09),transparent 30%);pointer-events:none}.why-card.main{padding:28px}.why-icon{position:relative;z-index:1;width:54px;height:54px;border-radius:18px;display:grid;place-items:center;color:#031015;background:linear-gradient(135deg,var(--primary),var(--secondary))}.why-card h3{position:relative;z-index:1;margin:34px 0 12px;color:var(--text);font-size:30px;line-height:1.1;font-weight:700;letter-spacing:-.04em}.why-card p{position:relative;z-index:1;margin:0;color:var(--text-soft);font-size:16px;line-height:1.7;font-weight:400}.why-benefits{position:relative;z-index:1;display:grid;gap:12px;margin-top:24px}.why-benefits span{display:flex;align-items:center;gap:9px;color:var(--text-soft);font-size:14px;font-weight:500}.why-benefits svg{color:var(--primary)}.comparison-card{padding:22px}.comparison-top{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}.comparison-top span,.comparison-top strong{padding:14px 16px;border-radius:18px;border:1px solid var(--border);font-size:14px}.comparison-top span{color:var(--text-muted);font-weight:500;background:rgba(255,255,255,.025)}.comparison-top strong{color:#031015;font-weight:700;background:linear-gradient(135deg,var(--primary),var(--secondary))}.comparison-list{position:relative;z-index:1;display:grid;gap:10px}.comparison-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}.comparison-row div{min-height:54px;padding:0 14px;border-radius:18px;border:1px solid var(--border);display:flex;align-items:center;gap:9px;color:var(--text-soft);font-size:14px;font-weight:500;background:var(--card)}.comparison-row div:first-child svg{color:var(--danger)}.comparison-row div:last-child{color:var(--text);border-color:rgba(0,229,168,.22);background:rgba(0,229,168,.065)}.comparison-row div:last-child svg{color:var(--primary)}.why-stats{display:grid;grid-template-columns:repeat(7,1fr);gap:12px;margin-top:16px}.why-stat{min-height:112px;padding:18px;border:1px solid var(--border);border-radius:26px;background:var(--card);display:flex;flex-direction:column;justify-content:center;align-items:flex-start;backdrop-filter:blur(18px);transition:all .25s ease}.why-stat:hover{transform:translateY(-4px);border-color:var(--border-strong);box-shadow:var(--shadow-soft)}.why-stat strong{color:var(--text);font-size:25px;font-weight:700;letter-spacing:-.03em}.why-stat span{margin-top:6px;color:var(--text-muted);font-size:13px;font-weight:500}.why-stat.future svg{color:var(--primary);margin-bottom:8px}.why-stat.future span{margin-top:0;color:var(--text-soft)}@media(max-width:1080px){.why-layout{grid-template-columns:1fr}.why-stats{grid-template-columns:repeat(3,1fr)}}@media(max-width:680px){.why-section{padding:10px 0 70px}.why-head p{font-size:16px}.comparison-top,.comparison-row{grid-template-columns:1fr}.why-stats{grid-template-columns:1fr}.why-card.main,.comparison-card{padding:18px;border-radius:26px}.why-card h3{font-size:26px}}
      `}</style>
    </section>
  );
}
