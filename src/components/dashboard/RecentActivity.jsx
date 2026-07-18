import { ShoppingBag, Utensils, Users, QrCode } from "lucide-react";

const activities = [
  {
    title: "New order received",
    time: "2 min ago",
    icon: ShoppingBag,
  },
  {
    title: "Menu updated",
    time: "12 min ago",
    icon: Utensils,
  },
  {
    title: "New staff invited",
    time: "34 min ago",
    icon: Users,
  },
  {
    title: "QR Table generated",
    time: "1 hour ago",
    icon: QrCode,
  },
];

export default function RecentActivity() {
  return (
    <>
      <section className="foodos-recent">
        <div className="foodos-section-title">
          <h3>Recent Activity</h3>
          <span>Latest business updates.</span>
        </div>

        <div className="foodos-recent-list">
          {activities.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="foodos-recent-item">
                <div className="left">
                  <div className="icon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.time}</p>
                  </div>
                </div>

                <span className="status">Completed</span>
              </div>
            );
          })}
        </div>
      </section>

      <style>{`
.foodos-recent{margin-top:42px;}
.foodos-recent-list{display:flex;flex-direction:column;gap:14px;}
.foodos-recent-item{display:flex;justify-content:space-between;align-items:center;padding:18px 20px;border-radius:20px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);}
.foodos-recent-item .left{display:flex;align-items:center;gap:15px;}
.foodos-recent-item .icon{width:46px;height:46px;border-radius:15px;background:rgba(0,255,136,.1);display:flex;align-items:center;justify-content:center;color:#00ff88;}
.foodos-recent-item strong{display:block;font-size:15px;color:#fff;}
.foodos-recent-item p{margin:5px 0 0;font-size:12px;color:rgba(255,255,255,.55);}
.status{padding:8px 14px;border-radius:999px;background:rgba(0,255,136,.12);color:#00ff88;font-size:12px;font-weight:900;}
@media(max-width:700px){
.foodos-recent-item{flex-direction:column;align-items:flex-start;gap:14px;}
}
`}</style>
    </>
  );
}
