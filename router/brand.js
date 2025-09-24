

import express from "express";
import { createData, deleteData, getAlldata, getSingledata, updateData } from "../controller/brandController.js";

/**router init */
const router = express.Router()

router.get("/", getAlldata)
router.get("/:id", getSingledata)
router.post("/", createData)
router.patch("/:id", updateData)
router.delete("/:id",deleteData)

export default router;