import {
  CollectionSkeleton,
  HeaderSkeleton,
  StatsSkeleton,
} from "@/components/shared/skeletons";

export default function Loading() {
  return (
    <>
      <HeaderSkeleton subtitle={false} />
      <section className="mt-8">
        <StatsSkeleton />
      </section>
      <section className="mt-12">
        <CollectionSkeleton />
      </section>
    </>
  );
}
