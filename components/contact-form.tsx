"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { serviceOptions } from "@/lib/data";
import { contactSchema, type ContactFormInput } from "@/lib/validation";
import { Button } from "@/components/ui/button";

const budgets = ["Under $500", "$500 - $1,500", "$1,500 - $5,000", "$5,000+"];

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema)
  });

  async function onSubmit(values: ContactFormInput) {
    setStatus("idle");
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });

    if (!response.ok) {
      setStatus("error");
      return;
    }

    reset();
    router.push("/thank-you");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" error={errors.fullName?.message}>
          <input {...register("fullName")} className="input" placeholder="Your name" />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input {...register("email")} type="email" className="input" placeholder="you@example.com" />
        </Field>
        <Field label="Phone Number" error={errors.phone?.message}>
          <input {...register("phone")} className="input" placeholder="+977..." />
        </Field>
        <Field label="Business Name" error={errors.businessName?.message}>
          <input {...register("businessName")} className="input" placeholder="Company or brand" />
        </Field>
        <Field label="Service Interested In" error={errors.service?.message}>
          <select {...register("service")} className="input">
            <option value="">Select a service</option>
            {serviceOptions.map((service) => <option key={service} value={service}>{service}</option>)}
          </select>
        </Field>
        <Field label="Marketing Budget" error={errors.marketingBudget?.message}>
          <select {...register("marketingBudget")} className="input">
            <option value="">Select budget range</option>
            {budgets.map((budget) => <option key={budget} value={budget}>{budget}</option>)}
          </select>
        </Field>
        <Field label="Preferred Date" error={errors.preferredDate?.message}>
          <input {...register("preferredDate")} type="date" className="input" />
        </Field>
        <Field label="Preferred Time" error={errors.preferredTime?.message}>
          <input {...register("preferredTime")} type="time" className="input" />
        </Field>
      </div>
      <div className="mt-5 grid gap-5">
        <Field label="Business Goal" error={errors.businessGoal?.message}>
          <input {...register("businessGoal")} className="input" placeholder="More leads, higher ROAS, automation..." />
        </Field>
        <Field label="Message" error={errors.message?.message}>
          <textarea {...register("message")} className="input min-h-32 resize-y" placeholder="Tell me about your business and what you want to improve." />
        </Field>
        <Field label="Additional Notes" error={errors.additionalNotes?.message}>
          <textarea {...register("additionalNotes")} className="input min-h-24 resize-y" placeholder="Anything else I should know before the consultation?" />
        </Field>
      </div>
      <Button type="submit" variant="gold" disabled={isSubmitting} className="mt-7 w-full sm:w-auto">
        {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
        Submit Inquiry
      </Button>
      {status === "error" ? <p className="mt-5 rounded-[8px] bg-red-50 p-4 text-sm font-semibold text-red-700">Something went wrong. Please try again.</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-ink">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-red-600">{error}</span> : null}
    </label>
  );
}
