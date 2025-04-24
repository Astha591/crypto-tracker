import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <div className="bg-primary rounded-xl shadow-md overflow-hidden">
      <div className="p-6 md:p-8 md:flex md:items-center md:justify-between">
        <div className="md:max-w-lg">
          <h2 className="text-2xl font-bold text-white mb-2">Try Our Free Newsletter</h2>
          <p className="text-primary-100 mb-6 md:mb-0 text-white/80">
            Get a sample of our analysis with our free weekly newsletter. No credit card required.
          </p>
        </div>
        <div className="flex-shrink-0">
          <form className="sm:flex">
            <div className="flex flex-col sm:flex-row">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 mb-2 sm:mb-0 placeholder-gray-500 bg-white border-white rounded-md sm:max-w-xs" 
              />
              <Button 
                type="submit" 
                className="sm:ml-3 bg-white text-primary hover:bg-gray-100 sm:flex-shrink-0"
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
