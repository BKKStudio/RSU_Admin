import User from "@/app/models/UserModel";
import connect from "@/app/dbconfig/dbconfig";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";


export async function POST(requst) {
    try {
        const { email, firstname, lastname, tell, username, password } = await requst.json()
        await  connect()
        
        //check if user already exists
        const user = await User.findOne({ email });
        if (user) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        //hash password
         const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            email,
            firstname,
            lastname,
            tell,
            username,
            password: hashedPassword,
          });
          const savedUser = await newUser.save();
          console.log(savedUser);
          return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser,
          });


    } catch (error) {
        return NextResponse.json({error:error.message},{status:500})
    }
}