export const site = {
  name: "Growth Labs",
  tagline: "GoHighLevel systems that generate leads, book calls, and run on automation",
  description:
    "Growth Labs specialises in setting up, optimising, and managing GoHighLevel for growing businesses — with Google Ads, Meta Ads, Google Tag Manager, automations, and AI chat and voice so every lead is tracked, followed up, and booked.",
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

export const overlayMenu = [
  { n: "01", href: "/#signal", label: "Signal", tag: "START" },
  { n: "02", href: "/#work", label: "Offer", tag: "WHAT WE SELL" },
  { n: "03", href: "/#join", label: "Process", tag: "HOW IT HELPS" },
  { n: "04", href: "/#contact", label: "Contact", tag: null },
] as const;

export const cta = {
  primary: { href: "/book", label: "Book a strategy call" },
  secondary: { href: "/#join", label: "See the 3-step process" },
  header: { href: "/book", label: "Let's talk" },
} as const;

export const announcement =
  "Done-for-you GoHighLevel, ads, tracking, and AI — one system, one owner";

export const eyebrow = "For founders, operators, and growing agencies";

export const hero = {
  h1: "GoHighLevel, ads, and automation — shaped to generate leads and book the call.",
  lede: "Whether you are just starting with GoHighLevel or need advanced customisation, we set up CRM, Google Ads, Meta Ads, GTM, automations, and AI so your calendar fills with qualified appointments — not a pile of unworked contacts.",
} as const;

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
    label: "Speed-to-lead after a form, call, or ad lead — so nothing sits overnight",
  },
  {
    value: "24",
    accent: "/7",
    label: "AI chat and voice coverage so after-hours enquiries still book",
  },
  {
    value: "1",
    accent: " stack",
    label: "Ads, GTM, GoHighLevel, and bots — one path to a booked appointment",
  },
] as const;

export const steps = [
  {
    n: "01",
    label: "Step one",
    title: "Map the leak",
    tip: "Leads coming in but not booking? Start here.",
    cta: "See how we work",
    href: "/process",
    body: "We audit how leads enter GoHighLevel, where they stall, and what has to fire so a booking actually happens. You leave with a clear Growth Map — not a slide deck.",
  },
  {
    n: "02",
    label: "Step two",
    title: "Strategy call",
    tip: "Get a taste of the full install.",
    cta: "Book a strategy call",
    href: "/book",
    body: "A 30-minute working session. We confirm scope, timeline, and what done looks like for CRM, ads, tracking, and AI. If we are not the right fit, we say so.",
  },
  {
    n: "03",
    label: "Level three",
    title: "Done-for-you install",
    tip: "Ready to fill the calendar.",
    cta: "Start the install",
    href: "/book",
    body: "We build inside your accounts: GoHighLevel, Google Ads, Meta Ads, GTM, automations, and AI. Tested end-to-end, then handed over with SOPs and 30 days of support.",
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

export const practice = [
  {
    n: "01",
    title: "Demand",
    body: "Google and Meta structured so a lead is worth following up.",
  },
  {
    n: "02",
    title: "Signal",
    body: "GTM and conversion APIs so the algorithm sees booked calls, not clicks.",
  },
  {
    n: "03",
    title: "Operating system",
    body: "GoHighLevel pipelines, calendars, and automations that match how you sell.",
  },
  {
    n: "04",
    title: "Conversation",
    body: "AI chat and voice that qualify the enquiry and put a name on the calendar.",
  },
] as const;

export const practiceSplit = {
  surface: {
    label: "Surface",
    body: "Funnels, calendars, and the conversation people actually see.",
  },
  system: {
    label: "System",
    body: "Tracking, pipelines, and automations that keep it booked, stable, and fast.",
  },
} as const;

export const aboutLine = {
  index: "04 / About",
  title: "One continuous line from first enquiry to booked call.",
  aside: "Product thinking, ads, and technical execution — held in one line.",
  marker: "That line stays intact from the first click to a name on the calendar.",
  start: "Idea",
  end: "Working form",
} as const;

export const contact = {
  index: "05 / Contact",
  title: "Let’s install a system that books.",
  body: "For GoHighLevel, ads, tracking, and AI that need one owner — not three vendors hoping it connects.",
  box: "Start a conversation",
  direct: "or write directly",
} as const;

export const serviceSpine: Record<
  string,
  { tag: string; meta: string; blurb: string }
> = {
  "market-growth": {
    tag: "GROWTH SYSTEM",
    meta: "FULL STACK · TRAFFIC · TRACKING · CRM · AI",
    blurb: "The whole engine, installed as one path to a booked call.",
  },
  gohighlevel: {
    tag: "CRM SETUP",
    meta: "PIPELINES · FUNNELS · CALENDARS · SNAPSHOTS",
    blurb: "GoHighLevel built around how you actually sell.",
  },
  automations: {
    tag: "WORKFLOWS",
    meta: "SPEED-TO-LEAD · SMS · EMAIL · ROUTING",
    blurb: "Follow-up that fires in seconds, not overnight.",
  },
  "ai-chatbot": {
    tag: "CONVERSATION AI",
    meta: "WEB CHAT · QUALIFY · BOOK",
    blurb: "Chat that answers, qualifies, and books the appointment.",
  },
  "ai-voicebot": {
    tag: "VOICE AI",
    meta: "MISSED CALLS · AFTER HOURS · BOOKING",
    blurb: "The line that still picks up when you cannot.",
  },
  "google-ads": {
    tag: "GOOGLE ADS",
    meta: "SEARCH · PMAX · LEAD FORMS",
    blurb: "Intent traffic wired into GoHighLevel, not a spreadsheet.",
  },
  gtm: {
    tag: "MEASUREMENT",
    meta: "GTM · GA4 · CAPI · OFFLINE",
    blurb: "The algorithm only learns if the conversion is true.",
  },
  "meta-ads": {
    tag: "META ADS",
    meta: "LEAD ADS · RETARGETING · CAPI",
    blurb: "Meta leads that land in a pipeline, not a notifications pile.",
  },
};

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
