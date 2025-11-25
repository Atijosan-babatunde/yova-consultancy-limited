import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { fullName, email, subject, message } = await req.json();

    if (!fullName || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_SENDER_EMAIL || '',
      to: process.env.CONTACT_RECEIVER_EMAIL || '',
      subject: subject || `New Contact Message from ${fullName}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Subject:</b> ${subject || 'No subject'}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      message: "Form submitted successfully",
      id: data?.id 
    });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}