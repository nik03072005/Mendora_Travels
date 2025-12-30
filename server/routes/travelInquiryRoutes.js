import express from "express";
import { deleteInquiry, getAllInquiries, resolveInquiry, submitInquiry } from "../controllers/travelInquiryController.js";
import authMiddleware from "../middleware/authMiddleware.js";



const router = express.Router();

router.post("/submit-inquiry", submitInquiry);
router.get("/get-inquiry",authMiddleware, getAllInquiries);
router.put("/update-status/:id",authMiddleware, resolveInquiry); // Assuming you have a resolveInquiry function
router.delete("/delete-inquiry/:id",authMiddleware, deleteInquiry); // Assuming you have a deleteInquiry function

export default router;
