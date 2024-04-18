
"use client"

import React from 'react'
import News from './news'
import SideNavbarEudiant from '@/components/Etudiant/SideNavbarEtudiant'
import EtudiantLayout from '../Etudiant/EtudiantLayout'

export default function page() {
  return (
    <div>
     <EtudiantLayout>
     <News/>
     </EtudiantLayout>
      
    </div>
  )
}
