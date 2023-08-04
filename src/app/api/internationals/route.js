import connect from "@/app/dbconfig/dbconfig";
import Internationals from "@/app/models/InterModel";

import { NextResponse } from "next/server";

export async function  GET() {
    await connect();
    const newStudent = await Internationals.find()
    return NextResponse.json(newStudent)
}
export async function DELETE(req){
    const id = req.nextUrl.searchParams.get('id')
    await connect();
    await  Internationals.findByIdAndDelete(id)
   return NextResponse.json({message:"Deleted Success"},{status:200})
}