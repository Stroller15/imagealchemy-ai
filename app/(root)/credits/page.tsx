import { SignedIn, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import Checkout from "@/components/shared/Checkout";
import PlanCard from "@/components/shared/PlanCard";

const Credits = async () => {
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);

  return (
    <>
      <Header
        title="Buy credits"
        subtitle="One-time credit packs. Each transformation uses 1 credit."
        actions={
          <p className="text-xs text-fg-3">
            Balance{" "}
            <span className="ml-1 font-mono text-sm text-fg tabular">
              {user.creditBalance.toLocaleString("en-US")}
            </span>
          </p>
        }
      />

      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <PlanCard
            key={plan.name}
            plan={plan}
            action={
              plan.price === 0 ? (
                <Button variant="secondary" className="w-full" disabled>
                  Included on sign-up
                </Button>
              ) : (
                <SignedIn>
                  <Checkout
                    plan={plan.name}
                    amount={plan.price}
                    credits={plan.credits}
                    buyerId={user._id}
                  />
                </SignedIn>
              )
            }
          />
        ))}
      </ul>
    </>
  );
};

export default Credits;
