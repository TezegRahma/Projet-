// register.tsx

import { useState } from 'react';
import axios, { AxiosError } from 'axios';


const Register = () => {
    const [formData, setFormData] = useState({
        cin: '',
        date_de_delivrance: '',
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/users/register/', formData);
            // Insérer ici la logique pour rediriger l'utilisateur ou afficher un message de succès
            console.log('User registered successfully');
        } catch (error: any) {
            console.error('Error registering user:', error);
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    console.log('Server responded with status:', axiosError.response.status);
                    console.log('Response data:', axiosError.response.data);
                } else if (axiosError.request) {
                    console.error('No response received:', axiosError.request);
                } else {
                    console.error('Error setting up request:', axiosError.message);
                }
            }
        }
    };
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md  w-full sm:w-96">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Inscription</h2>
                <video autoPlay muted loop className="mb-4 w-full">
            <source src="C:\Users\rahma\academymiraa\public\video.mp4" type="video/mp4" />
            {/* Fallback pour les navigateurs ne supportant pas la balise vidéo */}
            Votre navigateur ne supporte pas la lecture vidéo.
        </video>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="cin" className="block text-sm font-medium text-gray-700">CIN</label>
                        <input type="text" name="cin" id="cin" placeholder="123456789" value={formData.cin} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="date_de_delivrance" className="block text-sm font-medium text-gray-700">Date de délivrance</label>
                        <input type="date" name="date_de_delivrance" id="date_de_delivrance" value={formData.date_de_delivrance} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" placeholder="exemple@domaine.com" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de passe</label>
                        <input type="password" name="password" id="password" placeholder="********" value={formData.password} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Prénom</label>
                        <input type="text" name="first_name" id="first_name" placeholder="Nom" value={formData.first_name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Nom de famille</label>
                        <input type="text" name="last_name" id="last_name" placeholder="Prenom" value={formData.last_name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">S'inscrire</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
