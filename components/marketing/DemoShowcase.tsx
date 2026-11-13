import Image from "next/image";
import { samples } from "./samples";

const pairs = [
  {
    tool: "Object Recolor",
    meta: "prompt: flowers · to: amber",
    alt: "Dahlias in a garden",
    ...samples.recolor,
    transparent: false,
  },
  {
    tool: "Background Remove",
    meta: "subject: dog",
    alt: "Beagle running with a ball",
    ...samples.removeBackground,
    transparent: true,
  },
];

export default function DemoShowcase() {
  return (
    <section className="border-t border-border">
      <div className="container py-24 lg:py-32">
        <h2 className="max-w-[28rem] text-[32px] font-medium leading-[1.15] tracking-[-0.02em] lg:text-[40px]">
          The same photo, before and after
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-8">
          {pairs.map((pair) => (
            <figure key={pair.tool}>
              <div className="grid grid-cols-2 gap-2 rounded-[14px] bg-surface p-2 hairline">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-sunken">
                  <Image
                    src={pair.before}
                    alt={`${pair.alt}, before`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-sunken"
                  style={
                    pair.transparent
                      ? {
                          backgroundImage:
                            "conic-gradient(rgb(var(--raised)) 25%, rgb(var(--sunken)) 0 50%, rgb(var(--raised)) 0 75%, rgb(var(--sunken)) 0)",
                          backgroundSize: "16px 16px",
                        }
                      : undefined
                  }
                >
                  <Image
                    src={pair.after}
                    alt={`${pair.alt}, after`}
                    fill
                    sizes="(max-width: 1024px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 px-1">
                <span className="text-sm font-medium">{pair.tool}</span>
                <span className="truncate font-mono text-2xs text-fg-3">
                  {pair.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
