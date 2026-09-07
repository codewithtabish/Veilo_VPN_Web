"use client";

import type { Metadata } from "next";

// Easy-to-edit contact constant
const PRIVACY_CONTACT_EMAIL = "tabish@codewithtabish.com";

export const metadata: Metadata = {
  title: "Privacy Policy | Veilo",
  description:
    "Read the Veilo Privacy Policy to understand how technical information is handled when using the Veilo VPN service.",
};

export default function PrivacyPolicyPageComp() {
  return (
    <main className="w-full">
      <article className="py-12 md:py-16 lg:py-20">
        {/* Header / Hero */}
        <header className="mb-12 md:mb-16">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: September 7, 2026
          </p>
        </header>

        {/* Privacy Principle Card */}
        <section className="mb-12 rounded-xl border border-border bg-card p-6 md:p-8">
          <h2 className="text-lg font-medium text-card-foreground">
            Our Privacy Approach
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            Veilo is designed with privacy in mind. We collect only the limited
            technical information necessary to provision, operate, secure, and
            maintain the VPN service. We do not require accounts, logins, or
            personal profiles. This policy explains what information is
            processed and why.
          </p>
        </section>

        {/* Legal Content */}
        <div className="space-y-12 text-base leading-relaxed text-foreground">
          {/* 3. Introduction */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Introduction
            </h2>
            <p className="text-muted-foreground">
              This Privacy Policy describes how Veilo (“we,” “us,” or “our”)
              handles information in connection with the Veilo VPN application
              (the “Service”), including the Android application with package
              name <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">com.codewithtabish.veilo</code>.
            </p>
            <p className="mt-4 text-muted-foreground">
              Veilo is a simple consumer VPN application. The core experience is
              straightforward: open the app, tap the VPN control, and connect to
              a protected internet connection. Veilo currently uses a single VPN
              server/gateway and does not require users to select countries or
              servers.
            </p>
            <p className="mt-4 text-muted-foreground">
              Veilo does not use login, signup, user accounts, passwords,
              authentication systems, user profiles, social login, email
              accounts, or account dashboards.
            </p>
            <p className="mt-4 text-muted-foreground">
              By using the Service, you acknowledge the practices described in
              this Privacy Policy. If you do not agree with these practices, you
              should not use the Service.
            </p>
          </section>

          {/* 4. Information We Collect */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Information We Collect
            </h2>
            <p className="text-muted-foreground">
              To provide and maintain the VPN service, Veilo may process limited
              technical information that is necessary for connection
              provisioning, operation, security, and troubleshooting. This may
              include:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>A device-generated identifier used for VPN client management</li>
              <li>VPN client public key</li>
              <li>Assigned VPN IP address</li>
              <li>Connection and provisioning information</li>
              <li>
                Technical diagnostics necessary for operating and maintaining the
                service
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              This information is technical in nature and is processed only to
              the extent needed to deliver a functional and reliable VPN
              connection.
            </p>
          </section>

          {/* 5. Information We Do Not Intentionally Collect */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Information We Do Not Intentionally Collect
            </h2>
            <p className="text-muted-foreground">
              Veilo is designed so that it does not require or intentionally
              collect the following categories of personal information:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Password or account credentials</li>
              <li>Precise location data</li>
              <li>Contacts</li>
              <li>Photos or media libraries</li>
              <li>Microphone or camera data</li>
              <li>Account profile information</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Because Veilo does not offer user accounts or authentication, we
              do not maintain user profiles or account-related personal data.
            </p>
          </section>

          {/* 6. How We Use Information */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              How We Use Information
            </h2>
            <p className="text-muted-foreground">
              Technical information processed in connection with the Service may
              be used for the following purposes:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>Provisioning and establishing VPN connections</li>
              <li>Assigning and managing VPN IP addresses</li>
              <li>Operating, securing, and maintaining the VPN infrastructure</li>
              <li>Diagnosing technical issues and improving service reliability</li>
              <li>Preventing abuse and protecting the integrity of the Service</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              We do not use this information to build personal profiles for
              advertising or to track users across other services for our own
              purposes.
            </p>
          </section>

          {/* 7. VPN Connection and Technical Information */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              VPN Connection and Technical Information
            </h2>
            <p className="text-muted-foreground">
              Veilo uses a WireGuard-based VPN connection. When you connect,
              technical information is exchanged between your device and the VPN
              infrastructure so that the encrypted tunnel can be established and
              maintained.
            </p>
            <p className="mt-4 text-muted-foreground">
              The Android application requires certain permissions to function,
              including:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                  android.permission.INTERNET
                </code>
              </li>
              <li>
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                  android.permission.FOREGROUND_SERVICE
                </code>
              </li>
              <li>
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                  android.permission.POST_NOTIFICATIONS
                </code>
              </li>
              <li>
                <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                  android.permission.FOREGROUND_SERVICE_SPECIAL_USE
                </code>
              </li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              These permissions support the VPN connection, the foreground
              service that keeps the connection active, and related system
              notifications. They are not used to access personal content on
              your device beyond what is required for the VPN service itself.
            </p>
          </section>

          {/* 8. Device Identifier and VPN Provisioning */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Device Identifier and VPN Provisioning
            </h2>
            <p className="text-muted-foreground">
              To manage VPN clients and provision connections, Veilo may use a
              device-generated identifier together with the VPN client public
              key and related provisioning data. This allows the service to
              associate a client with the necessary configuration without
              requiring a user account.
            </p>
            <p className="mt-4 text-muted-foreground">
              This identifier is technical in nature and is used for service
              operation rather than for identifying you as an individual in a
              personal capacity.
            </p>
          </section>

          {/* 9. Private Keys */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Private Keys
            </h2>
            <p className="text-muted-foreground">
              The VPN private key is generated and stored locally on your
              device. It is not transmitted to our backend servers. Only the
              corresponding public key is used as part of the connection
              provisioning process.
            </p>
            <p className="mt-4 text-muted-foreground">
              Keeping the private key on the device is an important part of the
              security design of the WireGuard-based connection.
            </p>
          </section>

          {/* 10. IP Addresses and Network Information */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              IP Addresses and Network Information
            </h2>
            <p className="text-muted-foreground">
              When you use the VPN, your device is assigned a VPN IP address.
              Network traffic is routed through the VPN tunnel. Technical
              network information necessary to operate the tunnel may be
              processed as part of providing the service.
            </p>
            <p className="mt-4 text-muted-foreground">
              We process this information to deliver connectivity, maintain the
              service, and address technical issues. We do not use it to monitor
              the content of your communications.
            </p>
          </section>

          {/* 11. Advertising */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Advertising
            </h2>
            <p className="text-muted-foreground">
              Veilo may display advertising within the application, currently
              planned as banner advertising. If third-party advertising services
              are integrated, those providers may independently process
              information according to their own privacy policies and applicable
              platform rules.
            </p>
            <p className="mt-4 text-muted-foreground">
              Veilo itself does not claim to collect advertising identifiers
              beyond what may be required by any integrated third-party
              advertising services. Any such processing by third parties is
              governed by their respective policies.
            </p>
          </section>

          {/* 12. Third-Party Services */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Third-Party Services
            </h2>
            <p className="text-muted-foreground">
              The Service may rely on third-party infrastructure or services to
              operate (for example, hosting, networking, or advertising
              providers). Those third parties process information according to
              their own privacy policies and the agreements under which they
              provide services to us.
            </p>
            <p className="mt-4 text-muted-foreground">
              We encourage you to review the privacy practices of any
              third-party services that may be involved when you use Veilo.
            </p>
          </section>

          {/* 13. Data Retention */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Data Retention
            </h2>
            <p className="text-muted-foreground">
              Technical information is retained only for as long as reasonably
              necessary to provide the Service, maintain its security and
              reliability, and fulfill the purposes described in this Privacy
              Policy. Retention periods may vary depending on the nature of the
              data and operational requirements.
            </p>
            <p className="mt-4 text-muted-foreground">
              When technical information is no longer needed for these purposes,
              we take steps to delete or de-identify it in accordance with our
              operational practices.
            </p>
          </section>

          {/* 14. Data Security */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Data Security
            </h2>
            <p className="text-muted-foreground">
              We implement reasonable technical and organizational measures
              designed to protect the limited technical information we process.
              These measures are intended to help safeguard the integrity and
              availability of the Service.
            </p>
            <p className="mt-4 text-muted-foreground">
              No method of transmission or storage is completely secure. While
              we work to protect information, we cannot guarantee absolute
              security.
            </p>
          </section>

          {/* 15. Data Sharing and Disclosure */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Data Sharing and Disclosure
            </h2>
            <p className="text-muted-foreground">
              We do not sell personal information. Technical information may be
              shared only in limited circumstances, such as:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                With service providers who assist in operating the VPN
                infrastructure, under appropriate contractual arrangements
              </li>
              <li>
                When required by law, regulation, legal process, or governmental
                request
              </li>
              <li>
                To protect the rights, safety, or integrity of the Service, our
                users, or others
              </li>
              <li>
                In connection with a business transfer, reorganization, or
                similar transaction, subject to appropriate protections
              </li>
            </ul>
          </section>

          {/* 16. International Data Processing */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              International Data Processing
            </h2>
            <p className="text-muted-foreground">
              The Service may involve processing of technical information in
              different locations depending on where infrastructure is hosted
              and how the VPN connection is routed. By using Veilo, you
              understand that technical information may be processed in
              jurisdictions other than your own.
            </p>
          </section>

          {/* 17. Children's Privacy */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Children&apos;s Privacy
            </h2>
            <p className="text-muted-foreground">
              The Service is not directed to children under the age of 13 (or
              the equivalent minimum age in your jurisdiction). We do not
              knowingly collect personal information from children. If you
              believe a child has provided information to us in a way that is
              inconsistent with this policy, please contact us so that we can
              take appropriate steps.
            </p>
          </section>

          {/* 18. Your Privacy Rights */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Your Privacy Rights
            </h2>
            <p className="text-muted-foreground">
              Depending on where you live, you may have rights under applicable
              privacy laws with respect to certain information. These rights may
              include, where applicable, the ability to request access to,
              correction of, or deletion of certain information, or to object to
              or restrict certain processing.
            </p>
            <p className="mt-4 text-muted-foreground">
              Because Veilo does not maintain user accounts or collect
              traditional personal profile information, the practical scope of
              some rights may be limited. If you have questions about your
              rights or wish to make a request, please contact us using the
              information below.
            </p>
          </section>

          {/* 19. Changes to This Privacy Policy */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Changes to This Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, the Service, or legal requirements. When
              we make changes, we will update the “Last updated” date at the top
              of this page.
            </p>
            <p className="mt-4 text-muted-foreground">
              We encourage you to review this Privacy Policy periodically. Your
              continued use of the Service after changes become effective
              constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* 20. Contact Us */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground">
              Contact Us
            </h2>
            <p className="text-muted-foreground">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <p className="mt-4">
              <a
                href={`mailto:${PRIVACY_CONTACT_EMAIL}`}
                className="font-medium text-primary underline-offset-4 hover:underline"
              >
                {PRIVACY_CONTACT_EMAIL}
              </a>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Please replace the placeholder email with your actual contact
              address before publishing.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}