import express from "express"
import connectDb from "./config/database.js"

const app= express()

app.use(express.json())

connectDb()

app.listen(3000, ()=>
{
    console.log("App running at port 3000")
})