"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { checkoutCredits } from "@/lib/actions/transaction.action";
import { Button } from "../ui/button";
import Spinner from "./Spinner";

const Checkout = ({
  plan,
  amount,
  credits,
  buyerId,
}: {
  plan: string;
  amount: number;
  credits: number;
  buyerId: string;
}) => {
  const { toast } = useToast();
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast({
        title: "Order placed",
        description: "Test payment complete. Your credits will show up in your balance shortly",
        duration: 5000,
        className: "success-toast",
      });
    }

    if (query.get("canceled")) {
      toast({
        title: "Order canceled",
        description: "Nothing was charged. Check out whenever you're ready",
        duration: 5000,
        className: "error-toast",
      });
    }
  }, []);

  const onCheckout = async () => {
    setIsRedirecting(true);
    const transaction = {
      plan,
      amount,
      credits,
      buyerId,
    };

    try {
      // Redirects to Stripe on success, so the pending state stays on.
      await checkoutCredits(transaction);
    } catch (error) {
      // redirect() works by throwing; that is success, not a failure.
      const digest = (error as { digest?: string } | null)?.digest;
      if (typeof digest === "string" && digest.startsWith("NEXT_REDIRECT")) return;
      setIsRedirecting(false);
      toast({
        title: "Checkout failed",
        description: "Couldn't reach Stripe. Try again in a moment",
        duration: 5000,
        className: "error-toast",
      });
    }
  };

  return (
    <form action={onCheckout} method="POST">
      <section>
        <Button
          type="submit"
          role="link"
          variant="default"
          className="w-full"
          disabled={isRedirecting}
          aria-busy={isRedirecting}
        >
          {isRedirecting ? (
            <>
              <Spinner />
              Opening checkout
            </>
          ) : (
            `Buy ${credits.toLocaleString("en-US")} credits`
          )}
        </Button>
      </section>
    </form>
  );
};

export default Checkout;
