/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1IvMxHuocZV
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"

export default function Component() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <Package2Icon className="h-6 w-6" />
              <span className="">Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
              >
                <ActivityIcon className="h-4 w-4" />
                Activity
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <InfoIcon className="h-4 w-4" />
                Info
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <AlertTriangleIcon className="h-4 w-4" />
                Warning
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
              >
                <AlertCircleIcon className="h-4 w-4" />
                Error
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>Unlock all features and get unlimited access to our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" size="sm">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden flex items-center gap-2 text-xl font-semibold" href="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
          <nav className="hidden lg:flex flex-1 items-center gap-4 text-sm font-medium lg:gap-6 lg:text-base xl:gap-8">
            <Link
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <ActivityIcon className="h-4 w-4" />
              Activity
            </Link>
            <Link
              className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <InfoIcon className="h-4 w-4" />
              Info
            </Link>
            <Link
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <AlertTriangleIcon className="h-4 w-4" />
              Warning
            </Link>
            <Link
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <AlertCircleIcon className="h-4 w-4" />
              Error
            </Link>
          </nav>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex items-center">
            <h1 className="font-semibold text-lg md:text-2xl">Info</h1>
            <form className="ml-auto flex w-full max-w-xs">
              <div className="relative w-full">
                <SearchIcon className="absolute left-4 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-10 dark:bg-gray-950"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </form>
          </div>
          <div className="grid gap-4 md:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white border-gray-200 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800 dark:shadow-sm">
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <InfoIcon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
                  <div className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                    <p className="truncate">Successfully deployed version 1.2.0 to production</p>
                    <p className="text-xs">2 minutes ago</p>
                  </div>
                </div>
                <Button className="rounded-full md:justify-self-end" size="icon">
                  <ChevronRightIcon className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white border-gray-200 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800 dark:shadow-sm">
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <InfoIcon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
                  <div className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                    <p className="truncate">Successfully deployed version 1.2.0 to production</p>
                    <p className="text-xs">2 minutes ago</p>
                  </div>
                </div>
                <Button className="rounded-full md:justify-self-end" size="icon">
                  <ChevronRightIcon className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white border-gray-200 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800 dark:shadow-sm">
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <InfoIcon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
                  <div className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                    <p className="truncate">Successfully deployed version 1.2.0 to production</p>
                    <p className="text-xs">2 minutes ago</p>
                  </div>
                </div>
                <Button className="rounded-full md:justify-self-end" size="icon">
                  <ChevronRightIcon className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white border-gray-200 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800 dark:shadow-sm">
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <InfoIcon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
                  <div className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                    <p className="truncate">Successfully deployed version 1.2.0 to production</p>
                    <p className="text-xs">2 minutes ago</p>
                  </div>
                </div>
                <Button className="rounded-full md:justify-self-end" size="icon">
                  <ChevronRightIcon className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white border-gray-200 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:border-gray-800 dark:shadow-sm">
              <div className="grid gap-2 md:grid-cols-2">
                <div className="flex items-center gap-2">
                  <InfoIcon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
                  <div className="text-sm text-gray-500 md:text-base dark:text-gray-400">
                    <p className="truncate">Successfully deployed version 1.2.0 to production</p>
                    <p className="text-xs">2 minutes ago</p>
                  </div>
                </div>
                <Button className="rounded-full md:justify-self-end" size="icon">
                  <ChevronRightIcon className="h-4 w-4" />
                  <span className="sr-only">View details</span>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function ActivityIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}


function AlertCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}


function AlertTriangleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function InfoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function Package2Icon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
