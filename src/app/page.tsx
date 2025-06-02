import HeroSection from '@/sections/HeroSection'
import PainPointsSection from '@/sections/PainPointsSection'
import ServicesSection from '@/sections/ServicesSection'
import BenefitsSection from '@/sections/BenefitsSection'
import ContactSection from '@/sections/ContactSection'
import ServiceStepsSection from '@/sections/ServiceStepsSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <PainPointsSection />
      <ServicesSection />
      <ServiceStepsSection />
      <BenefitsSection />
      <ContactSection />
    </>
  )
}