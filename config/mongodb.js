// import mongoose package
import mongoose from "mongoose";

export const mongodbCollection = async () => {
    try{
        const connection = await mongoose.connect("mongodb://localhost/BMS");
        console.log(`Connction Within MongoDB Database`.bgBlue.black);
    }catch(error){
        console.log(`MongoDB Database Connection Field`.bgRed.black);
    }
}