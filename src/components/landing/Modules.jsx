import { BarChart3, BellRing, ChefHat, CreditCard, Gift, LayoutDashboard, QrCode, ReceiptText, Settings, ShieldCheck, Store, UsersRound } from "lucide-react";

const modules = [
  { title: "Business Dashboard", icon: LayoutDashboard, tag: "Owner" },
  { title: "QR Menu", icon: QrCode, tag: "Customer" },
  { title: "Kitchen Display", icon: ChefHat, tag: "Kitchen" },
  { title: "Counter Billing", icon: ReceiptText, tag: "Counter" },
  { title: "Payments", icon: CreditCard, tag: "Billing" },
  { title: "Offers & Coupons", icon: Gift, tag: "Growth" },
  { title: "Staff Access", icon: UsersRound, tag: "Team" },
  { title: "Live Notifications", icon: BellRing, tag: "Realtime" },
  { title: "Reports", icon: BarChart3, tag: "Analytics" },
  { title: "Business Settings", icon: Settings, tag: "Control" },
  { title: "Multi Business", icon: Store, tag: "Scale" },
  { title: "Security Layer", icon: ShieldCheck, tag: "SaaS" },
];

export default function Modules() {
  return (
    <section className="modules-section" id="modules">
      <div className="foodos-container modules-layout">
        <div className="modules-left">
          <span>Platform Modules</span>

          <h2>Every workflow connected inside one operating system.</h2>

          <p>BR30 FoodOS is built with modular architecture. Each module handles one important part of your food business while staying connected with orders, billing, staff, analytics and customer experience.</p>

          <div className="modules-stats">
            <div>
              <strong>12+</strong>
              <small>Core Modules</small>
            </div>
            <div>
              <strong>24/7</strong>
              <small>Cloud Access</small>
            </div>
            <div>
              <strong>14 Days</strong>
              <small>Free Trial</small>
            </div>
          </div>
        </div>

        <div className="modules-grid">
          {modules.map((item) => {
            const Icon = item.icon;

            return (
              <article className="module-card" key={item.title}>
                <div className="module-top">
                  <span className="module-icon">
                    <Icon size={20} />
                  </span>

                  <small>{item.tag}</small>
                </div>

                <h3>{item.title}</h3>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
.modules-section{padding:20px 0 100px;position:relative}.modules-layout{display:grid;grid-template-columns:.85fr 1.15fr;gap:34px;align-items:center}.modules-left{position:sticky;top:126px}.modules-left>span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.modules-left h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.modules-left p{max-width:560px;margin:18px 0 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.modules-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:28px}.modules-stats div{padding:18px;border:1px solid var(--border);border-radius:22px;background:var(--card);backdrop-filter:blur(18px)}.modules-stats strong{display:block;color:var(--text);font-size:24px;font-weight:700;letter-spacing:-.03em}.modules-stats small{display:block;margin-top:6px;color:var(--text-muted);font-size:13px;font-weight:500}.modules-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.module-card{position:relative;min-height:165px;padding:18px;border:1px solid var(--border);border-radius:26px;background:linear-gradient(135deg,rgba(0,229,168,.04),rgba(34,199,255,.025)),var(--card);backdrop-filter:blur(22px);overflow:hidden;transition:all .25s ease}.module-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 0%,rgba(0,229,168,.13),transparent 36%);opacity:0;transition:opacity .25s ease;pointer-events:none}.module-card:hover{transform:translateY(-5px);border-color:var(--border-strong);box-shadow:var(--shadow-soft)}.module-card:hover::before{opacity:1}.module-top{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;gap:12px}.module-icon{width:46px;height:46px;border-radius:17px;display:grid;place-items:center;color:var(--primary);background:rgba(0,229,168,.09);border:1px solid rgba(0,229,168,.18);transition:all .25s ease}.module-card:hover .module-icon{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;border-color:transparent}.module-top small{color:var(--text-muted);font-size:12px;font-weight:500}.module-card h3{position:relative;z-index:1;margin:38px 0 0;color:var(--text);font-size:19px;font-weight:600;letter-spacing:-.025em}@media(max-width:1060px){.modules-layout{grid-template-columns:1fr}.modules-left{position:relative;top:auto;text-align:center}.modules-left p{margin-left:auto;margin-right:auto}.modules-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:780px){.modules-grid{grid-template-columns:repeat(2,1fr)}.modules-stats{grid-template-columns:1fr}}@media(max-width:520px){.modules-section{padding:10px 0 70px}.modules-left p{font-size:16px}.modules-grid{grid-template-columns:1fr}.module-card{min-height:140px}.module-card h3{margin-top:28px}}
      `}</style>
    </section>
  );
}
