// import mongoose package
import mongoose from "mongoose";

export const mongodbCollection = async () => {
    try{
        const connection = await mongoose.connect("mongodb+srv://creativemasudrana114:creativemasudrana114@bmsblog.pdxnoa0.mongodb.net/bms?retryWrites=true&w=majority&appName=bmsblog");
        console.log(`Connction Within MongoDB Database`.bgBlue.black);
    }catch(error){
        console.log(`MongoDB Database Connection Field`.bgRed.black);
    }
}