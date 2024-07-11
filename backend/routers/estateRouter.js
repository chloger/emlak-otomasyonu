import express from "express";
import { createEstate, deleteEstate, getAllEstate } from "../controllers/estateController.js";

const router = express.Router();

router.post("/",createEstate);
router.get("/all-estate", getAllEstate);
router.delete("/estate-delete/:id", deleteEstate);
export default router;