import { NextResponse } from "next/server";
import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error("RESEND_API_KEY is missing. Check your .env.local");
}

const resend = new Resend(apiKey);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // 1️⃣ Send message to your team
    await resend.emails.send({
      from: "Roseland Website <info@roselanddevelopers.com>",
      to: "info@roselanddevelopers.com", // your team email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // 2️⃣ Send thank-you email to user
    await resend.emails.send({
      from: "Roseland Developers <noreply@roselanddevelopers.com>",
      to: email, // user email
      subject: "Thank you for contacting Roseland Developers",
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to us. We have received your message and our team will get back to you shortly.</p>
        <p>Best regards,<br/>Roseland Developers</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : String(error) 
    }, { status: 500 });
  }
}
