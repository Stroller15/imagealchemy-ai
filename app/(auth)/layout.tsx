"use client";

import React, { useState } from "react";
import { Check, ChevronDown, Copy } from "lucide-react";
import Logo from "@/components/icons/Logo";

// Shared demo account so visitors can try the app without signing up.
const demoAccount = [
  { label: "Username", value: "demo" },
  { label: "Email", value: "test212492@gmail.com" },
  { label: "Password", value: "cKDMzWd4iMTaJ6X" },
];

const CopyRow = ({ label, value }: { label: string; value: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex h-9 items-center gap-3">
      <span className="w-20 shrink-0 text-xs text-fg-3">{label}</span>
      <span className="min-w-0 flex-1 truncate font-mono text-2xs text-fg">
        {value}
      </span>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label.toLowerCase()}`}
        className="flex size-7 shrink-0 items-center justify-center rounded-[6px] text-fg-3 transition-colors duration-150 hover:bg-raised hover:text-fg"
      >
        {copied ? (
          <Check className="size-3.5 text-positive" strokeWidth={1.5} />
        ) : (
          <Copy className="size-3.5" strokeWidth={1.5} />
        )}
      </button>
    </div>
  );
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="darkroom flex min-h-screen flex-col items-center bg-canvas px-4 py-10 text-fg">
      <Logo />

      <div className="mt-10 flex w-full flex-1 flex-col items-center justify-center gap-6">
        {children}

        <details className="group w-full max-w-[400px] rounded-[12px] bg-surface hairline">
          <summary className="flex h-11 cursor-pointer list-none items-center justify-between px-4 text-sm text-fg-2 transition-colors duration-150 hover:text-fg [&::-webkit-details-marker]:hidden">
            Use the demo account
            <ChevronDown
              className="size-4 text-fg-3 transition-transform duration-200 ease-out group-open:rotate-180"
              strokeWidth={1.5}
            />
          </summary>
          <div className="border-t border-border px-4 py-2">
            {demoAccount.map((row) => (
              <CopyRow key={row.label} {...row} />
            ))}
          </div>
        </details>
      </div>
    </main>
  );
};

export default Layout;
