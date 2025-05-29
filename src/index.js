import {config} from 'dotenv';
import app from './app.js';
config({path:".env"});
import connectDB from './db/index.js';


const PORT=process.env.PORT;
connectDB()
.then(()=>{
    app.on("error",(error)=>{
       console.log("App error: ", error);
       throw error; 
    });
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`);

    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ",err);
});





/*
import mongoose from 'mongoose';
import { config } from 'dotenv';
import express from 'express';

config({ path: '.env' });
const app = express();

import { DB_NAME } from './constants.js'; 

;(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("MongoDB connection successful...");

        app.on("error", (error) => {
            console.error("App error: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("MongoDB connection error: ", error);
        throw error;
    }
})();

*/