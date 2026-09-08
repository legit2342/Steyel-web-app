"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = (formData.get("name") as string | null)?.trim();
  const email = (formData.get("email") as string | null)?.trim();
  const message = (formData.get("message") as string | null)?.trim();
  const agreed = formData.get("agree") === "on";

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in every field." };
  }

  if (!agreed) {
    return { status: "error", message: "Please agree to the privacy terms." };
  }

  const { error } = await resend.emails.send({
    from: `Steyel Contact Form <${process.env.CONTACT_FROM_EMAIL}>`,
    to: process.env.CONTACT_TO_EMAIL as string,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    return { status: "error", message: "Something went wrong sending your message. Please try again." };
  }

  return { status: "success", message: "Thanks! We'll get back to you within 24 hours." };
}
