import { CollectionSkeleton, HeaderSkeleton } from "@/components/shared/skeletons";

export default function Loading() {
  return (
    <>
      <HeaderSkeleton />
      <section className="mt-8">
        <CollectionSkeleton />
      </section>
    </>
  );
}
