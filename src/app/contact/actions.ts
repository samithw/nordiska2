"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function submitContactForm(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data.",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  // In a real application, you would send this data to your backend,
  // an email service, or a CRM. For this static site example, we just log it.
  console.log("Form data submitted:", parsed.data);

  return {
    message: "Thank you for your message! We will get back to you shortly.",
  };
}
