import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

/** Small inline spinner for buttons and inputs. */
const Spinner = ({ className }: { className?: string }) => (
  <Loader2
    aria-hidden
    className={cn("size-4 shrink-0 animate-spin", className)}
    strokeWidth={1.5}
  />
);

export default Spinner;
