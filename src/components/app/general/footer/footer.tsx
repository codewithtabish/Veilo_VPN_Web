import { ArrowUpRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { SOCIAL_LINKS } from "../links/social-links";

/* ------------------------------------------------------------------ */
/* Copyright                                                          */
/* ------------------------------------------------------------------ */

const COPYRIGHT_YEAR = new Date().getFullYear().toString();

/* ------------------------------------------------------------------ */
/* Footer links                                                       */
/* ------------------------------------------------------------------ */

const PRODUCT_LINKS = [
  {
    label: "About",
    href: "/about",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

const LEGAL_LINKS = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms of Use",
    href: "/terms",
  },
];

/* ------------------------------------------------------------------ */
/* Footer link                                                        */
/* ------------------------------------------------------------------ */

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  const className = cn(
    "group inline-flex items-center gap-1",
    "text-sm text-muted-foreground",
    "transition-colors duration-200",
    "hover:text-foreground",
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}

        <ArrowUpRight
          className="size-3.5 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
          aria-hidden="true"
        />
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}

      <ArrowUpRight
        className="size-3.5 opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
        aria-hidden="true"
      />
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/* Social button                                                      */
/* ------------------------------------------------------------------ */

function SocialButton({
  social,
}: {
  social: (typeof SOCIAL_LINKS)[number];
}) {
  const Icon = social.icon;

  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className={cn(
        "inline-flex size-9 items-center justify-center",
        "rounded-md border border-border",
        "text-muted-foreground",
        "transition-all duration-200",
        "hover:border-foreground",
        "hover:bg-foreground",
        "hover:text-background",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-ring",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
      )}
    >
      <Icon className="size-[17px]" />
    </a>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                             */
/* ------------------------------------------------------------------ */

export default function VeiloFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 lg:px-8">
        {/* ========================================================== */}
        {/* Main footer                                                 */}
        {/* ========================================================== */}

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.6fr_0.8fr_0.8fr] lg:gap-20 lg:py-16">
          {/* -------------------------------------------------------- */}
          {/* Veilo brand                                                */}
          {/* -------------------------------------------------------- */}

          <div className="max-w-[560px]">
            <Link
              href="/"
              aria-label="Veilo — Home"
              className="inline-flex items-center gap-3"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-muted/40">
                <ShieldCheck
                  className="size-5 text-foreground"
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </span>

              <span className="text-xl font-semibold tracking-tight text-foreground">
                Veilo
              </span>
            </Link>

            <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-muted-foreground">
              Veilo is a simple, private VPN built to help you browse the
              internet more securely and privately. Connect to a trusted
              server, protect your connection, and get online with confidence.
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <SocialButton
                  key={social.label}
                  social={social}
                />
              ))}
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* Product                                                    */}
          {/* -------------------------------------------------------- */}

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Product
            </h2>

            <nav
              aria-label="Product"
              className="mt-6 space-y-3.5"
            >
              {PRODUCT_LINKS.map((link) => (
                <div key={link.href}>
                  <FooterLink href={link.href}>
                    {link.label}
                  </FooterLink>
                </div>
              ))}
            </nav>
          </div>

          {/* -------------------------------------------------------- */}
          {/* Legal                                                      */}
          {/* -------------------------------------------------------- */}

          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Legal
            </h2>

            <nav
              aria-label="Legal"
              className="mt-6 space-y-3.5"
            >
              {LEGAL_LINKS.map((link) => (
                <div key={link.href}>
                  <FooterLink href={link.href}>
                    {link.label}
                  </FooterLink>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* ========================================================== */}
        {/* Developer / CodeWithTabish                                  */}
        {/* ========================================================== */}

        <div className="border-t border-dashed border-border" />

        <div className="py-8">
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
            <span className="font-medium text-foreground">
              Veilo is designed and developed by{" "}
            </span>

            <a
              href="https://codewithtabish.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center font-semibold text-foreground transition-colors hover:text-foreground/70"
            >
              CodeWithTabish
              <ArrowUpRight
                className="ml-1 size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <span>
              , a software engineering studio focused on building modern web
              and mobile products, scalable systems, and practical technology
              solutions.
            </span>
          </p>
        </div>

        {/* ========================================================== */}
        {/* Bottom footer                                                */}
        {/* ========================================================== */}

        <div className="border-t border-dashed border-border" />

        <div className="flex flex-col gap-5 py-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground">
              © {COPYRIGHT_YEAR} Veilo. All rights reserved.
            </p>

            <p className="mt-2 text-xs leading-5 text-muted-foreground">
              Veilo provides encrypted VPN tunneling to help protect your
              internet connection and improve your online privacy.
            </p>
          </div>

          <p className="max-w-md text-xs leading-5 text-muted-foreground lg:text-right">
            VPN protection does not guarantee complete anonymity or security
            on the internet. Always use the internet responsibly.
          </p>
        </div>
      </div>
    </footer>
  );
}
