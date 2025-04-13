import mongoose from "mongoose";

export const dbconnection = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RRESTAURANT"
    }).then(()=> {
        console.log("Connected to the database sucessfully");
    }).catch((err)=>{
        console.log(`Some error are occured while connecting to the database! ${err}`);
    });
}