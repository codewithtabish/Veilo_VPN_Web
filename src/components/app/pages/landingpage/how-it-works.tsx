"use client";

import { useInView } from "./hooks";

const STEPS = [
  {
    number: "01",
    title: "Open Veilo",
    description: "Open the app and see your connection status immediately.",
  },
  {
    number: "02",
    title: "Tap the shield",
    description: "One tap starts your VPN connection.",
  },
  {
    number: "03",
    title: "You're protected",
    description: "Veilo clearly shows when your VPN connection is active.",
  },
];

export function HowItWorks() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-medium tracking-wide text-primary">
          How it works
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Protection in three simple steps.
        </h2>
      </div>

      <div
        ref={ref}
        className="relative mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6"
      >
        {/* Connecting line */}
        <div
          aria-hidden="true"
          className="absolute left-[15px] top-2 h-[calc(100%-2rem)] w-px bg-border sm:left-0 sm:top-[15px] sm:h-px sm:w-full"
        />

        {STEPS.map((step, index) => (
          <div
            key={step.number}
            className={[
              "relative flex gap-4 transition-all duration-700 ease-out sm:flex-col sm:gap-0",
              inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            ].join(" ")}
            style={{ transitionDelay: inView ? `${index * 140}ms` : "0ms" }}
          >
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-background text-xs font-medium text-primary">
              {step.number}
            </span>
            <div className="sm:mt-5">
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
