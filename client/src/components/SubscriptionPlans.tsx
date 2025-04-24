import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SubscriptionPlans() {
  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Subscription Plans</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Choose the plan that best fits your investment strategy. All plans include access to our premium newsletter and exclusive content.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border-t-4 border-gray-400">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Basic</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$19</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Perfect for beginners looking to get started in crypto investing.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Weekly market analysis newsletter</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Top 10 cryptocurrency insights</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Monthly educational webinars</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="h-5 w-5 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Trading signals</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="h-5 w-5 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Exclusive research reports</span>
              </li>
            </ul>
            <Button variant="secondary" className="w-full">Subscribe Now</Button>
          </CardContent>
        </Card>

        {/* Pro Plan (Featured) */}
        <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden border-t-4 border-primary transform md:scale-105 z-10">
          <div className="bg-primary text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Pro</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$49</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ideal for active traders looking for an edge in the market.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Everything in Basic plan</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Bi-weekly trading signals</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Exclusive research reports</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Weekly live Q&A sessions</span>
              </li>
              <li className="flex items-start text-gray-400">
                <svg className="h-5 w-5 mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>1-on-1 strategy sessions</span>
              </li>
            </ul>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">Subscribe Now</Button>
          </CardContent>
        </Card>

        {/* Expert Plan */}
        <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border-t-4 border-gray-800 dark:border-gray-600">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Expert</h3>
            <div className="mb-4">
              <span className="text-4xl font-bold text-gray-900 dark:text-white">$99</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              For serious investors who demand the highest level of market intelligence.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Everything in Pro plan</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Daily trading signals</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">In-depth market analysis</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Monthly 1-on-1 strategy sessions</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-success mt-0.5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-600 dark:text-gray-300">Priority access to new features</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white">Subscribe Now</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
