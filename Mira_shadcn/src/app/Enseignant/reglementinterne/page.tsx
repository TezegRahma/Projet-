"use client"
import React from 'react'
import ReglementInterne from './reglementInterne'
import EnseignantLayout from '../EnseignantLayout'
import Nav from '@/components/Enseignant/Nav'

export default function page() {
  return (
    <EnseignantLayout>
        <Nav/>
      <ReglementInterne/>
    </EnseignantLayout>
  )
}
