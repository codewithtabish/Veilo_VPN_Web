import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PrivacySection() {
  return (
    <section id="privacy" className="py-20 sm:py-28">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
        <div className="order-2 flex justify-center lg:order-1">
          <div className="flex h-56 w-56 items-center justify-center rounded-full border border-border bg-card sm:h-64 sm:w-64">
            <ShieldCheck
              className="h-20 w-20 text-primary sm:h-24 sm:w-24"
              strokeWidth={1.5}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-xs font-medium tracking-wide text-primary">
            Privacy
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Privacy should be simple to understand.
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Veilo is designed with a privacy-focused approach and aims to
            process only the technical information needed to operate the
            service.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link href="/privacy">Read our Privacy Policy</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
