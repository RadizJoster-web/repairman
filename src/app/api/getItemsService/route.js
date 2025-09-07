import { NextResponse } from "next/server";

import services from "../../../data/serviceItems";

export async function GET(req) {
  console.log("Geting Data...");
  return NextResponse.json({ data: services, message: "Success" });
}
