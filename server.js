import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { mongodbCollection } from "./config/mongodb.js";
import homePage from "./router/index.js";


// dotenv init here now
dotenv.config();
// init express js here
const app = express();

// get port number here
const PORT = process.env.PORT || 5051;


// use here all router 
app.use(homePage);


// create server here
app.listen(PORT, () => {
    mongodbCollection();
    console.log(`Server is Running Port Number Is ${PORT}`.bgGreen.black);
});