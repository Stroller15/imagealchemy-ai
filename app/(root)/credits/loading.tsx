import { HeaderSkeleton, PlansSkeleton } from "@/components/shared/skeletons";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <HeaderSkeleton />
      <Skeleton className="mt-8 h-12 w-full rounded-[12px]" />
      <section className="mt-4">
        <PlansSkeleton />
      </section>
    </>
  );
}
