import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQ() {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h2>
      
      <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white py-4">
                How often will I receive the newsletter?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                The frequency depends on your subscription plan. Basic members receive weekly newsletters, Pro members get bi-weekly trading signals plus weekly newsletters, and Expert members receive daily updates and signals.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white py-4">
                Can I cancel my subscription at any time?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Yes, you can cancel your subscription at any time. We operate on a monthly billing cycle, so you'll continue to have access until the end of your current billing period.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white py-4">
                Do you offer refunds?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We offer a 7-day money-back guarantee for new subscribers. If you're not satisfied with our service within the first week, contact our support team for a full refund.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white py-4">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                We accept all major credit cards, PayPal, Apple Pay, and various cryptocurrencies including Bitcoin, Ethereum, and USDT.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-lg font-medium text-gray-900 dark:text-white py-4">
                Can I upgrade or downgrade my plan later?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                Absolutely! You can upgrade or downgrade your subscription plan at any time. Changes will take effect at the start of your next billing cycle.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </>
  );
}
