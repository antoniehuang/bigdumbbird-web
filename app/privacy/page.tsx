import type { Metadata } from "next";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | 大笨鳥華語",
  description:
    "How Big Dumb Bird Mandarin handles information stored on your device, synced data, optional analytics, and service providers.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      titleZh="隱私權政策"
      effectiveDate="13 August 2026"
      isPlaceholder={false}
    >
      <p>
        Big Dumb Bird Mandarin (大笨鳥華語) is provided by Concurrent Space Ltd (&quot;we&quot;,
        &quot;us&quot; or &quot;our&quot;), a company registered in England and Wales under company
        number 16800102.
      </p>

      <p>
        Registered office: 71–75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ.
      </p>

      <p>
        This Privacy Policy explains how information is handled when you use the Big Dumb Bird
        Mandarin application (the &quot;App&quot;).
      </p>

      <section>
        <h2>1. Information stored on your device</h2>
        <p>
          The App stores information needed to provide your lessons locally on your device. This
          includes:
        </p>
        <ul>
          <li>your appearance and pronunciation-display preferences;</li>
          <li>the lessons you have started or completed;</li>
          <li>your study history and streak information; and</li>
          <li>
            vocabulary-card progress, answers, review dates and scheduling information.
          </li>
        </ul>
        <p>
          This information is used to remember your settings, show your progress and schedule
          future reviews. It remains on your device until you reset your progress or uninstall the
          App, except for information that you choose to sync to your account or that is included
          in analytics you have chosen to enable.
        </p>
      </section>

      <section>
        <h2>2. Accounts and study-data sync</h2>
        <p>
          If you create an account or enable sync, we use Supabase to authenticate your account and
          store the information needed to keep your study progress available across installations
          or devices.
        </p>
        <p>This may include:</p>
        <ul>
          <li>
            your email address or another sign-in identifier, depending on the sign-in method you
            choose;
          </li>
          <li>an account identifier and authentication information;</li>
          <li>the lessons you have started or completed;</li>
          <li>your study history and streak information;</li>
          <li>
            vocabulary-card progress, answers, review dates and scheduling information; and
          </li>
          <li>
            technical and security information, such as sign-in times, IP address and device or
            browser information.
          </li>
        </ul>
        <p>
          We use account and synced study information to provide the App, authenticate you, restore
          and synchronise your progress, respond to support requests, and protect the security of
          the service. Where UK data-protection law applies, our lawful bases are performance of
          our contract with you and our legitimate interests in operating and securing the App.
        </p>
        <p>
          Supabase processes this information on our behalf. The primary copy of synced data is
          stored in the region selected for our Supabase project, although Supabase and its service
          providers may process information in other countries where appropriate safeguards apply.
          See{" "}
          <a href="https://supabase.com/privacy">Supabase&apos;s Privacy Policy</a>.
        </p>
        <p>
          We keep account and synced study information while your account remains open. If you
          delete your account, we delete or de-identify this information unless we must retain some
          of it to comply with law, resolve disputes, prevent fraud or protect our legal rights.
          Residual copies may remain in encrypted backups until those backups expire in the ordinary
          course.
        </p>
        <p>
          You can use the App without creating an account. If you do, your study progress remains
          on your device and is not synced through Supabase.
        </p>
      </section>

      <section>
        <h2>3. Analytics and error reporting</h2>
        <p>
          With your permission, the App uses PostHog to collect pseudonymous information about how
          the App is used and to diagnose technical errors.
        </p>
        <p>This may include:</p>
        <ul>
          <li>a randomly generated app identifier;</li>
          <li>device type, operating-system version and App version;</li>
          <li>features used and settings changed;</li>
          <li>lessons started or completed and study-session interactions; and</li>
          <li>technical error information, such as error messages and stack traces.</li>
        </ul>
        <p>
          We do not use PostHog to collect your name, email address, precise location, contacts,
          advertising identifier, the contents of other apps or the text of anything you enter into
          the App. We do not use session replay.
        </p>
        <p>
          We use this information only to understand usage, fix problems and improve the App. Our
          lawful basis is your consent.
        </p>
        <p>
          The App asks for this permission before analytics begins. Analytics is optional: you can
          refuse it without losing access to the App&apos;s core features, and you can disable it at
          any time in the App&apos;s settings.
        </p>
        <p>
          PostHog analytics and error data is stored using PostHog&apos;s EU infrastructure and
          retained for up to 12 months. See{" "}
          <a href="https://posthog.com/privacy">PostHog&apos;s Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>4. Permissions</h2>
        <p>
          The App plays lesson and pronunciation audio. It does not use the microphone to record or
          analyse your voice.
        </p>
        <p>
          The App does not request access to your precise location, contacts, camera or microphone.
        </p>
      </section>

      <section>
        <h2>5. Sharing of information</h2>
        <p>
          We do not sell, rent or trade your personal information. We do not use your information
          for advertising or cross-app tracking.
        </p>
        <p>Where applicable, information is shared only with:</p>
        <ul>
          <li>Supabase, for account authentication, database hosting and study-data sync;</li>
          <li>PostHog, for optional analytics and error reporting;</li>
          <li>Apple or Google, for App Store or Play Store distribution and platform services; or</li>
          <li>
            authorities or other parties when required by law or necessary to protect our legal
            rights.
          </li>
        </ul>
        <p>
          These providers may process information outside the United Kingdom. Where required,
          transfers are protected using recognised safeguards such as adequacy regulations or
          approved contractual protections.
        </p>
      </section>

      <section>
        <h2>6. Your choices and rights</h2>
        <p>You can:</p>
        <ul>
          <li>use the App without an account and keep your study information on your device;</li>
          <li>
            choose whether to enable analytics and change that choice in the App&apos;s settings;
          </li>
          <li>reset locally stored progress in the App; and</li>
          <li>request deletion of your account and synced information.</li>
        </ul>
        <p>
          Depending on applicable law, you may also have rights to access, correct, delete or
          restrict the use of your personal information, receive a portable copy of it, or object to
          its use.
        </p>
        <p>
          Where processing is based on consent, you may withdraw that consent at any time.
          Withdrawal does not affect processing that occurred before consent was withdrawn.
        </p>
        <p>
          To exercise your rights, contact us at{" "}
          <a href="mailto:hello@concurrent.space">hello@concurrent.space</a>. We may need to
          verify your identity before completing a request.
        </p>
        <p>
          You may also complain to the UK Information Commissioner&apos;s Office through the{" "}
          <a href="https://ico.org.uk/make-a-complaint/">ICO website</a>.
        </p>
      </section>

      <section>
        <h2>7. Children</h2>
        <p>
          The App is not directed at children under 13, and we do not knowingly collect personal
          information from children under 13.
        </p>
        <p>
          If you believe a child has provided personal information through the App, please contact
          us so that we can investigate and, where appropriate, delete it.
        </p>
      </section>

      <section>
        <h2>8. Security</h2>
        <p>
          We use reasonable technical and organisational measures to protect information handled
          through the App. However, no electronic storage or transmission system can be guaranteed
          to be completely secure.
        </p>
        <p>
          You are responsible for keeping your sign-in credentials confidential and for maintaining
          the security of your device.
        </p>
      </section>

      <section>
        <h2>9. Changes to this policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes to the App, our service providers or
          applicable law.
        </p>
        <p>
          If a change materially affects how personal information is handled, we will provide
          notice through the App or another appropriate method. The effective date at the top of
          this policy shows when it was last updated.
        </p>
      </section>

      <section>
        <h2>10. Contact us</h2>
        <p>For privacy questions or requests, contact:</p>
        <address>
          Concurrent Space Ltd
          <br />
          71–75 Shelton Street
          <br />
          Covent Garden
          <br />
          London, WC2H 9JQ
          <br />
          United Kingdom
        </address>
        <p>
          Email: <a href="mailto:hello@concurrent.space">hello@concurrent.space</a>
          <br />
          Company number: 16800102
        </p>
      </section>
    </LegalPage>
  );
}
