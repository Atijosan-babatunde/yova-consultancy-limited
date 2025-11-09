import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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

    const transporter = nodemailer.createTransport({
      service: "gmail", // or use custom SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL, // your business inbox
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
