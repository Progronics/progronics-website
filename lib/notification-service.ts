"use server"

import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';



const transporter = nodemailer.createTransport({
  host: process.env.BULK_EMAIL_HOST ,
  port: process.env.BULK_EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.BULK_EMAIL_USER,
    pass: process.env.BULK_EMAIL_PASSWORD,
  },
} as SMTPTransport.Options);




export const sendSingleEmail = async (data : {email : string, firstname : string, lastname : string, message : string, number ?: string}) => {

  const {email, firstname, lastname, number, message} = data
  const subject = `Email from ${firstname} ${lastname}`;

   const msg = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Contact Form Submission</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color:#f9fafb; padding:20px; color:#111827;">
    <div style="max-width:600px; margin:0 auto; background:#ffffff; padding:30px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      
      <h2 style="font-size:20px; font-weight:bold; margin-bottom:20px; color:#1f2937;">
        New Contact Form Submission
      </h2>

      <p style="font-size:16px; line-height:1.6;">
        <strong>Name:</strong> ${firstname} ${lastname}
      </p>
      <p style="font-size:16px; line-height:1.6;">
        <strong>Email:</strong> ${email}
      </p>
      <p style="font-size:16px; line-height:1.6;">
        <strong>Phone Number:</strong> ${number || "Not provided"}
      </p>
      <p style="font-size:16px; line-height:1.6; margin-top:20px;">
        <strong>Message:</strong><br/>
        ${message}
      </p>

      <p style="font-size:14px; color:#6b7280; margin-top:30px;">
        This message was sent from your website contact form.
      </p>

      <p style="font-size:16px; font-weight:bold; margin-top:20px;">
        — Progronics
      </p>
    </div>
  </body>
</html>
`;



   
  try {

    if (email) {
      await transporter.sendMail({
        from: process.env.BULK_EMAIL_USER,
        to: "ubaidrehman1840@gmail.com",
        subject,
        text: msg.replace(/<[^>]+>/g, ''),
        html: msg,
      });

      console.log(`Email sent successfully to ${email}`);
    } else {
      throw new Error(`email missing`);
    }
  } catch (error: any) {
    throw new Error(error?.message || "Error sending email");
  }
};


