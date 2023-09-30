import Script from 'next/script';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Privacy } from "@/components/privacy";
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
        <Privacy />
        <Footer />
    </main>
  );
}