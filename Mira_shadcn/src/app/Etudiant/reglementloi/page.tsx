"use client"
import UserLayout from '@/components/user/UserLayout'
import React from 'react'
import ReglementLoi from './reglementExamens'
import EtudiantLayout from '../EtudiantLayout'
import Nav from '@/components/Etudiant/Nav'

export default function page() {
  return (
    
        <EtudiantLayout>
          <Nav/>

         <ReglementLoi/>

        </EtudiantLayout>
      
    
  )
}
