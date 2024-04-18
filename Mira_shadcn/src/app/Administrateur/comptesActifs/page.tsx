"use client"
import { useEffect, useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/dashboard/PageTitle";
import { DataTable } from '@/components/dashboard/DataTable';
import { useRouter } from 'next/navigation';
import AdminLayout from "../Adminlayout";
import { isLoggedIn } from "@/lib/utils/auth";


type User = {
  last_name: string;
  first_name: string;
  cin: string;
  statut: string;
};

async function fetchUsersFromDatabase(): Promise<User[]> {
  const response = await fetch("http://localhost:8000/users/active_users/");
  const data = await response.json();
  return data;
}

async function validateUserAccount(user_id: string) {
  const response = await fetch(`http://localhost:8000/users/deactive_user_account/${user_id}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({}) // no request body needed for this API
  });

  if (!response.ok) {
    throw new Error('Error activating user account: Server responded with error');
  }

  const contentType = response.headers.get('content-type');
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Error activating user account: Invalid response from server');
  }

  const data = await response.json();
  return data;
}

async function getUserDetails(cin: string): Promise<User> {
  const response = await fetch(`http://localhost:8000/users/user_detail/${cin}/`, {
    method: 'GET',
  });
  const data = await response.json();
  return data;
}

export default function UsersPage() {
  const router = useRouter();
  const [data, setData] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null); // État pour stocker les détails de l'utilisateur sélectionné
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture et la fermeture du modal

 // useEffect(() => {
 //   // Vérification de l'authentification
 //   if (!isLoggedIn()) {
 //     // Redirection vers la page de connexion si l'utilisateur n'est pas authentifié
 //     router.replace('/');
 //   }
 // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await fetchUsersFromDatabase();
        setData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleActivate = async (cin: string) => {
    try {
      const responseData = await validateUserAccount(cin);
      console.log("User account activated successfully!", responseData);

      // Envoie de l'e-mail après la validation du compte utilisateur
    

      // Rafraîchissement des données après l'activation réussie
      const refreshedData = await fetchUsersFromDatabase();
      setData(refreshedData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleView = async (cin: string) => {
    try {
      const userDetails = await getUserDetails(cin);
      setSelectedUser(userDetails); // Mettre à jour les détails de l'utilisateur sélectionné
      setIsModalOpen(true); // Ouvrir le modal
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const closeModal = () => {
    setSelectedUser(null); // Réinitialiser les détails de l'utilisateur sélectionné
    setIsModalOpen(false); // Fermer le modal
  };
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: "last_name",
      header: "Nom",
      cell: ({ row }) => row.getValue("last_name")
    },
    { 
      accessorKey: "first_name",
      header: "Prénom",
      cell: ({ row }) => row.getValue("first_name")
    },
    {
      accessorKey: "cin",
      header: "CIN",
      cell: ({ row }) => row.getValue("cin")
    },
    {
      accessorKey: "statut",
      header: "Statut",
      cell: ({ row }) => row.getValue("statut")
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="relative">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleActivate(row.getValue("cin"))}>
              Desactiver
            </button>

            <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleView(row.getValue('cin'))}>
              Voir
            </button>

            
          </div>
        );
      }
    }
  ];

  return (
    <AdminLayout>
      <div >
    
<div className="flex flex-col gap-5 w-full">
  
  <PageTitle title="Valider Comptes Utilisateurs" />
  <DataTable columns={columns} data={data} />
</div>
    </div>
     {/* Modal pour afficher les détails de l'utilisateur */}
     {isModalOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />
            <div className="bg-white p-8 rounded-lg z-50 relative">
              <h3 className="font-bold text-lg">Détails de l'utilisateur</h3>
              <p>Nom: {selectedUser?.last_name}</p>
              <p>Prénom: {selectedUser?.first_name}</p>
              <p>CIN: {selectedUser?.cin}</p>
              <p>Statut: {selectedUser?.statut}</p>
              <div className="modal-action">
                <button className="btn" onClick={closeModal}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
    
    
    
    
    
    
    
    
    
    
  );
}
