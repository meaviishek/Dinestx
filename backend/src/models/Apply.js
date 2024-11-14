import mongoose from "mongoose"

const applySchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    profession:{type:String,required:true},
    role:{type:String,required:true},
    portfolioLink:{type:String,required:true},
    githubLink:{type:String,required:true}
    
})

const Apply=mongoose.model('Apply',applySchema);
export default Apply;