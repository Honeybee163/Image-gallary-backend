import express from "express";
import {getImages,uploadImage,getImageById,deleteImageById,searchImagesByTag} from "../controllers/ImageController.js";
let router = express.Router();
import upload from "../middlewares/multer.js";

//get all image
router.get('/api/images',getImages)

//upload image
router.post("/api/images", upload.single("image"), uploadImage);

//search images by tag (must come before :id route)
router.get("/api/images/search", searchImagesByTag);

//get image by id
router.get("/api/images/:id", getImageById);

//delete image by id
router.delete("/api/images/:id", deleteImageById);

export default router;