"use client"


import React, { useEffect } from 'react'
import ReglementExamens from './reglementExamens'
import { isLoggedIn, loggedasadministrateur } from '@/lib/utils/auth';
import { useRouter } from 'next/navigation';
import AdminLayout from '../Adminlayout';


export default function page() {


  const router = useRouter();
  

  return (
    <div>

       <AdminLayout>
      <ReglementExamens/>

      </AdminLayout>
    </div>
  )
}
