import connect from "@/app/dbconfig/dbconfig";
import Bachelors from "@/app/models/BachelorsModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  try {
    const quantityBachelors = await Bachelors.aggregate([
      { $group: { _id: null, bachelorsvalue: { $sum: 1 } } },
      { $project: { _id: 0, bachelorsvalue: 1 } },
    ]);

    return NextResponse.json(quantityBachelors[0]);
  } catch (error) {
    return NextResponse.error("Error fetching bachelor's data count.", 500);
  }
}