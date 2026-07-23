import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid form submission", errors: parsed.error.flatten() }, { status: 400 });
    }

    // Email integration ready:
    // Add RESEND_API_KEY or SMTP_* environment variables and send parsed.data here.
    console.log("New MetaSrijan inquiry", parsed.data);

    return NextResponse.json({ message: "Inquiry received" });
  } catch {
    return NextResponse.json({ message: "Unable to process request" }, { status: 500 });
  }
}
