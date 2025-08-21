import { UserDocument } from "../../models/auth.model"; 

declare global {
  namespace Express {
    interface Request {
      user?: UserDocument; 
    }
  }
}