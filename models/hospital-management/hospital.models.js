import mongoose from "mongoose";

const hospitalSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true 
        },
        addressLine1:{
            typr:String,
            required:true 
        },
        addressLine2:{
            typr:String,
           
        },
        city:{
            typr:String,
            required:true 
        },
        pincode:{
            typr:String,
            required:true 
        },
        specializedIn:[
            {
                type:String
            },
        ],

    },{timestamps:true});

export const Hospital=mongoose.model("Hospital",hospitalSchema);