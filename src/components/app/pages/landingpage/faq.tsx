import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is Veilo?",
    answer:
      "Veilo is a simple VPN app for Android. It's designed to protect your connection without extra menus or configuration.",
  },
  {
    question: "How does Veilo work?",
    answer:
      "Open the app and tap the shield to connect. Veilo shows a clear status so you always know whether you're protected.",
  },
  {
    question: "Do I need an account?",
    answer:
      "No. Veilo doesn't require sign-up, a password, or a profile. You can start using it right away.",
  },
  {
    question: "Can I use Veilo on Android?",
    answer: "Yes. Veilo is currently available as an Android application.",
  },
  {
    question: "Does Veilo require a subscription?",
    answer:
      "Pricing details are available on the app's store listing rather than promised here in advance.",
  },
  {
    question: "Does Veilo guarantee complete anonymity?",
    answer:
      "No VPN can guarantee complete anonymity, and Veilo doesn't claim to. It's designed to be privacy-focused, not to make absolute promises.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 sm:py-28">
      <div className="">
        <span className="text-xs font-medium tracking-wide text-primary">
          FAQ
        </span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Common questions.
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-10 ">
        {FAQS.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`}>
            <AccordionTrigger className="text-left text-base font-medium text-foreground">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
