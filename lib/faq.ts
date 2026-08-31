export type FaqItem = { q: string; a: string };

export const siteFaq: FaqItem[] = [
  {
    q: "What do you actually set up?",
    a: "Whatever sits between “someone enquired” and “they are on the calendar”: Google and Facebook ads, tracking so you know which ads booked, GoHighLevel (your CRM, texts, and booking calendar), automatic follow-up, and chat or a phone line that answers when you cannot. Start with one piece or do the lot.",
  },
  {
    q: "Who is this for?",
    a: "Owners and operators who already get enquiries — clinics, trades, coaches, agencies, and similar. If people fill a form or call, then go quiet, this is the work.",
  },
  {
    q: "How long does it take?",
    a: "A CRM and follow-up setup is often about two weeks. Ads, tracking, CRM, and AI together is usually two to four weeks, depending on how fast we get logins and copy from you.",
  },
  {
    q: "Do you take over our ad accounts?",
    a: "No. We work inside your Google, Facebook, tracking, and GoHighLevel accounts. You keep ownership. We connect them so media and follow-up are one path.",
  },
  {
    q: "What happens on the call?",
    a: "Thirty minutes. We look at how people reach you today, where they stall, and what we would set up first. You do not have to buy on the call.",
  },
  {
    q: "We already have an ads person. Can you still help?",
    a: "Yes. Many clients keep their media buyer. We set up the CRM, tracking, and follow-up so those leads actually get a reply and count as real bookings.",
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
