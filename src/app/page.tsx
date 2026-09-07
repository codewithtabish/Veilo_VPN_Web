import { AboutCodeWithTabish } from "@/components/app/pages/landingpage/about-codewithtabish";
import { ConnectionVisual } from "@/components/app/pages/landingpage/connection-visual";
import { DownloadCTA } from "@/components/app/pages/landingpage/download-cta";
import { FAQ } from "@/components/app/pages/landingpage/faq";
import { Features } from "@/components/app/pages/landingpage/features";
import { Hero } from "@/components/app/pages/landingpage/hero";
import { HowItWorks } from "@/components/app/pages/landingpage/how-it-works";
import { Navbar } from "@/components/app/pages/landingpage/navbar";
import { NoAccountSection } from "@/components/app/pages/landingpage/no-account-section";
import { PrivacySection } from "@/components/app/pages/landingpage/privacy-section";
import { SimpleExperience } from "@/components/app/pages/landingpage/simple-experience";
import { TrustPrinciples } from "@/components/app/pages/landingpage/trust-principles";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Veilo — Simple VPN for Private Internet",
  description:
    "Veilo is a simple VPN app designed to make everyday internet privacy easier. Open Veilo, tap the shield, and connect.",
  openGraph: {
    title: "Veilo — Simple VPN for Private Internet",
    description:
      "Veilo is a simple VPN app designed to make everyday internet privacy easier. Open Veilo, tap the shield, and connect.",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustPrinciples />
        <Features />
        <HowItWorks />
        <ConnectionVisual />
        <SimpleExperience />
        <NoAccountSection />
        <PrivacySection />
        <AboutCodeWithTabish />
        <FAQ />
        <DownloadCTA />
      </main>

    </>
  );
}
