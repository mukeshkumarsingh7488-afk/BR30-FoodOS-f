import { BellRing, ChefHat, CheckCircle2, ClipboardList, QrCode, ReceiptText, Smartphone } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Customer scans table QR",
    text: "Every table gets a unique QR code. When the customer scans it, BR30 FoodOS automatically detects the table number.",
    icon: QrCode,
  },
  {
    number: "02",
    title: "Menu opens instantly",
    text: "Customers browse your live digital menu, offers, categories, item images, prices and descriptions from their phone.",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "Order reaches counter live",
    text: "Once the order is placed, it appears instantly on the business dashboard with table number, items and notes.",
    icon: ClipboardList,
  },
  {
    number: "04",
    title: "Kitchen starts preparation",
    text: "Kitchen staff can accept, prepare and mark items as ready using a clean touch-friendly kitchen display.",
    icon: ChefHat,
  },
  {
    number: "05",
    title: "Customer gets status update",
    text: "The business can set preparation time like 10, 15 or 20 minutes and the customer sees live order progress.",
    icon: BellRing,
  },
  {
    number: "06",
    title: "Bill, receipt and history",
    text: "Counter can complete billing, print receipts, track payments and store order history with filters and reports.",
    icon: ReceiptText,
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="foodos-container">
        <div className="how-head">
          <span>How BR30 FoodOS Works</span>

          <h2>From QR scan to kitchen, billing and order history.</h2>

          <p>A simple flow built for real food businesses — customer ordering, kitchen preparation, counter billing and owner analytics connected in real time.</p>
        </div>

        <div className="how-layout">
          <div className="how-timeline">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article className="how-step" key={step.number}>
                  <div className="step-marker">
                    <span>{step.number}</span>
                  </div>

                  <div className="step-card">
                    <div className="step-icon">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flow-card">
            <div className="flow-top">
              <span>Live Order Flow</span>
              <strong>Table 12</strong>
            </div>

            <div className="flow-track">
              <div className="flow-item active">
                <CheckCircle2 size={18} />
                Order Received
              </div>

              <div className="flow-item active">
                <CheckCircle2 size={18} />
                Preparing
              </div>

              <div className="flow-item">
                <BellRing size={18} />
                Ready in 10 minutes
              </div>

              <div className="flow-item">
                <ReceiptText size={18} />
                Billing Pending
              </div>
            </div>

            <div className="flow-note">Customer sees live status. Kitchen and counter stay connected.</div>
          </div>
        </div>
      </div>

      <style>{`
.how-section{padding:20px 0 100px;position:relative}.how-head{max-width:820px;margin:0 auto 42px;text-align:center}.how-head span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.how-head h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.how-head p{max-width:760px;margin:18px auto 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.how-layout{display:grid;grid-template-columns:1.15fr .85fr;gap:24px;align-items:start}.how-timeline{position:relative;display:grid;gap:14px}.how-timeline::before{content:"";position:absolute;left:23px;top:18px;bottom:18px;width:1px;background:linear-gradient(to bottom,var(--primary),rgba(34,199,255,.18),transparent)}.how-step{position:relative;display:grid;grid-template-columns:48px 1fr;gap:14px}.step-marker{position:relative;z-index:2;width:48px;height:48px;border-radius:999px;display:grid;place-items:center;background:var(--surface);border:1px solid var(--border-strong);box-shadow:0 14px 38px rgba(0,0,0,.18)}.step-marker span{color:var(--primary);font-size:12px;font-weight:700}.step-card{min-height:118px;padding:18px;border:1px solid var(--border);border-radius:26px;background:linear-gradient(135deg,rgba(0,229,168,.04),rgba(34,199,255,.025)),var(--card);display:grid;grid-template-columns:48px 1fr;gap:14px;align-items:flex-start;backdrop-filter:blur(20px);transition:all .25s ease}.step-card:hover{transform:translateY(-3px);border-color:var(--border-strong);box-shadow:var(--shadow-soft)}.step-icon{width:48px;height:48px;border-radius:17px;display:grid;place-items:center;color:var(--primary);background:rgba(0,229,168,.09);border:1px solid rgba(0,229,168,.18)}.step-card h3{margin:0 0 8px;color:var(--text);font-size:19px;font-weight:600;letter-spacing:-.02em}.step-card p{margin:0;color:var(--text-soft);font-size:15px;line-height:1.65;font-weight:400}.flow-card{position:sticky;top:118px;padding:24px;border:1px solid var(--border-strong);border-radius:34px;background:linear-gradient(135deg,rgba(0,229,168,.055),rgba(34,199,255,.035)),var(--surface);box-shadow:var(--shadow-soft);backdrop-filter:blur(24px);overflow:hidden}.flow-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 0%,rgba(0,229,168,.14),transparent 35%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.1),transparent 34%);pointer-events:none}.flow-top,.flow-track,.flow-note{position:relative;z-index:1}.flow-top{display:flex;justify-content:space-between;gap:14px;align-items:center;margin-bottom:22px}.flow-top span{color:var(--text-muted);font-size:13px;font-weight:500}.flow-top strong{color:var(--text);font-size:22px;font-weight:700;letter-spacing:-.02em}.flow-track{display:grid;gap:12px}.flow-item{min-height:56px;padding:0 16px;border-radius:18px;border:1px solid var(--border);background:var(--card);color:var(--text-soft);display:flex;align-items:center;gap:10px;font-size:15px;font-weight:500}.flow-item svg{color:var(--text-muted)}.flow-item.active{color:var(--text);border-color:rgba(0,229,168,.25);background:rgba(0,229,168,.075)}.flow-item.active svg{color:var(--primary)}.flow-note{margin-top:18px;padding:14px;border-radius:18px;border:1px solid rgba(0,229,168,.18);background:rgba(0,229,168,.07);color:var(--text-soft);font-size:14px;line-height:1.6;font-weight:400}@media(max-width:980px){.how-layout{grid-template-columns:1fr}.flow-card{position:relative;top:auto}}@media(max-width:560px){.how-section{padding:10px 0 70px}.how-head p{font-size:16px}.step-card{grid-template-columns:1fr}.how-step{grid-template-columns:40px 1fr}.step-marker{width:40px;height:40px}.how-timeline::before{left:19px}.flow-card{border-radius:26px;padding:18px}}
      `}</style>
    </section>
  );
}
