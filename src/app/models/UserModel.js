import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Please provide a email"],
        unique:true,
    },
    firstname:{
        type:String,
        required:[true,"Please provide a firstname"],
    },
    lastname:{
        type:String,
        required:[true,"Please provide a lastname"],
    },
    tell:{
        type:String,
        required:[true,"Please provide a tell"],
    },
    username:{
        type:String,
        required:[true,"Please provide a username"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Please provide a password"],
    },
   isVerfied:{
    type:Boolean,
    default:false,
   },
   isAdmin:{
    type:Boolean,
    default:false,
   },
   forgotPasswordToken:String,
   forgotPasswordTokenExpiry:Date,
   verifyToken:String,
   verifyTokenExpiry:Date,
})

const User = mongoose.models.users || mongoose.model("users",userSchema)

export default User;