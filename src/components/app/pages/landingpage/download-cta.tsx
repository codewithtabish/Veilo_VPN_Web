import Link from "next/link";
import { Button } from "@/components/ui/button";

// Replace with the real Google Play listing URL once available.
const GOOGLE_PLAY_URL = "YOUR_GOOGLE_PLAY_URL";

export function DownloadCTA() {
  return (
    <section id="download" className="py-20 sm:py-28">
      <div className="flex flex-col items-center rounded-3xl border border-border bg-card px-6 py-16 text-center sm:px-12">
        <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          Your connection.
          <br />
          Your privacy.
          <br />
          One tap away.
        </h2>
        <p className="mt-4 max-w-sm text-base text-muted-foreground">
          Get Veilo and keep your VPN experience simple.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href={GOOGLE_PLAY_URL}>Download Veilo</Link>
        </Button>
      </div>
    </section>
  );
}
