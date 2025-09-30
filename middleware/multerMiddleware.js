
import multer from "multer";
import storage from "../utils/multer.js";

/**Brand middleware create for Brand model */
export const brand_middleware = multer({ storage }).single("logo")
/**Category middleware create for Category schema model */
export const category_middleware = multer({ storage }).single("photo")
