import { Shield } from "lucide-react";

const POINTS = ["One clear control.", "One clear status.", "One simple experience."];

export function SimpleExperience() {
  return (
    <section className="py-20 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-xs font-medium tracking-wide text-primary">
            Simpler by design
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            VPN without the clutter.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Many VPN apps can overwhelm users with complicated menus, endless
            server lists, and unnecessary setup. Veilo takes another approach.
          </p>
          <ul className="mt-6 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-center gap-3 text-foreground">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-border bg-card sm:h-72 sm:w-72">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-primary/30 bg-primary/5 sm:h-48 sm:w-48">
              <Shield
                className="h-16 w-16 text-primary sm:h-20 sm:w-20"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
