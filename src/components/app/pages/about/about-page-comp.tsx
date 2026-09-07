import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Veilo | Simple VPN",
  description:
    "Learn about Veilo, a simple VPN application created by CodeWithTabish to make everyday VPN protection easier to use.",
};

const CONTACT_EMAIL = "tabish@codewithtabish.com";

export default function AboutPageComp() {
  return (
    <main className=" text-foreground">
      {/* Hero */}
      <header className="border-b border-border py-16 sm:py-20 lg:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
          About Veilo
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          Simple VPN.
          <br />
          Stronger Privacy.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Veilo is a modern consumer VPN built to make everyday protection
          simple. No accounts. No complicated menus. Just open the app, tap the
          shield, and connect.
        </p>
      </header>

      <div className="space-y-20 py-16 sm:space-y-24 sm:py-20 lg:py-24">
        {/* What is Veilo? */}
        <section aria-labelledby="what-is-veilo">
          <h2
            id="what-is-veilo"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            What is Veilo?
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Veilo is a consumer VPN application designed to make private
              internet access easier to use. It focuses on the core experience
              most people actually need: a clear way to protect their connection
              without unnecessary complexity.
            </p>
            <p>
              The experience is intentionally simple:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Open the app.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Tap the shield.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Connect.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>Stay protected.</span>
              </li>
            </ul>
            <p>
              Veilo does not require login, signup, user accounts, or passwords.
              There is no country selector or server list. The product is built
              around one clear action.
            </p>
          </div>
        </section>

        {/* Why We Built Veilo */}
        <section aria-labelledby="why-we-built">
          <h2
            id="why-we-built"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Why We Built Veilo
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Many VPN applications feel complicated. They present too many
              settings, too many server choices, account requirements, and
              interfaces that get in the way of the one thing that matters:
              connecting securely.
            </p>
            <p>
              Veilo takes a different approach. We focused on making the core
              VPN experience understandable and approachable for everyday users.
              The goal is not more options — it is clarity.
            </p>
          </div>
        </section>

        {/* Simple by Design */}
        <section aria-labelledby="simple-by-design">
          <h2
            id="simple-by-design"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Simple by Design
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "No account required",
                description:
                  "Open Veilo and connect. There is no signup, login, or profile setup.",
              },
              {
                title: "No server selection",
                description:
                  "No country lists or location pickers. One clear connection path.",
              },
              {
                title: "One primary control",
                description:
                  "A single, obvious VPN control designed for everyday use.",
              },
              {
                title: "Clear status",
                description:
                  "Connection state is easy to understand at a glance.",
              },
              {
                title: "Privacy-conscious design",
                description:
                  "The product is shaped around reducing unnecessary complexity and friction.",
              },
              {
                title: "Focused experience",
                description:
                  "Built for the essential task: protecting your connection when you need it.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-5 sm:p-6"
              >
                <h3 className="font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Privacy-Focused Approach */}
        <section aria-labelledby="privacy-approach">
          <h2
            id="privacy-approach"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Privacy-Focused Approach
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Veilo is designed with privacy in mind. We aim to collect and
              process only the technical information necessary to provide,
              maintain, secure, and improve the service.
            </p>
            <p>
              A VPN can strengthen privacy and help protect traffic on public or
              untrusted networks, but it is not a guarantee of complete
              anonymity or perfect protection. Full details about how
              information is handled are available in our Privacy Policy.
            </p>
          </div>
        </section>

        {/* How Veilo Works */}
        <section aria-labelledby="how-it-works">
          <h2
            id="how-it-works"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            How Veilo Works at a High Level
          </h2>
          <div className="mt-8 space-y-6">
            {[
              {
                step: "01",
                title: "Open Veilo",
                description:
                  "Launch the application on your device. No account or setup flow is required to begin.",
              },
              {
                step: "02",
                title: "Tap the shield",
                description:
                  "Use the main VPN control to start the connection. The interface is designed around this single action.",
              },
              {
                step: "03",
                title: "Stay protected",
                description:
                  "Veilo establishes an encrypted VPN connection so your traffic is routed through a protected path.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex gap-5 border-l-2 border-border pl-5 sm:gap-6 sm:pl-6"
              >
                <span className="shrink-0 text-sm font-medium tabular-nums text-primary">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            On Android, Veilo can maintain the connection using foreground
            service functionality so protection can continue even when the app
            interface is not visible.
          </p>
        </section>

        {/* Built by CodeWithTabish */}
        <section
          aria-labelledby="built-by"
          className="rounded-2xl border border-border bg-card p-6 sm:p-8 lg:p-10"
        >
          <h2
            id="built-by"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Built by CodeWithTabish
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Veilo is created and published by{" "}
              <span className="font-medium text-foreground">CodeWithTabish</span>
              .
            </p>
            <p>
              CodeWithTabish builds software products focused on useful, modern,
              and accessible experiences. Veilo is one of those products — a
              deliberate effort to make VPN protection simpler and more
              approachable for everyday users.
            </p>
            <p className="text-sm">
              Android package:{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-foreground">
                com.codewithtabish.veilo
              </code>
            </p>
          </div>
        </section>

        {/* Our Product Philosophy */}
        <section aria-labelledby="philosophy">
          <h2
            id="philosophy"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Our Product Philosophy
          </h2>
          <ul className="mt-8 space-y-5">
            {[
              {
                title: "Simple first",
                description:
                  "If a feature does not make the core experience clearer, it does not belong in the primary flow.",
              },
              {
                title: "Privacy matters",
                description:
                  "Protection should feel natural, not like a technical puzzle users have to solve.",
              },
              {
                title: "Clear interfaces",
                description:
                  "Status, controls, and outcomes should be easy to understand at a glance.",
              },
              {
                title: "Useful technology",
                description:
                  "Technology should serve the user — not the other way around.",
              },
              {
                title: "No unnecessary complexity",
                description:
                  "We prefer fewer, better choices over endless configuration.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <div>
                  <h3 className="font-medium text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* What's Next */}
        <section aria-labelledby="whats-next">
          <h2
            id="whats-next"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            What&apos;s Next
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Veilo will continue to evolve. We are focused on improving
              reliability, experience, performance, and privacy-focused design
              over time.
            </p>
            <p>
              Future improvements will be guided by the same principles that
              shaped the product from the start: keep the experience simple,
              keep the interface clear, and keep the focus on what actually
              helps users stay protected.
            </p>
          </div>
        </section>

        {/* Contact / Support */}
        <section
          aria-labelledby="contact"
          className="border-t border-border pt-16 sm:pt-20"
        >
          <h2
            id="contact"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            Contact &amp; Support
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Questions, feedback, or support requests are welcome. Reach out
              and we will do our best to help.
            </p>
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center font-medium text-primary underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}