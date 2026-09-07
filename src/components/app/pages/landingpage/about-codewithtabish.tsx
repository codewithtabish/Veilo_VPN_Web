import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutCodeWithTabish() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="rounded-3xl border border-border bg-card px-6 py-14 sm:px-12">
        <span className="text-xs font-medium tracking-wide text-primary">
          Made by CodeWithTabish
        </span>
        <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Built with care.
          <br />
          Designed to stay simple.
        </h2>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
          Veilo is created and published by CodeWithTabish, with a focus on
          building useful, modern software experiences that are simple to
          understand and enjoyable to use.
        </p>
        <Button asChild variant="outline" className="mt-6">
          <Link href="/about">About CodeWithTabish</Link>
        </Button>
      </div>
    </section>
  );
}
