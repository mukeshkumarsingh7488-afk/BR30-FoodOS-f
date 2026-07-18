import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    id: "overview",
    title: "Disclaimer Overview",
    content: [
      {
        type: "paragraph",
        text: "This Disclaimer explains the limitations, responsibilities and conditions related to the use of BR30 FoodOS, its website, software platform, dashboard, digital menu, QR ordering system, analytics, AI-ready features and related services.",
      },
      {
        type: "paragraph",
        text: "BR30 FoodOS is provided as a technology platform to help restaurants, cafes, cloud kitchens, bakeries and other food businesses manage digital operations. The platform does not directly prepare food, serve customers, operate restaurants or control the day-to-day business decisions of any food business using the service.",
      },
      {
        type: "note",
        text: "By using BR30 FoodOS, you acknowledge and agree that the platform is a software service and not a substitute for your own business judgment, legal compliance, food safety obligations or professional advice.",
      },
    ],
  },

  {
    id: "technology-platform",
    title: "Technology Platform Only",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS provides tools such as digital menu management, QR ordering, kitchen workflow, billing support, analytics, CRM, inventory planning, AI-ready automation and related business management features.",
      },
      {
        type: "list",
        items: [
          "BR30 FoodOS does not own or operate restaurants listed on the platform.",
          "BR30 FoodOS does not cook, package, deliver or serve food items.",
          "BR30 FoodOS does not guarantee food taste, quality, hygiene or delivery timelines.",
          "BR30 FoodOS does not verify every menu item, image, price or offer uploaded by a business.",
          "BR30 FoodOS does not control how individual restaurants manage staff, customers or orders.",
        ],
      },
    ],
  },

  {
    id: "business-responsibility",
    title: "Food Business Responsibility",
    content: [
      {
        type: "paragraph",
        text: "Each restaurant, cafe, cloud kitchen or food business using BR30 FoodOS is solely responsible for its own operations, menu accuracy, pricing, taxes, food quality, customer service, refunds, hygiene, safety and legal compliance.",
      },
      {
        type: "list",
        items: [
          "Menu item names, descriptions and images.",
          "Food preparation, hygiene and safety.",
          "Order acceptance, cancellation and preparation time.",
          "Customer complaints and service disputes.",
          "Tax, GST and invoice accuracy.",
          "Applicable food license, business registration and regulatory compliance.",
        ],
      },
      {
        type: "note",
        text: "BR30 Group is not responsible for losses, claims or disputes arising from the independent actions or omissions of a food business using BR30 FoodOS.",
      },
    ],
  },

  {
    id: "information-accuracy",
    title: "Accuracy of Information",
    content: [
      {
        type: "paragraph",
        text: "We aim to keep information on BR30 FoodOS accurate and updated. However, menus, prices, offers, availability, preparation times, analytics, reports and business data may depend on information entered by users, staff members or integrated systems.",
      },
      {
        type: "list",
        items: ["Menu prices may change without notice.", "Item availability may depend on restaurant stock.", "Preparation time estimates may vary during busy hours.", "Reports and analytics depend on correct data entry.", "AI-generated suggestions may require human review."],
      },
    ],
  },

  {
    id: "ai-disclaimer",
    title: "AI and Automation Disclaimer",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS may include AI-ready features or future AI-powered tools such as sales forecasting, menu suggestions, review reply generation, customer insights, inventory predictions and business recommendations.",
      },
      {
        type: "list",
        items: [
          "AI outputs may not always be accurate or complete.",
          "AI suggestions should be reviewed before business use.",
          "AI forecasts are estimates and not guaranteed results.",
          "Users should not rely solely on AI for legal, financial, tax or food safety decisions.",
          "BR30 Group may improve, modify or remove AI features over time.",
        ],
      },
      {
        type: "note",
        text: "AI features are intended to assist decision-making, not replace professional judgment or business responsibility.",
      },
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS may integrate with third-party services including payment gateways, SMS providers, email services, cloud infrastructure providers, accounting software, POS systems and other supported integrations. These services operate under their own terms and privacy policies.",
      },
      {
        type: "list",
        items: ["Payment gateway providers.", "Cloud hosting providers.", "Email delivery services.", "SMS and OTP providers.", "Analytics services.", "Accounting and POS integrations.", "Future CRM and ERP integrations."],
      },
      {
        type: "note",
        text: "BR30 Group is not responsible for outages, delays or policy changes made by independent third-party service providers.",
      },
    ],
  },

  {
    id: "service-availability",
    title: "Service Availability",
    content: [
      {
        type: "paragraph",
        text: "While BR30 FoodOS strives to maintain high platform availability, uninterrupted access cannot be guaranteed. Maintenance activities, software updates, internet connectivity issues, cloud provider incidents or force majeure events may temporarily affect service availability.",
      },
      {
        type: "list",
        items: ["Scheduled maintenance.", "Emergency maintenance.", "Server upgrades.", "Cloud infrastructure outages.", "Internet connectivity failures.", "Natural disasters or force majeure events."],
      },
    ],
  },

  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "To the maximum extent permitted by applicable law, BR30 Group shall not be liable for indirect, incidental, consequential or special damages arising from the use or inability to use BR30 FoodOS.",
      },
      {
        type: "list",
        items: [
          "Loss of profits or revenue.",
          "Business interruption.",
          "Loss of customer data due to user error.",
          "Incorrect menu configuration.",
          "Restaurant operational decisions.",
          "Customer disputes between businesses and customers.",
          "Losses resulting from third-party systems or integrations.",
        ],
      },
      {
        type: "note",
        text: "Users remain responsible for maintaining backups of important business information and exercising appropriate business judgment.",
      },
    ],
  },

  {
    id: "professional-advice",
    title: "No Professional Advice",
    content: [
      {
        type: "paragraph",
        text: "Information, analytics, AI-generated recommendations and educational content available through BR30 FoodOS are provided for general business assistance only. They should not be interpreted as legal, accounting, financial, tax or regulatory advice.",
      },
      {
        type: "paragraph",
        text: "Users should consult qualified professionals before making decisions involving taxation, licensing, legal compliance, food safety or financial matters.",
      },
    ],
  },

  {
    id: "changes",
    title: "Changes to this Disclaimer",
    content: [
      {
        type: "paragraph",
        text: "BR30 Group reserves the right to update this Disclaimer whenever necessary to reflect platform improvements, legal requirements, operational changes or new services.",
      },
      {
        type: "paragraph",
        text: "The most recent version will always be published on the official BR30 FoodOS website.",
      },
    ],
  },

  {
    id: "contact",
    title: "Contact Information",
    content: [
      {
        type: "paragraph",
        text: "If you have questions regarding this Disclaimer or the operation of BR30 FoodOS, please contact us using our official support channels.",
      },
      {
        type: "list",
        items: ["Organization: BR30 Group", "Platform: BR30 FoodOS", "Email: support.br30trader@gmail.com", "Website: https://br30group.com (Coming Soon)", "Support: Official BR30 FoodOS Support Team"],
      },
      {
        type: "note",
        text: "By continuing to use BR30 FoodOS, you acknowledge that you have read, understood and accepted this Disclaimer.",
      },
    ],
  },
];

export default function Disclaimer() {
  return (
    <LegalLayout
      title="Disclaimer"
      subtitle="This Disclaimer explains the limitations of liability, platform responsibilities and important legal notices relating to the use of BR30 FoodOS and its services."
      lastUpdated="July 05, 2026"
      version="Version 1.0"
      readTime="9 min read"
      effectiveDate="July 05, 2026"
      sections={sections}
    />
  );
}
