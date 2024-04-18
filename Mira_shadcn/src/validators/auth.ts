import { z } from "zod";
import { checkEmailExists } from "@/services/userService"; // Assumez que cette fonction envoie une requête à votre API Django pour vérifier si l'email existe déjà

export const registerSchema = z.object({
  
  name: z
    .string()
    .min(3, { message: "Votre nom ne doit pas être si court !" })
    .max(255),
  studentId: z
    .string()
    .min(7)
    .max(7)
    .refine((val) => !isNaN(val as unknown as number), {
      message: "L'identifiant de l'étudiant doit être un nombre",
    }),
  year: z.string().min(2).max(10),
  password: z
    .string()
    .min(6, { message: "Le mot de passe doit contenir au moins 6 caractères" })
    .max(100)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/,
      {
        message:
          "Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre et un caractère spécial",
      }
    ),
  confirmPassword: z.string().min(6).max(100)
    .refine(confirmPassword => {
      const password = confirmPassword;
      return password !== undefined && confirmPassword === password;
    }, {
      message: "Les mots de passe doivent correspondre",
    }),
  nom: z.string().max(255), // Adjust max length as needed
  prenom: z.string().max(255), // Adjust max length as needed
  cin: z.string().length(8), // Assuming CIN is 8 characters long
  dateDeDelivrance: z.string().refine((dateDeDelivrance) => {
    const today = new Date();
    const selectedDate = new Date(dateDeDelivrance);
    return selectedDate.getTime() < today.getTime(); // Comparaison des timestamps
  }, {
    message: "La date de délivrance doit être antérieure à la date d'aujourd'hui",
  }),
  genre: z.string(), // Adjust validation as needed
  telephone: z.string().refine((telephone) => {
    // Regex for Tunisian phone numbers (+216)
    const tunisianPhoneRegex = /^\+216\d{8}$/;
    return tunisianPhoneRegex.test(telephone);
  }, {
    message: "Veuillez saisir un numéro de téléphone tunisien valide (par exemple, +21612345678)",
  }),
  email: z.string().email(),
});
