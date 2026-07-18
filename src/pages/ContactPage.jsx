import { ArrowLeft, Building2, Clock3, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

const contactCards = [
  {
    title: "Email Support",
    text: "For legal, support, demo and business enquiries.",
    value: "support.br30trader@gmail.com",
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=BR30%20FoodOS%20Contact%20Request&body=Hello%20BR30%20FoodOS%20Team,%0A%0AI%20want%20to%20contact%20you%20regarding%3A%20%0A%0AName%3A%20%0ABusiness%20Name%3A%20%0ACity%3A%20%0APhone%3A%20%0A%0AMessage%3A%20%0A%0AThank%20you.",
  },
  {
    title: "WhatsApp",
    text: "Quick demo, business discussion and onboarding support.",
    value: "Chat on WhatsApp",
    icon: MessageCircle,
    href: "https://wa.me/91622986380?text=Hello%20BR30%20FoodOS%20Team,%20I%20want%20to%20know%20more%20about%20BR30%20FoodOS.",
  },
  {
    title: "Demo Booking",
    text: "Book a product walkthrough for your restaurant or food business.",
    value: "Request Demo",
    icon: Send,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=support.br30trader@gmail.com&su=BR30%20FoodOS%20Demo%20Request&body=Hello%20BR30%20FoodOS%20Team,%0A%0AI%20want%20to%20book%20a%20demo%20for%20my%20food%20business.%0A%0AName%3A%20%0ABusiness%20Name%3A%20%0ABusiness%20Type%3A%20%0ACity%3A%20%0APhone%3A%20%0APreferred%20Demo%20Time%3A%20%0A%0AThank%20you.",
  },
  {
    title: "Business Location",
    text: "BR30 Group is building digital products for Indian businesses.",
    value: "India",
    icon: MapPin,
    href: "#contact-form",
  },
];

export default function ContactPage() {
  return (
    <main className="foodos-page contact-page">
      <Navbar />

      <section className="contact-hero">
        <div className="foodos-container">
          <Link className="contact-back" to="/">
            <ArrowLeft size={17} />
            Back to Home
          </Link>

          <div className="contact-hero-card">
            <span className="contact-kicker">
              <ShieldCheck size={16} />
              BR30 FoodOS Contact Center
            </span>

            <h1>Let’s build your food business operating system.</h1>

            <p>Contact BR30 FoodOS for product demos, restaurant onboarding, support, business enquiries, partnerships and future enterprise solutions.</p>

            <div className="contact-hero-meta">
              <span>
                <Building2 size={15} />
                SaaS Platform
              </span>
              <span>
                <Clock3 size={15} />
                Business Support
              </span>
              <span>
                <Phone size={15} />
                India
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contact-form">
        <div className="foodos-container contact-layout">
          <div className="contact-info">
            <div className="contact-grid">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <a key={item.title} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noreferrer" : undefined} className="contact-card">
                    <div className="contact-card-icon">
                      <Icon size={22} />
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    <strong>{item.value}</strong>
                  </a>
                );
              })}
            </div>

            <div className="business-hours">
              <h2>Business Hours</h2>

              <div className="hours-row">
                <span>Monday - Friday</span>
                <strong>09:00 AM - 07:00 PM</strong>
              </div>

              <div className="hours-row">
                <span>Saturday</span>
                <strong>10:00 AM - 05:00 PM</strong>
              </div>

              <div className="hours-row">
                <span>Sunday</span>
                <strong>Closed</strong>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            <h2>Contact BR30 FoodOS</h2>

            <p>Fill out the form below and our team will contact you as soon as possible.</p>

            <form>
              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your full name" />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter your email" />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="Enter phone number" />
                </div>

                <div className="form-group">
                  <label>Business Name</label>
                  <input type="text" placeholder="Restaurant / Cafe Name" />
                </div>

                <div className="form-group full-width">
                  <label>Business Type</label>

                  <select>
                    <option>Restaurant</option>
                    <option>Cafe</option>
                    <option>Cloud Kitchen</option>
                    <option>Bakery</option>
                    <option>Fast Food Outlet</option>
                    <option>Food Court</option>
                    <option>Sweet Shop</option>
                    <option>Hotel</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label>Message</label>

                  <textarea rows="6" placeholder="Tell us about your business and requirements..." />
                </div>
              </div>

              <button type="button" className="contact-submit">
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />

      <style>{`
.contact-page{min-height:100vh}.contact-hero{padding:128px 0 34px;position:relative}.contact-back{display:inline-flex;align-items:center;gap:8px;margin-bottom:18px;color:var(--text-soft);font-size:14px;font-weight:500;transition:all .22s ease}.contact-back:hover{color:var(--primary);transform:translateX(-3px)}.contact-hero-card{position:relative;padding:38px;border:1px solid var(--border-strong);border-radius:38px;background:linear-gradient(135deg,rgba(0,229,168,.07),rgba(34,199,255,.04)),var(--surface);box-shadow:var(--shadow-soft);overflow:hidden}.contact-hero-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.16),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.11),transparent 30%);pointer-events:none}.contact-kicker,.contact-hero-card h1,.contact-hero-card p,.contact-hero-meta{position:relative;z-index:1}.contact-kicker{display:inline-flex;align-items:center;gap:8px;color:var(--primary);font-size:14px;font-weight:500;margin-bottom:18px}.contact-hero-card h1{max-width:930px;margin:0;color:var(--text);font-size:clamp(42px,6vw,78px);line-height:1.02;font-weight:700;letter-spacing:-.055em}.contact-hero-card p{max-width:820px;margin:18px 0 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.contact-hero-meta{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:26px}.contact-hero-meta span{min-height:36px;padding:0 12px;border-radius:999px;border:1px solid var(--border);background:rgba(255,255,255,.035);color:var(--text-soft);display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:500}.contact-hero-meta svg{color:var(--primary)}.contact-section{padding:18px 0 96px}.contact-layout{display:grid;grid-template-columns:.95fr 1.05fr;gap:24px;align-items:start}.contact-info{display:grid;gap:18px}.contact-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.contact-card{position:relative;min-height:210px;padding:20px;border:1px solid var(--border);border-radius:28px;background:linear-gradient(135deg,rgba(0,229,168,.04),rgba(34,199,255,.025)),var(--card);backdrop-filter:blur(20px);overflow:hidden;transition:all .25s ease}.contact-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.12),transparent 34%);opacity:0;transition:opacity .25s ease}.contact-card:hover{transform:translateY(-5px);border-color:var(--border-strong);box-shadow:var(--shadow-soft)}.contact-card:hover::before{opacity:1}.contact-card-icon,.contact-card h3,.contact-card p,.contact-card strong{position:relative;z-index:1}.contact-card-icon{width:48px;height:48px;border-radius:17px;display:grid;place-items:center;color:var(--primary);background:rgba(0,229,168,.09);border:1px solid rgba(0,229,168,.18)}.contact-card h3{margin:24px 0 10px;color:var(--text);font-size:20px;font-weight:600;letter-spacing:-.025em}.contact-card p{margin:0;color:var(--text-soft);font-size:14px;line-height:1.7;font-weight:400}.contact-card strong{display:block;margin-top:18px;color:var(--primary);font-size:14px;font-weight:600}.business-hours{padding:24px;border:1px solid var(--border);border-radius:30px;background:linear-gradient(135deg,rgba(0,229,168,.035),rgba(34,199,255,.02)),var(--card);box-shadow:var(--shadow-soft)}.business-hours h2{margin:0 0 18px;color:var(--text);font-size:26px;font-weight:700;letter-spacing:-.035em}.hours-row{display:flex;align-items:center;justify-content:space-between;gap:14px;min-height:52px;border-top:1px solid var(--border);color:var(--text-soft);font-size:14px;font-weight:400}.hours-row strong{color:var(--text);font-weight:600;text-align:right}.contact-form-card{position:relative;padding:28px;border:1px solid var(--border-strong);border-radius:34px;background:linear-gradient(135deg,rgba(0,229,168,.055),rgba(34,199,255,.035)),var(--surface);box-shadow:var(--shadow-soft);overflow:hidden}.contact-form-card::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 18% 0%,rgba(0,229,168,.12),transparent 34%),radial-gradient(circle at 100% 100%,rgba(34,199,255,.08),transparent 30%);pointer-events:none}.contact-form-card h2,.contact-form-card p,.contact-form-card form{position:relative;z-index:1}.contact-form-card h2{margin:0;color:var(--text);font-size:34px;font-weight:700;letter-spacing:-.045em}.contact-form-card>p{margin:12px 0 24px;color:var(--text-soft);font-size:15px;line-height:1.7;font-weight:400}.form-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.form-group{display:grid;gap:8px}.form-group.full-width{grid-column:1/-1}.form-group label{color:var(--text-soft);font-size:13px;font-weight:500}.form-group input,.form-group select,.form-group textarea{width:100%;border:1px solid var(--border);border-radius:16px;background:var(--card);color:var(--text);padding:14px 15px;outline:none;font-size:14px;font-weight:400;transition:all .22s ease}.form-group input:focus,.form-group select:focus,.form-group textarea:focus{border-color:var(--primary);box-shadow:0 0 0 4px rgba(0,229,168,.08)}.form-group textarea{resize:vertical;min-height:150px}.contact-submit{margin-top:18px;width:100%;height:52px;border:0;border-radius:999px;background:linear-gradient(135deg,var(--primary),var(--secondary));color:#031015;font-size:15px;font-weight:700;box-shadow:var(--shadow-glow);transition:all .22s ease}.contact-submit:hover{transform:translateY(-2px);filter:saturate(1.08)}@media(max-width:980px){.contact-layout{grid-template-columns:1fr}.contact-hero{padding-top:112px}}@media(max-width:680px){.contact-grid,.form-grid{grid-template-columns:1fr}.contact-hero-card{padding:24px;border-radius:28px}.contact-hero-card p{font-size:16px}.contact-section{padding:10px 0 70px}.contact-form-card,.business-hours{border-radius:26px;padding:20px}.contact-card{min-height:auto;border-radius:24px}.hours-row{align-items:flex-start;flex-direction:column;justify-content:center;padding:12px 0}.hours-row strong{text-align:left}}
      `}</style>
    </main>
  );
}
