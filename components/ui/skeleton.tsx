import { cn } from "@/lib/utils";

/** Placeholder block shown while content loads. */
const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    aria-hidden
    className={cn("animate-pulse rounded-md bg-fg/[0.08]", className)}
    {...props}
  />
);

export { Skeleton };
