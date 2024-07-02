import mongoose from "mongoose";

const worksInHospitalsSchema=new mongoose.Schema({
    hospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    },
    numberOfHours:{
        type:Number,
        default:0
    }
})
const doctorSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true 
        },
        salary:{
            type:Number,
            required:true 
        },
        qualification:{
            type:String,
            required:true 
        },
        experienceInYears:{
            type:Number,
            dafault:0,
            
        },
        worksInHospitals:
            {
                type:[worksInHospitalsSchema]
            },
        hospital:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    },{timeseries:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)