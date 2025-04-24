import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function PaymentOptions() {
  return (
    <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
      <CardContent className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Flexible Payment Options</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We offer multiple payment methods to make subscribing to our premium content as convenient as possible.
            </p>
            
            <RadioGroup defaultValue="creditcard" className="space-y-4 mb-6">
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="payment-cc" value="creditcard" />
                <Label htmlFor="payment-cc" className="text-gray-700 dark:text-gray-300">Credit Card</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="payment-paypal" value="paypal" />
                <Label htmlFor="payment-paypal" className="text-gray-700 dark:text-gray-300">PayPal</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="payment-crypto" value="crypto" />
                <Label htmlFor="payment-crypto" className="text-gray-700 dark:text-gray-300">Cryptocurrency</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <RadioGroupItem id="payment-apple" value="apple" />
                <Label htmlFor="payment-apple" className="text-gray-700 dark:text-gray-300">Apple Pay</Label>
              </div>
            </RadioGroup>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </Label>
            </div>
          </div>

          <div className="border-t pt-6 md:pt-0 md:border-t-0 md:border-l md:pl-8 dark:border-gray-700">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Subscription Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Plan</span>
                  <span className="font-medium text-gray-900 dark:text-white">Pro Monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Price</span>
                  <span className="font-medium text-gray-900 dark:text-white">$49.00/month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Billing cycle</span>
                  <span className="font-medium text-gray-900 dark:text-white">Monthly</span>
                </div>
                <div className="pt-3 border-t dark:border-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900 dark:text-white">Total</span>
                    <span className="font-bold text-gray-900 dark:text-white">$49.00</span>
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Billed monthly. Cancel anytime.
                  </div>
                </div>
              </div>
              
              <Button className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-lg transition-colors">
                Complete Subscription
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
