import React from "react";
import Sidebar from "@/components/shared/Sidebar";
import MobileNav from "@/components/shared/MobileNav";
import { Toaster } from "@/components/ui/toaster";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-canvas lg:flex">
      <Sidebar />
      <MobileNav />

      <main className="min-w-0 flex-1">
        <div className="mx-auto w-full max-w-[1280px] px-5 pb-16 pt-6 md:px-8 lg:pt-10">
          {children}
        </div>
      </main>
      <Toaster />
    </div>
  );
};

export default Layout;
