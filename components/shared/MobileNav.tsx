"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Logo from "../icons/Logo";
import NavList from "./NavList";
import ThemeToggle from "./ThemeToggle";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-surface/90 px-4 backdrop-blur-md lg:hidden">
      <Logo href="/home" />

      <div className="flex items-center gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu strokeWidth={1.5} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-[280px] flex-col bg-surface p-0">
              <div className="flex h-14 items-center px-5">
                <Logo href="/home" />
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-3">
                <NavList onNavigate={() => setOpen(false)} />
              </div>
              <div className="flex h-14 items-center justify-between border-t border-border px-4">
                <span className="text-xs text-fg-3">Theme</span>
                <ThemeToggle />
              </div>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button size="sm" asChild>
            <Link href="/sign-in">Log in</Link>
          </Button>
        </SignedOut>
      </div>
    </header>
  );
};

export default MobileNav;
