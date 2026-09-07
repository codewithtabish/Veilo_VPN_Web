import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Veilo",
  description:
    "Read the Veilo Terms of Service governing use of the Veilo VPN application and services.",
};

const LAST_UPDATED = "September 7, 2026";
const CONTACT_EMAIL = "tabish@codewithtabish.com";

export default function TermsOfServicePageComp() {
  return (
    <main className=" text-foreground">
      <article className="py-12 sm:py-16 lg:py-20">
        <header className="mb-12 sm:mb-16">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {LAST_UPDATED}
          </p>
        </header>

        <div className="space-y-10 sm:space-y-12">
          {/* 3. Acceptance of Terms */}
          <section aria-labelledby="acceptance">
            <h2
              id="acceptance"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Acceptance of Terms
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                These Terms of Service (“Terms”) govern your access to and use
                of the Veilo VPN application and related services (collectively,
                the “Service”). By downloading, installing, accessing, or using
                Veilo, you agree to be bound by these Terms.
              </p>
              <p>
                If you do not agree to these Terms, do not use the Service.
              </p>
            </div>
          </section>

          {/* 4. Description of the Service */}
          <section aria-labelledby="description">
            <h2
              id="description"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Description of the Service
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Veilo is a consumer virtual private network (VPN) application
                that helps protect your internet connection by routing traffic
                through an encrypted tunnel. The Service is designed for
                individual use and currently operates with a single VPN
                server/gateway.
              </p>
              <p>
                Veilo uses WireGuard technology to establish the VPN connection.
                On Android, the application may use a foreground service so that
                the VPN connection can continue operating when the app interface
                is no longer visible.
              </p>
              <p>
                Veilo does not currently require user accounts, login, signup,
                passwords, email registration, or user profiles. The primary
                experience is: open Veilo, tap the VPN control, connect, and
                obtain a protected internet connection.
              </p>
            </div>
          </section>

          {/* 5. Eligibility */}
          <section aria-labelledby="eligibility">
            <h2
              id="eligibility"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Eligibility
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You must be able to form a binding contract under applicable law
                to use the Service. If you are under the age of majority in your
                jurisdiction, you may use Veilo only with the involvement and
                consent of a parent or legal guardian who agrees to these Terms
                on your behalf.
              </p>
              <p>
                You are responsible for ensuring that your use of the Service
                complies with the laws of the jurisdiction in which you are
                located.
              </p>
            </div>
          </section>

          {/* 6. Using Veilo */}
          <section aria-labelledby="using-veilo">
            <h2
              id="using-veilo"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Using Veilo
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You may use Veilo solely for lawful personal purposes in
                accordance with these Terms. You are responsible for your own
                device, network connection, and any costs associated with
                accessing the internet.
              </p>
              <p>
                The Android application may request certain permissions,
                including internet access, foreground service, notifications,
                and special-use foreground service capabilities. These
                permissions are necessary for the VPN to function as intended.
                You may manage permissions through your device settings; however,
                denying required permissions may prevent the Service from
                operating correctly.
              </p>
              <p>
                The application package identifier is{" "}
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                  com.codewithtabish.veilo
                </code>
                .
              </p>
            </div>
          </section>

          {/* 7. Acceptable Use */}
          <section aria-labelledby="acceptable-use">
            <h2
              id="acceptable-use"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Acceptable Use
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You agree to use Veilo only in a manner that is lawful,
                respectful of others, and consistent with the intended purpose
                of a consumer VPN service. You must not use the Service in any
                way that could harm Veilo, its infrastructure, other users, or
                third parties.
              </p>
            </div>
          </section>

          {/* 8. Prohibited Activities */}
          <section aria-labelledby="prohibited">
            <h2
              id="prohibited"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Prohibited Activities
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>You must not use Veilo to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Violate any applicable local, national, or international law</li>
                <li>Distribute malware, viruses, or other harmful software</li>
                <li>
                  Conduct attacks, including denial-of-service, flooding, or
                  similar disruptive activities
                </li>
                <li>
                  Attempt unauthorized access to systems, networks, accounts, or
                  data
                </li>
                <li>Abuse networks or consume resources in an excessive or harmful manner</li>
                <li>Interfere with or disrupt the Service or any related systems</li>
                <li>Distribute illegal content or engage in illegal activities</li>
                <li>Engage in fraud, phishing, or other deceptive practices</li>
                <li>
                  Infringe the intellectual property rights or other rights of
                  any person or entity
                </li>
                <li>
                  Conduct any activity that harms other users, third parties, or
                  the underlying infrastructure
                </li>
              </ul>
              <p>
                Veilo reserves the right to investigate suspected violations and
                to take appropriate action, including restricting or terminating
                access to the Service.
              </p>
            </div>
          </section>

          {/* 9. VPN Limitations */}
          <section aria-labelledby="limitations">
            <h2
              id="limitations"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              VPN Limitations
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A VPN is a valuable privacy and security tool, but it does not
                guarantee:
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Complete anonymity</li>
                <li>Absolute security</li>
                <li>Immunity from malware or other threats</li>
                <li>Protection from every form of tracking or identification</li>
                <li>Uninterrupted or error-free service</li>
                <li>Access to every website, service, or online resource</li>
              </ul>
              <p>
                Websites, applications, and other third-party services may still
                identify or track users through their own technologies, such as
                cookies, browser fingerprinting, account logins, or other
                methods independent of the VPN connection.
              </p>
              <p>
                You remain responsible for maintaining the security of your own
                devices and for exercising caution when using online services.
              </p>
            </div>
          </section>

          {/* 10. Internet Services and Third Parties */}
          <section aria-labelledby="internet-services">
            <h2
              id="internet-services"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Internet Services and Third Parties
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Veilo provides a protected connection path. It does not control
                the content, availability, or policies of websites,
                applications, or other internet services you access while using
                the VPN.
              </p>
              <p>
                Your interactions with third-party services are governed by
                those parties’ own terms and privacy policies. Veilo is not
                responsible for the practices or content of third-party services.
              </p>
            </div>
          </section>

          {/* 11. Advertising */}
          <section aria-labelledby="advertising">
            <h2
              id="advertising"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Advertising
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Veilo may display banner advertisements within the application.
                These advertisements help support the availability of the
                Service.
              </p>
              <p>
                Third-party advertising providers may have their own terms of
                service and privacy policies. Veilo does not control all data
                that may be processed by such third-party advertising providers.
                We encourage you to review the relevant policies of any
                advertising partners that appear in the Service.
              </p>
            </div>
          </section>

          {/* 12. Availability and Service Changes */}
          <section aria-labelledby="availability">
            <h2
              id="availability"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Availability and Service Changes
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We strive to keep Veilo available and reliable, but we do not
                guarantee continuous, uninterrupted, or error-free operation. The
                Service may be temporarily unavailable due to maintenance,
                updates, network conditions, or circumstances beyond our
                reasonable control.
              </p>
              <p>
                We may modify, suspend, or discontinue any aspect of the Service
                at any time, with or without notice, including changes to
                features, server configuration, or supported platforms.
              </p>
            </div>
          </section>

          {/* 13. Security and Privacy */}
          <section aria-labelledby="security-privacy">
            <h2
              id="security-privacy"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Security and Privacy
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Veilo is designed with privacy and security in mind. The VPN
                connection encrypts traffic between your device and the VPN
                gateway. However, no system can be guaranteed to be completely
                secure under all circumstances.
              </p>
              <p>
                Our practices regarding the collection and handling of
                information are described in our Privacy Policy. By using the
                Service, you also acknowledge the Privacy Policy.
              </p>
            </div>
          </section>

          {/* 14. Intellectual Property */}
          <section aria-labelledby="ip">
            <h2
              id="ip"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Intellectual Property
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Veilo, including its name, logo, design, code, and related
                materials, is protected by intellectual property laws. All
                rights not expressly granted to you are reserved.
              </p>
              <p>
                You may not copy, modify, distribute, sell, or create derivative
                works based on the Service or any part of it, except as
                expressly permitted by applicable law or with our prior written
                consent.
              </p>
            </div>
          </section>

          {/* 15. Third-Party Software and Services */}
          <section aria-labelledby="third-party">
            <h2
              id="third-party"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Third-Party Software and Services
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Veilo may rely on third-party infrastructure, network providers,
                app stores, advertising providers, open-source components, and
                other services necessary to operate the application.
              </p>
              <p>
                Your use of the Service may also be subject to the terms and
                policies of the platform or store through which you obtain
                Veilo. Those third-party terms are separate from these Terms.
              </p>
              <p>
                We are not responsible for the availability, performance, or
                policies of third-party services, except to the extent required
                by applicable law.
              </p>
            </div>
          </section>

          {/* 16. Disclaimers */}
          <section aria-labelledby="disclaimers">
            <h2
              id="disclaimers"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Disclaimers
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Service is provided on an “as is” and “as available” basis,
                without warranties of any kind, whether express, implied, or
                statutory, including but not limited to warranties of
                merchantability, fitness for a particular purpose,
                non-infringement, or uninterrupted availability.
              </p>
              <p>
                We do not warrant that the Service will meet your specific
                requirements, be free from errors, or that any defects will be
                corrected.
              </p>
            </div>
          </section>

          {/* 17. Limitation of Liability */}
          <section aria-labelledby="liability">
            <h2
              id="liability"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Limitation of Liability
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                To the maximum extent permitted by applicable law, Veilo and its
                operators shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of
                profits, data, or goodwill, arising out of or related to your
                use of (or inability to use) the Service.
              </p>
              <p>
                In no event shall our total liability for any claims arising out
                of or relating to these Terms or the Service exceed the amount
                you paid to use the Service in the twelve months preceding the
                claim (if any), or a nominal amount if no payment was made.
              </p>
              <p>
                Some jurisdictions do not allow certain limitations of
                liability. In such cases, the limitations above apply only to
                the extent permitted by law.
              </p>
            </div>
          </section>

          {/* 18. Indemnification */}
          <section aria-labelledby="indemnification">
            <h2
              id="indemnification"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Indemnification
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You agree to indemnify, defend, and hold harmless Veilo and its
                operators from and against any claims, liabilities, damages,
                losses, and expenses (including reasonable legal fees) arising
                out of or related to your use of the Service, your violation of
                these Terms, or your violation of any rights of a third party.
              </p>
            </div>
          </section>

          {/* 19. Termination and Suspension */}
          <section aria-labelledby="termination">
            <h2
              id="termination"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Termination and Suspension
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                You may stop using Veilo at any time by uninstalling the
                application and discontinuing use of the Service.
              </p>
              <p>
                We may suspend or terminate your access to the Service at any
                time if we reasonably believe you have violated these Terms, if
                required by law, or if continued operation of the Service
                becomes impractical.
              </p>
              <p>
                Upon termination, the rights granted to you under these Terms
                will cease. Provisions that by their nature should survive
                termination (including disclaimers, limitations of liability,
                and indemnification) will remain in effect.
              </p>
            </div>
          </section>

          {/* 20. Changes to These Terms */}
          <section aria-labelledby="changes">
            <h2
              id="changes"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Changes to These Terms
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We may update these Terms from time to time. When we do, we will
                revise the “Last updated” date at the top of this page. Continued
                use of the Service after changes become effective constitutes
                acceptance of the revised Terms.
              </p>
              <p>
                If you do not agree to the updated Terms, you must stop using
                the Service.
              </p>
            </div>
          </section>

          {/* 21. Governing Law */}
          <section aria-labelledby="governing-law">
            <h2
              id="governing-law"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Governing Law
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Governing law and venue will be determined by the legal entity
                operating Veilo and the applicable laws of the relevant
                jurisdiction.
              </p>
            </div>
          </section>

          {/* 22. Contact Us */}
          <section aria-labelledby="contact">
            <h2
              id="contact"
              className="text-xl font-semibold tracking-tight sm:text-2xl"
            >
              Contact Us
            </h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If you have questions about these Terms, please contact us at:
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}