import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/userDB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Parse JSON requests
app.use(express.json());

// Log each request after response is sent
app.use((req, res, next) => {
  res.on("finish", () => {
    console.log(`${req.method} ${req.originalUrl} ${res.statusCode}`);
  });
  next();
});

// API Routes
app.use("/api", userRoutes);

// 404 Handler
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});








