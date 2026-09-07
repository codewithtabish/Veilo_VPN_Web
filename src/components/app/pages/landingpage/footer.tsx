import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/about", label: "About" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/images/icon.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 rounded-md"
            />
            <span className="text-sm font-semibold tracking-tight text-foreground">
              Veilo
            </span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Simple VPN protection for everyday internet use.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 sm:flex sm:flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>Built by CodeWithTabish</span>
        <span>© 2026 CodeWithTabish. All rights reserved.</span>
      </div>
    </footer>
  );
}
