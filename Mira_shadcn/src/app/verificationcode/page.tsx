"use client"
import { Inter } from "next/font/google";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";


import NavBar from "@/components/user/navbar";
import Verifiercode from "./verifiercode";

const inter = Inter({ subsets: ["latin"] });



export default function verifiercodePage() {
  
  const [formStep, setFormStep] = React.useState(0);

  return (
    <div  className="pt-16">
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <Verifiercode/>
    </div>
  
  </div>
</div>


      {/*  */}
   
    </div>
  );
}
