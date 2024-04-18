"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import Card, { CardContent, CardProps } from "@/components/Card";
import { isLoggedIn, loggedasadministratif } from '@/lib/utils/auth'; // Fonctions pour vérifier si l'utilisateur est authentifié et s'il est administratif

import PageTitle from '@/components/dashboard/PageTitle';
import AdministratifLayout from '../AdministratifLayout';

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Vérification de l'authentification et du type d'utilisateur
    if (!isLoggedIn() || !loggedasadministratif()) {
      // Redirection vers la page de connexion si l'utilisateur n'est pas authentifié ou s'il n'est pas administratif
      router.replace('/');
    }
  }, []);

  return (
    <AdministratifLayout>

<div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"></section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Tableau </p>
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Tableau de board Administratif </p>
              <p className="text-sm text-gray-400">
                
              </p>
            </section>
          </CardContent>
          {/* Autres contenus du dashboard */}
        </section>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"></section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Tableau </p>
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Tableau de board Administratif </p>
              <p className="text-sm text-gray-400">
                
              </p>
            </section>
          </CardContent>
          {/* Autres contenus du dashboard */}
        </section>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"></section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Tableau </p>
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Tableau de board Administratif </p>
              <p className="text-sm text-gray-400">
                
              </p>
            </section>
          </CardContent>
          {/* Autres contenus du dashboard */}
        </section>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"></section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Tableau </p>
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Tableau de board Administratif </p>
              <p className="text-sm text-gray-400">
                
              </p>
            </section>
          </CardContent>
          {/* Autres contenus du dashboard */}
        </section>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"></section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Tableau </p>
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Tableau de board Administratif </p>
              <p className="text-sm text-gray-400">
                
              </p>
            </section>
          </CardContent>
          {/* Autres contenus du dashboard */}
        </section>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"></section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Tableau </p>
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Tableau de board Administratif </p>
              <p className="text-sm text-gray-400">
                
              </p>
            </section>
          </CardContent>
          {/* Autres contenus du dashboard */}
        </section>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"></section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Tableau </p>
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Tableau de board Administratif </p>
              <p className="text-sm text-gray-400">
                
              </p>
            </section>
          </CardContent>
          {/* Autres contenus du dashboard */}
        </section>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"></section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Tableau </p>
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Tableau de board Administratif </p>
              <p className="text-sm text-gray-400">
                
              </p>
            </section>
          </CardContent>
          {/* Autres contenus du dashboard */}
        </section>
      </div>
      
    </AdministratifLayout>
  );
}
