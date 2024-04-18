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
  Users
} from "lucide-react";


import { useWindowWidth } from "@react-hook/window-size";
import { Button } from "../ui/button";
import { Nav } from "../ui/nav";

export default function SideNavbarEnseignant({}: Props) {
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
            href: "/Enseignant/dashboard",
            icon: LayoutDashboard,
            variant: "default"
          },
          {
            title: "Nouveauté",
            href: "/Enseignant/news",
            icon: ShoppingCart,
            variant: "ghost"
          },
          {
            title: "Documentation",
            href: "/Enseignant/reglementinterne",
            icon: Users,
            variant: "ghost"
          }
        ]}
      />
    </div>
  );
}
