import nodemailer from "nodemailer";

// Fonction pour générer un code de vérification de 6 chiffres
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

export async function sendMail({
  to,
  name,
  subject,
}: {
  to: string;
  name: string;
  subject: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  const verificationCode = generateVerificationCode(); // Générer le code de vérification

  const htmlBody = `
    <p>Bonjour ${name},</p>
    <p>Voici votre code de vérification : <strong>${verificationCode}</strong></p>
    <p>Utilisez ce code pour vérifier votre identité.</p>
  `;

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: htmlBody,
    });
    console.log(sendResult);
    return verificationCode; // Retourner le code de vérification généré
  } catch (error) {
    console.log(error);
    return null;
  }
}
