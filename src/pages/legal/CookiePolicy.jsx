import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    id: "overview",
    title: "Cookie Policy Overview",
    content: [
      {
        type: "paragraph",
        text: "This Cookie Policy explains how BR30 FoodOS uses cookies and similar technologies when you visit our website, restaurant dashboard, digital menu, QR ordering system and related services.",
      },
      {
        type: "paragraph",
        text: "Cookies help improve security, remember preferences, enhance user experience and enable important platform functionality.",
      },
      {
        type: "note",
        text: "By continuing to use BR30 FoodOS, you agree to the use of cookies as described in this Cookie Policy unless disabled through your browser settings.",
      },
    ],
  },

  {
    id: "what-are-cookies",
    title: "What are Cookies?",
    content: [
      {
        type: "paragraph",
        text: "Cookies are small text files stored on your browser or device when you visit a website. They help websites recognize returning users, remember settings and improve browsing experience.",
      },
      {
        type: "list",
        items: ["Remember login sessions.", "Store language and theme preferences.", "Improve website performance.", "Enable secure authentication.", "Support analytics and reporting."],
      },
    ],
  },

  {
    id: "types-of-cookies",
    title: "Types of Cookies We Use",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS may use different categories of cookies depending on the services being accessed.",
      },
      {
        type: "list",
        items: ["Essential Cookies", "Authentication Cookies", "Preference Cookies", "Performance Cookies", "Analytics Cookies", "Security Cookies", "Future CRM Personalization Cookies"],
      },
    ],
  },

  {
    id: "essential-cookies",
    title: "Essential Cookies",
    content: [
      {
        type: "paragraph",
        text: "Essential cookies are necessary for the operation of BR30 FoodOS and cannot normally be disabled because they provide core platform functionality.",
      },
      {
        type: "list",
        items: ["User authentication.", "Secure login sessions.", "Dashboard access.", "Account security.", "System stability."],
      },
      {
        type: "note",
        text: "Without essential cookies, some parts of BR30 FoodOS may not function correctly.",
      },
    ],
  },

  {
    id: "analytics-cookies",
    title: "Analytics and Performance Cookies",
    content: [
      {
        type: "paragraph",
        text: "Performance cookies help us understand how visitors interact with BR30 FoodOS so that we can improve speed, usability and platform reliability.",
      },
      {
        type: "list",
        items: ["Anonymous visitor statistics.", "Page performance analysis.", "Traffic measurement.", "Feature usage insights.", "Error monitoring."],
      },
    ],
  },
  {
    id: "managing-cookies",
    title: "Managing Cookies",
    content: [
      {
        type: "paragraph",
        text: "Most web browsers allow users to control or disable cookies through browser settings. You may choose to remove existing cookies or prevent new cookies from being stored on your device.",
      },
      {
        type: "list",
        items: ["Delete existing cookies.", "Block all cookies.", "Allow only selected cookies.", "Receive notifications before cookies are stored.", "Clear browser storage periodically."],
      },
      {
        type: "note",
        text: "Disabling cookies may affect login sessions, dashboard functionality, saved preferences and other platform features.",
      },
    ],
  },

  {
    id: "third-party-cookies",
    title: "Third-Party Cookies",
    content: [
      {
        type: "paragraph",
        text: "Some features of BR30 FoodOS may rely on trusted third-party service providers. These providers may place cookies necessary for delivering their services in accordance with their own privacy and cookie policies.",
      },
      {
        type: "list",
        items: ["Payment gateway providers.", "Cloud hosting services.", "Website analytics providers.", "Performance monitoring tools.", "Future CRM and marketing integrations."],
      },
    ],
  },

  {
    id: "browser-controls",
    title: "Browser Controls",
    content: [
      {
        type: "paragraph",
        text: "Every modern browser provides options for managing cookies. Instructions vary depending on the browser and device you use.",
      },
      {
        type: "list",
        items: ["Google Chrome", "Mozilla Firefox", "Microsoft Edge", "Safari", "Opera", "Mobile browsers"],
      },
      {
        type: "paragraph",
        text: "Please refer to your browser's official help documentation for detailed cookie management instructions.",
      },
    ],
  },

  {
    id: "policy-updates",
    title: "Changes to this Cookie Policy",
    content: [
      {
        type: "paragraph",
        text: "BR30 Group may update this Cookie Policy whenever necessary to reflect changes in technology, legal requirements, browser standards, security practices or platform functionality.",
      },
      {
        type: "paragraph",
        text: "The latest version will always be available on the official BR30 FoodOS website. Continued use of the platform after updates indicates acceptance of the revised Cookie Policy.",
      },
      {
        type: "note",
        text: "We encourage users to review this Cookie Policy periodically to stay informed about how cookies are used.",
      },
    ],
  },

  {
    id: "contact",
    title: "Contact Information",
    content: [
      {
        type: "paragraph",
        text: "If you have questions regarding this Cookie Policy or how cookies are used within BR30 FoodOS, please contact us using our official support channels.",
      },
      {
        type: "list",
        items: ["Organization: BR30 Group", "Platform: BR30 FoodOS", "Email: support.br30trader@gmail.com", "Website: https://br30group.com (Coming Soon)", "Support: Official BR30 FoodOS Support Team"],
      },
      {
        type: "note",
        text: "We are committed to maintaining transparency regarding the technologies used to improve and secure BR30 FoodOS.",
      },
    ],
  },
];

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="This Cookie Policy explains how BR30 FoodOS uses cookies and similar technologies to improve security, performance and user experience across our platform."
      lastUpdated="July 05, 2026"
      version="Version 1.0"
      readTime="7 min read"
      effectiveDate="July 05, 2026"
      sections={sections}
    />
  );
}
