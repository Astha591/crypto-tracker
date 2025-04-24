import { useEffect } from "react";
import CryptoTable from "@/components/CryptoTable";
import useCryptoUpdates from "@/hooks/useCryptoUpdates";

export default function Dashboard() {
  // Initialize the websocket updates
  useCryptoUpdates();

  useEffect(() => {
    document.title = "Cryptocurrency Live Prices";
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section>
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Live Cryptocurrency Data</h2>
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-success"></span>
            </span>
            WebSocket Live Updates
          </div>
        </div>
        <CryptoTable />
      </section>
    </main>
  );
}
