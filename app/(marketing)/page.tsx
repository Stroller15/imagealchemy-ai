import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { plans } from "@/constants";
import Logo from "@/components/icons/Logo";
import PlanCard from "@/components/shared/PlanCard";
import ThemeToggle from "@/components/shared/ThemeToggle";

import Hero from "@/components/marketing/Hero";
import HowItWorks from "@/components/marketing/HowItWorks";
import FeaturesBento from "@/components/marketing/FeaturesBento";
import DemoShowcase from "@/components/marketing/DemoShowcase";
import StatsStrip from "@/components/marketing/StatsStrip";

export default function LandingPage() {
  return (
    <div className="warm min-h-screen bg-canvas text-fg">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border bg-canvas/85 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-1">
            <a
              href="#how-it-works"
              className="hidden rounded-md px-3 py-2 text-sm text-fg-2 transition-colors duration-150 hover:text-fg sm:block"
            >
              How it works
            </a>
            <a
              href="#pricing"
              className="hidden rounded-md px-3 py-2 text-sm text-fg-2 transition-colors duration-150 hover:text-fg sm:block"
            >
              Pricing
            </a>
            <SignedOut>
              <Link
                href="/sign-in"
                className="rounded-md px-3 py-2 text-sm text-fg-2 transition-colors duration-150 hover:text-fg"
              >
                Log in
              </Link>
            </SignedOut>
            <Button size="sm" className="ml-2" asChild>
              <Link href="/home">
                <SignedIn>Open app</SignedIn>
                <SignedOut>Get started</SignedOut>
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <HowItWorks />
        <FeaturesBento />
        <DemoShowcase />
        <StatsStrip />

        {/* Pricing */}
        <section id="pricing" className="scroll-mt-16 border-t border-border">
          <div className="container py-24 lg:py-32">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <h2 className="max-w-[28rem] text-[32px] font-medium leading-[1.15] tracking-[-0.02em] lg:text-[40px]">
                Pay once for credits, no subscription
              </h2>
              <Link
                href="/credits"
                className="inline-flex items-center gap-1.5 text-sm text-fg-2 transition-colors duration-150 hover:text-fg"
              >
                Compare plans
                <ArrowRight className="size-4" strokeWidth={1.5} />
              </Link>
            </div>
            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {plans.map((plan) => (
                <PlanCard
                  key={plan._id}
                  plan={plan}
                  action={
                    <Button
                      variant={plan.price === 0 ? "default" : "secondary"}
                      className="w-full"
                      asChild
                    >
                      <Link href={plan.price === 0 ? "/home" : "/credits"}>
                        {plan.price === 0 ? "Start free" : `Get ${plan.credits.toLocaleString("en-US")} credits`}
                      </Link>
                    </Button>
                  }
                />
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border">
          <div className="container flex flex-col items-start justify-between gap-8 py-24 md:flex-row md:items-center lg:py-32">
            <div>
              <h2 className="text-[32px] font-medium leading-[1.15] tracking-[-0.02em] lg:text-[40px]">
                Start with 20 free credits
              </h2>
              <p className="mt-3 text-base text-fg-2">
                No credit card required
              </p>
            </div>
            <Button size="lg" asChild>
              <Link href="/home">
                Start editing
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="container flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Logo />
          <p className="text-xs text-fg-3">
            &copy; {new Date().getFullYear()} ImageAlchemy
          </p>
          <div className="flex items-center gap-4">
          <a
            href="https://github.com/Stroller15/ImageAlchemy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-fg-3 transition-colors duration-150 hover:text-fg"
          >
            GitHub
          </a>
            <ThemeToggle />
          </div>
        </div>
      </footer>
    </div>
  );
}
