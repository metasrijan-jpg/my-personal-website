import { z } from "zod";
import { serviceOptions } from "@/lib/data";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  businessName: z.string().min(2, "Please enter your business name."),
  service: z.enum(serviceOptions as [string, ...string[]], { required_error: "Please choose a service." }),
  message: z.string().min(10, "Please share a little more detail."),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  businessGoal: z.string().optional(),
  marketingBudget: z.string().optional(),
  additionalNotes: z.string().optional()
});

export type ContactFormInput = z.infer<typeof contactSchema>;
