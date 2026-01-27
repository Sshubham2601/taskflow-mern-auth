import user from "../model/user.model.js";
import {z} from "zod";
import bcrypt from "bcrypt"
const registerSchema=z.object({
    username:z.string().min(4,{ message: "Username must be at least 4 characters long" }),
    email: z.string().email({ message: "Invalid email address" }),
    password:z.string().min(7, {message:"Password must be at least 7 characters long"}),
});
export const register = async (req, res) => {
    
 const validationResult = registerSchema.safeParse(req.body);
 if (!validationResult.success) {
    return res.status(400).json({
      message: validationResult.error.issues[0].message,
    });
  }
  const { username, email, password } = validationResult.data;
  try {
    const ExistingUser = await user.findOne({ email });
    if(ExistingUser){
         return res.status(401).json({ message: "User already registered"});
    }
    const hashPassword= await bcrypt.hash(password,10)
    const newUser = await user.create({username, email, password:hashPassword});
    return res.status(201).json({message:"User created successfully",newUser});
  } catch (error) {
    console.error(error)
     return res.status(500).json({message:"error occur in user creation"})
  }
};

export const login = async(req, res) => {
  const {email,password}=req.body;

  if(!email || !password){
    res.status(400).json({message:"all field are required"})
  };
  
  const User=await user.findOne({email}).select("+password");
  if(!email || !(await bcrypt.compare(password,User.password))){
    res.status(401).json({message:"Invalid credential"})
  }
  res.status(200).json({message:"user logined in successfully ",User})
};
export const logout = () => {
  console.log("logout function call");
};


