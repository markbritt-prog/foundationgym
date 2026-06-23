import { TopNav } from "@/components/nav/TopNav";
import { SectionDots } from "@/components/nav/SectionDots";
import { ProgressBar } from "@/components/nav/ProgressBar";
import { MobileAppBar } from "@/components/nav/MobileAppBar";
import { Hero } from "@/components/sections/Hero";
import { WhatYouveBuilt } from "@/components/sections/WhatYouveBuilt";
import { WhyNow } from "@/components/sections/WhyNow";
import { DealOnOneScreen } from "@/components/sections/DealOnOneScreen";
import { CompoundingBenefit } from "@/components/sections/CompoundingBenefit";
import { MemberJourney } from "@/components/sections/MemberJourney";
import { CustomerProposition } from "@/components/sections/CustomerProposition";
import { ValueStack } from "@/components/sections/ValueStack";
import { FinancialPartnership } from "@/components/sections/FinancialPartnership";
import { LaunchingTogether } from "@/components/sections/LaunchingTogether";
import { Peptides } from "@/components/sections/Peptides";
import { Terms } from "@/components/sections/Terms";
import { NextSteps } from "@/components/sections/NextSteps";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-tmrw-white min-h-screen">
      <ProgressBar />
      <TopNav />
      <SectionDots />
      <Hero />
      <WhatYouveBuilt />
      <WhyNow />
      <DealOnOneScreen />
      <CompoundingBenefit />
      <MemberJourney />
      <CustomerProposition />
      <ValueStack />
      <FinancialPartnership />
      <LaunchingTogether />
      <Peptides />
      <Terms />
      <NextSteps />
      <Footer />
      <MobileAppBar />
    </main>
  );
}
