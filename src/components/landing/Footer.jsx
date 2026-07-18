import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SITE_CONFIG from "../../config/siteConfig";
import { useTheme } from "../../context/ThemeContext";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Modules", href: "/#modules" },
      { label: "Business Suite", href: "/#business-suite" },
      { label: "AI Automation", href: "/#ai-automation" },
      { label: "Analytics", href: "/#analytics" },
    ],
  },
  {
    title: "Product",
    links: [
      { label: "Business Types", href: "/#business-types" },
      { label: "Workflow", href: "/#how-it-works" },
      { label: "Why Choose", href: "/#why-choose" },
      { label: "Integrations", href: "/#integrations" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/contact" },
      { label: "Book Demo", href: "/contact" },
      { label: "Free Trial", href: "/#pricing" },
      { label: "Testimonials", href: "/#testimonials" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Refund Policy", href: "/refund" },
      { label: "Disclaimer", href: "/disclaimer" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function Footer() {
  const { isDark } = useTheme();
  const logo = isDark ? SITE_CONFIG.logo.light : SITE_CONFIG.logo.dark;

  return (
    <footer className="foodos-footer">
      <div className="foodos-container">
        <div className="footer-main">
          <div className="footer-brand-block">
            <a className="footer-brand" href="#home">
              <span className="footer-logo">
                <img src={logo} alt={`${SITE_CONFIG.appName} Logo`} />
              </span>
              <span>
                BR30 <b>FoodOS</b>
              </span>
            </a>

            <p>The complete operating system for restaurants, cafes, cloud kitchens and every modern food business.</p>

            <div className="footer-social">
              <a href="https://www.youtube.com/@br30traderofficial" target="_blank" rel="noreferrer" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/br30Traderofficial" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/share/1DDJYGYYDf/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://x.com/MukeshKuma48159" target="_blank" rel="noreferrer" aria-label="X Twitter">
                <FaXTwitter />
              </a>
            </div>
          </div>

          <div className="footer-columns">
            {footerColumns.map((column) => (
              <div className="footer-column" key={column.title}>
                <h3>{column.title}</h3>

                {column.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link to={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>{SITE_CONFIG.footer.copyright}</p>
          <span>Built by BR30 Group • India</span>
        </div>
      </div>

      <style>{`
.foodos-footer{padding:46px 0 22px;border-top:1px solid var(--border);background:linear-gradient(135deg,rgba(0,229,168,.03),rgba(34,199,255,.018)),rgba(255,255,255,.018);backdrop-filter:blur(18px)}.footer-main{display:grid;grid-template-columns:.9fr 1.1fr;gap:36px;align-items:start}.footer-brand-block p{max-width:370px;margin:16px 0 0;color:var(--text-soft);font-size:14px;line-height:1.65;font-weight:400}.footer-brand{display:inline-flex;align-items:center;gap:11px;color:var(--text);font-size:18px;font-weight:500;letter-spacing:-.02em}.footer-brand b{color:var(--primary);font-weight:700}.footer-logo{width:42px;height:42px;border-radius:14px;display:grid;place-items:center;overflow:hidden;border:1px solid var(--border);background:rgba(0,0,0,.22)}.footer-logo img{width:100%;height:100%;object-fit:cover;border-radius:14px}.footer-social{display:flex;align-items:center;gap:10px;margin-top:18px}.footer-social a{width:38px;height:38px;border-radius:999px;border:1px solid var(--border);background:var(--card);color:var(--text-soft);display:grid;place-items:center;font-size:16px;text-decoration:none;transition:all .22s ease}.footer-social a:hover{transform:translateY(-2px);color:#031015;background:linear-gradient(135deg,var(--primary),var(--secondary));border-color:transparent}.footer-columns{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}.footer-column h3{margin:0 0 12px;color:var(--text);font-size:14px;font-weight:600;letter-spacing:-.01em}.footer-column a{display:block;width:max-content;margin-top:9px;color:var(--text-muted);font-size:13px;font-weight:400;transition:all .22s ease}.footer-column a:hover{color:var(--primary);transform:translateX(3px)}.footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:34px;padding-top:18px;border-top:1px solid var(--border)}.footer-bottom p,.footer-bottom span{margin:0;color:var(--text-muted);font-size:13px;font-weight:400}@media(max-width:900px){.footer-main{grid-template-columns:1fr}.footer-columns{grid-template-columns:repeat(2,1fr)}}@media(max-width:560px){.foodos-footer{padding-top:36px}.footer-columns{grid-template-columns:repeat(2,1fr);gap:26px 18px}.footer-bottom{flex-direction:column;align-items:flex-start}.footer-column a{display:block;width:100%}.footer-brand-block p{max-width:100%}}
      `}</style>
    </footer>
  );
}
