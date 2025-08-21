import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation } from "@tanstack/react-query"
import { CardCarousel } from "../components/cardcarousel"
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import logo from "../assets/Logo.svg"
import api from "../lib/base"

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  useEffect(() => {
    api.get("/auth/check")
      .then(res => {
        if (res.data) navigate("/products", { replace: true })
      })
      .catch(() => {})
  }, [])

  const loginMutation = useMutation({
    mutationFn: async () => api.post("/auth/login", { email, password }),
    onSuccess: () => {
      setMessage({ type: "success", text: "Login successful!" })
      navigate("/products", { replace: true })
    },
    onError: (error: any) => {
      setMessage({ type: "error", text: error.response?.data?.message || "Login failed" })
    },
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !password) {
      setMessage({ type: "error", text: "Please fill in all fields" })
      return
    }
    loginMutation.mutate()
  }

  return (
    <div className="flex justify-center items-center text-white">
      <div className="flex w-full max-w-7xl">
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-6">
          <CardCarousel />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6">
          <div className="w-full max-w-md">
            <div className="flex items-center mb-4">
              <img src={logo} alt="" className="h-14" />
            </div>

            <Card className="w-full bg-transparent border-none shadow-none">
              <CardContent className="p-0 space-y-6">
                <h1 className="text-3xl font-bold text-white mb-3">Let the Journey Begin!</h1>
                <p className="text-sm text-neutral-400">
                  This is basic login page for demonstration purposes.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter Email ID"
                      className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Password
                    </label>
                    <Input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter the Password"
                      className="bg-neutral-800/50 border border-neutral-700 text-white placeholder:text-neutral-500 h-12 rounded-md focus:border-neutral-500 focus:ring-0"
                    />
                  </div>

                  {message && (
                    <p className={`mt-2 ${message.type === "success" ? "text-green-500" : "text-red-500"}`}>
                      {message.text}
                    </p>
                  )}

                  <div className="flex items-center gap-6 pt-2">
                    <Button type="submit" variant="secondary" disabled={loginMutation.isPending}>
                      {loginMutation.isPending ? "Logging in..." : "Login now"}
                    </Button>

                    <Button variant="link" className="text-neutral-400 hover:text-white p-0 font-normal">
                      Forget password?
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
