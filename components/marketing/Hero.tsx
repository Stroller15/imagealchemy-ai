import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CropFrame from "@/components/shared/CropFrame";
import BeforeAfter from "./BeforeAfter";
import { samples } from "./samples";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container grid items-center gap-12 pb-20 pt-12 md:pt-16 lg:min-h-[calc(100svh-64px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16 lg:py-16">
        <div className="max-w-[34rem] animate-rise">
          <h1 className="text-[40px] font-medium leading-[1.05] tracking-[-0.03em] text-fg sm:text-[56px] lg:text-[64px]">
            Restore, erase and extend your photos
          </h1>
          <p className="mt-6 max-w-[30rem] text-[18px] leading-[28px] text-fg-2">
            Bring back faded prints, remove objects or backgrounds, recolor
            anything and extend a shot to a new aspect ratio. Each edit uses
            one credit, and you start with 20.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <Link href="/home">
                Start editing
                <ArrowRight />
              </Link>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
        </div>

        <div className="animate-rise [animation-delay:60ms]">
          <CropFrame inset={12}>
            <BeforeAfter
              before={samples.restore.before}
              after={samples.restore.after}
              alt="Portrait of a couple in a park"
              width={1200}
              height={800}
              priority
            />
          </CropFrame>
          <div className="mt-6 flex items-center justify-between font-mono text-2xs text-fg-3">
            <span>Image Restore</span>
            <span className="tabular">1200 × 800 · 1 credit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
