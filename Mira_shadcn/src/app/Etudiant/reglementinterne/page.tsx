"use client"
import React from 'react'
import ReglementInterne from './reglementInterne'
import EtudiantLayout from '../EtudiantLayout'
import Nav from '@/components/Etudiant/Nav'

export default function page() {
  return (
    <EtudiantLayout>
      <Nav/>
      <ReglementInterne/>
    </EtudiantLayout>
  )
}
