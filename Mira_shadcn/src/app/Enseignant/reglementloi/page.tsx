
"use client"
import React from 'react'
import ReglementLoi from './reglementExamens'
import EnseignantLayout from '../EnseignantLayout'
import Nav from '@/components/Enseignant/Nav'

export default function page() {
  return (
    
        <EnseignantLayout>
          <Nav/>

<ReglementLoi/>

        </EnseignantLayout>
      
    
  )
}
