import LegalLayout from "../../components/legal/LegalLayout";

const sections = [
  {
    id: "overview",
    title: "Refund Policy Overview",
    content: [
      {
        type: "paragraph",
        text: "This Refund Policy explains how subscription fees, service charges and eligible refund requests are handled for BR30 FoodOS. Our goal is to maintain complete transparency while providing a fair and reliable subscription experience for restaurants, cafes, cloud kitchens and other food businesses.",
      },
      {
        type: "paragraph",
        text: "By purchasing any BR30 FoodOS subscription or paid service, you acknowledge that you have read, understood and accepted this Refund Policy together with our Terms & Conditions.",
      },
      {
        type: "note",
        text: "Please review your subscription plan carefully before completing any payment.",
      },
    ],
  },

  {
    id: "subscription-payments",
    title: "Subscription Payments",
    content: [
      {
        type: "paragraph",
        text: "BR30 FoodOS operates primarily as a Software-as-a-Service (SaaS) platform. Subscription fees provide access to software features, cloud services, updates, support and future platform improvements.",
      },
      {
        type: "list",
        items: ["Monthly subscription plans.", "Annual subscription plans.", "Business plans.", "Enterprise plans.", "Future premium modules or add-on services."],
      },
    ],
  },

  {
    id: "non-refundable",
    title: "Non-Refundable Payments",
    content: [
      {
        type: "paragraph",
        text: "Unless otherwise required by applicable law or specifically approved by BR30 Group, subscription payments are generally non-refundable after successful activation of the purchased service.",
      },
      {
        type: "list",
        items: ["Activated subscription plans.", "Partially used subscription periods.", "Unused remaining subscription days.", "Feature upgrades after activation.", "Custom development or implementation services."],
      },
      {
        type: "note",
        text: "Users are encouraged to evaluate BR30 FoodOS during any available trial period before purchasing a paid subscription.",
      },
    ],
  },

  {
    id: "eligible-refunds",
    title: "Situations Where Refunds May Be Considered",
    content: [
      {
        type: "paragraph",
        text: "Although refunds are generally not provided after service activation, BR30 Group may review refund requests on a case-by-case basis under exceptional circumstances.",
      },
      {
        type: "list",
        items: ["Duplicate payment made accidentally.", "Technical payment errors resulting in multiple charges.", "Incorrect billing caused directly by BR30 FoodOS.", "Subscription charged despite confirmed cancellation before renewal.", "Other exceptional situations reviewed by BR30 Group."],
      },
    ],
  },

  {
    id: "refund-request",
    title: "Submitting a Refund Request",
    content: [
      {
        type: "paragraph",
        text: "If you believe your payment qualifies for refund consideration, you should contact BR30 FoodOS support as soon as possible with complete payment details and a description of the issue.",
      },
      {
        type: "list",
        items: ["Registered business name.", "Registered email address.", "Payment reference or transaction ID.", "Date of payment.", "Reason for the refund request.", "Supporting screenshots or documents if available."],
      },
    ],
  },
  {
    id: "refund-processing",
    title: "Refund Processing Time",
    content: [
      {
        type: "paragraph",
        text: "If a refund request is approved by BR30 Group, the refund will be initiated using the original payment method wherever reasonably possible. Processing time may vary depending on the payment provider, banking system and applicable regulations.",
      },
      {
        type: "list",
        items: ["Refund approval is subject to verification.", "Approved refunds are generally initiated within 7–15 business days.", "Actual credit time depends on the payment gateway or bank.", "BR30 Group is not responsible for delays caused by third-party financial institutions."],
      },
      {
        type: "note",
        text: "Processing timelines are estimates and may vary depending on banking holidays, payment networks and verification requirements.",
      },
    ],
  },

  {
    id: "subscription-cancellation",
    title: "Subscription Cancellation",
    content: [
      {
        type: "paragraph",
        text: "Users may cancel future subscription renewals at any time through their account settings or by contacting BR30 FoodOS support before the next billing cycle begins.",
      },
      {
        type: "list",
        items: ["Cancellation stops future renewals only.", "Current subscription remains active until its expiry date.", "Unused subscription periods are generally not refundable.", "Premium features remain available until the subscription expires."],
      },
    ],
  },

  {
    id: "payment-failures",
    title: "Payment Failures and Technical Issues",
    content: [
      {
        type: "paragraph",
        text: "Occasionally, technical issues involving payment gateways, banking networks or internet connectivity may affect payment processing. Users should avoid making repeated payments before confirming transaction status.",
      },
      {
        type: "list",
        items: ["Pending transactions should first be verified.", "Duplicate payments may qualify for review.", "Payment gateway failures should be reported immediately.", "Supporting transaction references may be required."],
      },
    ],
  },

  {
    id: "taxes",
    title: "Taxes and Government Charges",
    content: [
      {
        type: "paragraph",
        text: "Applicable GST, taxes or statutory charges collected during subscription purchases are governed by applicable Indian laws. Where required, tax adjustments will follow legal and accounting requirements.",
      },
      {
        type: "list",
        items: ["GST invoices where applicable.", "Government taxes as required by law.", "Applicable payment processing charges where disclosed."],
      },
    ],
  },

  {
    id: "chargebacks",
    title: "Chargebacks and Payment Disputes",
    content: [
      {
        type: "paragraph",
        text: "If a customer initiates a chargeback or payment dispute without first contacting BR30 FoodOS, the related account may be temporarily restricted while the matter is investigated.",
      },
      {
        type: "list",
        items: ["Provide complete transaction information.", "Allow sufficient time for investigation.", "Respond promptly to verification requests.", "Avoid duplicate disputes across multiple channels."],
      },
      {
        type: "note",
        text: "Fraudulent chargebacks or false payment disputes may result in permanent suspension of platform access where permitted by law.",
      },
    ],
  },

  {
    id: "policy-updates",
    title: "Changes to this Refund Policy",
    content: [
      {
        type: "paragraph",
        text: "BR30 Group reserves the right to modify this Refund Policy whenever necessary to reflect business practices, legal requirements, subscription changes or platform improvements.",
      },
      {
        type: "paragraph",
        text: "The latest version of this Refund Policy will always be available on the official BR30 FoodOS website.",
      },
    ],
  },

  {
    id: "contact",
    title: "Contact Information",
    content: [
      {
        type: "paragraph",
        text: "For questions regarding subscription payments, cancellations or refund requests, please contact the official BR30 FoodOS support team.",
      },
      {
        type: "list",
        items: ["Organization: BR30 Group", "Platform: BR30 FoodOS", "Email: support.br30trader@gmail.com", "Website: https://br30group.com (Coming Soon)", "Support Hours: Official Business Support Channels"],
      },
      {
        type: "note",
        text: "Every refund request is reviewed individually based on the facts, applicable laws and this Refund Policy.",
      },
    ],
  },
];

export default function RefundPolicy() {
  return (
    <LegalLayout
      title="Refund Policy"
      subtitle="This Refund Policy explains how subscription payments, cancellations and eligible refund requests are handled for BR30 FoodOS and its related services."
      lastUpdated="July 05, 2026"
      version="Version 1.0"
      readTime="8 min read"
      effectiveDate="July 05, 2026"
      sections={sections}
    />
  );
}
