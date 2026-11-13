"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { navGroups, routeIcons } from "./tool-icons";

/** Sidebar navigation, shared by the desktop sidebar and the mobile sheet. */
const NavList = ({ onNavigate }: { onNavigate?: () => void }) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col">
      {navGroups(navLinks).map((group, i) => (
        <div key={i} className={cn(group.label && "mt-6")}>
          {group.label && (
            <p className="mb-2 px-2.5 text-2xs text-fg-3">{group.label}</p>
          )}
          <ul className="flex flex-col gap-0.5">
            {group.items.map((link) => {
              const Icon = routeIcons[link.route];
              const isActive = pathname === link.route;
              return (
                <li key={link.route}>
                  <Link
                    href={link.route}
                    onClick={onNavigate}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "flex h-9 items-center gap-2.5 rounded-md px-2.5 text-sm transition-colors duration-150 ease-out",
                      isActive
                        ? "bg-raised font-medium text-fg hairline"
                        : "text-fg-2 hover:bg-raised/60 hover:text-fg"
                    )}
                  >
                    {Icon && (
                      <Icon
                        className={cn(
                          "size-4 shrink-0",
                          isActive ? "text-ember-strong" : "text-fg-3"
                        )}
                        strokeWidth={1.5}
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
};

export default NavList;
