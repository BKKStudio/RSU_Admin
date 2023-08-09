import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/UserModel";
import connect from "@/app/dbconfig/dbconfig";



export async function GET(request){
    await connect();
    try {
        const userId = await getDataFromToken(request);
        const user = await User.findOne({_id: userId}).select("-password");
        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 400});
    }

}

export async function PUT(req, {}) {
    await connect();
    try {
        const userId = await getDataFromToken(req);
        const { statususe } = req.body; // Get statususe from the request body
        const user = await User.findByIdAndUpdate({ _id: userId }, { statususe });
        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
    }
}




