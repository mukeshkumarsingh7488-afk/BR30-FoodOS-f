import { ArrowLeft, Clock3, FileText, HelpCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../landing/Navbar";
import Footer from "../landing/Footer";

export default function LegalLayout({ title, subtitle, lastUpdated = "July 05, 2026", version = "v1.0", readTime = "7 min read", effectiveDate = "July 05, 2026", sections = [] }) {
  return (
    <main className="foodos-page legal-page">
      <Navbar />

      <section className="legal-hero">
        <div className="foodos-container">
          <Link className="legal-back" to="/">
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="legal-hero-card">
            <span className="legal-kicker">
              <ShieldCheck size={16} />
              BR30 FoodOS Legal Center
            </span>

            <h1>{title}</h1>

            <p>{subtitle}</p>

            <div className="legal-meta">
              <span>
                <FileText size={15} />
                {version}
              </span>

              <span>
                <Clock3 size={15} />
                {readTime}
              </span>

              <span>Effective: {effectiveDate}</span>

              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-content-section">
        <div className="foodos-container legal-layout">
          <aside className="legal-sidebar">
            <div className="legal-sidebar-card">
              <h3>Contents</h3>

              {sections.map((section, index) => (
                <a href={`#${section.id}`} key={section.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {section.title}
                </a>
              ))}
            </div>
          </aside>

          <div className="legal-content">
            {sections.map((section, index) => (
              <article className="legal-section-card" id={section.id} key={section.id}>
                <div className="legal-section-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h2>{section.title}</h2>
                </div>

                {section.content?.map((block, blockIndex) => {
                  if (block.type === "paragraph") {
                    return <p key={blockIndex}>{block.text}</p>;
                  }

                  if (block.type === "list") {
                    return (
                      <ul key={blockIndex}>
                        {block.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    );
                  }

                  if (block.type === "note") {
                    return (
                      <div className="legal-note" key={blockIndex}>
                        {block.text}
                      </div>
                    );
                  }

                  return null;
                })}
              </article>
            ))}

            <div className="legal-help-card">
              <HelpCircle size={24} />

              <div>
                <h3>Need help with this policy?</h3>

                <p>For questions about BR30 FoodOS legal policies, data handling, refunds, cookies or account terms, contact the BR30 FoodOS team.</p>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=BR30%20FoodOS%20Policy%20Support%20Request&body=Hello%20BR30%20FoodOS%20Support%20Team,%0A%0AI%20have%20a%20question%20regarding%20your%20legal%20policies.%0A%0APolicy%20Name%3A%20%0A%0AQuestion%3A%20%0A%0AName%3A%20%0ABusiness%20Name%3A%20%0ARegistered%20Email%3A%20%0A%0AThank%20you."
                  target="_blank"
                  rel="noopener noreferrer">
                  support.br30trader@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
.legal-page{min-height:100vh}.legal-hero{padding:128px 0 34px;position:relative}.legal-back{display:inline-flex;align-items:center;gap:8px;margin-bottom:18px;color:var(--text-soft);font-size:14px;font-weight:500;transition:all .22s ease}.legal-back:hover{color:var(--primary);transform:translateX(-3px)}.legal-hero-card{position:relative;padding:38px;border:1px solid var(--border-strong);border-radius:38px;background:linear-gradient(135deg,rgba(0,229,168,.07),rgba(34,199,255,.04)),var(--surface);box-shadow:var(--shadow-soft);overflow:hidden}.legal-hero-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.16),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.11),transparent 30%);pointer-events:none}.legal-kicker,.legal-hero-card h1,.legal-hero-card p,.legal-meta{position:relative;z-index:1}.legal-kicker{display:inline-flex;align-items:center;gap:8px;color:var(--primary);font-size:14px;font-weight:500;margin-bottom:18px}.legal-hero-card h1{margin:0;color:var(--text);font-size:clamp(42px,6vw,78px);line-height:1.02;font-weight:700;letter-spacing:-.055em}.legal-hero-card p{max-width:820px;margin:18px 0 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.legal-meta{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:26px}.legal-meta span{min-height:36px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:rgba(255,255,255,.035);color:var(--text-soft);display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:500}.legal-meta svg{color:var(--primary)}.legal-content-section{padding:18px 0 96px}.legal-layout{display:grid;grid-template-columns:280px 1fr;gap:24px;align-items:start}.legal-sidebar{position:sticky;top:116px}.legal-sidebar-card{padding:18px;border:1px solid var(--border);border-radius:26px;background:linear-gradient(135deg,rgba(0,229,168,.035),rgba(34,199,255,.02)),var(--card);backdrop-filter:blur(20px);box-shadow:var(--shadow-soft)}.legal-sidebar-card h3{margin:0 0 14px;color:var(--text);font-size:16px;font-weight:600;letter-spacing:-.015em}.legal-sidebar-card a{display:flex;align-items:center;gap:9px;min-height:42px;padding:0 12px;border-radius:14px;color:var(--text-soft);font-size:13px;font-weight:500;transition:all .22s ease}.legal-sidebar-card a span{color:var(--primary);font-size:11px;font-weight:700}.legal-sidebar-card a:hover{background:var(--surface-2);color:var(--text);transform:translateX(3px)}.legal-content{display:grid;gap:16px}.legal-section-card{scroll-margin-top:120px;position:relative;padding:28px;border:1px solid var(--border);border-radius:30px;background:linear-gradient(135deg,rgba(0,229,168,.035),rgba(34,199,255,.02)),var(--card);backdrop-filter:blur(20px);overflow:hidden}.legal-section-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 14% 0%,rgba(0,229,168,.09),transparent 34%);pointer-events:none}.legal-section-top,.legal-section-card p,.legal-section-card ul,.legal-note{position:relative;z-index:1}.legal-section-top{display:flex;align-items:center;gap:12px;margin-bottom:16px}.legal-section-top span{width:38px;height:38px;border-radius:14px;display:grid;place-items:center;background:rgba(0,229,168,.08);border:1px solid rgba(0,229,168,.18);color:var(--primary);font-size:12px;font-weight:700}.legal-section-top h2{margin:0;color:var(--text);font-size:26px;font-weight:700;letter-spacing:-.035em}.legal-section-card p{margin:0 0 14px;color:var(--text-soft);font-size:15px;line-height:1.85;font-weight:400}.legal-section-card ul{list-style:none;margin:4px 0 14px;padding:0;display:grid;gap:10px}.legal-section-card li{position:relative;padding-left:20px;color:var(--text-soft);font-size:15px;line-height:1.7;font-weight:400}.legal-section-card li::before{content:"";position:absolute;left:0;top:10px;width:7px;height:7px;border-radius:999px;background:var(--primary);box-shadow:0 0 14px rgba(0,229,168,.45)}.legal-note{margin-top:16px;padding:16px;border-radius:18px;border:1px solid rgba(0,229,168,.2);background:rgba(0,229,168,.07);color:var(--text-soft);font-size:14px;line-height:1.7;font-weight:400}.legal-help-card{display:grid;grid-template-columns:52px 1fr;gap:16px;padding:24px;border:1px solid var(--border-strong);border-radius:30px;background:linear-gradient(135deg,rgba(0,229,168,.06),rgba(34,199,255,.035)),var(--surface);box-shadow:var(--shadow-soft)}.legal-help-card>svg{width:52px;height:52px;padding:14px;border-radius:18px;color:#031015;background:linear-gradient(135deg,var(--primary),var(--secondary))}.legal-help-card h3{margin:0;color:var(--text);font-size:22px;font-weight:700;letter-spacing:-.025em}.legal-help-card p{margin:8px 0 12px;color:var(--text-soft);font-size:15px;line-height:1.7;font-weight:400}.legal-help-card a{color:var(--primary);font-size:14px;font-weight:600}@media(max-width:980px){.legal-layout{grid-template-columns:1fr}.legal-sidebar{position:relative;top:auto}.legal-sidebar-card{display:none}.legal-hero{padding-top:112px}}@media(max-width:560px){.legal-hero{padding:96px 0 24px}.legal-hero-card{padding:24px;border-radius:28px}.legal-hero-card p{font-size:16px}.legal-section-card{padding:20px;border-radius:24px}.legal-section-top{align-items:flex-start}.legal-section-top h2{font-size:22px}.legal-help-card{grid-template-columns:1fr;padding:20px;border-radius:24px}}
      `}</style>
    </main>
  );
}
