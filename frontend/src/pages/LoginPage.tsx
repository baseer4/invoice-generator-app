import { CardCarousel } from "../components/cardcarousel";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import logo from "../assets/Logo.svg";

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center text-white">
      <div className="flex w-full max-w-7xl">
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-6">
          <CardCarousel />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="flex items-center mb-4">
              <div className="flex">
                <div>
                  <img src={logo} alt="" className="h-14"/>
                </div>
              </div>
            </div>

            <Card className="w-full bg-transparent border-none shadow-none">
              <CardContent className="p-0 space-y-6">
                  <h1 className="text-3xl font-bold text-white mb-3">Let the Journey Begin!</h1>
                  <p className="text-sm text-neutral-400">
                    This is basic login page which is used for levitation<br />
                    assignment purpose.
                  </p>

                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter Email ID"
                      className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
                    />
                    <p className="text-xs text-neutral-500 mt-1">
                      This email will be displayed with your inquiry
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Current Password
                    </label>
                    <Input
                      type="password"
                      placeholder="Enter the Password"
                      className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 pt-2">
                  <Button 
                    variant="secondary"
                  >
                    Login now
                  </Button>

                  <Button 
                    variant="link" 
                    className="text-neutral-400 hover:text-white p-0 font-normal"
                  >
                    Forget password ?
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}