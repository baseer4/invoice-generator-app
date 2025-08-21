import api from "./base" 

export const isAuthenticated = async () => {
  try {
    const res = await api.get("/auth/check") 
    return !!res.data 
  } catch {
    return false
  }
}
