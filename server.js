

import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import brandRouter from "./router/brand.js"
import categoryRouter from "./router/category.js"
import tagRouter from "./router/tag.js"


/**--*/
dotenv.config()
/**--*/
const app = express()
const PORT = process.env.PORT || 3030;
/**--Meddileware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**BRand related Routing config */
app.use("/api/v1/brand", brandRouter)
/**Multer related Routing config */
app.use("/api/v1/category", categoryRouter)
/**Tag related routing config */
app.use("/api/v1/tag", tagRouter)


/**server config */
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} number port`.bgRed.cyan);
})

