import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const key = process.env.SECRETKEY

const generateToken=(user)=>{
    return jwt.sign({userId: user._id}, key, {expiresIn:"1h"})
}

export default generateToken