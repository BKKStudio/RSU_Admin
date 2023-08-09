import User from "@/app/models/UserModel";
import connect from "@/app/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import  jwt  from "jsonwebtoken";

export async function POST(requst) {
   try {
        await  connect()
       const {username,password,statususe} = await requst.json()
       console.log(username,password,statususe);

    //check if useradmin exists
   const user = await User.findOne({username})
    if(!user){
        return NextResponse.json({error:"User Does not exist"},{status:400})
    }

    //check if correct password
    const validPassword = await bcryptjs.compare(
        password,user.password
    )
    if(!validPassword){
        return NextResponse.json({error:"Invalid password"},{status:400})
    }

    //Create Token data
    const tokenUser = {
        id:user._id,
        username:user.username,
        email:user.email,
    }

    //create token 
    const token = await jwt.sign(tokenUser,process.env.TOKEN_SECRET)
    const response = NextResponse.json({
        message:"Login Successful",
        success:true,
    })

    response.cookies.set("token",token,{httpOnly:true,})
    return response;

   } catch (error) {
    return NextResponse.json({error:error.message},{status:500})
   }
}

