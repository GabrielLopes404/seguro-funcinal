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

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <SocialProof />
        <SimulationForm />
        <Differentials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
