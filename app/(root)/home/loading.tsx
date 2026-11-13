import {
  CollectionSkeleton,
  HeaderSkeleton,
  ToolGridSkeleton,
} from "@/components/shared/skeletons";

export default function Loading() {
  return (
    <>
      <HeaderSkeleton />
      <section className="mt-8">
        <ToolGridSkeleton />
      </section>
      <section className="mt-12">
        <CollectionSkeleton search />
      </section>
    </>
  );
}
