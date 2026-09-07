"use client";

import Image from "next/image";
import { Settings } from "lucide-react";
import { usePrefersReducedMotion } from "./hooks";

type PhoneMockupProps = {
  /** Which state the embedded Veilo UI should render. */
  state?: "protected" | "connecting" | "idle";
  className?: string;
};

/**
 * A hand-built Android phone frame rendered in HTML/Tailwind (no image
 * asset for the device itself) so it stays crisp and theme-aware at any
 * size. The screen contents mirror the real Veilo app: brand mark,
 * settings glyph, the single shield control, and a status line —
 * nothing else. No infrastructure details are ever shown.
 */
export function PhoneMockup({ state = "protected", className }: PhoneMockupProps) {
  const reducedMotion = usePrefersReducedMotion();
  const isProtected = state === "protected";
  const isConnecting = state === "connecting";

  return (
    <div
      className={[
        "relative mx-auto w-[min(78vw,300px)] select-none sm:w-[300px]",
        reducedMotion ? "" : "animate-phone-float",
        className ?? "",
      ].join(" ")}
    >
      {/* Ambient glow behind the device — subtle, theme-derived */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-10 -z-10 h-[70%] rounded-full bg-primary/20 blur-3xl"
      />

      {/* Device frame */}
      <div className="relative overflow-hidden rounded-[2.75rem] border border-border bg-secondary p-2.5 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)]">
        {/* Screen */}
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] bg-background">
          {/* Status bar */}
          <div className="flex items-center justify-between px-6 pt-4 text-[11px] font-medium text-muted-foreground">
            <span>9:41</span>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/60" />
              <span className="h-1.5 w-3 rounded-sm bg-muted-foreground/60" />
            </div>
          </div>

          {/* App header */}
          <div className="mt-6 flex items-center justify-between px-6">
            <span className="text-[15px] font-semibold tracking-tight text-foreground">
              Veilo
            </span>
            <Settings
              className="h-4 w-4 text-muted-foreground"
              aria-hidden="true"
              strokeWidth={2}
            />
          </div>

          {/* Shield control */}
          <div className="mt-8 flex flex-col items-center px-6">
            <div className="relative flex h-36 w-36 items-center justify-center">
              {/* Connection rings — decorative, disabled under reduced motion */}
              {!reducedMotion && (
                <>
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute inset-0 rounded-full border",
                      isProtected
                        ? "border-primary/25 animate-ring-pulse"
                        : "border-transparent",
                    ].join(" ")}
                  />
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute inset-0 rounded-full border",
                      isProtected
                        ? "border-primary/15 animate-ring-pulse [animation-delay:0.6s]"
                        : "border-transparent",
                    ].join(" ")}
                  />
                </>
              )}

              <div
                className={[
                  "relative flex h-24 w-24 items-center justify-center rounded-full border transition-colors duration-500",
                  isProtected
                    ? "border-primary/40 bg-primary/10"
                    : isConnecting
                    ? "border-primary/30 bg-primary/5"
                    : "border-border bg-muted",
                  !reducedMotion && isProtected ? "animate-shield-glow" : "",
                ].join(" ")}
              >
                <Image
                  src="/assets/images/logo-glow.png"
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                  priority
                />
              </div>
            </div>

            <div
              className="mt-6 flex items-center gap-2"
              role="status"
              aria-live="polite"
            >
              <span
                aria-hidden="true"
                className={[
                  "h-2 w-2 rounded-full",
                  isProtected
                    ? "bg-primary"
                    : isConnecting
                    ? "bg-primary/60"
                    : "bg-muted-foreground/50",
                ].join(" ")}
              />
              <span className="text-sm font-medium text-foreground">
                {isProtected ? "Protected" : isConnecting ? "Connecting…" : "Not connected"}
              </span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              {isProtected ? "Your connection is secure" : "Tap the shield to connect"}
            </p>
          </div>

          {/* Bottom detail card — plausible, non-sensitive UI content only */}
          <div className="absolute inset-x-5 bottom-6 rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Connection</span>
              <span className="font-medium text-foreground">
                {isProtected ? "Active" : "Inactive"}
              </span>
            </div>
            <div className="mt-2.5 h-px w-full bg-border" />
            <div className="mt-2.5 flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Encryption</span>
              <span className="font-medium text-foreground">On</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
