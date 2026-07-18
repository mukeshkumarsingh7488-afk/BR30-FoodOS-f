import { BarChart3, BellRing, ChefHat, CreditCard, Gift, LayoutDashboard, QrCode, ReceiptText, ShieldCheck, Smartphone, UsersRound, Utensils } from "lucide-react";

const features = [
  {
    title: "Digital QR Menu",
    text: "Create unlimited categories, items, images, prices, offers and business-specific menu layouts.",
    icon: QrCode,
  },
  {
    title: "Live Ordering",
    text: "Customers scan table QR codes, place orders instantly and every order reaches the counter in real time.",
    icon: Smartphone,
  },
  {
    title: "Kitchen Display",
    text: "Kitchen staff can accept, prepare, mark ready and manage orders with clear status tracking.",
    icon: ChefHat,
  },
  {
    title: "Counter & Billing",
    text: "Manage payments, generate receipts, print bills and track completed orders from one counter screen.",
    icon: ReceiptText,
  },
  {
    title: "Business Dashboard",
    text: "Track live orders, revenue, active tables, pending orders, popular items and operational performance.",
    icon: LayoutDashboard,
  },
  {
    title: "Offers & Discounts",
    text: "Create discounts, combo offers, buy-one-get-one deals, happy hours and seasonal campaigns.",
    icon: Gift,
  },
  {
    title: "Payments Ready",
    text: "Designed for cash, UPI, card, wallet and future online payment integrations.",
    icon: CreditCard,
  },
  {
    title: "Staff Roles",
    text: "Give separate access to owner, manager, cashier, kitchen staff and waiters with permission control.",
    icon: UsersRound,
  },
  {
    title: "Smart Notifications",
    text: "Notify customers when orders are accepted, preparing, ready or completed with live status updates.",
    icon: BellRing,
  },
  {
    title: "Reports & Analytics",
    text: "View daily, weekly and monthly sales, best-selling items, busy hours and order history.",
    icon: BarChart3,
  },
  {
    title: "Multi-Business Ready",
    text: "Built for restaurants, cafes, bakeries, cloud kitchens, food courts and every food business model.",
    icon: Utensils,
  },
  {
    title: "Secure SaaS Platform",
    text: "Every business gets isolated data, secure login, subscription access and scalable cloud architecture.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="foodos-container">
        <div className="features-head">
          <span>Core Platform Features</span>
          <h2>Everything your food business needs in one clean dashboard.</h2>
          <p>BR30 FoodOS replaces scattered tools with one connected platform for ordering, menu control, kitchen operations, billing, analytics and growth.</p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">
                  <Icon size={22} />
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
.features-section{padding:28px 0 96px;position:relative}.features-head{max-width:820px;margin:0 auto 38px;text-align:center}.features-head span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.features-head h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.features-head p{max-width:760px;margin:18px auto 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.features-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.feature-card{position:relative;min-height:250px;padding:22px;border:1px solid var(--border);border-radius:28px;background:linear-gradient(135deg,rgba(0,229,168,.04),rgba(34,199,255,.025)),var(--card);backdrop-filter:blur(22px);overflow:hidden;transition:all .25s ease}.feature-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.13),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.09),transparent 30%);opacity:0;transition:opacity .25s ease;pointer-events:none}.feature-card:hover{transform:translateY(-5px);border-color:var(--border-strong);box-shadow:var(--shadow-soft)}.feature-card:hover::before{opacity:1}.feature-icon{position:relative;z-index:1;width:48px;height:48px;border-radius:17px;display:grid;place-items:center;color:var(--primary);background:rgba(0,229,168,.09);border:1px solid rgba(0,229,168,.18);transition:all .25s ease}.feature-card:hover .feature-icon{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;border-color:transparent}.feature-card h3{position:relative;z-index:1;margin:34px 0 12px;color:var(--text);font-size:20px;font-weight:600;letter-spacing:-.025em}.feature-card p{position:relative;z-index:1;margin:0;color:var(--text-soft);font-size:15px;line-height:1.7;font-weight:400}@media(max-width:1120px){.features-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:820px){.features-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.features-section{padding:20px 0 70px}.features-head p{font-size:16px}.features-grid{grid-template-columns:1fr}.feature-card{min-height:auto}.feature-card h3{margin-top:26px}}
      `}</style>
    </section>
  );
}
