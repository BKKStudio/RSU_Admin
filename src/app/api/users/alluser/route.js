import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/UserModel";
import connect from "@/app/dbconfig/dbconfig";



export async function GET(){
    await connect();
    try {
        const user = await User.find().select("-password");
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}