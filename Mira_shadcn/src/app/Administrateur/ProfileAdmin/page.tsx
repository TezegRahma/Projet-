import React from 'react'
import ProfileAdministrateur from './ProfileAdministrateur'
import AdminLayout from '../Adminlayout'
import PageTitle from '@/components/PageTitle'
import { CardContent } from '@/components/Card'
import { CardTitle } from '@/components/ui/card'

export default function page() {
  return (
    <AdminLayout>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4"></section>
        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
          <CardTitle>Profile Administrateur</CardTitle>
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <CardTitle> Administrateur</CardTitle>
            <section>
             
            </section>
          </CardContent>
          {/* Autres contenus du dashboard */}
        </section>
      </div>
    </AdminLayout>
  )
}
