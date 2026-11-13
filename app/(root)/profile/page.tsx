import Link from "next/link";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Collection } from "@/components/shared/Collection";
import Header from "@/components/shared/Header";
import { getUserImages } from "@/lib/actions/image.actions";
import { getUserById } from "@/lib/actions/user.actions";

const Profile = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const { userId } = auth();

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  const images = await getUserImages({ page });

  return (
    <>
      <Header title="Profile" />

      <section className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-[12px] bg-surface p-5 hairline">
          <p className="text-xs text-fg-3">Credits available</p>
          <p className="mt-3 text-[32px] font-medium leading-none tracking-[-0.02em] text-ember-strong tabular">
            {user.creditBalance.toLocaleString("en-US")}
          </p>
          <Link
            href="/credits"
            className="mt-4 inline-flex items-center gap-1 text-xs text-fg-2 transition-colors duration-150 hover:text-fg"
          >
            Buy credits
            <ArrowRight className="size-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="rounded-[12px] bg-surface p-5 hairline">
          <p className="text-xs text-fg-3">Edits saved</p>
          <p className="mt-3 text-[32px] font-medium leading-none tracking-[-0.02em] tabular">
            {(images?.totalImages ?? images?.data.length ?? 0).toLocaleString("en-US")}
          </p>
          <p className="mt-4 text-xs text-fg-3">Across all tools</p>
        </div>
      </section>

      <section className="mt-12">
        <Collection
          title="Your edits"
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>
    </>
  );
};

export default Profile;
