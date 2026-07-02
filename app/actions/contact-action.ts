"use server";

import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.email("Invalid email address"),

  phone: z.string().min(5, "Phone number is required"),

  company: z.string().optional(),

  budget: z.string().optional(),

  projectType: z.string().min(1, "Project type is required"),

  message: z.string().min(10, "Message should be at least 10 characters"),
});

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  budget?: string;
  projectType: string;
  message: string;
};

export async function sendContactEmail(data: ContactFormData) {
  try {
    const validated = contactSchema.parse(data);

    await resend.emails.send({
      from: "David Portfolio Website <contact@davidobinta.xyz>",

      to: "izuchukwudavido@gmail.com",

      replyTo: validated.email,

      subject: `New Hire Inquiry • ${validated.projectType}`,

      html: `
        <div style="
          font-family:Arial,sans-serif;
          max-width:600px;
          margin:auto;
          padding:24px;
          border:1px solid #e5e5e5;
          border-radius:12px;
        ">
        
          <h2 style="margin-bottom:20px">
            New Portfolio Inquiry
          </h2>

          <table style="width:100%;border-collapse:collapse">

            <tr>
              <td style="padding:8px 0"><strong>Name:</strong></td>
              <td>${validated.name}</td>
            </tr>

            <tr>
              <td style="padding:8px 0"><strong>Email:</strong></td>
              <td>${validated.email}</td>
            </tr>

            <tr>
              <td style="padding:8px 0"><strong>Phone:</strong></td>
              <td>${validated.phone}</td>
            </tr>

            <tr>
              <td style="padding:8px 0"><strong>Company:</strong></td>
              <td>${validated.company || "Not provided"}</td>
            </tr>

            <tr>
              <td style="padding:8px 0"><strong>Budget:</strong></td>
              <td>${validated.budget || "Not provided"}</td>
            </tr>

            <tr>
              <td style="padding:8px 0"><strong>Project Type:</strong></td>
              <td>${validated.projectType}</td>
            </tr>

          </table>

          <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5;" />

          <h3>Project Details</h3>

          <div style="
            background:#f8f8f8;
            padding:16px;
            border-radius:8px;
            line-height:1.6;
          ">
            ${validated.message.replace(/\n/g, "<br />")}
          </div>

        </div>
      `,
    });

    // response to client
    await resend.emails.send({
      from: "David Obinta <contact@davidobinta.xyz>",
      to: validated.email,

      // helps mail clients know where replies should go
      replyTo: "izuchukwudavido@gmail.com",

      subject: "Thanks for reaching out",

      html: `
      <div style="
        font-family:Arial,sans-serif;
        max-width:600px;
        margin:auto;
        padding:24px;
        line-height:1.6;
      ">
      
      <p>Hi ${validated.name},</p>

      <p>
        I've received your inquiry through my portfolio website.
      </p>

      <p>
        Thanks for taking the time to reach out 😊 — I'll get back to you as soon as possible.
      </p>

      <br />

      <p>
        Best regards,<br/>
        <strong>David Obinta</strong><br/>
        Full Stack & Cloud Engineer<br/>
        davidobinta.xyz
      </p>
    </div>
  `,
    });

    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Failed to send message",
    };
  }
}
