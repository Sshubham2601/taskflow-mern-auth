import jwt from "jsonwebtoken"
import user from "../model/user.model.js";
export const generateTokenAndSaveInCookies=async(res,userId)=>{
     const token=jwt.sign({userId},process.env.JWTSecretKey,{
        expiresIn:"10d",
     });
     res.cookie("jwt",token,{
        httpOnly:true,
        secure:false,
        sameSite:"lax",
        path:"/",
     });
     await user.findByIdAndUpdate(userId,{token})
     return token;
     
}