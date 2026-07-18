import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      {
        type: "paragraph",
        text: "These Terms and Conditions govern the use of BR30 FoodOS, a cloud-based software platform developed and operated by BR30 Group. By accessing, registering, subscribing to or using BR30 FoodOS, you acknowledge that you have read, understood and agree to be legally bound by these Terms.",
      },
      {
        type: "paragraph",
        text: "If you do not agree with any part of these Terms, you must discontinue the use of BR30 FoodOS immediately.",
      },
      {
        type: "note",
        text: "These Terms apply to all restaurant owners, business administrators, employees, customers using QR ordering, visitors and every individual or organization accessing BR30 FoodOS.",
      },
    ],
  },

  {
    id: "eligibility",
    title: "Eligibility",
    content: [
      {
        type: "paragraph",
        text: "To use BR30 FoodOS, you must have the legal capacity to enter into a binding agreement under the applicable laws of your jurisdiction.",
      },
      {
        type: "list",
        items: ["Restaurant owners.", "Cafe owners.", "Cloud kitchen operators.", "Hotel restaurants.", "Food courts.", "Authorized business managers.", "Authorized employees."],
      },
      {
        type: "paragraph",
        text: "By registering an account, you represent that all information submitted is accurate, complete and belongs to you or your organization.",
      },
    ],
  },

  {
    id: "account-registration",
    title: "Account Registration",
    content: [
      {
        type: "paragraph",
        text: "Certain features of BR30 FoodOS require account registration. Business owners are responsible for maintaining accurate account information and ensuring that login credentials remain confidential.",
      },
      {
        type: "list",
        items: ["Provide accurate business information.", "Maintain updated contact details.", "Protect passwords and login credentials.", "Restrict unauthorized account access.", "Notify BR30 FoodOS immediately if suspicious activity is detected."],
      },
      {
        type: "note",
        text: "You are solely responsible for all activities performed using your account unless otherwise required by applicable law.",
      },
    ],
  },

  {
    id: "services",
    title: "Platform Services",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS provides digital solutions for restaurants and food businesses. Platform features may evolve over time as new capabilities are introduced.",
      },
      {
        type: "list",
        items: [
          "Digital Menu Management",
          "QR Ordering",
          "Kitchen Display System",
          "Restaurant Billing",
          "Customer Management (CRM)",
          "Restaurant Analytics",
          "Business Reports",
          "Inventory Management",
          "Employee Management",
          "Multi-Branch Management",
          "Marketing & Promotions",
          "AI Automation",
          "Integrations with supported services",
        ],
      },
    ],
  },

  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: [
      {
        type: "paragraph",
        text: "Users agree to use BR30 FoodOS only for lawful business purposes and in accordance with these Terms.",
      },
      {
        type: "list",
        items: [
          "Do not misuse the platform.",
          "Do not attempt unauthorized access.",
          "Do not interfere with servers or infrastructure.",
          "Do not upload malicious software or harmful code.",
          "Do not impersonate another business or individual.",
          "Do not use BR30 FoodOS for illegal activities.",
          "Do not attempt reverse engineering or source code extraction.",
        ],
      },
      {
        type: "note",
        text: "Violation of these Terms may result in temporary suspension or permanent termination of your account.",
      },
    ],
  },
  {
    id: "subscription-billing",
    title: "Subscription and Billing",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS may be offered on a subscription basis. Subscription plans, pricing, features and billing cycles may be displayed on the official website, dashboard or communicated through official BR30 Group channels.",
      },
      {
        type: "list",
        items: ["Monthly subscription plan.", "Yearly subscription plan.", "Applicable taxes where required.", "Plan activation after successful payment.", "Service access based on active subscription status.", "Feature access based on the selected plan or platform policy."],
      },
      {
        type: "note",
        text: "Subscription charges are subject to change with prior notice where applicable. Continued use after pricing updates means you accept the revised pricing.",
      },
    ],
  },

  {
    id: "free-trial",
    title: "Free Trial",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS may provide a free trial period to eligible food businesses. The free trial is intended to help businesses evaluate the platform before purchasing a paid subscription.",
      },
      {
        type: "list",
        items: [
          "Free trial duration may be 14 days unless otherwise stated.",
          "Trial access may include selected or full platform features.",
          "BR30 Group may modify, extend, restrict or discontinue trial access at its discretion.",
          "After the trial ends, access may be restricted until a paid plan is activated.",
          "Trial misuse, duplicate accounts or fraudulent registrations may lead to account suspension.",
        ],
      },
    ],
  },

  {
    id: "restaurant-responsibilities",
    title: "Restaurant and Business Responsibilities",
    content: [
      {
        type: "paragraph",
        text: "Restaurants, cafes, cloud kitchens and other food businesses using BR30 FoodOS are responsible for the accuracy, legality and quality of the information, menu items, prices, offers and services they provide through the platform.",
      },
      {
        type: "list",
        items: [
          "Maintain accurate menu item names, prices and descriptions.",
          "Update item availability, offers and discounts responsibly.",
          "Ensure food quality, hygiene, preparation and delivery standards.",
          "Comply with applicable food safety, tax, consumer protection and business laws.",
          "Handle customer complaints, refunds and service issues relating to the restaurant’s own operations.",
          "Ensure staff members use assigned accounts responsibly.",
        ],
      },
      {
        type: "note",
        text: "BR30 FoodOS provides technology infrastructure. The food business remains responsible for its food, service, customer experience and legal compliance.",
      },
    ],
  },

  {
    id: "customer-orders",
    title: "Customer Orders",
    content: [
      {
        type: "paragraph",
        text: "Customers may place orders by scanning QR codes, using digital menus or other ordering channels enabled by the food business. Orders placed through BR30 FoodOS are transmitted to the respective restaurant or business dashboard.",
      },
      {
        type: "list",
        items: ["Table-wise QR orders.", "Dine-in orders.", "Takeaway orders.", "Counter orders.", "Future online or delivery orders.", "Order status updates such as received, preparing, ready, completed or cancelled."],
      },
      {
        type: "paragraph",
        text: "The restaurant or food business is responsible for accepting, preparing, serving, cancelling or completing customer orders.",
      },
    ],
  },

  {
    id: "payments-taxes",
    title: "Payments, Taxes and Invoices",
    content: [
      {
        type: "paragraph",
        text: "Payment features may be enabled through third-party payment gateway providers. BR30 FoodOS may support payment tracking, invoice generation, billing history and subscription payments depending on platform availability.",
      },
      {
        type: "list",
        items: ["Subscription payments for BR30 FoodOS.", "Customer order payments where enabled.", "Invoice and receipt generation.", "Payment status tracking.", "Applicable GST, tax or statutory charges where required.", "Third-party payment gateway processing terms."],
      },
      {
        type: "note",
        text: "Users are responsible for ensuring that tax rates, invoice details and business billing information are accurate and compliant with applicable Indian laws.",
      },
    ],
  },

  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS, including its software, design, dashboard, workflows, brand name, logo, documentation, content, UI elements, database structure, architecture and related materials, is owned by BR30 Group or its licensors.",
      },
      {
        type: "list",
        items: [
          "Users may not copy, resell or redistribute BR30 FoodOS software.",
          "Users may not reverse engineer or attempt to extract source code.",
          "Users may not reproduce BR30 branding without permission.",
          "Users may not create derivative products based on BR30 FoodOS without written consent.",
          "Restaurant owners retain ownership of their own menu content, business data, images and customer records subject to these Terms.",
        ],
      },
    ],
  },
  {
    id: "account-suspension",
    title: "Account Suspension and Termination",
    content: [
      {
        type: "paragraph",
        text: "BR30 Group reserves the right to suspend, restrict or permanently terminate any BR30 FoodOS account if we reasonably believe these Terms have been violated or if continued access may create security, legal or operational risks.",
      },
      {
        type: "list",
        items: ["Violation of these Terms and Conditions.", "Fraudulent or misleading activities.", "Unauthorized platform access attempts.", "Abuse of free trial programs.", "Non-payment of subscription fees where applicable.", "Activities that negatively affect platform security or stability."],
      },
      {
        type: "note",
        text: "Termination of an account does not remove any outstanding legal obligations, payment responsibilities or liabilities that arose before termination.",
      },
    ],
  },

  {
    id: "limitation-liability",
    title: "Limitation of Liability",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS is provided on an 'as available' and 'as is' basis. While we continuously work to improve reliability, we do not guarantee uninterrupted availability or error-free operation at all times.",
      },
      {
        type: "list",
        items: [
          "Internet connectivity issues.",
          "Third-party payment gateway failures.",
          "Cloud infrastructure outages.",
          "Customer disputes between restaurants and customers.",
          "Loss of business opportunities.",
          "Loss resulting from incorrect business configurations.",
          "Indirect, incidental or consequential damages to the maximum extent permitted by law.",
        ],
      },
    ],
  },

  {
    id: "indemnification",
    title: "Indemnification",
    content: [
      {
        type: "paragraph",
        text: "You agree to indemnify and hold harmless BR30 Group, BR30 FoodOS, its founders, employees, contractors and affiliates against claims, losses, liabilities, damages, legal expenses or costs arising from your misuse of the platform, violation of these Terms or infringement of third-party rights.",
      },
    ],
  },

  {
    id: "service-modifications",
    title: "Platform Updates and Service Changes",
    content: [
      {
        type: "paragraph",
        text: "BR30 Group continuously improves BR30 FoodOS. Features, pricing, modules, integrations, user interface, APIs and supported services may be updated, modified or discontinued without affecting applicable legal rights.",
      },
      {
        type: "list",
        items: ["New features may be introduced.", "Existing modules may be enhanced.", "Performance improvements may be deployed.", "Security updates may be released.", "Deprecated features may be removed."],
      },
      {
        type: "note",
        text: "We will make reasonable efforts to communicate significant platform changes whenever appropriate.",
      },
    ],
  },

  {
    id: "governing-law",
    title: "Governing Law and Jurisdiction",
    content: [
      {
        type: "paragraph",
        text: "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of the Republic of India. Any disputes relating to BR30 FoodOS shall be subject to the competent courts having jurisdiction under applicable Indian law.",
      },
      {
        type: "paragraph",
        text: "Nothing in these Terms limits any statutory consumer rights available under applicable law.",
      },
    ],
  },

  {
    id: "changes-to-terms",
    title: "Changes to These Terms",
    content: [
      {
        type: "paragraph",
        text: "BR30 Group may revise these Terms and Conditions from time to time to reflect platform improvements, legal requirements, business practices or security updates.",
      },
      {
        type: "paragraph",
        text: "The revised version becomes effective when published on the official BR30 FoodOS website unless otherwise stated.",
      },
      {
        type: "note",
        text: "Continued use of BR30 FoodOS after updated Terms are published constitutes acceptance of the revised Terms.",
      },
    ],
  },

  {
    id: "contact",
    title: "Contact Information",
    content: [
      {
        type: "paragraph",
        text: "For any questions regarding these Terms and Conditions, subscriptions, business accounts or legal matters relating to BR30 FoodOS, please contact us through our official support channels.",
      },
      {
        type: "list",
        items: ["Organization: BR30 Group", "Platform: BR30 FoodOS", "Email: support.br30trader@gmail.com", "Website: https://br30group.com (Coming Soon)", "Support: Official BR30 FoodOS Support Team"],
      },
      {
        type: "note",
        text: "We recommend reviewing these Terms periodically to stay informed about your rights, responsibilities and any updates to the platform.",
      },
    ],
  },
];

export default function TermsConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="These Terms and Conditions govern your access to and use of BR30 FoodOS. By creating an account or using our platform, you agree to comply with these Terms."
      lastUpdated="July 05, 2026"
      version="Version 1.0"
      readTime="15 min read"
      effectiveDate="July 05, 2026"
      sections={sections}
    />
  );
}
