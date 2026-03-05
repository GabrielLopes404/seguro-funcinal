import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { SocialProof } from "@/components/social-proof"
import { SimulationForm } from "@/components/simulation-form"
import { Differentials } from "@/components/differentials"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionTransition } from "@/components/section-transition"

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <SectionTransition>
          <HowItWorks />
        </SectionTransition>
        <SectionTransition delay={0.1}>
          <Benefits />
        </SectionTransition>
        <SectionTransition delay={0.05}>
          <SocialProof />
        </SectionTransition>
        <SectionTransition delay={0.1}>
          <SimulationForm />
        </SectionTransition>
        <SectionTransition delay={0.05}>
          <Differentials />
        </SectionTransition>
        <SectionTransition delay={0.1}>
          <FinalCTA />
        </SectionTransition>
      </main>
      <Footer />
    </>
  )
}
