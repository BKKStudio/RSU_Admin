import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/UserModel";
import connect from "@/app/dbconfig/dbconfig";



export async function GET(request){

    try {
        await connect();
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}