import connect from "@/app/dbconfig/dbconfig";
import Doctors from "@/app/models/DoctorsModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  try {
    const quantityDoctors = await Doctors.aggregate([
      { $group: { _id: null, doctorsvalue: { $sum: 1 } } },
      { $project: { _id: 0, doctorsvalue: 1 } },
    ]);

    return NextResponse.json(quantityDoctors[0]);
  } catch (error) {
    return NextResponse.error("Error fetching bachelor's data count.", 500);
  }
}