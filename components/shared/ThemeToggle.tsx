"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const options = [
  { value: "system", label: "System theme", Icon: Monitor },
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
];

/** Segmented System / Light / Dark control. */
const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The stored theme is only known on the client.
  useEffect(() => setMounted(true), []);

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md bg-raised p-0.5 hairline",
        className
      )}
    >
      {options.map(({ value, label, Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "flex size-7 items-center justify-center rounded-[6px] transition-colors duration-150 ease-out",
              active
                ? "bg-surface text-fg shadow-[0_1px_2px_rgb(0_0_0/0.08)] hairline"
                : "text-fg-3 hover:text-fg"
            )}
          >
            <Icon className="size-3.5" strokeWidth={1.5} />
          </button>
        );
      })}
    </div>
  );
};

export default ThemeToggle;
