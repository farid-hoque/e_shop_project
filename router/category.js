
import express from "express";
import { category_middleware } from "../middleware/multerMiddleware.js";
import { create_category, delete_category, get_allCategory, get_singleCategory, update_category } from "../controller/categoryController.js";


const router = express.Router()

/**make router */
router.get("/",  get_allCategory)
router.get("/:id",  get_singleCategory)
router.post("/", category_middleware, create_category)
router.patch("/:id",  update_category)
router.delete("/:id",  delete_category)


export default router