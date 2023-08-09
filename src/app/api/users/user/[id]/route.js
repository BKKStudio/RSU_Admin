import connect from "@/app/dbconfig/dbconfig";
import User from "@/app/models/UserModel";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const {statususe} =  await req.json();
  await connect();
  await User.findByIdAndUpdate(id,{statususe})
  return NextResponse.json({message:"Updeated Data Success"},{status:200})
}

export async function GET(req,{params}) {
    const { id } = params;
     await connect();
    const newStudent = await User.findOne({_id:id})
    return NextResponse.json({newStudent},{status:200})
}
