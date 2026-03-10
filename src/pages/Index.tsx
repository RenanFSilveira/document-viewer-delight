import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainSection } from "@/components/sections/PainSection";
import { MechanismSection } from "@/components/sections/MechanismSection";
import { CredibilitySection } from "@/components/sections/CredibilitySection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <PainSection />
      <MechanismSection />
      <CredibilitySection />
      <SocialProofSection />
      <ProcessSection />
      <FAQSection />
      <FinalCTASection />
    </main>
    <FooterSection />
  </>
);

export default Index;
