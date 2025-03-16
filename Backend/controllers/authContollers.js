import User from "../model/userModel.js";
import bcrypt from "bcrypt"
import generateToken from "../utils/generateToken.js";

export const SignUp= async(req, res)=>{
    try{
        const {username, password, email}= req.body
        const isExist= await User.findOne({email})
        if(isExist) return res.status(401).json("User already exist")
        const hashPassword= await bcrypt.hash(password,10)
        const user = new User({username, email, password:hashPassword})
        await user.save()
        res.status(202).json({message:"User signed successfully", user})
    }
    catch(error)
    {
        res.status(401).json({message:"Unable to add user", error})
    }
}

export const Login= async(req, res)=>{
    try{
        const {email, password}=req.body
        const user= await User.findOne({email})
        if(!user) return res.status(401).json("User not found")
        const ismatch= await bcrypt.compare(password, user.password)
        if(!ismatch) return res.status(401).json("Invalid credentials")
        
        const token= generateToken(user)
        res.json({message:"login successfull", token})

    }
    catch(error)
    {
        res.status(401).json({message :'Unable to login', error })
    }
}