export const site = {
  name: "Growth Labs",
  tagline: "Fill the calendar with qualified bookings",
  description:
    "Growth Labs installs the growth engine for service businesses: Google Ads, Meta Ads, Google Tag Manager, GoHighLevel, automations, and AI chat and voice — so every lead is tracked, followed up, and booked.",
  url: "https://growthlabs.example",
  email: "hello@growthlabs.example",
} as const;

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
] as const;

export const cta = {
  primary: { href: "/book", label: "Book a strategy call" },
  secondary: { href: "/#system", label: "See the growth system" },
  header: { href: "/book", label: "Book a call" },
} as const;

export const announcement =
  "Systems live for global service businesses · Ads + GTM + GHL + AI in one engine";

export const eyebrow = "For founders & growing businesses";

export const partners = [
  "Clinics",
  "Home services",
  "Coaches",
  "Agencies",
  "Education",
  "Real estate",
  "Legal",
  "Wellness",
  "SaaS",
  "Consultancies",
];

export const stats = [
  {
    value: "60",
    accent: "s",
    label: "Speed-to-lead target after a form, call, or ad lead",
  },
  {
    value: "24",
    accent: "/7",
    label: "AI chat and voice coverage so after-hours leads still book",
  },
  {
    value: "1",
    accent: " stack",
    label: "Ads, tracking, CRM, and bots — one path to a booked call",
  },
] as const;

export const steps = [
  {
    n: "01",
    title: "Growth Map",
    body: "We map how leads enter, where they stall, and what has to fire so a booking actually happens. You leave with a clear picture — not a slide deck.",
  },
  {
    n: "02",
    title: "Strategy call",
    body: "A 30-minute working session. We confirm scope, timeline, and what “done” looks like. If we are not the right fit, we say so.",
  },
  {
    n: "03",
    title: "Install",
    body: "Done-for-you build inside your accounts: ads, GTM, GoHighLevel, automations, and AI. Tested end-to-end, then handed over with SOPs.",
  },
] as const;

export const systemNodes = [
  { label: "Ads", hint: "Google + Meta" },
  { label: "GTM", hint: "Signal & CAPI" },
  { label: "GHL", hint: "CRM + funnels" },
  { label: "Automations", hint: "Speed-to-lead" },
  { label: "Chat / Voice", hint: "Qualify & book" },
  { label: "Booked call", hint: "On the calendar" },
] as const;

export const processStages = [
  {
    title: "Discovery",
    body: "60-minute kickoff. We map your offer, sales process, current stack, and the leak that costs you the most.",
  },
  {
    title: "Architecture",
    body: "Pipelines, events, ad structure, and bot scripts on one diagram. You approve the map before we build.",
  },
  {
    title: "Build",
    body: "We work in your Google, Meta, GTM, and GoHighLevel accounts. Weekly Loom updates. Tight feedback loops.",
  },
  {
    title: "Testing",
    body: "Every form, lead ad, missed call, chatbot, and voice flow is triggered for real. Tracking is verified in GA4 and ad managers.",
  },
  {
    title: "Launch & support",
    body: "Go-live with walkthroughs and SOPs. Thirty days of post-launch support, then an optional growth retainer.",
  },
] as const;
