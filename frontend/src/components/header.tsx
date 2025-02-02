import { Bell, Menu, Search, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Input } from "../components/ui/input"

interface HeaderProps {
  userId?: string
}

export function Header({ userId }: HeaderProps) {
  // Function to get initials or fallback
  const getInitials = (name?: string) => {
    if (!name) return "U"
    return name.slice(0, 2).toUpperCase()
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-800/50 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <a href="/" className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-blue-500"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
            <span className="hidden text-xl font-bold text-white sm:inline-block">BrokeNoMo</span>
          </a>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <form className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-gray-700 pl-8 placeholder:text-gray-400"
              />
            </div>
          </form>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt={userId || "User"} />
                  <AvatarFallback>{getInitials(userId)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{userId || "User"}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {userId ? `${userId}@example.com` : "user@example.com"}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>New Team</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
