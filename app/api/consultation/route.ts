import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ message: "Invalid consultation request", errors: parsed.error.flatten() }, { status: 400 });
    }

    console.log("New MetaSrijan consultation booking", parsed.data);
    return NextResponse.json({ message: "Consultation request received" });
  } catch {
    return NextResponse.json({ message: "Unable to process request" }, { status: 500 });
  }
}
