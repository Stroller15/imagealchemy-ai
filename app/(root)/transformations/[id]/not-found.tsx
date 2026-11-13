import Link from "next/link";
import { ImageOff } from "lucide-react";
import { Button } from "@/components/ui/button";

// Shown for missing images and for images owned by another account,
// so a link never reveals whether someone else's image exists.
export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-2 text-center">
      <ImageOff className="size-5 text-fg-3" strokeWidth={1.5} />
      <h1 className="mt-2 text-[18px] font-medium">Image not found</h1>
      <p className="max-w-sm text-sm text-fg-2">
        It may have been deleted, or it belongs to another account.
      </p>
      <Button asChild className="mt-4">
        <Link href="/home">Back to your edits</Link>
      </Button>
    </div>
  );
}
