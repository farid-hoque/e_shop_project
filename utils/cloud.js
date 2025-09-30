
import cloudinary from "cloudinary";

/**cloud configration */
cloudinary.v2.config(
    {
        api_key:"378119722567516",
        api_secret:"EUAF1TsMV7sMkKwDMtOHBcFRjxU",
        cloud_name: "dck3xubrt"
    }
)

/**cloud function */
export const cloud_upload = async (path)=>{
    const data = await cloudinary.v2.uploader.upload(path);
    return data;
}