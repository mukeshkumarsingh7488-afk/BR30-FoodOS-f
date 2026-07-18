import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import SITE_CONFIG from "../../config/siteConfig";
import { Link } from "react-router-dom";

export default function FinalCTA() {
  return (
    <section className="final-cta-section" id="contact">
      <div className="foodos-container">
        <div className="final-cta-card">
          <div className="cta-glow" />

          <div className="final-cta-content">
            <span>
              <Sparkles size={16} />
              Ready to modernize your food business?
            </span>

            <h2>
              Start your {SITE_CONFIG.freeTrialDays}-day free trial with <span className="gradient-text">BR30 FoodOS.</span>
            </h2>

            <p>Launch digital menus, QR ordering, kitchen workflow, billing, reports and business control from one powerful cloud platform.</p>

            <div className="final-cta-actions">
              <Link className="primary-btn" to="/register">
                Start Free Trial
                <ArrowRight size={18} />
              </Link>

              <a
                className="secondary-btn"
                target="_blank"
                rel="noopener noreferrer"
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=${encodeURIComponent("BR30 FoodOS Sales Enquiry")}&body=${encodeURIComponent(`Hello BR30 FoodOS Team,

                I would like to know more about BR30 FoodOS.

                Business Name:
                Business Type:
                City:
                Phone Number:

                Please contact me regarding pricing, demo and onboarding.

                Thank you.`)}`}
              >
                Contact Sales
              </a>
            </div>

            <div className="final-cta-points">
              <span>
                <CheckCircle2 size={16} />
                No Credit Card Required
              </span>

              <span>
                <CheckCircle2 size={16} />
                Single Simple Plan
              </span>

              <span>
                <CheckCircle2 size={16} />
                Built for Every Food Business
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
.final-cta-section{padding:18px 0 104px;position:relative}.final-cta-card{position:relative;min-height:430px;padding:58px 26px;border:1px solid var(--border-strong);border-radius:42px;background:linear-gradient(135deg,rgba(0,229,168,.08),rgba(34,199,255,.045)),var(--surface);box-shadow:var(--shadow-soft);overflow:hidden;display:grid;place-items:center;text-align:center}.final-cta-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 20% 0%,rgba(0,229,168,.18),transparent 36%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.13),transparent 34%);pointer-events:none}.cta-glow{position:absolute;width:540px;height:540px;border-radius:999px;background:radial-gradient(circle,rgba(0,229,168,.24),transparent 64%);filter:blur(18px)}.final-cta-content{position:relative;z-index:1;max-width:900px}.final-cta-content>span{display:inline-flex;align-items:center;gap:8px;margin-bottom:18px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.final-cta-content h2{margin:0;color:var(--text);font-size:clamp(38px,5vw,72px);line-height:1.02;font-weight:700;letter-spacing:-.055em}.final-cta-content p{max-width:760px;margin:22px auto 0;color:var(--text-soft);font-size:19px;line-height:1.7;font-weight:400}.final-cta-actions{display:flex;align-items:center;justify-content:center;gap:14px;flex-wrap:wrap;margin-top:34px}.final-cta-points{display:flex;align-items:center;justify-content:center;gap:18px;flex-wrap:wrap;margin-top:28px;color:var(--text-soft);font-size:13px;font-weight:500}.final-cta-points span{display:inline-flex;align-items:center;gap:8px}.final-cta-points svg{color:var(--primary)}@media(max-width:620px){.final-cta-section{padding:10px 0 70px}.final-cta-card{min-height:auto;padding:42px 18px;border-radius:30px}.final-cta-content p{font-size:16px}.final-cta-actions a{width:100%}.final-cta-points{align-items:flex-start;justify-content:flex-start;text-align:left}}
      `}</style>
    </section>
  );
}
