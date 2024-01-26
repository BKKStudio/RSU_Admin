import connect from "@/app/dbconfig/dbconfig";
import Bachelors from "@/app/models/BachelorsModel";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const {
    newFaculty: Faculty,
    newMajor: Major,
    newIdcard: idcard,
    newBirthday: birthday,
    newFirstname: firstname,
    newLastname: lastname,
    newEmail: email,
    newTell: tell,
  } = await req.json();
  await connect();
  await Bachelors.findByIdAndUpdate(id, {
    Faculty,
    Major,
    idcard,
    birthday,
    firstname,
    lastname,
    email,
    tell,
  });
  return NextResponse.json(
    { message: "Updeated Data Success" },
    { status: 200 }
  );
}

export async function GET(req,{params}) {
    const { id } = params;
     await connect();
    const newStudent = await Bachelors.findOne({_id:id})
    return NextResponse.json({newStudent},{status:200})
}