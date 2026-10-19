import defaultLogo from '../images/mosafirtrading-logo.svg';

/**
 * =========================================================================
 * 🌟 GLOBAL SITE CONFIGURATION (CENTRAL CONTROL PANEL)
 * =========================================================================
 * MOSAFIR TRADING LLC — Centralized Brand & Site Settings
 * =========================================================================
 */

export const siteConfig = {

  // ─────────────────────────────────────────────
  // 🏢 COMPANY IDENTITY
  // ─────────────────────────────────────────────
  companyName:     "Mosafir Trading LLC",
  shortName:       "Mosafir Trading",
  legalName:       "MOSAFIR TRADING LLC",
  tagline:         "Global Wholesale Distribution, General Trading & Supply Chain Solutions",
  heroSubtitle:    "Direct manufacturer sourcing, dependable bulk supply chains, and exceptional consumer essentials curated by Mosafir Trading LLC.",
  eyebrowStandard: "THE MOSAFIR TRADING STANDARD OF EXCELLENCE",

  // ─────────────────────────────────────────────
  // 📞 PHONE, WHATSAPP & EMAIL
  // ─────────────────────────────────────────────
  phonePrimary:    "(+966) 53 098 7507",
  phonePrimaryTel: "+966530987507",
  phoneDirect:     "(+966) 53 098 7507",
  phoneDirectTel:  "+966530987507",
  whatsappNumber:  "966530987507",
  whatsappDisplay: "(+966) 53 098 7507",
  email:           "info@mosafirtradingllc.com",
  website:         "www.mosafirtradingllc.com",

  // ─────────────────────────────────────────────
  // 📍 ADDRESS & HUBS
  // ─────────────────────────────────────────────
  address: {
    line1:        "Global Distribution Trade Desk",
    line2:        "Middle East & North America Logistics",
    full:         "Global Distribution Trade Hub",
    cityStateZip: "Global Logistics Trade Desk",
    jurisdiction: "Commercial LLC Registered"
  },
  hubs: {
    originText:   "Dispatched via Global Logistics & Freight Hubs",
    dispatchNote: "Dispatched from our primary international distribution hubs and regional fulfillment centers."
  },

  // ─────────────────────────────────────────────
  // 📖 ABOUT US PAGE
  // ─────────────────────────────────────────────
  about: {
    mission:      "At Mosafir Trading LLC, our mission is to deliver exceptional wholesale value, connecting premier international manufacturers with retailers, commercial distributors, and online merchants worldwide. Founded on the principles of trust, transparency, and trade excellence, we serve as a reliable bridge between global suppliers and growing businesses.",
    b2bNote:      "Whether you operate independent retail stores, supermarket chains, or e-commerce marketplaces, Mosafir Trading LLC provides flexible minimums, volume price tiers, and dependable fulfillment. Our team ensures every order meets the highest quality and delivery standards you can count on.",
    sourcingNote: "We pride ourselves on thoughtful sourcing — choosing products that deliver genuine performance, high customer satisfaction, and dependable quality for retail and wholesale partners worldwide.",

    cards: [
      {
        title:       "Integrity First",
        description: "Transparent pricing, transparent communication, and verified product authenticity."
      },
      {
        title:       "Logistics Agility",
        description: "Fast customs turnaround, reliable carrier contracts, and multi-hub fulfillment."
      },
      {
        title:       "Partner Centric",
        description: "Dedicated trade managers ready to accommodate customer requirements and custom schedules."
      }
    ],

    ctaButton: "Contact Management Desk"
  },

  // ─────────────────────────────────────────────
  // 📞 CONTACT US PAGE
  // ─────────────────────────────────────────────
  contact: {
    sectionTag:   "GET IN TOUCH",
    tagline:      "We are at your service for catalog requests, partnership discussions, or general inquiries.",
    cardTitle:    "Direct Coordinates",
    formTitle:    "Send Us a Message",
    formSuccess:  "Thank you! Your message has been received by Mosafir Trading LLC. We will reply within 24 hours.",
    labels: {
      email:      "Email",
      phone:      "Phone Number",
      hub:        "Operating Trade Hub",
      whatsapp:   "WhatsApp Chat",
      management: "Management"
    }
  },

  // ─────────────────────────────────────────────
  // 🦶 FOOTER
  // ─────────────────────────────────────────────
  footer: {
    description:        "Quality wholesale merchandise, global logistics, and general trading dedicated to supplying top-tier inventory with speed and reliability.",
    operationsLabel:    "Global Distribution & Wholesale Trade Hub",
    newsletterTagline:  "Receive exclusive price updates, catalog drops, and seasonal availability lists.",
    newsletterSuccess:  "✓ Thank you for subscribing to our wholesale bulletin!",
    copyrightSuffix:    "All rights reserved.",
    managedByLabel:     "Global Logistics & Distribution Hub",
    websiteUrl:         "https://www.mosafirtradingllc.com",
    domain:             "mosafirtradingllc.com",

    socials: [
      { label: "Facebook",  url: "https://facebook.com/" },
      { label: "Instagram", url: "https://instagram.com/" },
      { label: "TikTok",    url: "https://tiktok.com/" }
    ],

    menu: [
      { label: "Home",    tab: "home" },
      { label: "Shop",    tab: "home", scrollTo: "featured-products-section" },
      { label: "About",   tab: "about" },
      { label: "Contact", tab: "contact" }
    ]
  },

  // ─────────────────────────────────────────────
  // ⭐ TESTIMONIAL
  // ─────────────────────────────────────────────
  testimonial: {
    quote:  "Partnering with Mosafir Trading LLC transformed our wholesale inventory turnover. Top-tier product authenticity, fast fulfillment, and flawless communication.",
    author: "Verified Commercial Trade Partner"
  },

  // ─────────────────────────────────────────────
  // 💰 CURRENCY SYMBOL
  // ─────────────────────────────────────────────
  currencySymbol: "$",

  // ─────────────────────────────────────────────
  // 🖼️ LOGO
  // ─────────────────────────────────────────────
  logo: defaultLogo,

  // ─────────────────────────────────────────────
  // 🎨 COLOR THEME (Executive Warm Amber & Deep Obsidian)
  // ─────────────────────────────────────────────
  theme: {
    primaryNavy:   "#0b1329",
    secondaryTeal: "#13223f",
    accentTeal:    "#d97706",
    accentHover:   "#b45309",
    accentGold:    "#f59e0b",
    bgLight:       "#f8fafc"
  }
};
