/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GUeWFShHWgx
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { JSX, SVGProps } from "react"


export default function SideBar() {
  return (
    <div className="h-full min-h-screen w-60 border-r">
      <div className="flex h-14 items-center px-4">
        <Link className="flex items-center gap-2 text-lg font-bold" href="#">
          <PackageIcon className="h-6 w-6" />
          <span>Acme Inc</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto">
        <div>
          <div>
            <div>
              <HomeIcon className="mr-4 h-5 w-5" />
              Home
            </div>
            <div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <PackageIcon className="h-4 w-4" />
                  Billing
                </Link>
              </div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <UsersIcon className="h-4 w-4" />
                  Users
                </Link>
              </div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <SettingsIcon className="h-4 w-4" />
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <PackageIcon className="mr-4 h-5 w-5" />
              Billing
            </div>
            <div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <HomeIcon className="h-4 w-4" />
                  Home
                </Link>
              </div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <UsersIcon className="h-4 w-4" />
                  Users
                </Link>
              </div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <SettingsIcon className="h-4 w-4" />
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <UsersIcon className="mr-4 h-5 w-5" />
              Users
            </div>
            <div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <HomeIcon className="h-4 w-4" />
                  Home
                </Link>
              </div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <PackageIcon className="h-4 w-4" />
                  Billing
                </Link>
              </div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <SettingsIcon className="h-4 w-4" />
                  Settings
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div>
              <SettingsIcon className="mr-4 h-5 w-5" />
              Settings
            </div>
            <div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <HomeIcon className="h-4 w-4" />
                  Home
                </Link>
              </div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <PackageIcon className="h-4 w-4" />
                  Billing
                </Link>
              </div>
              <div>
                <Link className="flex items-center gap-2 font-medium rounded-md p-2" href="#">
                  <UsersIcon className="h-4 w-4" />
                  Users
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function PackageIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function SettingsIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
