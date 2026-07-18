import { BarChart3, BrainCircuit, Clock3, IndianRupee, PieChart, ReceiptText, TrendingUp, UsersRound } from "lucide-react";

const kpis = [
  { label: "Revenue Today", value: "₹24,580", trend: "+18%", icon: IndianRupee },
  { label: "Orders", value: "256", trend: "+32", icon: ReceiptText },
  { label: "Repeat Customers", value: "46%", trend: "+9%", icon: UsersRound },
  { label: "Peak Hour", value: "8 PM", trend: "Live", icon: Clock3 },
];

const topItems = ["Paneer Pizza", "Cold Coffee", "Veg Burger", "Masala Dosa"];

export default function AnalyticsDashboard() {
  return (
    <section className="analytics-section" id="analytics">
      <div className="foodos-container analytics-layout">
        <div className="analytics-content">
          <span>Business Intelligence Dashboard</span>
          <h2>Turn every order into clear business intelligence.</h2>
          <p>Track revenue, live orders, customer behavior, peak hours, top items, profit trends and AI insights from one premium dashboard.</p>

          <div className="analytics-points">
            <div>
              <TrendingUp size={18} /> Revenue, profit and growth reports
            </div>
            <div>
              <UsersRound size={18} /> Customer loyalty and repeat order insights
            </div>
            <div>
              <BrainCircuit size={18} /> AI-powered business recommendations
            </div>
          </div>
        </div>

        <div className="analytics-preview">
          <div className="analytics-orb" />

          <div className="bi-dashboard">
            <div className="bi-top">
              <div>
                <span>BR30 FoodOS Analytics</span>
                <strong>Today’s Performance</strong>
              </div>
              <div className="bi-live">Live</div>
            </div>

            <div className="kpi-grid">
              {kpis.map((item) => {
                const Icon = item.icon;
                return (
                  <div className="kpi-card" key={item.label}>
                    <Icon size={18} />
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <small>{item.trend}</small>
                  </div>
                );
              })}
            </div>

            <div className="bi-main">
              <div className="sales-chart">
                <div className="panel-head">
                  <strong>Weekly Sales Trend</strong>
                  <span>+22.4%</span>
                </div>

                <div className="line-chart">
                  <svg viewBox="0 0 520 190" preserveAspectRatio="none">
                    <path className="chart-fill" d="M0,150 C70,120 95,132 145,98 C205,55 245,92 300,66 C360,38 405,78 455,42 C490,18 510,28 520,22 L520,190 L0,190 Z" />
                    <path className="chart-line" d="M0,150 C70,120 95,132 145,98 C205,55 245,92 300,66 C360,38 405,78 455,42 C490,18 510,28 520,22" />
                  </svg>
                </div>
              </div>

              <div className="ai-insight-card">
                <div className="ai-mini-icon">
                  <BrainCircuit size={20} />
                </div>
                <strong>AI Insight</strong>
                <p>Friday evening sales are expected to increase by 18%. Increase kitchen staff and prepare fast-moving items early.</p>
              </div>
            </div>

            <div className="bi-bottom">
              <div className="order-mix">
                <div className="panel-head">
                  <strong>Order Mix</strong>
                  <PieChart size={18} />
                </div>

                <div className="donut-wrap">
                  <div className="donut" />
                  <div className="legend">
                    <span>
                      <b /> Dine-In
                    </span>
                    <span>
                      <b /> Takeaway
                    </span>
                    <span>
                      <b /> Delivery
                    </span>
                  </div>
                </div>
              </div>

              <div className="top-items">
                <div className="panel-head">
                  <strong>Top Selling Items</strong>
                  <BarChart3 size={18} />
                </div>

                {topItems.map((item, index) => (
                  <div className="top-item" key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                    <b style={{ width: `${90 - index * 13}%` }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
.analytics-section{padding:18px 0 104px;position:relative}.analytics-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:34px;align-items:center}.analytics-content>span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.analytics-content h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.analytics-content p{max-width:570px;margin:18px 0 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.analytics-points{display:grid;gap:12px;margin-top:28px}.analytics-points div{min-height:52px;padding:0 16px;border:1px solid var(--border);border-radius:18px;background:var(--card);color:var(--text-soft);display:flex;align-items:center;gap:10px;font-size:15px;font-weight:500}.analytics-points svg{color:var(--primary)}.analytics-preview{position:relative;display:grid;place-items:center}.analytics-orb{position:absolute;width:540px;height:540px;border-radius:999px;background:radial-gradient(circle,rgba(0,229,168,.23),transparent 64%);filter:blur(18px)}.bi-dashboard{position:relative;width:min(100%,760px);padding:22px;border:1px solid var(--border-strong);border-radius:34px;background:linear-gradient(135deg,rgba(0,229,168,.055),rgba(34,199,255,.035)),var(--surface);box-shadow:var(--shadow-soft);backdrop-filter:blur(24px);overflow:hidden}.bi-dashboard::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.14),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.1),transparent 30%);pointer-events:none}.bi-top,.kpi-grid,.bi-main,.bi-bottom{position:relative;z-index:1}.bi-top{display:flex;align-items:center;justify-content:space-between;gap:18px;margin-bottom:16px}.bi-top span{display:block;color:var(--text-muted);font-size:13px;font-weight:500}.bi-top strong{display:block;margin-top:4px;color:var(--text);font-size:24px;font-weight:700;letter-spacing:-.02em}.bi-live{min-height:36px;padding:0 13px;border-radius:999px;border:1px solid rgba(0,229,168,.25);background:rgba(0,229,168,.08);color:var(--primary);display:flex;align-items:center;font-size:13px;font-weight:600}.kpi-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.kpi-card{padding:15px;border:1px solid var(--border);border-radius:20px;background:rgba(255,255,255,.035)}.kpi-card svg{color:var(--primary)}.kpi-card span{display:block;margin-top:10px;color:var(--text-muted);font-size:12px;font-weight:500}.kpi-card strong{display:block;margin-top:6px;color:var(--text);font-size:22px;font-weight:700;letter-spacing:-.03em}.kpi-card small{display:inline-flex;margin-top:7px;color:var(--primary);font-size:12px;font-weight:600}.bi-main{display:grid;grid-template-columns:1.35fr .65fr;gap:12px;margin-top:12px}.sales-chart,.ai-insight-card,.order-mix,.top-items{border:1px solid var(--border);border-radius:24px;background:var(--card);padding:16px}.panel-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}.panel-head strong{color:var(--text);font-size:15px;font-weight:600}.panel-head span,.panel-head svg{color:var(--primary);font-size:13px;font-weight:600}.line-chart{height:190px;border-radius:18px;background:rgba(255,255,255,.025);overflow:hidden}.line-chart svg{width:100%;height:100%}.chart-fill{fill:rgba(0,229,168,.12)}.chart-line{fill:none;stroke:url(#none);stroke:var(--primary);stroke-width:5;filter:drop-shadow(0 0 12px rgba(0,229,168,.55))}.ai-mini-icon{width:46px;height:46px;border-radius:17px;display:grid;place-items:center;color:#031015;background:linear-gradient(135deg,var(--primary),var(--secondary));margin-bottom:16px}.ai-insight-card strong{display:block;color:var(--text);font-size:17px;font-weight:700}.ai-insight-card p{margin:10px 0 0;color:var(--text-soft);font-size:14px;line-height:1.65;font-weight:400}.bi-bottom{display:grid;grid-template-columns:.82fr 1.18fr;gap:12px;margin-top:12px}.donut-wrap{display:grid;grid-template-columns:112px 1fr;gap:14px;align-items:center}.donut{width:112px;height:112px;border-radius:50%;background:conic-gradient(var(--primary) 0 48%,var(--secondary) 48% 78%,var(--accent) 78% 100%);position:relative}.donut::after{content:"";position:absolute;inset:24px;border-radius:50%;background:var(--surface)}.legend{display:grid;gap:9px}.legend span{display:flex;align-items:center;gap:8px;color:var(--text-soft);font-size:12px;font-weight:500}.legend b{width:9px;height:9px;border-radius:50%;background:var(--primary)}.legend span:nth-child(2) b{background:var(--secondary)}.legend span:nth-child(3) b{background:var(--accent)}.top-items{display:grid;gap:10px}.top-item{position:relative;min-height:38px;padding:0 10px;border:1px solid var(--border);border-radius:14px;background:rgba(255,255,255,.025);display:grid;grid-template-columns:36px 1fr;align-items:center;gap:8px;overflow:hidden}.top-item span,.top-item p{position:relative;z-index:1}.top-item span{color:var(--primary);font-size:12px;font-weight:600}.top-item p{margin:0;color:var(--text-soft);font-size:13px;font-weight:500}.top-item b{position:absolute;left:0;top:0;bottom:0;background:linear-gradient(90deg,rgba(0,229,168,.15),transparent);border-radius:14px}@media(max-width:1080px){.analytics-layout{grid-template-columns:1fr}.analytics-content{text-align:center}.analytics-content p{margin-left:auto;margin-right:auto}.kpi-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:720px){.analytics-section{padding:10px 0 70px}.analytics-content p{font-size:16px}.bi-dashboard{padding:16px;border-radius:26px}.kpi-grid,.bi-main,.bi-bottom{grid-template-columns:1fr}.donut-wrap{grid-template-columns:1fr}.line-chart{height:160px}}
      `}</style>
    </section>
  );
}
