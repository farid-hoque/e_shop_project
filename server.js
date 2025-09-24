

import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import brandRouter from "./router/brand.js"

/**--*/
dotenv.config()
/**--*/
const app = express()
const PORT = process.env.PORT || 3030;
/**--Meddileware */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**Routing config */
app.use("/api/v1/brand", brandRouter)



/**server config */
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} number port`.bgRed.cyan);
})