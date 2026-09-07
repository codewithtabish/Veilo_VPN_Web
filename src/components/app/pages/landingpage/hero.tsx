import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "./phone-mockup";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-24">
      {/* Atmospheric background — theme-derived, no hardcoded color */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/[0.14]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgb(var(--background))_92%)]" />
      </div>

      <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="text-xs font-medium tracking-wide text-primary">
            Veilo VPN
          </span>

          <h1 className="mt-4 max-w-xl text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            Private internet.
            <br />
            Made simple.
          </h1>

          <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-muted-foreground sm:text-lg">
            Veilo makes everyday VPN protection simple. Open the app, tap the
            shield, and connect without unnecessary complexity.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#download">Download Veilo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#how-it-works" className="inline-flex items-center gap-1.5">
                See how it works
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Simple by design. Privacy-focused by default.
          </p>
        </div>

        {/* Phone mockup */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup state="protected" />
        </div>
      </div>
    </section>
  );
}
