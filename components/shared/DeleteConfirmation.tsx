"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { deleteImage } from "@/lib/actions/image.actions";
import { Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const DeleteConfirmation = ({ imageId }: { imageId: string }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    startTransition(async () => {
      try {
        await deleteImage(imageId);
        router.push("/home");
      } catch (error) {
        console.error("Error deleting image:", error);
      }
    });
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className="text-destructive hover:bg-destructive/5 hover:text-destructive"
        >
          <Trash2 strokeWidth={1.5} />
          Delete
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="flex flex-col gap-6">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete this image?
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-fg-2">
            The image and its transformation are removed permanently. This
            can&rsquo;t be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-destructive text-white hover:bg-destructive/90"
            onClick={handleDelete}
            disabled={isPending}
          >
            {isPending ? "Deleting" : "Delete image"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
