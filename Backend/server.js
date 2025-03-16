import express from "express";
import cors from "cors";
import connectDb from "./config/database.js";
import authRouter from "./routes/authRoutes.js";

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json());

connectDb();

app.use("/api", authRouter);

app.listen(3000, () => {
  console.log("App running at port 3000");
});