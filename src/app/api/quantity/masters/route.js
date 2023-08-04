import connect from "@/app/dbconfig/dbconfig";
import Masters from "@/app/models/MastersModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  try {
    const quantityMasters = await Masters.aggregate([
      { $group: { _id: null, mastersvalue: { $sum: 1 } } },
      { $project: { _id: 0, mastersvalue: 1 } },
    ]);

    return NextResponse.json(quantityMasters[0]);
  } catch (error) {
    return NextResponse.error("Error fetching bachelor's data count.", 500);
  }
}