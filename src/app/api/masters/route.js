import connect from "@/app/dbconfig/dbconfig";
import Masters from "@/app/models/MastersModel";
import { NextResponse } from "next/server";

export async function  GET() {
    await connect();
    const newStudent = await Masters.find()
    return NextResponse.json(newStudent)
}
export async function DELETE(req){
    const id = req.nextUrl.searchParams.get('id')
    await connect();
    await  Masters.findByIdAndDelete(id)
   return NextResponse.json({message:"Deleted Success"},{status:200})
}