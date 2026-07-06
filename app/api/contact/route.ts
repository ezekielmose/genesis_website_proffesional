import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      email,
      company,
      service,
      message,
    } = body;

    // Validation
    if (
      !fullName ||
      !email ||
      !company ||
      !service ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    // Gmail SMTP Transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email to You
    await transporter.sendMail({
      from: `"Genesis Digital Website" <${process.env.EMAIL_USER}>`,
      to: "mosezekiel05@gmail.com",
      subject: "📩 New Contact Form Submission",
      html: `
        <div style="font-family:Arial,sans-serif;font-size:16px">

          <h2>New Website Enquiry</h2>

          <hr/>

          <p><strong>Full Name:</strong> ${fullName}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Company:</strong> ${company}</p>

          <p><strong>Service Required:</strong> ${service}</p>

          <p><strong>Project Details:</strong></p>

          <p>${message.replace(/\n/g, "<br>")}</p>

        </div>
      `,
    });

    // Auto Reply to User
    await transporter.sendMail({
      from: `"Genesis Digital" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We've Received Your Message",
      html: `
        <div style="font-family:Arial,sans-serif;font-size:16px">

          <h2>Hello ${fullName},</h2>

          <p>
            Thank you for contacting
            <strong>Genesis Digital</strong>.
          </p>

          <p>
            We have successfully received your enquiry and
            one of our specialists will contact you shortly.
          </p>

          <br/>

          <p>
            Regards,
            <br/>
            <strong>Genesis Digital Team</strong>
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message.",
      },
      {
        status: 500,
      }
    );
  }
}
