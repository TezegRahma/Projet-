/**
 * v0 by Vercel.
 * @see https://v0.dev/t/dFDJsSCgHvg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function page() {
  return (
    <div className="bg-[#121212] text-white h-screen">
      <header className="flex items-center justify-between p-6 border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <MenuIcon className="text-white" />
          <h1 className="text-2xl font-bold">Droppex</h1>
        </div>
        <div className="flex items-center space-x-4">
          <SearchIcon className="text-white" />
          <LayoutGridIcon className="text-white" />
          <SignalIcon className="text-white" />
          <Avatar>
            <AvatarImage alt="User avatar" src="/placeholder.svg?height=32&width=32" />
          </Avatar>
        </div>
      </header>
      <div className="flex">
        <aside className="w-60 bg-[#1A1A1A] p-6">
          <Button className="mb-6 w-full bg-[#007bff] text-white">New folder</Button>
          <nav className="flex flex-col space-y-2">
            <Link className="flex items-center space-x-2 text-white" href="#">
              <HomeIcon className="text-white" />
              <span>Home</span>
            </Link>
            <Link className="flex items-center space-x-2 text-white" href="#">
              <TrashIcon className="text-white" />
              <span>Trash</span>
            </Link>
          </nav>
          <div className="mt-6">
            <h2 className="text-sm">Storage</h2>
            <div className="mt-2 w-full bg-gray-700 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#007bff] h-2.5 rounded-full"
                style={{
                  width: "10%",
                }}
              />
            </div>
            <div className="flex justify-between text-xs mt-2">
              <span>10GB / 100GB</span>
              <span>10%</span>
            </div>
          </div>
        </aside>
        <main className="flex-1 p-6">
          <h2 className="text-xl font-semibold mb-4">Ramy Main Drive</h2>
          <div className="flex flex-col">
            <div className="overflow-auto rounded-lg shadow hidden md:block">
              <table className="w-full">
                <thead className="bg-gray-800 border-b border-gray-700">
                  <tr>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      Name
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      Uploaded
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      Size
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      View No.
                    </th>
                    <th
                      className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                      scope="col"
                    >
                      Last modified
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-gray-700 divide-y divide-gray-600">
                  <tr className="hover:bg-gray-600">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      <FileIcon className="inline mr-2 text-blue-500" />
                      file.txt
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Nov 26, 2022 3:18AM</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">88 KB</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">2 times</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">Dec 10, 2022 2:00PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function FileIcon(props) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  )
}


function HomeIcon(props) {
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


function LayoutGridIcon(props) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SignalIcon(props) {
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
      <path d="M2 20h.01" />
      <path d="M7 20v-4" />
      <path d="M12 20v-8" />
      <path d="M17 20V8" />
      <path d="M22 4v16" />
    </svg>
  )
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}
