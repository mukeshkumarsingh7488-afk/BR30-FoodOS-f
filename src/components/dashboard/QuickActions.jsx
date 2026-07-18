import { Plus, Utensils, QrCode, ShoppingBag, Users } from "lucide-react";

const actions = [
  {
    title: "Add Menu Item",
    desc: "Create a new food or drink item.",
    icon: Plus,
    color: "green",
  },
  {
    title: "Manage Menu",
    desc: "Update categories and pricing.",
    icon: Utensils,
    color: "blue",
  },
  {
    title: "Generate QR",
    desc: "Create new table QR codes.",
    icon: QrCode,
    color: "purple",
  },
  {
    title: "New Order",
    desc: "Create manual POS order.",
    icon: ShoppingBag,
    color: "orange",
  },
  {
    title: "Invite Staff",
    desc: "Add restaurant employees.",
    icon: Users,
    color: "green",
  },
];

export default function QuickActions() {
  return (
    <>
      <section className="foodos-quick-actions">
        <div className="foodos-section-title">
          <h3>Quick Actions</h3>
          <span>Frequently used business operations.</span>
        </div>

        <div className="foodos-actions-grid">
          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <button key={item.title} className={`foodos-action-card ${item.color}`}>
                <div className="icon">
                  <Icon size={22} />
                </div>

                <strong>{item.title}</strong>

                <p>{item.desc}</p>
              </button>
            );
          })}
        </div>
      </section>

      <style>{`
.foodos-quick-actions{margin-top:34px;}
.foodos-section-title{display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:18px;gap:18px;}
.foodos-section-title h3{margin:0;font-size:23px;font-weight:900;color:#fff;}
.foodos-section-title span{font-size:13px;color:rgba(255,255,255,.55);}
.foodos-actions-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;}
.foodos-action-card{padding:24px;border-radius:22px;border:1px solid rgba(255,255,255,.08);background:linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.03));cursor:pointer;text-align:left;transition:.25s;display:flex;flex-direction:column;gap:15px;}
.foodos-action-card:hover{transform:translateY(-5px);border-color:#00ff88;box-shadow:0 20px 40px rgba(0,255,136,.12);}
.foodos-action-card .icon{width:54px;height:54px;border-radius:18px;display:flex;align-items:center;justify-content:center;background:rgba(0,255,136,.12);color:#00ff88;}
.foodos-action-card.blue .icon{background:rgba(0,217,255,.12);color:#00d9ff;}
.foodos-action-card.orange .icon{background:rgba(255,184,77,.12);color:#ffb84d;}
.foodos-action-card.purple .icon{background:rgba(170,110,255,.12);color:#aa6eff;}
.foodos-action-card strong{font-size:17px;font-weight:900;color:#fff;}
.foodos-action-card p{margin:0;font-size:13px;line-height:1.6;color:rgba(255,255,255,.58);}
`}</style>
    </>
  );
}
