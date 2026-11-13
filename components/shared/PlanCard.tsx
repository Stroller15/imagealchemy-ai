import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { plans } from "@/constants";

type Plan = (typeof plans)[number];

const perCredit = (plan: Plan) =>
  plan.price === 0 ? "Free" : `$${(plan.price / plan.credits).toFixed(2)} per credit`;

/** Shared pricing card used on the landing page and the credits page. */
const PlanCard = ({
  plan,
  featured = false,
  action,
}: {
  plan: Plan;
  featured?: boolean;
  action: React.ReactNode;
}) => (
  <li
    className={cn(
      "flex flex-col rounded-[14px] bg-surface p-6 hairline",
      featured && "shadow-[inset_0_0_0_1px_rgb(var(--ember)/0.55)]"
    )}
  >
    <h3 className="text-sm font-medium">{plan.name}</h3>

    <p className="mt-6 flex items-baseline gap-2">
      <span className="text-[36px] font-medium leading-none tracking-[-0.02em] tabular">
        ${plan.price}
      </span>
      <span className="text-xs text-fg-3">
        {plan.price > 0 ? "one-time" : "on sign-up"}
      </span>
    </p>
    <p className="mt-3 font-mono text-2xs text-fg-2 tabular">
      {plan.credits.toLocaleString("en-US")} credits · {perCredit(plan)}
    </p>

    <ul className="mt-6 flex flex-1 flex-col gap-3 border-t border-border pt-6">
      {plan.inclusions.map((inclusion) => (
        <li
          key={inclusion.label}
          className={cn(
            "flex items-center gap-2.5 text-sm",
            inclusion.isIncluded ? "text-fg-2" : "text-fg-3"
          )}
        >
          {inclusion.isIncluded ? (
            <Check className="size-4 text-fg-2" strokeWidth={1.5} />
          ) : (
            <Minus className="size-4 text-fg-3/70" strokeWidth={1.5} />
          )}
          {inclusion.label}
        </li>
      ))}
    </ul>

    <div className="mt-8">{action}</div>
  </li>
);

export default PlanCard;
