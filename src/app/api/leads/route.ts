import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const leadType =
      body.leadType === "AI_RELIABILITY"
        ? "AI_RELIABILITY"
        : "GENERAL_PROJECT";

    const fullName = String(body.fullName || "").trim();
    const workEmail = String(body.workEmail || "").trim().toLowerCase();
    const company = String(body.company || "").trim();
    const phone = String(body.phone || "").trim();
    const website = String(body.website || "").trim();
    const agentUrl = String(body.agentUrl || "").trim();
    const service = String(body.service || "").trim();
    const message = String(body.message || "").trim();

    if (!fullName || !workEmail || !company) {
      return NextResponse.json(
        { error: "Full name, work email and company are required." },
        { status: 400 }
      );
    }

    const lead = await prisma.lead.create({
      data: {
        leadType,
        fullName,
        workEmail,
        company,
        phone: phone || null,
        website: website || null,
        agentUrl: agentUrl || null,
        service: service || null,
        message: message || null,
      },
      select: { id: true },
    });

    return NextResponse.json({ success: true, id: lead.id });
  } catch (error) {
    console.error("LEAD CREATE ERROR", error);
    return NextResponse.json(
      { error: "Unable to save your request. Please try again." },
      { status: 500 }
    );
  }
}
