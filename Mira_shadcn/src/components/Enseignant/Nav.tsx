import React from 'react'
import Link from "next/link";
import { logout } from '@/lib/utils/auth';
import router, { useRouter } from 'next/navigation';


export default function Nav() {

  const router = useRouter();
  const handleLogout = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    logout();
    // Redirect to the homepage or any other page after logout
    router.push('/');
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-10">
      <div className="navbar-start">
        
        <div className="flex items-center">
          <a href="/" className="btn btn-ghost text-xl flex items-center">
            {/* Replace "path_to_your_logo_image" with the actual path to your logo image */}
            <img src="/images/logo/mira.png" alt="logo" className="h-8 w-8 mr-2" />
            Mira
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-center">
      <nav className="ml-auto flex gap-4 text-sm">

      <ul className="menu menu-horizontal px-1">
          <li><a href="/Enseignant/reglementinterne"> Reglement Interieur </a></li>
          <li><a href="/Enseignant/reglementExamens">Reglements des examens</a></li>
          <li><a href="/Enseignant/reglementloi">Loi et circulation</a></li>
          
        </ul>
             
            </nav>
      </div>
      <div className="navbar-end">
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between"  href="/Administrateur/ProfileAdmin">
            Profile
            <span className="badge">Nouveau</span>
          </a>
        </li>
        <li><a href="/Administrateur/CompteAdministrateur">Parametre du compte</a></li>
        <li><a href="#" onClick={handleLogout}>Se déconnecter</a></li>
      </ul>
    </div>
      </div>
    </div>
  );
}


