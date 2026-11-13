"use client";

import { useRouter } from "next/navigation";
import { Coins } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export const InsufficientCreditsModal = () => {
  const router = useRouter();

  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className="gap-6">
        <AlertDialogHeader className="gap-2">
          <span className="mb-2 flex size-10 items-center justify-center rounded-full bg-raised text-fg-2 hairline">
            <Coins className="size-[18px]" strokeWidth={1.5} />
          </span>
          <AlertDialogTitle>You&rsquo;re out of credits</AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-fg-2">
            Each transformation uses 1 credit. Buy a pack to keep editing,
            your saved images stay where they are.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2">
          <AlertDialogCancel onClick={() => router.push("/profile")}>
            Not now
          </AlertDialogCancel>
          <AlertDialogAction onClick={() => router.push("/credits")}>
            Buy credits
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
