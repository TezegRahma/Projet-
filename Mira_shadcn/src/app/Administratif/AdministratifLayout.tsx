import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import SideNavbarAdministratif from "@/components/Administratif/SideNavbarAdministratif";
import NavBarAdministratif from "@/components/Administratif/AdministratifNavBar";
import Nav from "@/components/user/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function AdministratifLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-white text-black flex ",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development"
          }
        )}
      >
        {/* sidebar */}
        <div style={{ marginTop: "3rem" ,position: "fixed", top: 0, left: 0 }}> {/* Ajoute une marge en haut */}
          <SideNavbarAdministratif  />
        </div>
          <Nav/>
        
        {/* main page */}
        <div style={{ paddingTop: "6rem", paddingLeft: "16rem" }} className="p-8 w-full">
          {children}
        </div>
      </body>
    </html>
  );
}
