"use client"
import React from 'react'
import Reglement from './reglement'
import Nav from '@/components/user/Nav'
import SideNavbarAdministratif from '@/components/Administratif/SideNavbarAdministratif'
import AdministratifLayout from '../AdministratifLayout'


export default function page() {
  return (
   
        <AdministratifLayout>
        <Nav/>
        
      <Reglement/>
      </AdministratifLayout>
    
  )
}
