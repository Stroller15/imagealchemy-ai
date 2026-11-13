"use client";

import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Logo from "../icons/Logo";
import NavList from "./NavList";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 flex-col border-r border-border bg-surface lg:flex">
      <div className="flex h-14 items-center px-5">
        <Logo href="/home" />
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-3">
        <SignedIn>
          <NavList />
        </SignedIn>
        <SignedOut>
          <Button asChild className="w-full">
            <Link href="/sign-in">Log in</Link>
          </Button>
        </SignedOut>
      </div>

      <SignedIn>
        <div className="flex h-14 items-center border-t border-border px-4">
          <UserButton afterSignOutUrl="/" showName />
        </div>
      </SignedIn>
    </aside>
  );
};

export default Sidebar;
