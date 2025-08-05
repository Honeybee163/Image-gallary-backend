import { Schema, model } from "mongoose";

// ImageGallary Schema
const ImageGallarySchema = new Schema({
  filename: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true, // ✅ Optional: enforce that URL must be provided
  },
  tags: {
    type: [String],
    default: [],
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

// ImageGallary Model
export const ImageGallary = model("ImageGallary", ImageGallarySchema);
