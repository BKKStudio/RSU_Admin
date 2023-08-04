import connect from "@/app/dbconfig/dbconfig";
import Bachelors from "@/app/models/BachelorsModel";
import { NextResponse } from "next/server";

export async function  GET() {
    await connect();
    const newStudent = await Bachelors.find()
    return NextResponse.json(newStudent)
}
export async function DELETE(req){
    const id = req.nextUrl.searchParams.get('id')
    await connect();
    await  Bachelors.findByIdAndDelete(id)
   return NextResponse.json({message:"Deleted Success"},{status:200})
}

