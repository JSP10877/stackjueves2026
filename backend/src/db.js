import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/stackviernes2026");
    console.log("Connected to the database");
  }catch (error) {
    console.error("Error connecting to the database:", error);
  }
}