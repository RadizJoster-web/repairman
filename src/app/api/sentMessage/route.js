import { NextResponse } from "next/server";

import isTheDataExist from "../../lib/isTheDataExist";
import validateInput from "../../lib/validateInput";
import validateEmail from "../../lib/validateEmail";

export async function POST(req) {
  console.log("Trying to get data...");
  const body = await req.json();
  const { name, email, message } = body;

  console.log("Successfully got the data");

  // Cek apakah ada field kosong
  const checkingData = isTheDataExist(name, email, message);
  if (checkingData) {
    return NextResponse.json(
      {
        success: false,
        wichData: checkingData,
        message: `Please fill in the ${checkingData} field.`,
      },
      { status: 400 }
    );
  }

  // Bersihkan data dari XSS
  const CleanName = validateInput(name);
  const CleanEmail = validateInput(email);
  const CleanMessage = validateInput(message);

  // Validasi email
  const isEmailValid = await validateEmail(CleanEmail);
  if (!isEmailValid.valid) {
    return NextResponse.json(
      {
        success: false,
        wichData: "email",
        message: isEmailValid.message || "Please enter a valid email address.",
      },
      { status: 400 }
    );
  }

  return NextResponse.json({
    success: true,
    data: [CleanName, CleanEmail, CleanMessage],
  });
}
