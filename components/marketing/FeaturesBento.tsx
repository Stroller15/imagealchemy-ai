import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { toolIcons } from "@/components/shared/tool-icons";

const features = [
  {
    type: "restore",
    title: "Image Restore",
    description:
      "Removes noise, scratches and blur from old or damaged photos.",
  },
  {
    type: "remove",
    title: "Object Remove",
    description:
      "Name an object and it is erased, along with its shadow.",
  },
  {
    type: "recolor",
    title: "Object Recolor",
    description: "Name an object and a color, and only that object changes.",
  },
  {
    type: "removeBackground",
    title: "Background Remove",
    description: "Cuts the subject out cleanly, ready for a new background.",
  },
];

const ratios = [
  { label: "1:1", w: 56, h: 56 },
  { label: "3:4", w: 48, h: 64 },
  { label: "9:16", w: 40, h: 72 },
];

export default function FeaturesBento() {
  const FillIcon = toolIcons.fill;

  return (
    <section className="border-t border-border">
      <div className="container py-24 lg:py-32">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="max-w-[28rem] text-[32px] font-medium leading-[1.15] tracking-[-0.02em] lg:text-[40px]">
            Five edits, one credit each
          </h2>
          <p className="max-w-[24rem] text-sm text-fg-2">
            Every tool runs on Cloudinary&rsquo;s image models, so results come
            back in seconds at the original resolution.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {/* Flagship */}
          <Link
            href="/transformations/add/fill"
            className="group flex flex-col justify-between gap-8 rounded-[14px] bg-surface p-6 hairline transition-colors duration-150 ease-out hover:bg-raised md:col-span-2 md:flex-row md:items-center lg:p-8"
          >
            <div className="max-w-[28rem]">
              <div className="flex items-center gap-2 text-fg-2">
                <FillIcon className="size-[18px]" strokeWidth={1.5} />
                <span className="text-sm">Generative Fill</span>
                <ArrowUpRight className="size-4 text-fg-3 opacity-0 transition-opacity duration-150 group-hover:opacity-100" strokeWidth={1.5} />
              </div>
              <h3 className="mt-6 text-[24px] font-medium leading-[1.2] tracking-[-0.01em]">
                Extend a photo past its edges
              </h3>
              <p className="mt-2 text-sm text-fg-2">
                Outpainting fills the new space with matching content, so a
                landscape shot becomes a square post or a phone wallpaper.
              </p>
            </div>
            <div className="flex items-end gap-6 self-start md:self-auto">
              {ratios.map((r) => (
                <div key={r.label} className="flex flex-col items-center gap-2">
                  <div
                    className="relative rounded-[4px] border border-dashed border-fg-3/60"
                    style={{ width: r.w, height: r.h }}
                  >
                    <div className="absolute inset-x-2 top-1/2 h-1/3 -translate-y-1/2 rounded-[2px] bg-ember/80" />
                  </div>
                  <span className="font-mono text-2xs text-fg-3">{r.label}</span>
                </div>
              ))}
            </div>
          </Link>

          {features.map((feature) => {
            const Icon = toolIcons[feature.type];
            return (
              <Link
                key={feature.type}
                href={`/transformations/add/${feature.type}`}
                className="group rounded-[14px] bg-surface p-6 hairline transition-colors duration-150 ease-out hover:bg-raised"
              >
                <div className="flex items-center gap-2 text-fg-2">
                  <Icon className="size-[18px]" strokeWidth={1.5} />
                  <h3 className="text-sm font-medium text-fg">{feature.title}</h3>
                  <ArrowUpRight className="ml-auto size-4 text-fg-3 opacity-0 transition-opacity duration-150 group-hover:opacity-100" strokeWidth={1.5} />
                </div>
                <p className="mt-3 text-sm text-fg-2">{feature.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
