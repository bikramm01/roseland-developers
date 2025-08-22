import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    // ✅ Email to you
    await resend.emails.send({
      from: "Roseland Website <onboarding@resend.dev>", // replace with your domain email
      to: "youremail@example.com", // change to your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // ✅ Auto-reply to the user
    await resend.emails.send({
      from: "Roseland Developers <onboarding@resend.dev>", // use your domain email
      to: email,
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
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
