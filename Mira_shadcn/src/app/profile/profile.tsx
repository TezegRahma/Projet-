/**
 * v0 by Vercel.
 * @see https://v0.dev/t/BwdfweJKe3q
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getUserCin, isLoggedIn } from '@/lib/utils/auth';
export default function Profile() {
  const router = useRouter();
const [profilePicture, setProfilePicture] = useState(null);
  const [formData, setFormData] = useState({
    
    firstName: '',
    lastName: '',
    prenom_arabe: '',
    nomArabe: '',
    lieuNaissanceArabe: '',
    adresseArabe: '',
    delegationArabe: '',
    dateDeDelivrance: '',
    genre: '',
    etatCivil: '',
    nationalite: '',
    dateNaissance: '',
    lieuNaissance: '',
    adresse: '',
    gouvernorat: '',
    delegation: '',
    codePostal: '',
    phoneNumber: '',
    image: null
  });

  useEffect(() => {
    // Vérification de l'authentification et du type d'utilisateur
    if (!isLoggedIn()) {
      // Redirection vers la page de connexion si l'utilisateur n'est pas authentifié ou s'il n'est pas administratif
      router.replace('/');
    } else {
      // Récupération de l'ID de l'utilisateur
      const usercin = getUserCin(); // Fonction à remplacer par la méthode réelle de récupération de l'ID de l'utilisateur depuis votre module d'authentification
      setFormData(prevState => ({ ...prevState, usercin }));
    }
  }, []);
  useEffect(() => {
    fetchDataFromBackend(); // Appel de la fonction de récupération des données au chargement du composant
  }, []);

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch('http://localhost:8000/profil/profiles/cin/06605426/');
      if (response.ok) {
        const data = await response.json();
        setFormData(data); // Mettre à jour l'état avec les données récupérées
        setProfilePicture(data.image); // Mettre à jour l'image de profil
        console.log(formData.image) 
      } else {
        console.error('Erreur lors de la récupération des données');
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };
  
  const updateProfile = async () => {
    try {
      console.log(JSON.stringify(formData))
      const response = await fetch('http://localhost:8000/profil/update/06605426/', {
        method: 'PUT', // ou 'POST' selon votre API
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
         // Envoyer les données mises à jour
      });
      
      if (response.ok) {
        console.log('Profil mis à jour avec succès');
        // Éventuellement, vous pouvez également mettre à jour l'état avec les nouvelles données reçues du backend
      } else {
        console.error('Erreur lors de la mise à jour du profil');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
    }
  };
  

  const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      setFormData({
        ...formData,
        image: reader.result.split(',')[1] // Convertir l'image en base64 en supprimant l'en-tête de données
      });
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = () => {
    updateProfile();
    // Envoyer formData à votre backend pour enregistrement
    console.log(formData);
  };
  return (
    <div>
      <div className="px-4 py-6 space-y-6 md:px-6 lg:px-8">
        <label className="block text-sm font-medium text-gray-700" htmlFor="profile-picture">
          Photo de profile
        </label>
        
        <div className="flex items-center space-x-4">
        <label className="cursor-pointer" htmlFor="profile-picture">
  {formData.image ? (
    <img
      alt="Profile"
      className="rounded-full"
      height="96"
      src={`data:image/png;base64,${formData.image}`} // Utilisez formData.image comme source de l'image
      style={{
        aspectRatio: "96/96",
        objectFit: "cover",
      }}
      width="96"
    />
  ) : (
    <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
      {/* Placeholder d'image par défaut */}
      <span className="text-gray-500 text-sm">No Image</span>
    </div>
  )}
  <input className="hidden" id="profile-picture" type="file" onChange={handlePictureChange} />
</label>
          <div className="space-y-2">
      
    </div>
          <div className="space-y-2">
            <h1 className="text-2xl font-bold"> {formData.lastName} {formData.firstName}</h1>
            <p className="text-gray-500">@{formData.firstName.toLowerCase()}{formData.lastName.toLowerCase()}</p>
          </div>
        </div>
        <div className="space-y-2">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          
            <div className="space-y-2">
              <dt className="font-medium">Nom</dt>
              <dd>
                <input className="input" placeholder="Entrez votre nom" type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">Prenom </dt>
              <dd>
                <input className="input" placeholder="Entrez votre Prenom" type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium"> الإسم </dt>
              <dd>
                <input className="input" placeholder="أدخل الإسم " type="text" name="prenom_arabe" value={formData.prenom_arabe} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium"> اللقب </dt>
              <dd>
                <input className="input" placeholder="أدخل اللقب " type="text" name="nomArabe" value={formData.nomArabe} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">Date de naissance</dt>
              <dd>
                <input className="input" placeholder="Entrez votre date de naissance" type="date"  name="dateNaissance" value={formData.dateNaissance} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium"> Date de delivrance de la carte d'identité Nationale</dt>
              <dd>
                <input className="input" placeholder="" type="date" name="dateDeDelivrance" value={formData.dateDeDelivrance} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">Lieu de Naissance  </dt>
              <dd>
                <input className="input" placeholder="Entrez votre Lieu de naissance" type="text" name="lieuNaissance" value={formData.lieuNaissance} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">مكان الولادة   </dt>
              <dd>
                <input className="input" placeholder="أدخل مكان الولادة " type="text" name="lieuNaissanceArabe" value={formData.lieuNaissanceArabe} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">Adress  </dt>
              <dd>
                <input className="input" placeholder="Entrez votre Adress" type="text" name="adress" value={formData.adresse} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">العنوان  </dt>
              <dd>
                <input className="input" placeholder="أدخل العنوان " type="text" name="adressArabe" value={formData.adresseArabe} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">Delegation  </dt>
              <dd>
                <input className="input" placeholder=" Entrez delegation" type="text" name="delegation" value={formData.delegation} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">المعتمدية   </dt>
              <dd>
                <input className="input" placeholder="أدخل المعتمدية  " type="text" name="delegationArabe" value={formData.delegationArabe} onChange={handleInputChange} />
              </dd>
            </div>

            <div className="space-y-2">
              <dt className="font-medium">Genre</dt>
              <dd>
                <Select>
                  <SelectTrigger className="input">
                    <SelectValue placeholder="choisir le genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="homme">Homme</SelectItem>
                    <SelectItem value="Femme">Femme</SelectItem>
                  </SelectContent>
                </Select>
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">État civil</dt>
              <dd>
                <Select>
                  <SelectTrigger className="input">
                    <SelectValue placeholder="choisir l'etat civile" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="célibataire ">Célibataire </SelectItem>
                    <SelectItem value="marié">Marié</SelectItem>
                    <SelectItem value="divorcé">Divorcé</SelectItem>
                    <SelectItem value="veuf">Veuf</SelectItem>
                  </SelectContent>
                </Select>
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">Governorat  </dt>
              <dd>
                <input className="input" placeholder="Entrez Governorat" type="text" name="gouvernorat" value={formData.gouvernorat} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">Code postal  </dt>
              <dd>
                <input className="input" placeholder="Entrez Code postale" type="text" name="codePostal" value={formData.codePostal} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">Nationalité  </dt>
              <dd>
                <input className="input" placeholder="Entrez Nationalité" type="text" name="nationalite" value={formData.nationalite} onChange={handleInputChange} />
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="font-medium">numéro de téléphone</dt>
              <dd>
                <input className="input" placeholder="Entrez numéro de téléphone" type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
              </dd>
            </div>
            
            
          </dl>
        </div>
        <div className="space-y-2">
          <Button size="lg" onClick={handleSubmit}>Save Changes</Button>
        </div>
      </div>
    </div>
  )
 
}

