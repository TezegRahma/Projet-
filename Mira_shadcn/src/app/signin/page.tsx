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
import Signin from "./login";






const inter = Inter({ subsets: ["latin"] });



export default function SigninForm() {
  
  const [formStep, setFormStep] = React.useState(0);

  return (
    <div >
      
     <Card className="  mt-5 mb-5 ml-5 mr-5">
      <CardTitle className = "  mt-5 mb-5 ml-5 mr-5" >
      Connection
      </CardTitle>
      <CardContent>
        
        <Signin/>
        
      </CardContent>
      </Card>
     


      {/*  */}
   
    </div>
  );
}
