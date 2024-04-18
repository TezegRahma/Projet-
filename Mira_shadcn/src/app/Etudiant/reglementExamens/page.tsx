"use client"
import React from 'react'
import ReglementExamens from './reglementExamens'
import EtudiantLayout from '../EtudiantLayout'
import Nav from '@/components/Etudiant/Nav'

export default function page() {
  return (
    <EtudiantLayout>
      <Nav/>
      <ReglementExamens/>
    </EtudiantLayout>
  )
}
