"use client"
import { useEffect, useState } from "react";
import { DataTable } from "@/components/dashboard/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import PageTitle from "@/components/dashboard/PageTitle";




type User = {
  last_name: string;
  first_name: string;
  cin: string;
  statut: string;
  new_password: string; // Nouveau champ "new_password"
};



async function fetchUsersFromDatabase(): Promise<User[]> {
  const response = await fetch("http://localhost:8000/users/reset_password_users/");
  const data = await response.json();
  return data.map((user: User) => ({ ...user, new_password: "" }));
}

async function validateUserAccount(user_id: string) {
  const response = await fetch(`http://localhost:8000/users/reset_password${user_id}/`, {
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
  return data.new_password; // Récupérer le nouveau mot de passe depuis la réponse
}

export default function UsersPage() {
  const [data, setData] = useState<User[]>([]);

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

  const handleActivate = async (cin: string, index: number) => {
    try {
      const new_password = await validateUserAccount(cin);
      console.log("User account activated successfully!");

      const updatedData = [...data];
      updatedData[index].new_password = new_password;

      setData(updatedData);
    } catch (error) {
      console.error(error.message);
    }
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
      accessorKey: "new_password",
      header: "Nouveau mot de passe",
      cell: ({ row }) => row.getValue("new_password")
    },
    {
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }) => {
        return (
          <div className="relative">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => handleActivate(row.getValue("cin"))}>
            Reinitialiser
            </button>

             

            
          </div>
        );
      }
    }
  ];

  return (
    <div className="flex flex-col gap-5 w-full">
      <PageTitle title="Reinisialiser Mot de passe " />
      <DataTable columns={columns} data={data} />
    </div>
  );
}
