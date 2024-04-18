import React from 'react';

export default function NavBar() {
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
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
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
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1">
          <li><a>Formations</a></li>
          <li><a>Departement</a></li>
          <li><a>Politique de confidentialité</a></li>
        </ul>
      </div>
    </div>
  );
}
