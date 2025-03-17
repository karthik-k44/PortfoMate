import jwt from "jsonwebtoken"
import dotenv from "dotenv "

dotenv.config()
 
const authMiddleware=(req,res, next)=>{
    const token= req.header("Authorization")?.split(" ")[1]

    if(!token){
        return res.status(401).json({message:"Not token, Authorization denied "})

    }
    try{
        const decoded= jwt.verify(token, process.env.SECRETKEY)
        req.user= decoded.user
        next()
    }
    catch(error)
    {
        res.status(401).json({message: "Token is not valid "})
    }
}

export default authMiddleware