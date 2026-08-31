import type { Metadata } from "next";
import { WorkShowcase } from "@/components/funnel/WorkShowcase";
import { CtaBand } from "@/components/funnel/CtaBand";
import { ProofCards } from "@/components/funnel/ProofCards";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Live GoHighLevel work: pipelines with thousands of people, automatic follow-up, reporting, and phone setup — not a demo account.",
};

export default function WorkPage() {
  return (
    <>
      <div className="pt-16">
        <WorkShowcase />
      </div>
      <ProofCards />
      <CtaBand />
    </>
  );
}
