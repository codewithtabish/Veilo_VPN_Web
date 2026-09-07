import {
  Fingerprint,
  ShieldCheck,
  Sparkles,
  RadioTower,
  Lock,
  Clock,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const PRIMARY_FEATURE: Feature = {
  title: "One-tap protection",
  description:
    "Connect with a single tap. No menus to dig through, no setup to get right — just the shield, and your connection.",
  icon: ShieldCheck,
};

const SECONDARY_FEATURES: Feature[] = [
  {
    title: "Simple by design",
    description: "No account flow or server list to configure. Open the app and go.",
    icon: Sparkles,
  },
  {
    title: "Clear connection status",
    description: "Always know whether your VPN is connected — nothing ambiguous.",
    icon: RadioTower,
  },
];

const SUPPORTING_FEATURES: Feature[] = [
  {
    title: "Privacy-focused",
    description: "Designed with privacy in mind from the ground up.",
    icon: Fingerprint,
  },
  {
    title: "Secure VPN connection",
    description: "A modern VPN connection protects your network traffic.",
    icon: Lock,
  },
  {
    title: "Built for everyday use",
    description: "Fits naturally into everyday browsing, without getting in the way.",
    icon: Clock,
  },
];

function FeatureCard({
  feature,
  emphasis = false,
}: {
  feature: Feature;
  emphasis?: boolean;
}) {
  const Icon = feature.icon;
  return (
    <div
      className={[
        "group rounded-2xl border border-border bg-card p-6 transition-all duration-300",
        "hover:-translate-y-0.5 hover:border-primary/40",
        emphasis ? "sm:p-8" : "",
      ].join(" ")}
    >
      <Icon
        className={[
          "text-primary transition-transform duration-300 group-hover:scale-105",
          emphasis ? "h-7 w-7" : "h-5 w-5",
        ].join(" ")}
        strokeWidth={1.75}
        aria-hidden="true"
      />
      <h3
        className={[
          "mt-4 font-semibold tracking-tight text-foreground",
          emphasis ? "text-xl sm:text-2xl" : "text-base",
        ].join(" ")}
      >
        {feature.title}
      </h3>
      <p
        className={[
          "mt-2 leading-relaxed text-muted-foreground",
          emphasis ? "max-w-sm text-base" : "text-sm",
        ].join(" ")}
      >
        {feature.description}
      </p>
    </div>
  );
}

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="max-w-2xl">
        <span className="text-xs font-medium tracking-wide text-primary">
          Why Veilo
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Everything you need.
          <br />
          Nothing you don&apos;t.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          Veilo focuses on the essentials so protecting your connection never
          feels complicated.
        </p>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        <FeatureCard feature={PRIMARY_FEATURE} emphasis />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-rows-2">
          {SECONDARY_FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {SUPPORTING_FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}
