"use client"


import { Inter } from "next/font/google";

import React from "react";
import { useToast } from "@/components/ui/use-toast";
const inter = Inter({ subsets: ["latin"] });

import NavBar from "@/components/user/navbar";
import Footer from "@/components/user/Footer";
import Reinitialiser from "./reinitialiser";

export default function SignupForm() {
  const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  return (
    <div  className="pt-16">
      <NavBar />
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Bienvenue Dans Mira !</h1>
      <p className="py-6">institut supérieur des etudes technologiques</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <Reinitialiser/>
    </div>
  
  </div>
</div>
      {/* <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2 mt-4 mb-4">
        <Card className="w-[550px] mt-5 mb-4 ml-4">
          <CardTitle className=" mt-4 mb-4 ml-4">
            Inscription
          </CardTitle>
          <CardContent>
            
            <Inscrit />
          </CardContent>
        </Card>
        <CardContent className="flex flex-col justify-center items-center gap-2 mt-4 mb-4">
          
          <img
            className="w-16 h-16 rounded-full"
            src="/images/logos/iset.png"
            alt="Description de l'image"
          />
          
          <CardDescription className="text-sm text-gray-600 text-center">
          <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Bienvenue Dans Mira !</h1>
      <p className="py-6">institut supérieur des etudes technologiques</p>
    </div>

           
          </CardDescription>
        </CardContent>
      </section>  
      */}
      <Footer />
    </div>
  );
}
