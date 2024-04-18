import React from 'react'
import Link from "next/link";
import { FlagIcon } from 'lucide-react';

export default function Nav() {
  return (
    <div>
       <div className="px-4">
        <div className="border-b border-gray-200 dark:border-gray-700">
          <header className="container py-6 flex items-center fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <Link className="flex items-center gap-2" href="/">
            <img src="/images/logo/mira.png" alt="logo" className="h-8 w-8 mr-2" />
             <span className="text-lg font-semibold">Mira</span>
            </Link>
            <nav className="ml-auto flex gap-4 text-sm">
              <Link
                className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all"
                href="/signup"
              >
                Reglement Interieur 
              </Link>

              <Link
                className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all"
                href="#"
              >
                Reglements des examens
              </Link>
              <Link
                className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all"
                href="#"
              >
                Loi et circulation
              </Link>
              <Link
                className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all"
                href="#"
              >
                Documentation
              </Link>
              <Link
                className="font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all"
                href="#"
              >
                Identité Visuel
              </Link>
              
              {/* Add other navigation links */}
            </nav>
          </header>
        </div>
      </div>
    </div>
  )
}
