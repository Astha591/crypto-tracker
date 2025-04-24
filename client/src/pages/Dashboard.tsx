import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CryptoTable from "@/components/CryptoTable";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import PaymentOptions from "@/components/PaymentOptions";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import useCryptoUpdates from "@/hooks/useCryptoUpdates";

export default function Dashboard() {
  // Initialize the simulated websocket updates
  useCryptoUpdates();

  useEffect(() => {
    document.title = "CryptoInsight - Premium Market Data";
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="mb-12">
        <HeroSection />
      </section>

      <section className="mb-12">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Live Market Data</h2>
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
            Live Updates
          </div>
        </div>
        <CryptoTable />
      </section>

      <section className="mb-12">
        <SubscriptionPlans />
      </section>

      <section className="mb-12">
        <PaymentOptions />
      </section>

      <section className="mb-12">
        <Testimonials />
      </section>

      <section className="mb-12">
        <Newsletter />
      </section>

      <section className="mb-12">
        <FAQ />
      </section>
    </main>
  );
}
