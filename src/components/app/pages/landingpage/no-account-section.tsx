import { ArrowRight } from "lucide-react";

const FLOW = ["Open", "Tap", "Protected"];

export function NoAccountSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Just open and connect.
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-lg font-medium leading-snug text-foreground">
          No account. No password. No unnecessary setup.
        </p>

        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Veilo keeps the core VPN experience focused on what matters:
          connecting your device simply and clearly.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3 sm:gap-5">
          {FLOW.map((word, index) => (
            <div key={word} className="flex items-center gap-3 sm:gap-5">
              <span className="rounded-full border border-border bg-background px-5 py-2 text-sm font-medium text-foreground">
                {word}
              </span>
              {index < FLOW.length - 1 && (
                <ArrowRight
                  className="h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
