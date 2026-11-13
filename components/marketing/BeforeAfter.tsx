"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

/**
 * Draggable before/after comparison. The range input sits on top so
 * the slider works with mouse, touch and keyboard.
 */
export default function BeforeAfter({
  before,
  after,
  alt,
  width,
  height,
  priority = false,
}: {
  before: string;
  after: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className="relative overflow-hidden rounded-[10px] bg-sunken"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={after}
        alt={`${alt}, after`}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 640px"
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={`${alt}, before`}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover"
        />
      </div>

      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px -translate-x-1/2 bg-white/90"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#161513] shadow-[0_2px_8px_rgb(0_0_0/0.25)]">
          <ChevronsLeftRight className="size-4" strokeWidth={1.75} />
        </span>
      </div>

      <span className="pointer-events-none absolute bottom-3 left-3 rounded-[6px] bg-black/55 px-2 py-1 font-mono text-2xs text-white/90 backdrop-blur-sm">
        Before
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-[6px] bg-black/55 px-2 py-1 font-mono text-2xs text-white/90 backdrop-blur-sm">
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
