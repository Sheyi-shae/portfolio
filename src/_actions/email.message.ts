import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface ContactProps {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const myEmail = "adeniyiemmanuel042@gmail.com";

const sendEmail = async ({ firstName, lastName, email, subject, message }: ContactProps) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: myEmail,
    subject, 
    html: `
      <div style="font-family: Arial, sans-serif; background-color:#f9fafb; padding:20px;">
        <table width="100%" border="0" cellspacing="0" cellpadding="0"
               style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:10px; overflow:hidden; box-shadow:0 4px 8px rgba(0,0,0,0.1);">
          <tr>
            <td style="background: linear-gradient(90deg, #4f46e5, #14b8a6); padding:20px; text-align:center;">
              <h1 style="color:#ffffff; margin:0; font-size:22px;">New Contact Form Message</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:30px; color:#374151; font-size:15px; line-height:1.6;">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="margin:15px 0; padding:15px; background-color:#f0f9ff; border-left:4px solid #14b8a6; border-radius:6px; color:#111827;">
                ${message}
              </blockquote>
            </td>
          </tr>
          <tr>
            <td style="background: linear-gradient(90deg, #14b8a6, #4f46e5); padding:15px; text-align:center;">
              <p style="color:#ffffff; margin:0; font-size:12px;">
                © ${new Date().getFullYear()} Portfolio Contact · All rights reserved
              </p>
            </td>
          </tr>
        </table>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
