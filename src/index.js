// require('dotenv').config({path:'./env'})

import connectDB from "./db/index.js";
import dotenv from  "dotenv"


dotenv.config({path:"../.env"})
connectDB();

//approach 1
// import express from "express"
// const app = express()
//IFE (Immediately Invoked Function Expression)
// (async() => { 
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error) => {
//             console.log("ERROR: Unable to connect to db: ",error);
//         })
//         app.listen(process.env.PORT,() => {
//             console.log(`Server is listen on PORT: ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw error
//     }
// })
