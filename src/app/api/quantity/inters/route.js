import connect from "@/app/dbconfig/dbconfig";
import Internationals from "@/app/models/InterModel";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  try {
    const quantityInternationals = await Internationals.aggregate([
      { $group: { _id: null, intervalue: { $sum: 1 } } },
      { $project: { _id: 0, intervalue: 1 } },
    ]);

    return NextResponse.json(quantityInternationals[0]);
  } catch (error) {
    return NextResponse.error("Error fetching bachelor's data count.", 500);
  }
}