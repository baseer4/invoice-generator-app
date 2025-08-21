import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { Button } from "../components/ui/button"
import SignupIMG from "../assets/Signup.png"
import { Label } from "../components/ui/label"
import { Input } from "../components/ui/input"

export default function SignupPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const signupMutation = useMutation({
    mutationFn: async () =>
      axios.post(
      "http://localhost:8000/api/auth/signup",
      { fullName: name, email, password },
      { withCredentials: true } // <-- important
    ),
    onSuccess: () => {
      setMessage({ type: "success", text: "Signup successful! You can now log in." })
      setName("")
      setEmail("")
      setPassword("")
    },
    onError: (error: any) => {
      setMessage({ type: "error", text: error.response?.data?.message || "Signup failed" })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !password) {
      setMessage({ type: "error", text: "Please fill in all fields" })
      return
    }
    signupMutation.mutate()
  }

  return (
    <div className="flex pt-10">
      <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full md:w-1/2 text-white">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-3xl font-bold mb-2">Sign up to begin journey</h1>
          <p className="text-gray-400 mb-8">
            This is a basic signup page for demonstration purposes.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="block text-sm mb-2">Enter your name</Label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
                className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
              />
            </div>

            <div>
              <Label className="block text-sm mb-2">Email Address</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email ID"
                className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
              />
            </div>

            <div>
              <Label className="block text-sm mb-2">Password</Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
              />
            </div>

            <div className="flex items-center mt-8 gap-6">
              <Button
                type="submit"
                variant="secondary"
                disabled={signupMutation.isPending}
              >
                {signupMutation.isPending ? "Registering..." : "Register"}
              </Button>

              <a href="/login" className="text-sm text-gray-400">
                Already have an account?
              </a>
            </div>

            {/* Inline message */}
            {message && (
              <p
                className={`mt-4 ${
                  message.type === "success" ? "text-green-500" : "text-red-500"
                }`}
              >
                {message.text}
              </p>
            )}
          </form>
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
