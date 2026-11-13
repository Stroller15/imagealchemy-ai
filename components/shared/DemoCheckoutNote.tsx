import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Stripe runs in test mode: nothing is charged. Shown wherever plans are
 * offered so visitors know they can try checkout with a test card.
 */
const DemoCheckoutNote = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "flex items-start gap-3 rounded-[12px] bg-surface px-4 py-3 hairline",
      className
    )}
  >
    <FlaskConical
      className="mt-0.5 size-4 shrink-0 text-fg-3"
      strokeWidth={1.5}
    />
    <p className="text-xs text-fg-2">
      <span className="font-medium text-fg">Demo checkout.</span> Payments run
      in Stripe test mode and nothing is charged. Use card{" "}
      <span className="whitespace-nowrap font-mono text-2xs text-fg tabular">
        4242 4242 4242 4242
      </span>
      , any future date and any CVC.
    </p>
  </div>
);

export default DemoCheckoutNote;
