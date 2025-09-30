import express from "express";
import { delete_data, get_singleDAta, get_wholeTag, pathc_data, post_data } from "../controller/tagController.js";

/**Router config */
const router = express.Router()

router.get("/", get_wholeTag)

router.get("/:id", get_singleDAta)

router.post("/", post_data)

router.patch("/:id", pathc_data)

router.delete("/:id", delete_data)


/**Default export tag */
export default router;