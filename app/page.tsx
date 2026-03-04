import { Header } from "@/header"
import { Hero } from "@/hero"
import { HowItWorks } from "@/how-it-works"
import { Benefits } from "@/benefits"
import { SocialProof } from "@/social-proof"
import { SimulationForm } from "@/simulation-form"
import { Differentials } from "@/differentials"
import { FinalCTA } from "@/final-cta"
import { Footer } from "@/footer"
import { ScrollProgress } from "@/scroll-progress"

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
