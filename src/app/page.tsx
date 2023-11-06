import Script from 'next/script';
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Info } from "@/components/info";
import { Testimonial } from "@/components/testimonial";
import { CTA } from "@/components/cta";
import { FAQs } from "@/components/faqs";
import { PricingTable } from "@/components/pricing-table";
import { getCompletedPlans } from "@/lib/billing";

export default async function Home() {
  const plans = await getCompletedPlans();

  return (
    <main>
      <Script
        src="https://cdn.lordicon.com/bhenfmcm.js"
        strategy="lazyOnload"
      />
      <Header />
      <Hero />
      <Features />
      <Info />
      <Testimonial />
      <div className="py-20 px-4" id="pricing">
        <PricingTable plans={plans} />
      </div>
      <FAQs />
      <CTA />
      <Footer />
    </main>
  );
}