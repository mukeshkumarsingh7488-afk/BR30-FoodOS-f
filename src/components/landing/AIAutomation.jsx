import { Bot, BrainCircuit, Camera, MessageSquareText, Sparkles, TrendingUp } from "lucide-react";

const aiFeatures = [
  { title: "AI Menu Generator", text: "Create menu ideas, item descriptions and category suggestions faster.", icon: Bot },
  { title: "AI Sales Forecast", text: "Predict busy hours, demand patterns and possible revenue trends.", icon: TrendingUp },
  { title: "AI Review Reply", text: "Generate professional replies for customer reviews and feedback.", icon: MessageSquareText },
  { title: "AI Food Photography", text: "Future-ready tools for creating premium food visuals and menu images.", icon: Camera },
  { title: "AI Customer Insights", text: "Understand repeat customers, favorite items and loyalty opportunities.", icon: BrainCircuit },
  { title: "AI Business Assistant", text: "Ask questions about sales, orders, inventory and growth from one assistant.", icon: Sparkles },
];

export default function AIAutomation() {
  return (
    <section className="ai-section" id="ai-automation">
      <div className="foodos-container ai-layout">
        <div className="ai-content">
          <span>AI Automation</span>
          <h2>Future-ready intelligence for modern food businesses.</h2>
          <p>BR30 FoodOS is designed with AI-ready architecture to help food businesses make smarter decisions, automate repetitive work and understand customers better.</p>
        </div>

        <div className="ai-grid">
          {aiFeatures.map((item) => {
            const Icon = item.icon;

            return (
              <article className="ai-card" key={item.title}>
                <div className="ai-icon">
                  <Icon size={21} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
.ai-section{padding:18px 0 104px;position:relative}.ai-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:34px;align-items:center}.ai-content>span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.ai-content h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.ai-content p{max-width:560px;margin:18px 0 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.ai-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.ai-card{position:relative;min-height:220px;padding:22px;border:1px solid var(--border);border-radius:28px;background:linear-gradient(135deg,rgba(0,229,168,.045),rgba(34,199,255,.03)),var(--card);backdrop-filter:blur(22px);overflow:hidden;transition:all .25s ease}.ai-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.13),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.09),transparent 30%);opacity:0;transition:opacity .25s ease;pointer-events:none}.ai-card:hover{transform:translateY(-5px);border-color:var(--border-strong);box-shadow:var(--shadow-soft)}.ai-card:hover::before{opacity:1}.ai-icon,.ai-card h3,.ai-card p{position:relative;z-index:1}.ai-icon{width:48px;height:48px;border-radius:17px;display:grid;place-items:center;color:var(--primary);background:rgba(0,229,168,.09);border:1px solid rgba(0,229,168,.18);transition:all .25s ease}.ai-card:hover .ai-icon{background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;border-color:transparent}.ai-card h3{margin:28px 0 10px;color:var(--text);font-size:20px;font-weight:600;letter-spacing:-.025em}.ai-card p{margin:0;color:var(--text-soft);font-size:15px;line-height:1.7;font-weight:400}@media(max-width:980px){.ai-layout{grid-template-columns:1fr}.ai-content{text-align:center}.ai-content p{margin-left:auto;margin-right:auto}}@media(max-width:620px){.ai-section{padding:10px 0 70px}.ai-content p{font-size:16px}.ai-grid{grid-template-columns:1fr}.ai-card{min-height:auto;border-radius:26px;padding:18px}}
      `}</style>
    </section>
  );
}
