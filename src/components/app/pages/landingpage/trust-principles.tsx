const PRINCIPLES = [
  "No account required",
  "Simple connection",
  "Clear status",
];

export function TrustPrinciples() {
  return (
    <section className="border-y border-border/70 py-6" aria-label="Product principles">
      <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
        {PRINCIPLES.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
