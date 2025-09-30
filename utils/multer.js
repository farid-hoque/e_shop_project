
import multer from "multer";

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        // console.log(file)
        if (file.fieldname == "logo") {
            cb(null, Date.now() + "-" + file.originalname)
        }
        if (file.fieldname === "photo") {
            cb(null, Date.now() + "--" + file.originalname)
        }

    },

    /*
    when we use cloudinary than no need to destination
    destination: (req, file, cb) => {
        if (file.fieldname == "logo") {
            cb(null, "public/brand_logo")
        }

        if (file.fieldname === "photo") {
            cb(null, "public/category_photo")
        }
    }
    */
})
export default storage;