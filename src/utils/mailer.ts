import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST || "smtp.gmail.com",
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: false, // TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Base generic sender function
const sendEmail = async (to: string, subject: string, html: string, text: string) => {
  try {
    const info = await transporter.sendMail({
      from: '"Shaastra" <noreply@shaastra.org>',
      to,
      subject,
      html,
      text,
    });
    console.log(`Email sent: ${subject} to ${to} | ID: ${info.messageId}`);
  } catch (error) {
    console.error(`Failed to send email [${subject}]:`, error);
    throw new Error("Email service failed");
  }
};

/**
 * 1. OTP Verification Email
 */
export const sendOtpMail = async (email: string, otp: string) => {
  const subject = "OTP for Verification";
  const html = `
    <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">
      <h2>Verify your account</h2>
      <p>Hi,</p>
      <p>Your OTP for registration is: <b style="font-size: 1.2rem; color: #2d89ef;">${otp}</b></p>
      <p>This code will expire in 10 minutes.</p>
    </div>
  `;
  const text = `Hi , Your OTP for registration is ${otp}`;
  await sendEmail(email, subject, html, text);
};

/**
 * 2. Account Confirmation Email
 */
export const sendWelcomeMail = async (email: string, username: string) => {
  const subject = "Account Confirmed! Welcome to Shaastra";
  const html = `
    <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">
      <h2 style="color: #4CAF50;">Registration Successful!</h2>
      <p>Hi ${username},</p>
      <p>Your account has been successfully confirmed. You can now explore all the features of the Shaastra portal.</p>
      <a href="https://shaastra.org/login" style="background: #2d89ef; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Login to Dashboard</a>
    </div>
  `;
  const text = `Hi ${username}, your account has been successfully confirmed. Welcome to Shaastra!`;
  await sendEmail(email, subject, html, text);
};

/**
 * 3. Payment Confirmation Email
 */
export const sendPaymentConfirmationMail = async (
  email: string, 
  username: string, 
  amount: number, 
  transactionId: string
) => {
  const subject = "Payment Successful - Receipt";
  const html = `
    <div style="font-family: sans-serif; border: 1px solid #eee; padding: 20px;">
      <h2 style="color: #2d89ef;">Payment Received</h2>
      <p>Hi ${username},</p>
      <p>Thank you for your payment. Your transaction was successful.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><b>Amount Paid:</b></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">₹${amount}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;"><b>Transaction ID:</b></td>
          <td style="padding: 8px; border-bottom: 1px solid #ddd;">${transactionId}</td>
        </tr>
      </table>
      <p>A digital copy of your invoice is attached to your dashboard profile.</p>
    </div>
  `;
  const text = `Hi ${username}, your payment of ₹${amount} was successful. Transaction ID: ${transactionId}`;
  await sendEmail(email, subject, html, text);
};