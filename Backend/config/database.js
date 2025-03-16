import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const dburl = process.env.DBURL

const connectDb= async ()=>{
    try{
        await mongoose.connect(dburl)
        console.log("Database connected successfully")
    }
    catch(error)
    {
        console.log("Unable to connect the database")
    }
}

export default connectDb