import NavBar from "@/components/user/navbar";
import Login from "./information/Login";
import Signin from "./signin/login";
import SigninForm from "./signin/page";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button";
import { DrawerDialogDemo } from "@/components/DrawerDialogDemo";

export default function Home() {
  return (
    <main >
      <NavBar/>
   <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Bienvenue Dans Mira !</h1>
      <p className="py-6">institut supérieur des etudes technologiques</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <SigninForm/>
    </div>
    <DrawerDialogDemo/>

  </div>
</div>
    </main>
  );
}