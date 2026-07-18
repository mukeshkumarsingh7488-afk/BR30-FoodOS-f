import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer: "Every food business gets 14 days of full BR30 FoodOS access to explore QR ordering, menu management, dashboard, kitchen flow, billing workflow and core platform features. The free trial also includes 30 AI credits for testing AI-powered tools.",
  },
  {
    question: "What happens after the free trial ends?",
    answer: "After the 14-day trial ends, access will be restricted until the business activates a paid monthly or yearly plan. This keeps the platform simple, clean and subscription-based.",
  },
  {
    question: "Are AI features included in BR30 FoodOS?",
    answer: "Yes. The 14-day free trial includes 30 AI credits. The Monthly Plan includes 1,000 AI credits every month, while the Yearly Plan includes 15,000 AI credits every year.",
  },
  {
    question: "What are AI credits used for?",
    answer: "AI credits are consumed only when using AI-powered features such as Menu Generator, AI Business Assistant, Review Reply, Sales Insights, Food Content Generation and future AI tools.",
  },
  {
    question: "What happens when my AI credits are exhausted?",
    answer: "Your core BR30 FoodOS features continue working normally. Only AI-powered features pause until your credits renew or you purchase additional AI Credit Packs.",
  },
  {
    question: "Can I purchase additional AI credits?",
    answer: "Yes. Additional AI Credit Packs will be available so your business can continue using AI without upgrading the entire subscription.",
  },
  {
    question: "Do unused AI credits roll over?",
    answer: "AI credits are valid for the active billing period. Monthly credits reset every month and yearly credits reset every year.",
  },
  {
    question: "Does BR30 FoodOS support QR ordering?",
    answer: "Yes. Each table can have a unique QR code. When a customer scans it, the system automatically detects the table and sends the order to the business dashboard in real time.",
  },
  {
    question: "Can I customize my digital menu?",
    answer: "Yes. Businesses can create categories, add menu items, descriptions, prices, multiple images, availability status, offers, discounts and future menu customization options.",
  },
  {
    question: "Does it work on mobile devices?",
    answer: "Yes. BR30 FoodOS is designed to work smoothly on mobile, tablet, laptop and desktop. Customers can order from their phones, while owners and staff can manage operations from any device.",
  },
  {
    question: "Can I print bills and receipts?",
    answer: "Yes. The counter workflow is planned for billing, receipt generation, order history and future printer support including thermal printer integration.",
  },
  {
    question: "Can I manage staff roles?",
    answer: "Yes. BR30 FoodOS is designed with role-based access for owners, managers, cashiers, kitchen staff and waiters so every team member gets only the access they need.",
  },
  {
    question: "Is my business data secure?",
    answer: "Yes. BR30 FoodOS is planned as a secure SaaS platform with business-level data isolation, authentication, authorization, secure access and scalable cloud architecture.",
  },
  {
    question: "Which food businesses are supported?",
    answer: "BR30 FoodOS supports restaurants, cafes, cloud kitchens, bakeries, food courts, fast food outlets, juice shops, tea stalls, coffee chains, pubs, bars, hotel restaurants and many other food business models.",
  },
  {
    question: "Will future updates be included?",
    answer: "Core platform updates will be included as the product grows. Future advanced modules such as inventory, POS, AI, delivery and multi-branch management may be introduced in phases.",
  },
  {
    question: "Can BR30 FoodOS work without AI?",
    answer: "Yes. BR30 FoodOS works normally without AI. POS, QR ordering, billing, kitchen, inventory, staff and reports continue working even if AI credits are not used or exhausted.",
  },
  {
    question: "Is BR30 FoodOS suitable for small restaurants and cafes?",
    answer: "Yes. BR30 FoodOS is built for small cafes, restaurants, cloud kitchens and growing food brands. A business can start simple and unlock more advanced workflows as it grows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="foodos-container faq-layout">
        <div className="faq-left">
          <span>Frequently Asked Questions</span>

          <h2>Everything you need to know before starting.</h2>

          <p>Learn about pricing, AI credits, free trial, QR ordering, billing, security, supported businesses, subscriptions and future BR30 FoodOS updates.</p>

          <div className="faq-help-card">
            <HelpCircle size={22} />
            <div>
              <strong>Still have questions?</strong>
              <p>Contact BR30 Group and we will help you understand how BR30 FoodOS can fit your food business.</p>
            </div>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <article className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                <button type="button" className="faq-question" onClick={() => toggleFAQ(index)} aria-expanded={isOpen}>
                  <span>{item.question}</span>
                  <ChevronDown size={20} />
                </button>

                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <style>{`
.faq-section{padding:18px 0 104px;position:relative}.faq-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:34px;align-items:start}.faq-left{position:sticky;top:126px}.faq-left>span{display:inline-flex;margin-bottom:14px;color:var(--primary);font-size:14px;font-weight:500;letter-spacing:-.01em}.faq-left h2{margin:0;color:var(--text);font-size:clamp(34px,4vw,56px);line-height:1.04;font-weight:700;letter-spacing:-.045em}.faq-left>p{max-width:560px;margin:18px 0 0;color:var(--text-soft);font-size:18px;line-height:1.7;font-weight:400}.faq-help-card{margin-top:28px;padding:18px;border:1px solid var(--border);border-radius:26px;background:linear-gradient(135deg,rgba(0,229,168,.045),rgba(34,199,255,.03)),var(--card);display:grid;grid-template-columns:44px 1fr;gap:14px;align-items:flex-start;backdrop-filter:blur(18px)}.faq-help-card svg{width:44px;height:44px;padding:11px;border-radius:16px;color:var(--primary);background:rgba(0,229,168,.08);border:1px solid rgba(0,229,168,.16)}.faq-help-card strong{display:block;color:var(--text);font-size:16px;font-weight:600;letter-spacing:-.015em}.faq-help-card p{margin:6px 0 0;color:var(--text-soft);font-size:14px;line-height:1.6;font-weight:400}.faq-list{display:grid;gap:12px;max-height:760px;overflow-y:auto;padding-right:8px;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:var(--primary) transparent}.faq-list::-webkit-scrollbar{width:8px}.faq-list::-webkit-scrollbar-track{background:rgba(255,255,255,.03);border-radius:999px}.faq-list::-webkit-scrollbar-thumb{background:linear-gradient(var(--primary),var(--secondary));border-radius:999px}.faq-item{border:1px solid var(--border);border-radius:24px;background:linear-gradient(135deg,rgba(0,229,168,.035),rgba(34,199,255,.02)),var(--card);backdrop-filter:blur(20px);overflow:hidden;transition:all .25s ease}.faq-item.open{border-color:var(--border-strong);box-shadow:var(--shadow-soft)}.faq-question{width:100%;min-height:72px;padding:0 20px;border:0;background:transparent;color:var(--text);display:flex;align-items:center;justify-content:space-between;gap:18px;text-align:left}.faq-question span{font-size:17px;font-weight:600;letter-spacing:-.02em}.faq-question svg{color:var(--text-muted);flex:0 0 auto;transition:transform .25s ease,color .25s ease}.faq-item.open .faq-question svg{transform:rotate(180deg);color:var(--primary)}.faq-answer{max-height:0;overflow:hidden;transition:max-height .3s ease}.faq-item.open .faq-answer{max-height:260px}.faq-answer p{margin:0;padding:0 20px 22px;color:var(--text-soft);font-size:15px;line-height:1.75;font-weight:400}@media(max-width:980px){.faq-layout{grid-template-columns:1fr}.faq-left{position:relative;top:auto;text-align:center}.faq-left>p{margin-left:auto;margin-right:auto}.faq-help-card{text-align:left}.faq-list{max-height:640px}}@media(max-width:560px){.faq-section{padding:10px 0 70px}.faq-left>p{font-size:16px}.faq-help-card{grid-template-columns:1fr;border-radius:22px}.faq-list{max-height:620px;padding-right:4px}.faq-question{min-height:66px;padding:0 16px}.faq-question span{font-size:15px}.faq-answer p{padding:0 16px 18px}.faq-item{border-radius:20px}}
      `}</style>
    </section>
  );
}
