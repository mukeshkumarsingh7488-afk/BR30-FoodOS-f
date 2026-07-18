import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import SITE_CONFIG from "../../config/siteConfig";
import { useTheme } from "../../context/ThemeContext";

export default function AuthLayout({ badge = "BR30 FoodOS", title, subtitle, highlights = [], infoTitle, infoText, cardTitle, cardSubtitle, children }) {
  const { isDark } = useTheme();
  const logo = isDark ? SITE_CONFIG.logo.light : SITE_CONFIG.logo.dark;

  return (
    <main className="foodos-auth-page">
      <section className="auth-shell">
        <div className="auth-left">
          <Link to="/" className="auth-pill">
            <ArrowLeft size={17} />
            <span className="auth-pill-logo">
              <img src={logo} alt={`${SITE_CONFIG.appName} Logo`} />
            </span>
            <span>{badge}</span>
          </Link>

          <h1>{title}</h1>
          <p className="auth-subtitle">{subtitle}</p>

          {highlights.length > 0 && (
            <div className="auth-feature-box">
              <h3>What's included</h3>

              <div className="auth-feature-list">
                {highlights.map((item) => (
                  <div className="auth-feature-item" key={item}>
                    <CheckCircle2 size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {infoTitle && (
            <div className="auth-info-box">
              <strong>{infoTitle}</strong>
              <p>{infoText}</p>
            </div>
          )}
        </div>

        <div className="auth-right">
          <div className="auth-card">
            <div className="auth-card-head">
              <h2>{cardTitle}</h2>
              <p>{cardSubtitle}</p>
            </div>

            {children}
          </div>
        </div>
      </section>

      <style>{`
.foodos-auth-page{min-height:auto;background:var(--hero-gradient);color:var(--text);display:grid;place-items:center;padding:150px 18px 70px;position:relative;overflow:hidden}.foodos-auth-page::before{content:"";position:absolute;inset:-20%;background:radial-gradient(circle at 20% 18%,rgba(0,229,168,.18),transparent 28%),radial-gradient(circle at 78% 12%,rgba(34,199,255,.16),transparent 30%),radial-gradient(circle at 72% 88%,rgba(255,213,79,.08),transparent 26%);pointer-events:none}.auth-shell{width:min(1100px,100%);display:grid;grid-template-columns:1.05fr .95fr;gap:54px;align-items:start;position:relative;z-index:2}.auth-left{display:flex;flex-direction:column;justify-content:flex-start;padding-top:20px}.auth-pill{width:max-content;display:inline-flex;align-items:center;gap:10px;padding:9px 16px;border-radius:999px;border:1px solid rgba(0,229,168,.36);background:rgba(0,0,0,.2);color:var(--text);font-size:14px;font-weight:800;margin-bottom:28px;backdrop-filter:blur(18px)}.auth-pill svg{color:var(--primary)}.auth-pill-logo{width:26px;height:26px;border-radius:8px;display:grid;place-items:center;overflow:hidden;background:rgba(0,0,0,.34);border:1px solid var(--border)}.auth-pill-logo img{width:100%;height:100%;object-fit:cover}.auth-left h1{max-width:none;width:max-content;font-size:clamp(34px,4vw,58px);line-height:1.02;margin:0 0 18px;color:var(--text);letter-spacing:-.055em;white-space:nowrap}.auth-subtitle{max-width:520px;color:var(--text-soft);font-size:18px;line-height:1.75;margin:0}.auth-feature-box{margin-top:30px;max-width:520px}.auth-feature-box h3{font-size:18px;margin:0 0 18px;color:var(--text)}.auth-feature-list{display:grid;gap:14px}.auth-feature-item{display:flex;align-items:center;gap:12px;color:var(--text-soft);font-size:16px}.auth-feature-item svg{color:var(--primary);fill:rgba(0,229,168,.14);flex:0 0 auto}.auth-info-box{margin-top:26px;max-width:520px;padding:18px;border:1px solid rgba(0,229,168,.22);background:linear-gradient(135deg,rgba(0,229,168,.11),rgba(34,199,255,.06));border-radius:18px;color:var(--text-soft);box-shadow:0 20px 55px rgba(0,0,0,.14)}.auth-info-box strong{display:block;color:var(--primary);font-size:15px;margin-bottom:8px}.auth-info-box p{margin:0;font-size:14px;line-height:1.7}.auth-right{display:flex;justify-content:center}.auth-card{width:min(450px,100%);padding:30px;border-radius:26px;border:1px solid var(--border-strong);background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.018)),var(--surface);box-shadow:0 30px 90px rgba(0,0,0,.24);backdrop-filter:blur(24px)}.auth-card-head{margin-bottom:24px}.auth-card-head h2{font-size:30px;line-height:1.12;margin:0 0 8px;color:var(--text);letter-spacing:-.04em}.auth-card-head p{margin:0;color:var(--text-soft);font-size:14px;line-height:1.55}.auth-form{display:grid;gap:16px}.auth-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:14px}.auth-field{display:grid;gap:8px}.auth-field label{font-size:14px;font-weight:700;color:var(--text)}.auth-input-wrap{position:relative}.auth-field input{width:100%;height:48px;border:1px solid var(--border);border-radius:12px;background:rgba(255,255,255,.07);color:var(--text);outline:none;padding:0 14px;font-size:14px;transition:all .2s ease}.auth-field input:focus{border-color:var(--primary);box-shadow:0 0 0 4px rgba(0,229,168,.12)}.auth-field input::placeholder{color:var(--text-muted)}.auth-password-btn{position:absolute;right:11px;top:50%;transform:translateY(-50%);width:30px;height:30px;border:0;background:transparent;color:var(--text-muted);display:grid;place-items:center}.auth-error{color:var(--danger);font-size:12px;font-weight:600}.auth-form-row{display:flex;align-items:center;justify-content:space-between;gap:12px;color:var(--text-soft);font-size:14px}.auth-checkbox{display:inline-flex;align-items:center;gap:8px}.auth-checkbox input{width:15px;height:15px;accent-color:var(--primary)}.auth-link{color:var(--primary);font-weight:700}.auth-submit{width:100%;height:50px;border:0;border-radius:13px;background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;font-weight:800;font-size:15px;display:inline-flex;align-items:center;justify-content:center;gap:10px;box-shadow:var(--shadow-glow);transition:all .22s ease}.auth-submit:hover{transform:translateY(-2px);filter:saturate(1.08)}.auth-submit:disabled{opacity:.72;cursor:not-allowed;transform:none}.auth-divider{display:flex;align-items:center;gap:12px;color:var(--text-muted);font-size:12px;margin:4px 0}.auth-divider::before,.auth-divider::after{content:"";height:1px;background:var(--border);flex:1}.auth-bottom-text{text-align:center;color:var(--text-soft);font-size:14px;margin:0}.auth-bottom-text a{color:var(--primary);font-weight:800}.auth-message{display:flex;align-items:center;gap:8px;padding:12px 14px;border-radius:13px;background:rgba(0,229,168,.1);border:1px solid rgba(0,229,168,.22);color:var(--primary);font-size:13px;line-height:1.5}@media(max-width:920px){.foodos-auth-page{place-items:start center;padding:118px 16px 54px}.auth-shell{grid-template-columns:1fr;gap:28px}.auth-left{text-align:center;align-items:center}.auth-feature-box,.auth-info-box{width:100%;max-width:560px;text-align:left}.auth-right{width:100%}.auth-card{max-width:560px}.auth-subtitle{font-size:16px}}@media(max-width:560px){.foodos-auth-page{padding:98px 12px 42px}.auth-left h1{font-size:34px}.auth-card{padding:22px;border-radius:22px}.auth-grid-2{grid-template-columns:1fr}.auth-form-row{align-items:flex-start;flex-direction:column}.auth-feature-box{margin-top:34px}.auth-feature-item{font-size:14px}.auth-card-head h2{font-size:26px}.auth-pill{font-size:12px;padding:8px 12px}}
      `}</style>
    </main>
  );
}
