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
      <div className={"relative z-10"}>
        <div className="max-w-7xl z-10 border border-white/30 m-auto p-4 sm:p-8 bg-white/20 w-full rounded-3xl">
          <img
            src="/assets/dashboard.png"
            className="rounded-xl bg-black p-4 z-10"
            alt="Hero Image"
          />
        </div>
        <div className="top-20 bottom-20 w-full bg-gradient-conic from-rose-500 via-violet-400 to-amber-500 absolute z-[-1]" />
      </div>
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