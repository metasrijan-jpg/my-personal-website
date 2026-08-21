import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid form submission", errors: parsed.error.flatten() }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL || "metasrijan@gmail.com";
    const sender = process.env.EMAIL_FROM || "MetaSrijan Website <onboarding@resend.dev>";

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured; inquiry was not emailed.", parsed.data);
      return NextResponse.json({ message: "Email delivery is not configured yet." }, { status: 503 });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: parsed.data.email,
        subject: `New website inquiry from ${parsed.data.fullName}`,
        text: [
          `Name: ${parsed.data.fullName}`,
          `Email: ${parsed.data.email}`,
          `Phone: ${parsed.data.phone}`,
          `Business: ${parsed.data.businessName}`,
          `Service: ${parsed.data.service}`,
          `Budget: ${parsed.data.marketingBudget || "Not provided"}`,
          `Preferred date: ${parsed.data.preferredDate || "Not provided"}`,
          `Preferred time: ${parsed.data.preferredTime || "Not provided"}`,
          `Goal: ${parsed.data.businessGoal || "Not provided"}`,
          "",
          "Message:",
          parsed.data.message,
          "",
          "Additional notes:",
          parsed.data.additionalNotes || "Not provided"
        ].join("\n")
      })
    });

    if (!emailResponse.ok) {
      console.error("Resend rejected the inquiry", await emailResponse.text());
      return NextResponse.json({ message: "Unable to send your inquiry right now." }, { status: 502 });
    }

    return NextResponse.json({ message: "Inquiry received" });
  } catch {
    return NextResponse.json({ message: "Unable to process request" }, { status: 500 });
  }
}
