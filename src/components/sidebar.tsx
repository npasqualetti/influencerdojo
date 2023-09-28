"use client";

import { GradientBorder } from "@/components/ui/gradient-border";
import {
  ChevronsUpDown,
  CreditCard,
  Home,
  Menu,
  Moon,
  Settings,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Toggle } from "@/components/ui/toggle";
import { Role } from "@prisma/client";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { SidebarItem } from "./sidebar-item";
import useHasMounted from "@/lib/hooks/use-has-mounted";

export default function Sidebar({ session }: { session: Session }) {
  const [menu, setMenu] = useState(false);

  const pathname = usePathname();
  const mounted = useHasMounted();

  const workSpace = pathname.includes("admin")
    ? "Admin Workspace"
    : "Personal Workspace";

  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full sm:w-fit flex relative">
      {mounted && (
        <Toggle
          className="fixed bottom-5 right-5"
          onClick={() =>
            theme == "dark" ? setTheme("light") : setTheme("dark")
          }
        >
          {theme == "light" ? <Sun size={16} /> : <Moon size={16} />}
        </Toggle>
      )}
      <div className="sm:hidden flex justify-between w-full px-4 py-6 relative">
        <Link href={"/"}>
          <img src="/logo.png" className="w-10 h-10 rounded-full" />
        </Link>
        <button onClick={() => setMenu(!menu)}>
          <Menu size={32} className="shrink-0" />
        </button>
        {menu && (
          <div className="absolute dark:bg-black bg-white border dark:border-zinc-900 border-zinc-200 rounded-md top-20 right-0">
            <div className="flex flex-col gap-2 p-4">
              <SidebarItem
                icon={<Home size={18} />}
                title="Dashboard"
                href="/"
              />
            </div>
          </div>
        )}
      </div>
      <div className="shrink-0 w-[250px] sm:flex hidden" />
      <div className="shrink-0 w-[250px] sm:flex hidden fixed">
        <div className="flex flex-col justify-between min-h-screen border-r border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col ">
            <div className="h-16 px-6 grid items-center border-b border-zinc-200 dark:border-zinc-800">
              <Link href={"/"}>
                <img src="/logo.png" className="w-10 h-10 rounded-full" />
              </Link>
            </div>
            <div className="flex flex-col gap-2 px-4 py-8">
              <SidebarItem
                icon={<Home size={18} />}
                title="Dashboard"
                href="/"
              />
            </div>
          </div>
          <div className="py-8 max-w-[250px]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <div className="px-2 flex justify-between duration-150 items-center gap-2 dark:hover:bg-zinc-800 hover:bg-zinc-200/70 rounded-md cursor-pointer">
                    <img
                      src={"/logo.png"}
                      className="w-8 h-8 rounded-full"
                    />
                  <p className="truncate text-sm">{session?.user?.email}</p>
                  <ChevronsUpDown size={16} />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href={"https://www.influencerdojo.com"}>Home Page</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
