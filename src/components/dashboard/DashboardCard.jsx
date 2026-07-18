export default function DashboardCard({ icon: Icon, label, value, change, tone = "green" }) {
  return (
    <>
      <article className={`foodos-stat-card ${tone}`}>
        <div className="foodos-stat-top">
          <div className="foodos-stat-icon">{Icon && <Icon size={22} />}</div>
          {change && <span>{change}</span>}
        </div>

        <div>
          <p>{label}</p>
          <h3>{value}</h3>
        </div>
      </article>

      <style>{`
        .foodos-stat-card{position:relative;overflow:hidden;padding:20px;border-radius:24px;background:linear-gradient(145deg,rgba(255,255,255,.075),rgba(255,255,255,.035));border:1px solid rgba(255,255,255,.1);box-shadow:0 22px 55px rgba(0,0,0,.22);}
        .foodos-stat-card:before{content:"";position:absolute;inset:-1px;background:radial-gradient(circle at top right,rgba(0,255,136,.18),transparent 42%);pointer-events:none;}
        .foodos-stat-card.blue:before{background:radial-gradient(circle at top right,rgba(0,217,255,.18),transparent 42%);}
        .foodos-stat-card.orange:before{background:radial-gradient(circle at top right,rgba(255,184,77,.18),transparent 42%);}
        .foodos-stat-card.purple:before{background:radial-gradient(circle at top right,rgba(170,110,255,.18),transparent 42%);}
        .foodos-stat-top{position:relative;display:flex;align-items:center;justify-content:space-between;gap:14px;margin-bottom:22px;}
        .foodos-stat-icon{width:48px;height:48px;border-radius:17px;background:rgba(0,255,136,.12);border:1px solid rgba(0,255,136,.18);display:flex;align-items:center;justify-content:center;color:#00ff88;}
        .foodos-stat-card.blue .foodos-stat-icon{background:rgba(0,217,255,.12);border-color:rgba(0,217,255,.18);color:#00d9ff;}
        .foodos-stat-card.orange .foodos-stat-icon{background:rgba(255,184,77,.12);border-color:rgba(255,184,77,.18);color:#ffb84d;}
        .foodos-stat-card.purple .foodos-stat-icon{background:rgba(170,110,255,.12);border-color:rgba(170,110,255,.18);color:#aa6eff;}
        .foodos-stat-top span{padding:7px 10px;border-radius:999px;background:rgba(0,255,136,.09);border:1px solid rgba(0,255,136,.16);color:#b9ffd7;font-size:11px;font-weight:950;}
        .foodos-stat-card p{position:relative;margin:0;color:rgba(244,255,248,.58);font-size:13px;font-weight:800;}
        .foodos-stat-card h3{position:relative;margin:8px 0 0;color:#fff;font-size:30px;font-weight:950;letter-spacing:-.04em;}
        @media(max-width:560px){.foodos-stat-card{padding:18px;border-radius:20px}.foodos-stat-card h3{font-size:26px}}
      `}</style>
    </>
  );
}
