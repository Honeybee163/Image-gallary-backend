import connectDB from "./config/mongoose.js";
import express from "express";
import cors from "cors";
import ImageRoute from "./routes/ImageRoute.js";
import path from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";

dotenv.config();

connectDB();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Mount routes at root level since they already have /api prefix
app.use(ImageRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});