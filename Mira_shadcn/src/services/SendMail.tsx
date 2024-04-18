import { Button } from "@/components/ui/button";
import { sendMail } from "@/lib/mail";

// Fonction pour générer un code de vérification de 6 chiffres
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000);
}

export default function SendEmail() {
  const send = async () => {
    "use server";
    const verificationCode = generateVerificationCode(); // Générer le code de vérification

    const htmlBody = `
      <p>Bonjour Monsieur depuis notre Application ,</p>
      <p>Voici votre code de vérification : <strong>${verificationCode}</strong></p>
      <p>Utilisez ce code pour vérifier votre identité.</p>
    `;

    await sendMail({
      to: "rahmatezeghdenti@gmail.com",
      name: "sabeur",
      subject: "Test Mail",
      htmlBody: htmlBody, // Utiliser le corps HTML généré
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <form>
        <Button formAction={send}>test</Button>
      </form>
    </main>
  );
}
