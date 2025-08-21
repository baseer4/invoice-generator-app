import { Button } from "../components/ui/button"
import SignupIMG from "../assets/Signup.png"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"

export default function SignupPage() {
  return (
    <div className="flex pt-10">
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 text-white">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Sign up to begin journey</h1>
          <p className="text-gray-400 mb-8">
            This is a basic signup page for demonstration purposes.
          </p>

          <div className="space-y-6">
            <div>
              <Label className="block text-sm mb-2">Enter your name</Label>
              <Input
                type="text"
                placeholder="Enter Name"
                className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
              />
              <p className="text-xs text-gray-500 mt-1">
                This name will be displayed with your inquiry
              </p>
            </div>

            <div>
              <Label className="block text-sm mb-2">Email Address</Label>
              <Input
                type="email"
                placeholder="Enter Email ID"
                className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
              />
              <p className="text-xs text-gray-500 mt-1">
                This email will be displayed with your inquiry
              </p>
            </div>

            <div>
              <Label className="block text-sm mb-2">Password</Label>
              <Input
                type="password"
                placeholder="Enter Password"
                className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
              />
              <p className="text-xs text-gray-500 mt-1">
                Any further updates will be forwarded on this email
              </p>
            </div>
          </div>

          <div className="flex items-center mt-8 gap-6">
            <Button variant="secondary">Register</Button>
            <a href='/login'  className="text-sm text-gray-400">
              Already have an account?{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:flex w-1/2">
        <img
          src={SignupIMG}
          alt="Signup visual"
          className="object-cover w-[70vw] h-[74vh] rounded-bl-[50px] rounded-tl-[50px]"
        />
      </div>
    </div>
  )
}
