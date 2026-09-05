// Vercel Serverless Function — newsletter signup. On each new subscriber:
//   1. Adds them to a Resend Audience (Resend holds the list, not us)
//   2. Sends them an immediate branded welcome email
//   3. Notifies support@alphavalour.co.nz that someone subscribed
//
// Requires RESEND_API_KEY and RESEND_AUDIENCE_ID environment variables.
// Create an Audience in the Resend dashboard → Audiences, and copy its ID.
import { Resend } from "resend";
import { subscriberWelcomeEmail, companySubscriberNotificationEmail } from "./_lib/email-templates.js";

const COMPANY_EMAIL = "support@alphavalour.co.nz";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body || {};
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ error: "Newsletter signup is not configured yet." });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    if (process.env.RESEND_AUDIENCE_ID) {
      await resend.contacts.create({
        email,
        audienceId: process.env.RESEND_AUDIENCE_ID,
      });
    } else {
      console.error("RESEND_AUDIENCE_ID not set — subscriber was not added to an audience.");
    }

    await resend.emails.send({
      from: "Alpha Valour <hello@alphavalour.co.nz>",
      to: email,
      subject: "You're subscribed to Alpha Valour",
      html: subscriberWelcomeEmail(),
    });

    await resend.emails.send({
      from: "Alpha Valour <hello@alphavalour.co.nz>",
      to: COMPANY_EMAIL,
      subject: "New newsletter subscriber",
      html: companySubscriberNotificationEmail({ email }),
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("subscribe error:", err);
    return res.status(500).json({ error: "Could not subscribe right now. Please try again." });
  }
}
