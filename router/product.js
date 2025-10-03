
import express from "express";
import { createProduct, get_allproduct } from "../controller/productController.js";

const router = express.Router()

/**get router */
router.get("/", get_allproduct)
/**post router */
router.post("/",createProduct)

export default router