import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "mosezekiel05@gmail.com",
      subject: "New Partnership Request - Genesis Digital",
      html: `
        <h2>New Partnership Request</h2>

        <p><strong>Company:</strong> ${data.companyName}</p>

        <p><strong>Business Type:</strong> ${data.businessType}</p>

        <p><strong>Contact Person:</strong> ${data.contactPerson}</p>

        <p><strong>Position:</strong> ${data.position}</p>

        <p><strong>Email:</strong> ${data.email}</p>

        <p><strong>Phone:</strong> ${data.phone}</p>

        <p><strong>Country:</strong> ${data.country}</p>

        <p><strong>City:</strong> ${data.city}</p>

        <p><strong>Website:</strong> ${data.website}</p>

        <p><strong>Properties:</strong> ${data.properties}</p>

        <p><strong>Budget:</strong> ${data.budget}</p>

        <p><strong>Timeline:</strong> ${data.timeline}</p>

        <p><strong>Services:</strong> ${data.services.join(", ")}</p>

        <p><strong>Project Description:</strong></p>

        <p>${data.project}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email.",
      },
      {
        status: 500,
      }
    );
  }
}
