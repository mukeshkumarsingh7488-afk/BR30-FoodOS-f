export default function PageHeader({ eyebrow, title, description, action }) {
  return (
    <>
      <div className="foodos-page-header">
        <div>
          {eyebrow && <p>{eyebrow}</p>}
          <h2>{title}</h2>
          {description && <span>{description}</span>}
        </div>

        {action && <div className="foodos-page-action">{action}</div>}
      </div>

      <style>{`
        .foodos-page-header{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:22px;}
        .foodos-page-header p{margin:0 0 8px;color:#00ff88;font-size:12px;font-weight:950;text-transform:uppercase;letter-spacing:.14em;}
        .foodos-page-header h2{margin:0;color:#fff;font-size:28px;font-weight:950;letter-spacing:-.045em;line-height:1.12;}
        .foodos-page-header span{display:block;margin-top:10px;max-width:680px;color:rgba(244,255,248,.62);font-size:14px;line-height:1.7;font-weight:600;}
        .foodos-page-action{flex:0 0 auto;}
        @media(max-width:760px){.foodos-page-header{align-items:flex-start;flex-direction:column}.foodos-page-header h2{font-size:24px}.foodos-page-action{width:100%;}}
      `}</style>
    </>
  );
}
