import { cn } from "@/lib/utils";
import Link from "next/link";

/** Flat mark: a frame split into before and after. */
export const LogoMark = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden
    className={cn("size-5 shrink-0", className)}
  >
    <rect x="1" y="1" width="18" height="18" rx="5" fill="currentColor" />
    <path d="M10 1h4a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5h-4z" fill="#ED5E06" />
    <path d="M10 4v12" stroke="rgb(var(--canvas))" strokeWidth="1.5" />
  </svg>
);

const Logo = ({
  href = "/",
  className,
}: {
  href?: string;
  className?: string;
}) => (
  <Link
    href={href}
    className={cn(
      "inline-flex items-center gap-2 rounded-md text-[16px] font-medium leading-none tracking-[-0.01em] text-fg",
      className
    )}
  >
    <LogoMark />
    ImageAlchemy
  </Link>
);

export default Logo;
