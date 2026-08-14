import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "../legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | 大笨鳥華語",
  description:
    "The terms for using Big Dumb Bird Mandarin, including lessons, accounts, study progress, and availability.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      titleZh="服務條款"
      effectiveDate="14 August 2026"
      isPlaceholder={false}
    >
      <p>
        These Terms of Service (&quot;Terms&quot;) apply to your use of the Big Dumb Bird Mandarin
        (大笨鳥華語) application (&quot;Big Dumb Bird Mandarin&quot; or the &quot;App&quot;). The App
        is provided by Concurrent Space Ltd (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;), a company
        registered in England and Wales under company number 16800102.
      </p>

      <p>
        By downloading or using the App, you agree to these Terms. If you do not agree, do not use
        the App.
      </p>

      <p>
        If you are under 18, you confirm that your parent or legal guardian has reviewed and agreed
        to these Terms on your behalf. The App is not directed at children under 13.
      </p>

      <section>
        <h2>1. What Big Dumb Bird Mandarin provides</h2>
        <p>
          Big Dumb Bird Mandarin is an educational app for learning Taiwan Mandarin. It may provide
          audio lessons, vocabulary, pronunciation guidance, exercises, spaced-repetition review,
          study records, progress information and related learning features.
        </p>
        <p>
          You can use the App without creating an account. An optional account may be required to
          back up or synchronise study progress across installations or devices.
        </p>
      </section>

      <section>
        <h2>2. Educational information and learning results</h2>
        <p>
          The App is a learning aid. It is not a substitute for a qualified teacher, translator or
          other professional service.
        </p>
        <p>
          We take reasonable care when preparing lessons, translations, pronunciation guidance and
          review schedules, but language varies by speaker, region and context. Content may
          occasionally be incomplete, inaccurate or unsuitable for a particular situation. You
          should check important translations or communications with a qualified speaker or another
          reliable source before relying on them.
        </p>
        <p>
          Learning results depend on factors outside our control, including how regularly you study
          and practise. We do not guarantee fluency, examination results, a particular level of
          proficiency or any other learning outcome.
        </p>
        <p>
          Audio playback, progress tracking and review reminders may be delayed, interrupted, reset
          or unavailable because of device settings, operating-system restrictions, connectivity,
          account status or other circumstances outside our reasonable control.
        </p>
      </section>

      <section>
        <h2>3. Your right to use the App</h2>
        <p>
          We grant you a personal, limited, non-exclusive, non-transferable licence to use the App
          on Apple devices that you own or control, subject to these Terms and Apple&apos;s applicable
          usage rules.
        </p>
        <p>You must not:</p>
        <ul>
          <li>use the App unlawfully or to infringe another person&apos;s rights;</li>
          <li>copy, sell, sublicense, distribute or commercially exploit the App or its content;</li>
          <li>
            use bots, scraping tools or other automated means to extract lessons, audio, vocabulary
            or other content;
          </li>
          <li>
            attempt to gain unauthorised access to an account, database or other part of the
            service;
          </li>
          <li>
            introduce malware, overload the service, bypass technical limits or interfere with the
            App&apos;s operation or security; or
          </li>
          <li>
            reverse engineer, decompile or modify the App, except where applicable law expressly
            allows it.
          </li>
        </ul>
        <p>
          The App is licensed, not sold. We and our licensors retain all rights in the App,
          including its software, design, branding, curriculum, lesson text, recordings,
          illustrations and other original content.
        </p>
        <p>
          Your use of the App is also subject to{" "}
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">
            Apple&apos;s Standard Licensed Application End User License Agreement
          </a>
          . If there is a conflict concerning your App Store licence, Apple&apos;s terms apply.
        </p>
      </section>

      <section>
        <h2>4. Accounts</h2>
        <p>
          If you create an account, you must provide accurate information, keep your sign-in
          credentials secure and tell us promptly if you believe somebody has accessed your account
          without permission.
        </p>
        <p>
          You are responsible for activity carried out through your account unless it results from
          our failure to use reasonable care. You must not create an account for someone else
          without their permission, impersonate another person or use the App to commit fraud or
          abuse.
        </p>
        <p>
          We may require you to verify your email address or sign in again to protect your account.
          We may restrict or suspend access where reasonably necessary to address a security risk,
          comply with law or investigate serious misuse.
        </p>
        <p>
          Deleting the App from your device does not delete an account or study information already
          synced to it. You can request account deletion as described in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>

      <section>
        <h2>5. Your study data and feedback</h2>
        <p>
          You retain any rights you have in information you submit to the App. You give us
          permission to host, copy, transmit and otherwise process that information only as needed
          to operate, secure and improve the App and provide the features you request. Our Privacy
          Policy explains this processing in more detail.
        </p>
        <p>
          You are responsible for ensuring that anything you submit is lawful and that you have the
          right to submit it. Do not submit sensitive personal information or material belonging to
          somebody else unless the App expressly asks for it and you have permission to do so.
        </p>
        <p>
          If you voluntarily send us suggestions or feedback, we may use them to improve the App
          without payment or obligation to you. We will not identify you publicly as the source
          without your permission.
        </p>
      </section>

      <section>
        <h2>6. Privacy</h2>
        <p>
          Our <Link href="/privacy">Privacy Policy</Link> explains how information is handled when
          you use the App, including local storage, optional account sync through Supabase and
          optional analytics through PostHog.
        </p>
      </section>

      <section>
        <h2>7. Third-party and platform services</h2>
        <p>
          The App relies on services provided by Apple, Supabase and PostHog. Their services may be
          interrupted, changed or discontinued, and their own terms and policies may apply to your
          use of their services.
        </p>
        <p>
          We are responsible for choosing and integrating these providers with reasonable care, but
          we do not control their independent services. Nothing in this section limits any
          responsibility that cannot lawfully be excluded.
        </p>
      </section>

      <section>
        <h2>8. Availability and changes to the App</h2>
        <p>
          We may maintain, update or change the App to improve lessons or features, address security
          or legal requirements, correct errors, or adapt to changes in devices and third-party
          services.
        </p>
        <p>
          We do not promise that every feature or lesson will always be available, uninterrupted or
          error-free. Course structure, lesson content and review methods may change as the App
          develops.
        </p>
        <p>
          We may suspend all or part of the App where reasonably necessary for security,
          maintenance, legal compliance or serious misuse. Where reasonably possible, we will
          provide notice of a material change that significantly reduces the App&apos;s functionality.
        </p>
      </section>

      <section>
        <h2>9. Responsibility when things go wrong</h2>
        <p>
          Nothing in these Terms excludes or limits liability where doing so would be unlawful. This
          includes liability for death or personal injury caused by negligence, fraud, and your
          mandatory rights under consumer law.
        </p>
        <p>
          We are responsible for losses that are a foreseeable result of our breach of these Terms
          or our failure to use reasonable care and skill. We are not responsible for losses that
          are not foreseeable, that are caused by circumstances outside our reasonable control, or
          that result from using the App contrary to the educational warnings in section 2.
        </p>
        <p>
          The App is provided for personal and educational use. We are not responsible for business
          losses, loss of profits or other losses arising from business or professional use of the
          App, except where applicable law does not allow that responsibility to be excluded.
        </p>
        <p>
          Although we take reasonable care to protect synced study information, you should not treat
          the App as the only copy of information that is important to you. We are not responsible
          for a loss of study progress caused by your device, loss of account access or a third-party
          service failure outside our reasonable control.
        </p>
        <p>Your statutory rights are not affected.</p>
      </section>

      <section>
        <h2>10. Ending your use</h2>
        <p>
          You may stop using and delete the App at any time. If you have an account, you may also
          request its deletion. Account deletion is separate from deleting the App and may not
          remove information that we must retain for legal or security reasons, as explained in our
          Privacy Policy.
        </p>
        <p>
          Your licence to use the App ends if you seriously or repeatedly breach these Terms. We may
          suspend or close an associated account. Where appropriate, we will give you reasonable
          notice and an opportunity to correct the breach.
        </p>
        <p>
          Sections that by their nature should continue after these Terms end—including those
          concerning ownership, responsibility and governing law—will remain in effect.
        </p>
      </section>

      <section>
        <h2>11. Changes to these Terms</h2>
        <p>
          We may update these Terms for legal, security or operational reasons, or when the App&apos;s
          services change.
        </p>
        <p>
          We will give reasonable notice through the App or another appropriate method if a change
          materially affects your rights. If you do not agree to the updated Terms, you should stop
          using the App before they take effect and delete any account you no longer want.
        </p>
        <p>
          The effective date at the top of these Terms shows when they were last updated.
        </p>
      </section>

      <section>
        <h2>12. Governing law</h2>
        <p>These Terms are governed by the laws of England and Wales.</p>
        <p>
          If you are a consumer living elsewhere, you retain any mandatory protections provided by
          the laws of your country of residence and may be entitled to bring proceedings in your
          local courts.
        </p>
      </section>

      <section>
        <h2>13. Contact us</h2>
        <p>For questions about these Terms, contact:</p>
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
