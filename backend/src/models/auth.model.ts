import mongoose from "mongoose";

export interface UserDocument extends Document {
  email: string;
  fullName: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}


const userSchema = new mongoose.Schema<UserDocument>(
    {
        email:{
            type:String,
            required:true,
            unique:true,
        },
        fullName:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            required:true,
            minlength:8
        },
        
    },
    {timestamps:true},
)

const User = mongoose.model("user",userSchema);

export default User;