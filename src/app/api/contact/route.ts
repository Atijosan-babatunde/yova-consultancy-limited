import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fullName, email, subject, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Example: You could send this data to your email or database here
    console.log("📩 New contact form submission:", {
      fullName,
      email,
      subject,
      message,
    });

    // Simulate sending email or saving to database
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
