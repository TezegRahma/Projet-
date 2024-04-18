'use client'
import Image from "next/image";
import Register from "../components/register";
import Sidebar from "../components/sidebar/sidebar";
import SideNavbar from "../components/SideNavBar";
import SignupForm from "@/pages/Authentication/SignupForm";

export default function Home() {
  return (
    <main >
      <div >
      <SideNavbar/>
      <Register/>
      </div>
    </main>
  );
}
