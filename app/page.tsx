import { TopNav } from "@/components/nav/TopNav";
import { SectionDots } from "@/components/nav/SectionDots";
import { ProgressBar } from "@/components/nav/ProgressBar";
import { MobileAppBar } from "@/components/nav/MobileAppBar";
import { Hero } from "@/components/sections/Hero";
import { Proposition } from "@/components/sections/Proposition";
import { WhyNow } from "@/components/sections/WhyNow";
import { MemberJourney } from "@/components/sections/MemberJourney";
import { DealOnOneScreen } from "@/components/sections/DealOnOneScreen";
import { ValueStack } from "@/components/sections/ValueStack";
import { FinancialPartnership } from "@/components/sections/FinancialPartnership";
import { LaunchingTogether } from "@/components/sections/LaunchingTogether";
import { Learnings } from "@/components/sections/Learnings";
import { Terms } from "@/components/sections/Terms";
import { NextSteps } from "@/components/sections/NextSteps";
import { Peptides } from "@/components/sections/Peptides";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="bg-tmrw-white min-h-screen">
      <ProgressBar />
      <TopNav />
      <SectionDots />
      <Hero />
      {/* The opportunity */}
      <Proposition />
      <WhyNow />
      {/* The experience */}
      <MemberJourney />
      {/* The deal */}
      <DealOnOneScreen />
      <ValueStack />
      <FinancialPartnership />
      {/* Execution */}
      <LaunchingTogether />
      {/* Closing */}
      <Learnings />
      <Peptides />
      <Terms />
      <NextSteps />
      <Footer />
      <MobileAppBar />
    </main>
  );
}
