import { Skeleton } from "@/components/ui/skeleton";

/**
 * Loading skeletons that mirror each page's real layout, so the page
 * does not jump when data arrives. Used by the route loading.tsx files.
 */

export const HeaderSkeleton = ({ subtitle = true }: { subtitle?: boolean }) => (
  <div role="status" aria-label="Loading">
    <Skeleton className="h-8 w-48" />
    {subtitle && <Skeleton className="mt-3 h-4 w-72 max-w-full" />}
  </div>
);

export const ToolGridSkeleton = () => (
  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="rounded-[12px] bg-surface p-4 hairline">
        <Skeleton className="size-[18px]" />
        <Skeleton className="mt-6 h-4 w-28" />
        <Skeleton className="mt-2 h-3 w-full" />
        <Skeleton className="mt-1.5 h-3 w-2/3" />
      </div>
    ))}
  </div>
);

export const CollectionSkeleton = ({ search = false }: { search?: boolean }) => (
  <>
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <Skeleton className="h-6 w-32" />
      {search && <Skeleton className="h-9 w-full sm:w-64" />}
    </div>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-[12px] bg-surface p-1.5 hairline">
          <Skeleton className="aspect-[4/3] w-full rounded-[6px]" />
          <div className="flex items-center justify-between gap-3 px-2.5 pb-1.5 pt-3">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      ))}
    </div>
  </>
);

export const StatsSkeleton = () => (
  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    {Array.from({ length: 2 }).map((_, i) => (
      <div key={i} className="rounded-[12px] bg-surface p-5 hairline">
        <Skeleton className="h-3 w-28" />
        <Skeleton className="mt-4 h-8 w-20" />
        <Skeleton className="mt-4 h-3 w-24" />
      </div>
    ))}
  </div>
);

export const PlansSkeleton = () => (
  <div className="grid gap-4 md:grid-cols-3">
    {Array.from({ length: 3 }).map((_, i) => (
      <div key={i} className="rounded-[14px] bg-surface p-6 hairline">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="mt-6 h-9 w-24" />
        <Skeleton className="mt-3 h-3 w-40" />
        <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
          {Array.from({ length: 4 }).map((_, j) => (
            <Skeleton key={j} className="h-4 w-3/4" />
          ))}
        </div>
        <Skeleton className="mt-8 h-9 w-full" />
      </div>
    ))}
  </div>
);

const ImageSlotSkeleton = () => (
  <div className="flex flex-col gap-3">
    <div className="flex h-8 items-center">
      <Skeleton className="h-4 w-20" />
    </div>
    <Skeleton className="min-h-72 w-full rounded-[10px]" />
  </div>
);

export const EditorSkeleton = ({ fields = 2 }: { fields?: number }) => (
  <div className="flex flex-col gap-8">
    <div className={fields > 1 ? "grid gap-5 md:grid-cols-2" : "grid gap-5"}>
      {Array.from({ length: fields }).map((_, i) => (
        <div key={i}>
          <Skeleton className="h-3 w-20" />
          <Skeleton className="mt-2.5 h-10 w-full" />
        </div>
      ))}
    </div>
    <div className="grid gap-6 md:grid-cols-2">
      <ImageSlotSkeleton />
      <ImageSlotSkeleton />
    </div>
    <div className="grid gap-3 sm:grid-cols-2">
      <Skeleton className="h-11 w-full" />
      <Skeleton className="h-11 w-full" />
    </div>
  </div>
);

export const DetailsSkeleton = () => (
  <>
    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <HeaderSkeleton subtitle={false} />
      <div className="flex gap-2">
        <Skeleton className="h-9 w-20" />
        <Skeleton className="h-9 w-24" />
      </div>
    </div>
    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="h-4 w-32" />
    </div>
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      <ImageSlotSkeleton />
      <ImageSlotSkeleton />
    </div>
  </>
);
