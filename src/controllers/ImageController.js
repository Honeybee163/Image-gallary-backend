import { ImageGallary } from "../models/ImageGallary.js";

// Get all images
export const getImages = async (req, res) => {
  try {
    const images = await ImageGallary.find();
    if (images.length === 0) {
      return res.status(404).json({ message: "No images found" }); // ✅ return added
    }
    return res.status(200).json(images);
  } catch (error) {
    return res.status(500).json({ message: "Error in getting images", error: error.message });
  }
};

// Upload new image
export const uploadImage = async (req, res) => {
  try {
    const { filename, tags } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const image = new ImageGallary({
      filename: filename || req.file.filename,
      url: `/uploads/${req.file.filename}`, // URL to access image
      tags: tags ? tags.split(",") : [],
      uploadedAt: new Date(),
    });

    await image.save();
    res.status(201).json({ message: "Image uploaded successfully", image });
  } catch (error) {
    res.status(500).json({ message: "Error in uploading image", error: error.message });
  }
};


//get image by id
export const getImageById = async (req, res) => {
  try {
    const image = await ImageGallary.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    return res.status(200).json(image);
  } catch (error) {
    return res.status(500).json({ message: "Error in getting image", error: error.message });
  }
};


//delete image by id
export const deleteImageById = async (req, res) => {
  try {
    const image = await ImageGallary.findByIdAndDelete(req.params.id);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    
    return res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error in deleting image", error: error.message });
  }
};


///search images by tag
export const searchImagesByTag = async (req, res) => {
  try {
    const { tag } = req.query;
    if (!tag) {
      return res.status(400).json({ message: "Tag is required" });
    }
    const images = await ImageGallary.find({ tags: tag });
    if (images.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }
    return res.status(200).json(images);
  } catch (error) {
    return res.status(500).json({ message: "Error in searching images", error: error.message });
  }
};
