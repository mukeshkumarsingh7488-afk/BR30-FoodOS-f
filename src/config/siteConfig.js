import logoDark from "../assets/logos/logo-dark.png";
import logoLight from "../assets/logos/logo-dark.png";

export const SITE_CONFIG = {
  // ==========================================
  // Basic Information
  // ==========================================

  appName: "BR30 FoodOS",

  shortName: "FoodOS",

  company: "BR30 Group",

  version: "1.0.0",

  status: "Under Development",

  tagline: "One Platform. Every Food Business.",

  description: "BR30 FoodOS is a cloud-based operating system built for restaurants, cafés, bakeries, cloud kitchens, fast food outlets, food courts, tea shops, juice shops, ice cream shops, pubs, bars, and every modern food business.",

  // ==========================================
  // Trial & Pricing
  // ==========================================

  freeTrialDays: 14,

  pricing: {
    monthly: 5000,
    yearly: 48000,
    yearlyDiscount: 20,
    currency: "₹",
  },

  // ==========================================
  // Branding
  // ==========================================

  logo: {
    dark: logoDark,
    light: logoLight,
  },

  // ==========================================
  // Buttons
  // ==========================================

  cta: {
    primary: "Start 14-Day Free Trial",
    secondary: "Book a Demo",
    dashboard: "Go to Dashboard",
  },

  // ==========================================
  // Contact
  // ==========================================

  contact: {
    email: "support@br30group.com",
    phone: "+91 6200986380",
    whatsapp: "+91 6200986380",
  },

  // ==========================================
  // Social Media
  // ==========================================

  social: {
    youtube: "",
    instagram: "",
    facebook: "",
    linkedin: "",
    x: "",
    threads: "",
  },

  // ==========================================
  // SEO
  // ==========================================

  seo: {
    title: "BR30 FoodOS | One Platform. Every Food Business.",
    description: "Cloud-based SaaS platform for restaurants, cafés, bakeries, cloud kitchens, fast food outlets and every food business.",
    keywords: ["Restaurant Software", "QR Menu", "Restaurant POS", "Kitchen Display", "Restaurant SaaS", "Cloud Kitchen Software", "Cafe Software", "Food Ordering", "FoodOS", "BR30 FoodOS"],
  },

  // ==========================================
  // Supported Businesses
  // ==========================================

  businessTypes: ["Restaurant", "Cafe", "Bakery", "Cloud Kitchen", "Fast Food", "Food Court", "Tea Shop", "Coffee Shop", "Juice Shop", "Ice Cream Shop", "Sweet Shop", "Pizza Outlet", "Burger Outlet", "Hotel Restaurant", "Pub", "Bar"],

  // ==========================================
  // Footer
  // ==========================================

  footer: {
    copyright: `© ${new Date().getFullYear()} BR30 FoodOS. All rights reserved.`,
  },
};

export default SITE_CONFIG;
