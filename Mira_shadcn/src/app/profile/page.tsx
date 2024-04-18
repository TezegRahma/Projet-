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
import { useToast } from "@/components/ui/use-toast";
const inter = Inter({ subsets: ["latin"] });
import Inscrit from "./profile";
import NavBar from "@/components/user/navbar";
import Footer from "@/components/user/Footer";
import Profile from "./profile";

export default function SignupForm() {
  const { toast } = useToast();
  const [formStep, setFormStep] = React.useState(0);
  return (
    <div  className="pt-16">
      <NavBar />
      
    <Profile/>
   
  
  
      <Footer />
    </div>
  );
}
