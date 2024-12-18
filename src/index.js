// require('dotenv').config({path: './env'})

import dotenv from 'dotenv';
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();




























// import express from "express";


// (async () => {
//     try{
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_name}`)
//       app.on("error", (error) => {
//         console.log("Err: ", error);
//         throw error;
//       })

//       app.listen(process.env.PORT, () => {
//         console.log(`Server running on port :  ${process.env.PORT}`)
//       })

//     }catch(error){
//         console.error("Error:", error)
//         throw error;
//     }
// })()