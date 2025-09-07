import { NextResponse } from "next/server";

import services from "../../../../data/serviceItems";

export async function GET(req, { params }) {
  const { type } = params;
  console.log("Procesing...");

  const filteredServices = services.filter((service) => service.type === type);
  return NextResponse.json({ data: filteredServices, message: "Success" });
}
