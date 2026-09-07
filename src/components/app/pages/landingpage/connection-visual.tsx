"use client";

import { useEffect, useState } from "react";
import { Shield } from "lucide-react";
import { usePrefersReducedMotion } from "./hooks";

type ConnectionState = "idle" | "connecting" | "protected";

const SEQUENCE: { state: ConnectionState; label: string; duration: number }[] = [
  { state: "idle", label: "Not protected", duration: 1800 },
  { state: "connecting", label: "Connecting", duration: 1600 },
  { state: "protected", label: "Protected", duration: 2600 },
];

export function ConnectionVisual() {
  const reducedMotion = usePrefersReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reducedMotion) return; // keep it static for reduced-motion users
    const timer = setTimeout(
      () => setStep((current) => (current + 1) % SEQUENCE.length),
      SEQUENCE[step].duration
    );
    return () => clearTimeout(timer);
  }, [step, reducedMotion]);

  const current = SEQUENCE[reducedMotion ? SEQUENCE.length - 1 : step];
  const isProtected = current.state === "protected";
  const isConnecting = current.state === "connecting";

  return (
    <section className="py-20 sm:py-28" aria-label="Connection status demonstration">
      <div className="flex flex-col items-center rounded-3xl border border-border bg-card px-6 py-16 text-center">
        <div className="relative flex h-32 w-32 items-center justify-center">
          {!reducedMotion && isProtected && (
            <>
              <span className="absolute inset-0 rounded-full border border-primary/25 animate-ring-pulse" />
              <span className="absolute inset-0 rounded-full border border-primary/15 animate-ring-pulse [animation-delay:0.6s]" />
            </>
          )}
          <div
            className={[
              "flex h-20 w-20 items-center justify-center rounded-full border transition-colors duration-500",
              isProtected
                ? "border-primary/40 bg-primary/10"
                : isConnecting
                ? "border-primary/25 bg-primary/5"
                : "border-border bg-muted",
            ].join(" ")}
          >
            <Shield
              className={[
                "h-8 w-8 transition-colors duration-500",
                isProtected ? "text-primary" : "text-muted-foreground",
              ].join(" ")}
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2" role="status" aria-live="polite">
          <span
            aria-hidden="true"
            className={[
              "h-2 w-2 rounded-full transition-colors duration-500",
              isProtected
                ? "bg-primary"
                : isConnecting
                ? "bg-primary/60"
                : "bg-muted-foreground/50",
            ].join(" ")}
          />
          <span className="text-base font-medium text-foreground">
            {current.label}
          </span>
        </div>
        <p className="mt-2 max-w-xs text-sm text-muted-foreground">
          A simple illustration of what you&apos;ll see in the app.
        </p>
      </div>
    </section>
  );
}
