import { CakeSlice, Coffee, Hotel, IceCreamBowl, Pizza, Sandwich, Soup, Store, UtensilsCrossed } from "lucide-react";

const trusted = [
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Cafes", icon: Coffee },
  { label: "Hotel Dining", icon: Hotel },
  { label: "Cloud Kitchens", icon: Soup },
  { label: "Pizza Shops", icon: Pizza },
  { label: "Fast Food", icon: Sandwich },
  { label: "Bakeries", icon: CakeSlice },
  { label: "Food Courts", icon: Store },
  { label: "Ice Cream", icon: IceCreamBowl },
];

export default function TrustedBusinesses() {
  return (
    <section className="trusted-section" id="trusted-businesses">
      <div className="foodos-container">
        <div className="trusted-card">
          <span>Trusted for every food business type</span>

          <div className="trusted-strip">
            {trusted.map((item) => {
              const Icon = item.icon;

              return (
                <div className="trusted-item" key={item.label}>
                  <Icon size={17} />
                  {item.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
.trusted-section{padding:0 0 56px;position:relative}.trusted-card{position:relative;padding:16px 18px;border:1px solid var(--border);border-radius:28px;background:linear-gradient(135deg,rgba(0,229,168,.04),rgba(34,199,255,.025)),var(--card);backdrop-filter:blur(20px);box-shadow:var(--shadow-soft);overflow:hidden}.trusted-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.1),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.07),transparent 30%);pointer-events:none}.trusted-card>span{position:relative;z-index:1;display:block;margin-bottom:12px;color:var(--text-muted);font-size:13px;font-weight:500;text-align:center}.trusted-strip{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;gap:10px;flex-wrap:wrap}.trusted-item{min-height:40px;padding:0 13px;border:1px solid var(--border);border-radius:999px;background:rgba(255,255,255,.03);color:var(--text-soft);display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:500;transition:all .22s ease}.trusted-item svg{color:var(--primary)}.trusted-item:hover{transform:translateY(-2px);color:var(--text);border-color:var(--border-strong);background:var(--surface-2)}@media(max-width:560px){.trusted-section{padding:0 0 42px}.trusted-card{border-radius:22px;padding:14px}.trusted-strip{justify-content:flex-start}.trusted-item{width:100%;justify-content:flex-start}}
      `}</style>
    </section>
  );
}
