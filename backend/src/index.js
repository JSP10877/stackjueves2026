import express from "express";
import morgan from "morgan";
import { connectDB } from "./db.js";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import cookieParser from "cookie-parser";


const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
connectDB()

app.use('/api', authRoutes)
app.use('/api', taskRoutes)

app.listen(4000)
console.log("Server is running on port 4000")