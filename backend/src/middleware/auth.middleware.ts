import jwt from "jsonwebtoken";
import User from "../models/auth.model";
import { NextFunction, Request, Response } from "express";

interface JwtPayloadWithId extends jwt.JwtPayload {
  userId: string;
}

export const protectRoute = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"Unauthorized user - No token was provided"});
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET) as JwtPayloadWithId;

        if(!decoded){
            return res.status(401).json({message:"Unauthorized - Invalid token"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({message:"User not found"});
        }

        req.user = user;

        next();
    } catch (error: any) {
        console.log("Error in auth middleware",error.message);
        res.status(500).json({message:"internal server error"});
    }
}