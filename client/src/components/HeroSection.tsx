import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HeroSection() {
  return (
    <Card className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden">
      <CardContent className="p-8 md:p-12">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:max-w-2xl">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Expert Crypto Insights, Delivered to You</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Subscribe to our premium newsletter for in-depth market analysis, trading signals, and exclusive research from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-6">
              <Button className="bg-primary text-white px-6 py-6 h-auto rounded-lg font-medium shadow-sm hover:bg-primary/90 flex items-center justify-center">
                <span>View Subscription Plans</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button variant="outline" className="text-primary border-2 border-primary px-6 py-6 h-auto rounded-lg font-medium hover:bg-primary/10 dark:hover:bg-primary/20 flex items-center justify-center">
                <span>Learn More</span>
              </Button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Join over 50,000+ traders and investors who trust our market analysis
            </p>
          </div>
          <div className="hidden md:block mt-8 md:mt-0">
            <svg 
              className="w-full h-auto" 
              width="500" 
              height="300" 
              viewBox="0 0 500 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="500" height="300" rx="8" fill="#F9FAFB" className="dark:fill-gray-800" />
              <path d="M50 220 L100 180 L150 200 L200 120 L250 150 L300 100 L350 80 L400 150 L450 50" 
                stroke="hsl(var(--primary))" 
                strokeWidth="3" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
              <circle cx="100" cy="180" r="4" fill="hsl(var(--primary))" />
              <circle cx="150" cy="200" r="4" fill="hsl(var(--primary))" />
              <circle cx="200" cy="120" r="4" fill="hsl(var(--primary))" />
              <circle cx="250" cy="150" r="4" fill="hsl(var(--primary))" />
              <circle cx="300" cy="100" r="4" fill="hsl(var(--primary))" />
              <circle cx="350" cy="80" r="4" fill="hsl(var(--primary))" />
              <circle cx="400" cy="150" r="4" fill="hsl(var(--primary))" />
              <circle cx="450" cy="50" r="4" fill="hsl(var(--primary))" />
              <path d="M50 250 L450 250" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M50 200 L450 200" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M50 150 L450 150" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M50 100 L450 100" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
              <path d="M50 50 L450 50" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
