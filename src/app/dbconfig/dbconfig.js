import mongoose from "mongoose";

const connect = () =>{
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected Succesfully");
    } catch (error) {
        console.log(error);
    }
}

export default connect;