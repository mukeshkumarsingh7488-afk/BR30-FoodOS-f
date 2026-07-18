import { CreditCard, MapPinned, MessageCircle, Smartphone, Store, Wallet, Globe, Building2, ShieldCheck, Database, Cloud, Bell } from "lucide-react";

const integrations = [
  { title: "Swiggy", icon: Store },
  { title: "Zomato", icon: Store },
  { title: "ONDC", icon: Globe },
  { title: "WhatsApp Business", icon: MessageCircle },
  { title: "Google Maps", icon: MapPinned },
  { title: "Razorpay", icon: CreditCard },
  { title: "PhonePe", icon: Smartphone },
  { title: "Paytm", icon: Wallet },
  { title: "Firebase", icon: Bell },
  { title: "MongoDB", icon: Database },
  { title: "Cloud Services", icon: Cloud },
  { title: "Enterprise APIs", icon: Building2 },
];

export default function Integrations() {
  return (
    <section className="integration-section" id="integrations">
      <div className="foodos-container">
        <div className="integration-head">
          <span>Integrations</span>

          <h2>Connect with the tools your business already uses.</h2>

          <p>BR30 FoodOS is built with a scalable architecture designed for future integrations across food delivery platforms, payment gateways, cloud infrastructure and enterprise services.</p>
        </div>

        <div className="integration-grid">
          {integrations.map((item) => {
            const Icon = item.icon;

            return (
              <article className="integration-card" key={item.title}>
                <div className="integration-icon">
                  <Icon size={24} />
                </div>

                <h3>{item.title}</h3>

                <span>
                  <ShieldCheck size={14} />
                  Planned Integration
                </span>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
.integration-section{padding:18px 0 104px}.integration-head{text-align:center;max-width:820px;margin:0 auto 42px}.integration-head span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500}.integration-head h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.05;font-weight:700;letter-spacing:-.045em}.integration-head p{margin:18px auto 0;max-width:760px;color:var(--text-soft);font-size:18px;line-height:1.7}.integration-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}.integration-card{padding:22px;border-radius:26px;border:1px solid var(--border);background:linear-gradient(135deg,rgba(0,229,168,.04),rgba(34,199,255,.02)),var(--card);text-align:center;transition:.25s}.integration-card:hover{transform:translateY(-5px);border-color:var(--border-strong);box-shadow:var(--shadow-soft)}.integration-icon{width:58px;height:58px;margin:0 auto 18px;border-radius:18px;display:grid;place-items:center;background:rgba(0,229,168,.08);color:var(--primary);border:1px solid rgba(0,229,168,.18)}.integration-card h3{margin:0;color:var(--text);font-size:18px;font-weight:600}.integration-card span{margin-top:14px;display:inline-flex;align-items:center;gap:6px;color:var(--primary);font-size:12px;font-weight:500;background:rgba(0,229,168,.08);padding:7px 12px;border-radius:999px}.integration-card span svg{width:14px;height:14px}@media(max-width:1024px){.integration-grid{grid-template-columns:repeat(3,1fr)}}@media(max-width:760px){.integration-grid{grid-template-columns:repeat(2,1fr)}}@media(max-width:520px){.integration-section{padding:10px 0 70px}.integration-grid{grid-template-columns:1fr}.integration-head p{font-size:16px}}
      `}</style>
    </section>
  );
}
