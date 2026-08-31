export type FaqItem = { q: string; a: string };

export const siteFaq: FaqItem[] = [
  {
    q: "What does Growth Labs actually install?",
    a: "The full path from paid traffic to a booked appointment: Google Ads and Meta Ads, Google Tag Manager and conversion APIs, a GoHighLevel CRM with pipelines and funnels, automations for follow-up, and AI chat plus voice that qualify and book. You can start with one piece or the whole stack.",
  },
  {
    q: "Who is this for?",
    a: "Founders and operators of service businesses that already spend on ads or already have GoHighLevel — clinics, home services, coaches, agencies, and similar. If leads come in and then stall, this is the work.",
  },
  {
    q: "How long does a typical install take?",
    a: "A focused CRM and funnel build is often two weeks. A full ads + GTM + GHL + AI install is usually two to four weeks from kickoff, depending on how fast assets and access arrive.",
  },
  {
    q: "Do you take over our ad accounts?",
    a: "We work inside your Google Ads, Meta, GTM, and GoHighLevel accounts. You keep ownership. We set structure, tracking, and the CRM so media and follow-up are one system.",
  },
  {
    q: "What happens on the strategy call?",
    a: "Thirty minutes. We look at how leads enter today, what breaks, and whether a Growth Map or a full install is the next step. No pressure to buy on the call.",
  },
  {
    q: "Can you work with a list that already knows us?",
    a: "Yes. This site is built for warm conversations: you already run a business; we install the engine behind it. Cold traffic still lands on service pages that explain each piece.",
  },
];

export const bookRoles = [
  "Founder / owner",
  "Marketing lead",
  "Operations",
  "Agency partner",
  "Other",
] as const;

export const spendBands = [
  "Not spending yet",
  "Under $3k / month",
  "$3k–$10k / month",
  "$10k–$30k / month",
  "$30k+ / month",
] as const;
