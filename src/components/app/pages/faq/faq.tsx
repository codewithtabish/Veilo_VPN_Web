"use client";

import { useState } from "react";
import {
  ArrowDown,
  Check,
  CircleHelp,
  ShieldCheck,
  Wifi,
} from "lucide-react";

import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* FAQ data                                                           */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    question: "What is Veilo?",
    answer:
      "Veilo is a VPN service designed to help protect your internet connection and improve your online privacy. When you connect to Veilo, your device establishes an encrypted VPN tunnel before your internet traffic is sent through the VPN server.",
  },
  {
    question: "How does a VPN protect my connection?",
    answer:
      "A VPN creates an encrypted connection between your device and the VPN server. This helps protect traffic from being easily observed by others on the same network, such as on unsecured or public Wi-Fi. Your websites and online services can also see the VPN server's IP address instead of your normal public IP address.",
  },
  {
    question: "Does Veilo hide my IP address?",
    answer:
      "When your VPN connection is active, websites and online services generally see the public IP address of the VPN server rather than the public IP address assigned to your normal internet connection.",
  },
  {
    question: "Does using a VPN make me completely anonymous?",
    answer:
      "No. A VPN can improve network privacy and hide your public IP address from websites, but it does not make you completely anonymous. Websites can still identify you through accounts, cookies, browser characteristics, device information, and other tracking technologies. A VPN should be considered one layer of privacy protection, not complete anonymity.",
  },
  {
    question: "Is Veilo useful on public Wi-Fi?",
    answer:
      "Yes. A VPN can be particularly useful when using public or otherwise untrusted networks. Veilo creates an encrypted tunnel between your device and the VPN server, helping reduce the risk of someone on the local network observing your traffic.",
  },
  {
    question: "Will Veilo slow down my internet?",
    answer:
      "A VPN can affect connection speed because your traffic is routed through a VPN server and encrypted. The actual impact depends on factors such as your internet connection, the distance to the VPN server, server load, network conditions, and your device.",
  },
  {
    question: "Why should I connect to a VPN before browsing?",
    answer:
      "Connecting before browsing helps ensure that your internet traffic is routed through the VPN from the beginning of your session. If privacy is important to you, it is generally better to establish the VPN connection before using websites or apps that you want protected by the tunnel.",
  },
  {
    question: "What happens if my VPN connection disconnects?",
    answer:
      "If your VPN disconnects, your device may return to its normal internet connection depending on your operating system and VPN configuration. This means traffic may no longer be protected by the VPN tunnel. VPN kill-switch functionality can help prevent traffic from continuing outside the VPN when a connection drops, where supported.",
  },
  {
    question: "Does a VPN protect me from viruses and malware?",
    answer:
      "No. A VPN is not a replacement for antivirus software, device security, or safe browsing practices. A VPN primarily protects the network connection between your device and the VPN server. It does not automatically make malicious downloads, phishing links, unsafe applications, or compromised websites safe.",
  },
  {
    question: "Can I use Veilo for online banking?",
    answer:
      "A VPN can add an additional layer of network privacy when accessing online banking, especially on an untrusted network. However, you should still use your bank's official website or application, enable multi-factor authentication where available, keep your device secure, and never share your banking credentials.",
  },
  {
    question: "Can I use Veilo while traveling?",
    answer:
      "Yes. A VPN can be useful while traveling, particularly when connecting to hotel, airport, café, or other public Wi-Fi networks. It can help protect your connection while using networks that you do not control.",
  },
  {
    question: "Does Veilo protect every app on my device?",
    answer:
      "When the VPN is connected at the system level, traffic routed through the device's VPN interface can be protected by the VPN tunnel. The exact behavior can vary by operating system, application, network configuration, and any traffic exclusions or routing rules.",
  },
  {
    question: "Can a VPN bypass every website or network restriction?",
    answer:
      "No. A VPN can change the apparent public IP address and route traffic through a different network, but it cannot guarantee access to every website or service. Some services actively detect or restrict VPN traffic, and local laws or network policies may still apply.",
  },
  {
    question: "Can I turn Veilo off whenever I want?",
    answer:
      "Yes. You can disconnect from the VPN when you no longer want your traffic routed through the VPN tunnel. Once disconnected, your device will generally return to its normal network connection according to your operating system's networking behavior.",
  },
  {
    question: "What should I do if Veilo won't connect?",
    answer:
      "First, make sure your device has a working internet connection. Then try disconnecting and reconnecting, restarting the app, and switching networks if possible. If the problem continues, check whether your device has another VPN, firewall, or network configuration that could interfere with the connection.",
  },
  {
    question: "Is a VPN a replacement for HTTPS?",
    answer:
      "No. VPN encryption and HTTPS protect different parts of your connection. A VPN protects the connection between your device and the VPN server, while HTTPS protects communication between your browser or app and a website or service. Using both provides different layers of protection.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ item                                                           */
/* ------------------------------------------------------------------ */

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "group border-b border-border",
        index === 0 && "border-t",
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className={cn(
          "flex w-full items-center justify-between gap-6 py-6 text-left",
          "transition-colors duration-200",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-ring",
          "focus-visible:ring-offset-4",
          "focus-visible:ring-offset-background",
        )}
      >
        <span
          className={cn(
            "text-[15px] font-medium leading-6 sm:text-base",
            "transition-colors duration-200",
            isOpen
              ? "text-foreground"
              : "text-foreground/90 group-hover:text-foreground",
          )}
        >
          {question}
        </span>

        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-full",
            "border border-border",
            "transition-all duration-200",
            isOpen
              ? "bg-foreground text-background"
              : "bg-background text-muted-foreground group-hover:border-foreground group-hover:text-foreground",
          )}
          aria-hidden="true"
        >
          <ArrowDown
            className={cn(
              "size-4 transition-transform duration-300",
              isOpen && "rotate-180",
            )}
          />
        </span>
      </button>

      <div
        className={cn(
          "grid transition-[grid-template-rows,opacity] duration-300",
          isOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pb-6 pr-12 text-sm leading-7 text-muted-foreground">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ                                                                */
/* ------------------------------------------------------------------ */

export default function VeiloFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-background"
    >
      {/* ============================================================ */}
      {/* Header                                                       */}
      {/* ============================================================ */}

      <div className="mx-auto max-w-3xl text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-muted/30 px-3.5 py-1.5">
          <CircleHelp
            className="size-3.5 text-muted-foreground"
            aria-hidden="true"
          />

          <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Frequently Asked Questions
          </span>
        </div>

        <h1
          id="faq-heading"
          className="mt-6 text-4xl font-semibold tracking-[-0.035em] text-foreground sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
        >
          Questions about Veilo?
          <br />
          <span className="text-muted-foreground">
            We have answers.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-muted-foreground sm:text-base">
          Everything you need to know about VPN protection, privacy,
          connections, and using Veilo. If you are new to VPNs, start here.
        </p>
      </div>

      {/* ============================================================ */}
      {/* Trust indicators                                              */}
      {/* ============================================================ */}

      <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
        <div className="bg-background px-5 py-5">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <ShieldCheck
                className="size-4 text-foreground"
                aria-hidden="true"
              />
            </span>

            <div>
              <p className="text-sm font-medium text-foreground">
                Encrypted tunnel
              </p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                Protect your connection
              </p>
            </div>
          </div>
        </div>

        <div className="bg-background px-5 py-5">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Wifi
                className="size-4 text-foreground"
                aria-hidden="true"
              />
            </span>

            <div>
              <p className="text-sm font-medium text-foreground">
                Private routing
              </p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                Route traffic through VPN
              </p>
            </div>
          </div>
        </div>

        <div className="bg-background px-5 py-5">
          <div className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted">
              <Check
                className="size-4 text-foreground"
                aria-hidden="true"
              />
            </span>

            <div>
              <p className="text-sm font-medium text-foreground">
                Simple by design
              </p>

              <p className="mt-0.5 text-xs text-muted-foreground">
                Connect without complexity
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* Questions                                                     */}
      {/* ============================================================ */}

      <div className="mx-auto mt-14 max-w-4xl">
        <div className="divide-y-0">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/* Bottom CTA                                                    */}
      {/* ============================================================ */}

      <div className="mx-auto mt-16 max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-muted/30 px-6 py-8 sm:px-8 sm:py-10">
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                Still have questions?
              </p>

              <h2 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Start with Veilo and keep your connection private.
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Learn more about how Veilo approaches privacy and security on
                our About and Privacy Policy pages.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="/about"
                className={cn(
                  "inline-flex h-10 items-center justify-center rounded-md",
                  "border border-border bg-background px-4",
                  "text-sm font-medium text-foreground",
                  "transition-colors duration-200",
                  "hover:bg-muted",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-ring",
                  "focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-background",
                )}
              >
                About Veilo
              </a>

              <a
                href="/privacy-policy"
                className={cn(
                  "inline-flex h-10 items-center justify-center rounded-md",
                  "bg-foreground px-4",
                  "text-sm font-medium text-background",
                  "transition-opacity duration-200",
                  "hover:opacity-85",
                  "focus-visible:outline-none",
                  "focus-visible:ring-2",
                  "focus-visible:ring-ring",
                  "focus-visible:ring-offset-2",
                  "focus-visible:ring-offset-background",
                )}
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
