import { Button } from "@/components/ui/button"
import SignupIMG from "../assets/Signup.png"

export default function SignupPage() {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 text-white">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Sign up to begin journey</h1>
          <p className="text-gray-400 mb-8">
            This is a basic signup page for demonstration purposes.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Enter your name</label>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                This name will be displayed with your inquiry
              </p>
            </div>

            <div>
              <label className="block text-sm mb-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter Email ID"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                This email will be displayed with your inquiry
              </p>
            </div>

            <div>
              <label className="block text-sm mb-2">Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-lime-400 focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                Any further updates will be forwarded on this email
              </p>
            </div>
          </div>

          <div className="flex items-center mt-8 gap-4">
            <Button variant="neon">Register</Button>
            <p className="text-sm text-gray-400">
              Already have an account? <a href="/login" className="underline">Login</a>
            </p>
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
