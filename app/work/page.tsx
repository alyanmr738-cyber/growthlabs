import type { Metadata } from "next";
import { WorkPortfolio } from "@/components/funnel/WorkPortfolio";
import { CtaBand } from "@/components/funnel/CtaBand";
import { ProofCards } from "@/components/funnel/ProofCards";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio of revenueflow builds: GoHighLevel CRM engines, speed-to-lead, Google and Meta tracking, funnels, and AI booking.",
};

export default function WorkPage() {
  return (
    <>
      <WorkPortfolio />
      <ProofCards />
      <CtaBand />
    </>
  );
}
