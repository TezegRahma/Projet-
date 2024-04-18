import { logout } from '@/lib/utils/auth';
import router, { useRouter } from 'next/navigation';
import React from 'react'

export default function AdminNavBar() {

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
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href="/Administrateur/dashboard">Dashboard</a></li>
            <li><a href="/Administrateur/users" >Activer Comptes Users</a></li>
            <li><a href="/Administrateur/dashboard"> Reinitililer Les mot de passe </a></li>
          </ul>
        </div>
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
      <ul className="menu menu-horizontal px-1">
          <li><a>Formations</a></li>
          <li><a>Departement</a></li>
          <li><a>Politique de confidentialité</a></li>
        </ul>
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


