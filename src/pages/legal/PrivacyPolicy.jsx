import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      {
        type: "paragraph",
        text: "This Privacy Policy explains how BR30 FoodOS, operated by BR30 Group, collects, uses, stores, protects and manages information when food businesses, restaurant owners, staff members, customers or visitors use our website, platform, digital menu, QR ordering system, dashboard, support channels or related services.",
      },
      {
        type: "paragraph",
        text: "BR30 FoodOS is designed as a cloud-based food business operating system for restaurants, cafes, cloud kitchens, bakeries, hotel restaurants, food courts and other food service businesses. Because our platform may process business information, customer order data and operational records, we take privacy and data protection seriously.",
      },
      {
        type: "note",
        text: "By using BR30 FoodOS, creating an account, scanning a QR code, placing an order, contacting support or accessing our services, you agree to the practices described in this Privacy Policy.",
      },
    ],
  },
  {
    id: "scope",
    title: "Scope of This Policy",
    content: [
      {
        type: "paragraph",
        text: "This Privacy Policy applies to all users of BR30 FoodOS, including business owners, restaurant administrators, managers, staff members, kitchen users, counter users, customers placing orders through QR codes and visitors browsing our website.",
      },
      {
        type: "list",
        items: [
          "BR30 FoodOS website and landing pages.",
          "Restaurant owner dashboard and business account areas.",
          "Digital menu and QR ordering pages.",
          "Kitchen display, counter billing and staff workflow screens.",
          "Customer order placement and order status pages.",
          "Support, demo, contact and enquiry forms.",
          "Future mobile applications, APIs, integrations and related services.",
        ],
      },
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: [
      {
        type: "paragraph",
        text: "We may collect different types of information depending on how you use BR30 FoodOS. The information collected may include personal information, business information, order information, device information, payment-related information and communication records.",
      },
      {
        type: "list",
        items: [
          "Name, mobile number, email address and login details.",
          "Restaurant or food business name, address, category and business profile.",
          "Menu items, prices, images, descriptions, categories, offers and discounts.",
          "Table numbers, QR codes, order details, order status and preparation time.",
          "Staff account details, role permissions and activity logs.",
          "Customer order details, feedback, reviews and communication preferences.",
          "Technical information such as IP address, browser type, device type and usage logs.",
        ],
      },
      {
        type: "note",
        text: "We only aim to collect information that is necessary for operating, improving, securing and supporting BR30 FoodOS.",
      },
    ],
  },
  {
    id: "business-information",
    title: "Business Information",
    content: [
      {
        type: "paragraph",
        text: "When a restaurant, cafe, cloud kitchen or other food business creates an account on BR30 FoodOS, we may collect information required to identify and operate that business account.",
      },
      {
        type: "list",
        items: [
          "Business name, outlet name and business type.",
          "Business address, city, state and country.",
          "Owner or authorized representative details.",
          "Restaurant operating hours, table count and branch details.",
          "Menu structure, item details, pricing, taxes and availability.",
          "Business settings, staff permissions, notification preferences and platform configurations.",
        ],
      },
    ],
  },
  {
    id: "customer-information",
    title: "Customer Information",
    content: [
      {
        type: "paragraph",
        text: "Customers may interact with BR30 FoodOS by scanning a QR code, viewing a digital menu, placing an order, checking order status, making a payment, submitting feedback or contacting the food business.",
      },
      {
        type: "list",
        items: [
          "Customer name and contact details when voluntarily provided.",
          "Table number or order source such as dine-in, takeaway or counter.",
          "Items ordered, order notes, quantity, price and order status.",
          "Feedback, ratings, reviews or support messages.",
          "Future loyalty, reward, coupon or CRM-related customer data if enabled by the business.",
        ],
      },
      {
        type: "note",
        text: "Customer data belongs to the respective food business account. BR30 FoodOS acts as a technology platform to help the business manage digital ordering and operations.",
      },
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS uses collected information to operate, maintain, improve and secure the platform while providing a reliable experience for restaurants, staff members and customers.",
      },
      {
        type: "list",
        items: [
          "Create and manage restaurant accounts.",
          "Process QR code orders and billing workflows.",
          "Manage menus, pricing and inventory records.",
          "Operate kitchen display systems and staff workflows.",
          "Generate business analytics and performance reports.",
          "Improve platform performance and customer experience.",
          "Provide technical support and respond to enquiries.",
          "Detect fraud, abuse, suspicious activities and security threats.",
          "Comply with applicable laws and legal obligations.",
        ],
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies and Similar Technologies",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS may use cookies, browser storage and similar technologies to improve platform functionality, remember user preferences, maintain login sessions and analyze website performance.",
      },
      {
        type: "list",
        items: ["Authentication cookies.", "Session management cookies.", "Language and theme preferences.", "Performance and analytics cookies.", "Security and fraud prevention cookies.", "Future CRM personalization cookies where applicable."],
      },
      {
        type: "note",
        text: "Users can disable cookies through browser settings. However, certain features of BR30 FoodOS may not function properly without essential cookies.",
      },
    ],
  },
  {
    id: "third-party-services",
    title: "Third-Party Services",
    content: [
      {
        type: "paragraph",
        text: "To provide reliable cloud services, BR30 FoodOS may integrate with carefully selected third-party providers. These providers process only the information necessary for delivering their respective services.",
      },
      {
        type: "list",
        items: ["Payment gateway providers.", "Cloud hosting providers.", "Email delivery services.", "SMS or OTP verification providers.", "Analytics and monitoring platforms.", "Customer support platforms.", "Future POS, accounting or CRM integrations approved by the business."],
      },
    ],
  },
  {
    id: "data-security",
    title: "Data Security",
    content: [
      {
        type: "paragraph",
        text: "Protecting business and customer information is one of our highest priorities. BR30 FoodOS implements technical, organizational and administrative safeguards designed to protect information against unauthorized access, disclosure, alteration or destruction.",
      },
      {
        type: "list",
        items: [
          "Encrypted communication using HTTPS.",
          "Secure authentication mechanisms.",
          "Role-based user access controls.",
          "Server-side validation and monitoring.",
          "Regular security updates and maintenance.",
          "Access logging for administrative actions.",
          "Backup and disaster recovery procedures.",
        ],
      },
      {
        type: "note",
        text: "Although we implement industry-standard security practices, no internet-based service can guarantee absolute security. Users should also protect their own account credentials.",
      },
    ],
  },
  {
    id: "payments",
    title: "Payments",
    content: [
      {
        type: "paragraph",
        text: "When payment features are enabled, payment transactions are processed through authorized payment gateway providers. BR30 FoodOS does not intentionally store complete debit card, credit card or banking credentials on its own servers unless legally required or explicitly supported through certified payment infrastructure.",
      },
      {
        type: "list",
        items: ["Payment status.", "Transaction reference numbers.", "Invoice details.", "Subscription information.", "Tax-related transaction records where applicable."],
      },
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention",
    content: [
      {
        type: "paragraph",
        text: "Information is retained only for as long as necessary to operate the platform, provide requested services, comply with legal obligations, resolve disputes and enforce agreements.",
      },
      {
        type: "list",
        items: ["Active business account records.", "Order history and invoices.", "Operational logs.", "Support conversations.", "Security records.", "Compliance-related information."],
      },
      {
        type: "note",
        text: "When legally permitted and technically feasible, certain information may be deleted, anonymized or archived after it is no longer required.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: [
      {
        type: "paragraph",
        text: "Depending on applicable laws and regulations, users may have certain rights regarding their personal information maintained by BR30 FoodOS.",
      },
      {
        type: "list",
        items: [
          "Request access to personal information.",
          "Request correction of inaccurate information.",
          "Request deletion where legally permitted.",
          "Request restriction of processing in certain situations.",
          "Withdraw consent where processing is based on consent.",
          "Contact BR30 FoodOS regarding privacy-related concerns.",
        ],
      },
    ],
  },
  {
    id: "children-privacy",
    title: "Children's Privacy",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS is intended for restaurants, food businesses, business owners, managers and authorized staff members. Our platform is not designed for direct use by children under the age required by applicable law without appropriate supervision.",
      },
      {
        type: "paragraph",
        text: "If we become aware that personal information has been collected from a child in a manner inconsistent with applicable laws, we will take reasonable steps to remove such information where appropriate.",
      },
    ],
  },
  {
    id: "policy-updates",
    title: "Changes to this Privacy Policy",
    content: [
      {
        type: "paragraph",
        text: "BR30 Group may update this Privacy Policy from time to time to reflect improvements to BR30 FoodOS, legal requirements, security enhancements, new features, integrations or operational changes.",
      },
      {
        type: "paragraph",
        text: "Whenever significant changes are made, the 'Last Updated' date displayed on this page will be revised. Continued use of BR30 FoodOS after such updates constitutes acceptance of the revised Privacy Policy.",
      },
      {
        type: "note",
        text: "We encourage users to review this Privacy Policy periodically to remain informed about how information is collected, used and protected.",
      },
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      {
        type: "paragraph",
        text: "If you have any questions, concerns or requests regarding this Privacy Policy, your personal information or the data practices of BR30 FoodOS, please contact us using the information below.",
      },
      {
        type: "list",
        items: ["Organization: BR30 Group", "Platform: BR30 FoodOS", "Email: support.br30trader@gmail.com", "Website: https://br30group.com (Coming Soon)", "Support: Available through official support channels."],
      },
      {
        type: "note",
        text: "We aim to respond to privacy-related enquiries within a reasonable time and in accordance with applicable laws and regulations.",
      },
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="This Privacy Policy explains how BR30 FoodOS collects, uses, stores, protects and manages information relating to restaurant businesses, staff members, customers and visitors while using our platform and services."
      lastUpdated="July 05, 2026"
      version="Version 1.0"
      readTime="12 min read"
      effectiveDate="July 05, 2026"
      sections={sections}
    />
  );
}
