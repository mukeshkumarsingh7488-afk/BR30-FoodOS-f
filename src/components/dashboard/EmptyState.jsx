import { Inbox } from "lucide-react";

export default function EmptyState({ title = "No Data Found", description = "Content will appear here once available." }) {
  return (
    <>
      <div className="foodos-empty">
        <div className="icon">
          <Inbox size={44} />
        </div>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      <style>{`
.foodos-empty{padding:70px 20px;border-radius:24px;background:rgba(255,255,255,.04);border:1px dashed rgba(255,255,255,.12);display:flex;flex-direction:column;align-items:center;text-align:center;}
.foodos-empty .icon{width:82px;height:82px;border-radius:22px;background:rgba(0,255,136,.1);display:flex;align-items:center;justify-content:center;color:#00ff88;margin-bottom:24px;}
.foodos-empty h3{margin:0;font-size:24px;font-weight:900;color:#fff;}
.foodos-empty p{max-width:520px;margin-top:14px;font-size:14px;line-height:1.8;color:rgba(255,255,255,.58);}
`}</style>
    </>
  );
}
