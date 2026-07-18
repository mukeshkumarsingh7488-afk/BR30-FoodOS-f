import { Beer, CakeSlice, Coffee, CookingPot, CupSoda, Fish, GlassWater, Hotel, IceCreamBowl, Pizza, Salad, Sandwich, Soup, Store, UtensilsCrossed, Wine } from "lucide-react";

const businessGroups = [
  {
    title: "Restaurants & Dining",
    items: [
      { name: "Restaurant", icon: UtensilsCrossed },
      { name: "Hotel Restaurant", icon: Hotel },
      { name: "Food Court", icon: Store },
      { name: "Cloud Kitchen", icon: Soup },
    ],
  },
  {
    title: "Quick Service",
    items: [
      { name: "Fast Food", icon: Sandwich },
      { name: "Pizza Shop", icon: Pizza },
      { name: "Sandwich Shop", icon: Sandwich },
      { name: "Wrap Shop", icon: Sandwich },
      { name: "Momos Shop", icon: CookingPot },
      { name: "Street Food", icon: CookingPot },
    ],
  },
  {
    title: "Cafes & Beverages",
    items: [
      { name: "Cafe", icon: Coffee },
      { name: "Coffee Chain", icon: Coffee },
      { name: "Tea Stall", icon: CupSoda },
      { name: "Juice Shop", icon: CupSoda },
      { name: "Bubble Tea", icon: GlassWater },
    ],
  },
  {
    title: "Desserts & Bakery",
    items: [
      { name: "Bakery", icon: CakeSlice },
      { name: "Sweet Shop", icon: CakeSlice },
      { name: "Ice Cream", icon: IceCreamBowl },
    ],
  },
  {
    title: "Specialty Concepts",
    items: [
      { name: "Salad Bar", icon: Salad },
      { name: "Sushi", icon: Fish },
      { name: "Pub", icon: Beer },
      { name: "Bar", icon: Wine },
    ],
  },
];

export default function BusinessTypes() {
  const totalBusinesses = businessGroups.reduce((total, group) => total + group.items.length, 0);

  return (
    <section className="business-section" id="business-types">
      <div className="foodos-container">
        <div className="business-head">
          <span>{totalBusinesses}+ Business Types Supported</span>

          <h2>One platform that adapts to every food business.</h2>

          <p>Whether you run a restaurant, cafe, cloud kitchen, bakery, juice shop, food court or modern food brand — BR30 FoodOS adapts to your business, not the other way around.</p>
        </div>

        <div className="business-panel">
          {businessGroups.map((group) => (
            <div className="business-group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="business-pills">
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div className="business-pill" key={item.name}>
                      <span>
                        <Icon size={17} />
                      </span>
                      {item.name}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
.business-section{padding:42px 0 90px;position:relative}.business-head{max-width:820px;margin:0 auto 34px;text-align:center}.business-head span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.business-head h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.business-head p{max-width:760px;margin:18px auto 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.business-panel{position:relative;padding:22px;border:1px solid var(--border);border-radius:34px;background:linear-gradient(135deg,rgba(0,229,168,.045),rgba(34,199,255,.03)),var(--card);backdrop-filter:blur(22px);box-shadow:var(--shadow-soft);overflow:hidden}.business-panel::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 12% 0%,rgba(0,229,168,.13),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.1),transparent 30%);pointer-events:none}.business-group{position:relative;z-index:1;padding:22px 0;border-bottom:1px solid var(--border)}.business-group:first-child{padding-top:6px}.business-group:last-child{border-bottom:0;padding-bottom:6px}.business-group h3{margin:0 0 14px;color:var(--text);font-size:18px;font-weight:600;letter-spacing:-.02em}.business-pills{display:flex;flex-wrap:wrap;gap:10px}.business-pill{min-height:44px;padding:0 15px;border-radius:999px;border:1px solid var(--border);background:rgba(255,255,255,.035);color:var(--text-soft);display:inline-flex;align-items:center;gap:9px;font-size:14px;font-weight:500;letter-spacing:-.01em;transition:all .24s ease}.business-pill span{width:28px;height:28px;border-radius:999px;display:grid;place-items:center;color:var(--primary);background:rgba(0,229,168,.08);border:1px solid rgba(0,229,168,.16);transition:all .24s ease}.business-pill:hover{transform:translateY(-3px);color:var(--text);border-color:var(--border-strong);background:var(--surface-2);box-shadow:0 16px 46px rgba(0,0,0,.16)}.business-pill:hover span{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;border-color:transparent}@media(max-width:680px){.business-section{padding:34px 0 64px}.business-head p{font-size:16px}.business-panel{padding:16px;border-radius:26px}.business-group{padding:18px 0}.business-pills{gap:8px}.business-pill{width:100%;justify-content:flex-start}}
      `}</style>
    </section>
  );
}
