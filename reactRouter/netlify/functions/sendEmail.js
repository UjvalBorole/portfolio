import emailjs from "@emailjs/nodejs";

export const handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    const result = await emailjs.send(
      process.env.VITE_EMAILJS_SERVICE_ID,
      process.env.VITE_EMAILJS_TEMPLATE_ID,
      data,
      {
        publicKey: process.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully!", result }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
