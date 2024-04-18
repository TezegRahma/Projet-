/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/nk5iSmoaZHc
 */
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NavBarSide() {
  return (
    <div className="flex h-screen bg-gray-800 text-white">
      <aside className="w-64 p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage alt="Alicia Koch" src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <span className="font-bold">Alicia Koch</span>
        </div>
        <nav className="space-y-1">
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 bg-gray-700" href="#">
            <InboxIcon className="h-5 w-5" />
            <span>Inbox</span>
            <Badge variant="secondary">128</Badge>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <GitPullRequestDraftIcon className="h-5 w-5" />
            <span>Drafts</span>
            <Badge>9</Badge>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <SendIcon className="h-5 w-5" />
            <span>Sent</span>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <TrashIcon className="h-5 w-5" />
            <span>Junk</span>
            <Badge>23</Badge>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <TrashIcon className="h-5 w-5" />
            <span>Trash</span>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <ArchiveIcon className="h-5 w-5" />
            <span>Archive</span>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <FacebookIcon className="h-5 w-5" />
            <span>Social</span>
            <Badge>972</Badge>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <SettingsIcon className="h-5 w-5" />
            <span>Updates</span>
            <Badge>342</Badge>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <UsersIcon className="h-5 w-5" />
            <span>Forums</span>
            <Badge>128</Badge>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <ShoppingCartIcon className="h-5 w-5" />
            <span>Shopping</span>
            <Badge>8</Badge>
          </Link>
          <Link className="flex items-center space-x-3 rounded-md px-3 py-2 hover:bg-gray-700" href="#">
            <MenuIcon className="h-5 w-5" />
            <span>Promotions</span>
            <Badge>21</Badge>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 overflow-hidden">
        <div className="flex h-full">
          <section className="w-96 border-r border-gray-700 p-6 overflow-y-auto">
            <div className="flex items-center space-x-2">
              <Input className="flex-1 rounded-md bg-gray-700 text-white" placeholder="Search" />
              <Button className="rounded-md bg-gray-700 text-white">Search</Button>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="William Smith" src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>WS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">William Smith</div>
                    <div className="text-sm text-gray-400">Meeting Tomorrow</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">5 months ago</div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="Alice Smith" src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>AS</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">Alice Smith</div>
                    <div className="text-sm text-gray-400">Re: Project Update</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">5 months ago</div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="Bob Johnson" src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>BJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">Bob Johnson</div>
                    <div className="text-sm text-gray-400">Weekend Plans</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">11 months ago</div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="Emily Davis" src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>ED</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">Emily Davis</div>
                    <div className="text-sm text-gray-400">Re: Question about Budget</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">12 months ago</div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage alt="Michael Wilson" src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>MW</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold">Michael Wilson</div>
                    <div className="text-sm text-gray-400">Important Announcement</div>
                  </div>
                </div>
                <div className="text-sm text-gray-400">about 1 year ago</div>
              </div>
            </div>
          </section>
          <section className="flex-1 p-6 overflow-y-auto">
            <div className="flex justify-between">
              <div className="flex items-center space-x-4">
                <SendToBackIcon className="h-6 w-6" />
                <ForwardIcon className="h-6 w-6" />
              </div>
              <div className="flex items-center space-x-4">
                <ReplyIcon className="h-6 w-6" />
                <DeleteIcon className="h-6 w-6" />
                <MoreHorizontalIcon className="h-6 w-6" />
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div className="text-lg font-bold">William Smith</div>
                <div className="text-sm text-gray-400">Oct 22, 2023, 9:00 AM</div>
              </div>
              <div className="mt-1 text-sm text-gray-400">Meeting Tomorrow</div>
              <div className="mt-1 text-sm text-gray-400">Reply-To: williamsmith@example.com</div>
              <div className="mt-6 text-white">
                Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and
                have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's
                success.
                <br />
                <br />
                Please come prepared with any questions or insights you may have. Looking forward to our meeting!
                <br />
                <br />
                Best regards, William
              </div>
            </div>
            <div className="mt-6 flex items-center space-x-2">
              <Input className="flex-1 rounded-md bg-gray-700 text-white" placeholder="Reply William Smith..." />
              <Button className="rounded-md bg-gray-700 text-white">Send</Button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}


function InboxIcon(props) {
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
      <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  )
}


function GitPullRequestDraftIcon(props) {
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
      <circle cx="18" cy="18" r="3" />
      <circle cx="6" cy="6" r="3" />
      <path d="M18 6V5" />
      <path d="M18 11v-1" />
      <line x1="6" x2="6" y1="9" y2="21" />
    </svg>
  )
}


function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
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


function ArchiveIcon(props) {
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
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>
  )
}


function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function SettingsIcon(props) {
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


function UsersIcon(props) {
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


function ShoppingCartIcon(props) {
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
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
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


function SendToBackIcon(props) {
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
      <rect x="14" y="14" width="8" height="8" rx="2" />
      <rect x="2" y="2" width="8" height="8" rx="2" />
      <path d="M7 14v1a2 2 0 0 0 2 2h1" />
      <path d="M14 7h1a2 2 0 0 1 2 2v1" />
    </svg>
  )
}


function ForwardIcon(props) {
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
      <polyline points="15 17 20 12 15 7" />
      <path d="M4 18v-2a4 4 0 0 1 4-4h12" />
    </svg>
  )
}


function ReplyIcon(props) {
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
      <polyline points="9 17 4 12 9 7" />
      <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </svg>
  )
}


function DeleteIcon(props) {
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
      <path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <line x1="18" x2="12" y1="9" y2="15" />
      <line x1="12" x2="18" y1="9" y2="15" />
    </svg>
  )
}


function MoreHorizontalIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}
