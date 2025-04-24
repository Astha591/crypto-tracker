import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What Our Subscribers Say</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "The analysis provided in the Pro plan has completely transformed my crypto investment strategy. The bi-weekly signals have been incredibly accurate."
            </p>
            <div className="flex items-center">
              <Avatar className="h-10 w-10 rounded-full">
                <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Pro Subscriber, 8 months</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "Even as a Basic subscriber, the weekly newsletter provides incredible insights that I haven't found anywhere else. Worth every penny."
            </p>
            <div className="flex items-center">
              <Avatar className="h-10 w-10 rounded-full">
                <AvatarImage src="https://ui.shadcn.com/avatars/03.png" alt="Michael Chen" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Michael Chen</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Basic Subscriber, 3 months</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-white dark:bg-gray-900 rounded-xl shadow-md">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="text-primary">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              "The Expert plan's 1-on-1 strategy sessions have been game-changing. My portfolio is up 37% since I started implementing the advice from these calls."
            </p>
            <div className="flex items-center">
              <Avatar className="h-10 w-10 rounded-full">
                <AvatarImage src="https://ui.shadcn.com/avatars/02.png" alt="David Rodriguez" />
                <AvatarFallback>DR</AvatarFallback>
              </Avatar>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">David Rodriguez</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Expert Subscriber, 1 year</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
