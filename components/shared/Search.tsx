"use client";

import { Search as SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import Spinner from "./Spinner";

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") ?? "");
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const term = query.trim();
      // Nothing changed: avoid pushing the same URL again.
      if (term === (searchParams.get("query") ?? "")) return;

      // A new search starts from the first page.
      const withoutPage = removeKeysFromQuery({
        searchParams: searchParams.toString(),
        keysToRemove: ["page"],
      });
      const base = withoutPage.split("?")[1] ?? "";

      if (term) {
        const newUrl = formUrlQuery({
          searchParams: base,
          key: "query",
          value: term,
        });

        startTransition(() => router.push(newUrl, { scroll: false }));
      } else {
        const newUrl = removeKeysFromQuery({
          searchParams: base,
          keysToRemove: ["query"],
        });

        startTransition(() => router.push(newUrl, { scroll: false }));
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [router, searchParams, query]);

  return (
    <div className="relative w-full sm:w-64">
      {isPending ? (
        <Spinner className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-fg-3" />
      ) : (
        <SearchIcon
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-fg-3"
          strokeWidth={1.5}
        />
      )}
      <Input
        type="search"
        aria-label="Search edits"
        aria-busy={isPending}
        className="pl-9"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
