import Link from "next/link";
import { Collection } from "@/components/shared/Collection";
import Header from "@/components/shared/Header";
import { toolIcons } from "@/components/shared/tool-icons";
import { transformationTypes } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";

const toolOrder = ["restore", "fill", "remove", "recolor", "removeBackground"] as const;

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || "";

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <Header title="Home" subtitle="Start a new edit or pick up a recent one" />

      <section className="mt-8">
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {toolOrder.map((key) => {
            const tool = transformationTypes[key];
            const Icon = toolIcons[key];
            return (
              <li key={key}>
                <Link
                  href={`/transformations/add/${key}`}
                  className="flex h-full flex-col rounded-[12px] bg-surface p-4 hairline transition-colors duration-150 ease-out hover:bg-raised"
                >
                  <Icon className="size-[18px] text-fg-2" strokeWidth={1.5} />
                  <span className="mt-6 text-sm font-medium">{tool.title}</span>
                  <span className="mt-1 text-xs text-fg-3">{tool.subTitle}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};

export default Home;
