import { cn } from "@/lib/utils";

/**
 * Signature detail: crop-corner marks around a photo, like a viewfinder.
 * Use only where a photo is shown.
 */
const CropFrame = ({
  children,
  className,
  inset = 8,
}: {
  children: React.ReactNode;
  className?: string;
  inset?: number;
}) => {
  const corner = "pointer-events-none absolute size-3 border-fg-3/70";
  const o = -inset;
  return (
    <div className={cn("relative", className)}>
      {children}
      <span className={cn(corner, "border-l border-t")} style={{ left: o, top: o }} />
      <span className={cn(corner, "border-r border-t")} style={{ right: o, top: o }} />
      <span className={cn(corner, "border-b border-l")} style={{ left: o, bottom: o }} />
      <span className={cn(corner, "border-b border-r")} style={{ right: o, bottom: o }} />
    </div>
  );
};

export default CropFrame;
