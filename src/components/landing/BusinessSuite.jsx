import { BarChart3, Bot, ChefHat, CreditCard, Megaphone, PackageCheck, ReceiptText, Settings2, Store, Truck, UsersRound, WalletCards } from "lucide-react";

const suites = [
  {
    title: "POS & Billing",
    icon: ReceiptText,
    points: ["GST-ready billing", "Receipt printing", "Payment tracking", "Order history"],
  },
  {
    title: "CRM",
    icon: UsersRound,
    points: ["Customer database", "Loyalty rewards", "Birthday coupons", "Repeat customer tracking"],
  },
  {
    title: "Inventory",
    icon: PackageCheck,
    points: ["Raw material stock", "Auto deduction", "Purchase tracking", "Waste control"],
  },
  {
    title: "Kitchen",
    icon: ChefHat,
    points: ["KDS workflow", "Preparation timer", "Order status", "Kitchen queue"],
  },
  {
    title: "Analytics",
    icon: BarChart3,
    points: ["Sales reports", "Peak hours", "Top items", "Business insights"],
  },
  {
    title: "Finance",
    icon: WalletCards,
    points: ["Expenses", "Profit & loss", "Daily closing", "Tax reports"],
  },
  {
    title: "Marketing",
    icon: Megaphone,
    points: ["Coupons", "WhatsApp campaigns", "Offers", "Customer reactivation"],
  },
  {
    title: "AI Automation",
    icon: Bot,
    points: ["AI menu ideas", "Sales forecast", "Review replies", "Smart insights"],
  },
  {
    title: "Delivery",
    icon: Truck,
    points: ["Own delivery", "Order tracking", "Delivery status", "Future integrations"],
  },
  {
    title: "Multi Branch",
    icon: Store,
    points: ["Branch dashboard", "Central control", "Outlet reports", "Franchise ready"],
  },
  {
    title: "Payments",
    icon: CreditCard,
    points: ["UPI ready", "Card ready", "Wallet ready", "Razorpay planned"],
  },
  {
    title: "Operations",
    icon: Settings2,
    points: ["Staff roles", "Settings", "Audit logs", "Cloud backup"],
  },
];

export default function BusinessSuite() {
  return (
    <section className="suite-section" id="business-suite">
      <div className="foodos-container">
        <div className="suite-head">
          <span>Complete Business Suite</span>
          <h2>More than QR ordering. A complete operating system.</h2>
          <p>BR30 FoodOS brings POS, CRM, inventory, kitchen workflow, marketing, finance, AI automation and analytics into one connected platform.</p>
        </div>

        <div className="suite-grid">
          {suites.map((suite) => {
            const Icon = suite.icon;

            return (
              <article className="suite-card" key={suite.title}>
                <div className="suite-top">
                  <div className="suite-icon">
                    <Icon size={21} />
                  </div>
                  <h3>{suite.title}</h3>
                </div>

                <ul>
                  {suite.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
.suite-section{padding:18px 0 104px;position:relative}.suite-head{max-width:850px;margin:0 auto 42px;text-align:center}.suite-head span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.suite-head h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.suite-head p{max-width:780px;margin:18px auto 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.suite-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.suite-card{position:relative;min-height:245px;padding:20px;border:1px solid var(--border);border-radius:28px;background:linear-gradient(135deg,rgba(0,229,168,.04),rgba(34,199,255,.025)),var(--card);backdrop-filter:blur(22px);overflow:hidden;transition:all .25s ease}.suite-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.13),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.09),transparent 30%);opacity:0;pointer-events:none;transition:opacity .25s ease}.suite-card:hover{transform:translateY(-5px);border-color:var(--border-strong);box-shadow:var(--shadow-soft)}.suite-card:hover::before{opacity:1}.suite-top,.suite-card ul{position:relative;z-index:1}.suite-icon{width:48px;height:48px;border-radius:17px;display:grid;place-items:center;color:var(--primary);background:rgba(0,229,168,.09);border:1px solid rgba(0,229,168,.18);transition:all .25s ease}.suite-card:hover .suite-icon{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;border-color:transparent}.suite-top h3{margin:22px 0 16px;color:var(--text);font-size:20px;font-weight:600;letter-spacing:-.025em}.suite-card ul{list-style:none;display:grid;gap:10px;margin:0;padding:0}.suite-card li{position:relative;padding-left:18px;color:var(--text-soft);font-size:14px;line-height:1.45;font-weight:400}.suite-card li::before{content:"";position:absolute;left:0;top:8px;width:6px;height:6px;border-radius:999px;background:var(--primary);box-shadow:0 0 14px rgba(0,229,168,.45)}@media(max-width:1120px){.suite-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:820px){.suite-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.suite-section{padding:10px 0 70px}.suite-head p{font-size:16px}.suite-grid{grid-template-columns:1fr}.suite-card{min-height:auto;border-radius:26px;padding:18px}}
      `}</style>
    </section>
  );
}
