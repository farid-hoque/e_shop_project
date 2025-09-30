

import express from "express";
import { create_multer_data, deleteData, getAlldata, getSingledata, updateData } from "../controller/brandController.js";
import { brand_middleware } from "../middleware/multerMiddleware.js";


/**router init */
const router = express.Router()

/**Brand ROuter initial */
/**Use Multer Middleware */
router.get("/", getAlldata)
router.get("/:id", getSingledata)
// router.post("/", createData)
router.post("/", brand_middleware, create_multer_data)
router.patch("/:id", updateData)
router.delete("/:id", deleteData)

/**Category router initial */

/**Exprot router */
export default router;