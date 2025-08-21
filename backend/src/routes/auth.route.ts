import express from "express";
import { signup,checkAuth,logout,login,profile } from "../controllers/auth.controller";
import { protectRoute } from "../middleware/auth.middleware";

const router = express.Router();

router.post("/signup",signup)

router.post("/login",login)

router.post("/logout",logout)

router.get("/check",protectRoute,checkAuth)



export default router;