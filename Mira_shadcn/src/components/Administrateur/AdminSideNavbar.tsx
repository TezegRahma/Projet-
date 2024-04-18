/** @format */
"use client";

import { useState } from "react";

type Props = {};

import {
  ShoppingCart,
  LayoutDashboard,
  
  Settings,
  ChevronRight,
  User,
  Users,
  ActivitySquareIcon,
  ActivitySquare
} from "lucide-react";

import { useWindowWidth } from "@react-hook/window-size";
import { Button } from "../ui/button";
import { Nav } from "../ui/nav";

export default function AdminSideNavbar({}: Props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Tableau de bord",
            href: "/Administrateur/dashboard",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Activation des comptes",
            href: "/Administrateur/users",
            icon: ActivitySquare,
            variant: "ghost"
          },
          {
            title: "Compte Actifs",
            href: "/Administrateur/comptesActifs",
            icon: Users,
            variant: "ghost"
          },
          {
            title: "Documentation",
            href: "/Administrateur/reglementinterne",
            icon: Users,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
