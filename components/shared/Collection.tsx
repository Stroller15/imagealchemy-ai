"use client";

import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import { transformationTypes } from "@/constants";
import { IImage } from "@/lib/database/models/image.model";
import { formUrlQuery } from "@/lib/utils";
import { Button } from "../ui/button";
import { Search } from "./Search";
import { toolIcons } from "./tool-icons";

export const Collection = ({
  hasSearch = false,
  images,
  totalPages = 1,
  page,
  title = "Recent edits",
}: {
  images: IImage[];
  totalPages?: number;
  page: number;
  hasSearch?: boolean;
  title?: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const onPageChange = (action: string) => {
    const pageValue = action === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      searchParams: searchParams.toString(),
      key: "page",
      value: pageValue,
    });

    router.push(newUrl, { scroll: false });
  };

  return (
    <>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-[18px] font-medium leading-[24px]">{title}</h2>
        {hasSearch && <Search />}
      </div>

      {images.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {images.map((image) => (
            <Card image={image} key={image._id} />
          ))}
        </ul>
      ) : (
        <div className="flex h-60 flex-col items-center justify-center gap-2 rounded-[14px] border border-dashed border-fg/15 text-center">
          <ImageOff className="size-5 text-fg-3" strokeWidth={1.5} />
          <p className="mt-2 text-sm font-medium">
            {query ? `No edits match “${query}”` : "No edits yet"}
          </p>
          <p className="text-xs text-fg-3">
            {query
              ? "Try a different title"
              : "Pick a tool from the sidebar to start your first edit"}
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-8 flex items-center justify-between"
        >
          <Button
            variant="outline"
            size="sm"
            disabled={Number(page) <= 1}
            onClick={() => onPageChange("prev")}
          >
            <ChevronLeft strokeWidth={1.5} />
            Previous
          </Button>
          <p className="font-mono text-2xs text-fg-3 tabular">
            {page} / {totalPages}
          </p>
          <Button
            variant="outline"
            size="sm"
            disabled={Number(page) >= totalPages}
            onClick={() => onPageChange("next")}
          >
            Next
            <ChevronRight strokeWidth={1.5} />
          </Button>
        </nav>
      )}
    </>
  );
};

const Card = ({ image }: { image: IImage }) => {
  const type = image.transformationType as TransformationTypeKey;
  const Icon = toolIcons[type];

  return (
    <li>
      <Link
        href={`/transformations/${image._id}`}
        className="group block rounded-[12px] bg-surface p-1.5 hairline transition-shadow duration-150 ease-out hover:shadow-[0_8px_24px_rgb(0_0_0/0.06)]"
      >
        <div className="overflow-hidden rounded-[6px] bg-sunken">
          <CldImage
            src={image.publicId}
            alt={image.title}
            width={image.width}
            height={image.height}
            {...image.config}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          />
        </div>
        <div className="flex items-center justify-between gap-3 px-2.5 pb-1.5 pt-3">
          <p className="truncate text-sm font-medium text-fg">{image.title}</p>
          <span className="flex shrink-0 items-center gap-1.5 text-2xs text-fg-3">
            {Icon && <Icon className="size-3.5" strokeWidth={1.5} />}
            {transformationTypes[type]?.title}
          </span>
        </div>
      </Link>
    </li>
  );
};
