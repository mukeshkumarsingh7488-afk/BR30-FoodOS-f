import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { LogIn, Menu, Moon, Sun, X } from "lucide-react";
import SITE_CONFIG from "../../config/siteConfig";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const logo = isDark ? SITE_CONFIG.logo.light : SITE_CONFIG.logo.dark;

  const navItems = [
    { label: "Home", href: "/#home" },
    { label: "Features", href: "/#features" },
    { label: "Business", href: "/#business-types" },
    { label: "Modules", href: "/#modules" },
    { label: "Workflow", href: "/#how-it-works" },
    { label: "Pricing", href: "/#pricing" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className={`foodos-nav-shell ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-bg-orb nav-bg-orb-one" />
        <div className="nav-bg-orb nav-bg-orb-two" />

        <div className="foodos-nav">
          <a className="foodos-brand" href="#home" onClick={closeMenu}>
            <span className="foodos-logo-box">
              <img src={logo} alt={`${SITE_CONFIG.appName} Logo`} />
            </span>
            <span className="brand-text">
              BR30 <b>FoodOS</b>
            </span>
          </a>

          <nav className="foodos-nav-links" aria-label="Main Navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="foodos-nav-actions">
            <button className="theme-icon-btn" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle theme" type="button">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link className="login-btn" to="/login">
              <LogIn size={16} />
              <span>Login</span>
            </Link>

            <Link className="nav-cta" to="/register">
              Start Free Trial
            </Link>

            <button className="mobile-menu-btn" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle menu" type="button">
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-nav-panel ${isOpen ? "open" : ""}`}>
        <div className="mobile-nav-card">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}

          <Link className="mobile-login-btn" to="/login" onClick={closeMenu}>
            <LogIn size={16} />
            Login
          </Link>

          <Link className="mobile-nav-cta" to="/register" onClick={closeMenu}>
            Start 14-Day Free Trial
          </Link>
        </div>
      </div>

      <style>{`
.foodos-nav-shell{position:fixed;top:22px;left:0;right:0;z-index:999;padding:0 18px;pointer-events:none}.nav-bg-orb{position:absolute;border-radius:999px;filter:blur(22px);opacity:.55;pointer-events:none}.nav-bg-orb-one{top:-40px;left:8%;width:240px;height:90px;background:rgba(0,229,168,.24)}.nav-bg-orb-two{top:-34px;right:10%;width:260px;height:90px;background:rgba(34,199,255,.2)}.foodos-nav{position:relative;width:min(1280px,100%);height:78px;margin:0 auto;padding:0 16px 0 14px;display:flex;align-items:center;justify-content:space-between;gap:18px;border:1px solid var(--border-strong);border-radius:24px;background:linear-gradient(135deg,rgba(0,229,168,.075),rgba(34,199,255,.045)),var(--surface);box-shadow:0 24px 90px rgba(0,0,0,.2),0 0 0 1px rgba(255,255,255,.02) inset;backdrop-filter:blur(22px);pointer-events:auto;overflow:hidden;transition:all .28s ease}.foodos-nav::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 8% 50%,rgba(0,229,168,.16),transparent 28%),radial-gradient(circle at 92% 50%,rgba(34,199,255,.14),transparent 30%);pointer-events:none}.foodos-nav-shell.scrolled .foodos-nav{height:70px;border-radius:999px;background:linear-gradient(135deg,rgba(0,229,168,.09),rgba(34,199,255,.055)),var(--surface);box-shadow:var(--shadow-soft)}.foodos-brand{position:relative;z-index:2;display:flex;align-items:center;gap:14px;min-width:220px}.foodos-logo-box{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:rgba(0,0,0,.34);border:1px solid var(--border);box-shadow:0 14px 34px rgba(0,0,0,.24);overflow:hidden}.foodos-logo-box img{width:100%;height:100%;object-fit:cover;border-radius:14px}.brand-text{font-size:20px;font-weight:500;letter-spacing:-.02em;color:var(--text)}.brand-text b{color:var(--primary);font-weight:700}.foodos-nav-links{position:relative;z-index:2;display:flex;align-items:center;justify-content:center;gap:2px;flex:1}.foodos-nav-links a{position:relative;padding:10px 8px;border-radius:999px;color:var(--text-soft);font-size:14px;font-weight:500;letter-spacing:-.01em;white-space:nowrap;transition:all .22s ease}.foodos-nav-links a:hover{color:var(--text);background:rgba(255,255,255,.055)}.foodos-nav-links a::after{content:"";position:absolute;left:50%;bottom:2px;width:0;height:2px;border-radius:99px;background:linear-gradient(135deg,var(--primary),var(--secondary));transform:translateX(-50%);transition:width .22s ease}.foodos-nav-links a:hover::after{width:24px}.foodos-nav-actions{position:relative;z-index:2;display:flex;align-items:center;gap:10px}.theme-icon-btn,.mobile-menu-btn{width:46px;height:46px;border-radius:999px;border:1px solid var(--border);background:rgba(255,255,255,.045);color:var(--text);display:grid;place-items:center;transition:all .22s ease}.theme-icon-btn:hover,.mobile-menu-btn:hover{transform:translateY(-2px);border-color:var(--border-strong);background:var(--surface-2)}.login-btn{height:46px;padding:0 16px;border-radius:999px;border:1px solid var(--border-strong);background:rgba(255,255,255,.035);color:var(--text);font-size:14px;font-weight:500;display:inline-flex;align-items:center;gap:8px;transition:all .22s ease}.login-btn:hover{transform:translateY(-2px);background:var(--surface-2);border-color:var(--primary)}.nav-cta{height:46px;padding:0 21px;border-radius:999px;background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;box-shadow:var(--shadow-glow);transition:all .22s ease}.nav-cta:hover{transform:translateY(-2px);filter:saturate(1.08)}.mobile-menu-btn{display:none}.mobile-nav-panel{position:fixed;inset:0;z-index:998;padding:112px 16px 20px;background:rgba(0,0,0,.38);backdrop-filter:blur(12px);opacity:0;pointer-events:none;transition:all .25s ease}.mobile-nav-panel.open{opacity:1;pointer-events:auto}.mobile-nav-card{width:min(520px,100%);margin:0 auto;padding:18px;border:1px solid var(--border);border-radius:28px;background:var(--surface);box-shadow:var(--shadow-soft);transform:translateY(-12px);transition:transform .25s ease}.mobile-nav-panel.open .mobile-nav-card{transform:translateY(0)}.mobile-nav-card a{display:flex;align-items:center;justify-content:space-between;min-height:52px;padding:0 16px;border-radius:16px;color:var(--text);font-size:15px;font-weight:500}.mobile-nav-card a:hover{background:var(--surface-2)}.mobile-login-btn{justify-content:flex-start!important;gap:10px!important;border:1px solid var(--border);margin-top:8px}.mobile-nav-cta{margin-top:10px!important;background:linear-gradient(135deg,var(--primary),var(--secondary))!important;color:#031015!important;justify-content:center!important;font-weight:600!important}@media(max-width:1120px){.brand-text{display:none}.foodos-brand{min-width:auto}.foodos-nav-links a{font-size:13px;padding:10px 7px}}@media(max-width:980px){.foodos-nav-links{display:none}.mobile-menu-btn{display:grid}.nav-cta,.login-btn{display:none}.foodos-nav{height:68px;border-radius:22px}.foodos-nav-shell.scrolled .foodos-nav{height:64px}}@media(max-width:520px){.foodos-nav-shell{top:12px;padding:0 10px}.foodos-nav{height:62px;padding:0 10px}.foodos-logo-box{width:42px;height:42px;border-radius:13px}.foodos-logo-box img{border-radius:13px}.theme-icon-btn,.mobile-menu-btn{width:40px;height:40px}.mobile-nav-panel{padding-top:88px}}
`}</style>
    </>
  );
}
