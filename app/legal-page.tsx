import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

type LegalSection = {
  heading: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  titleZh: string;
  intro?: ReactNode;
  sections?: LegalSection[];
  children?: ReactNode;
  effectiveDate?: string;
  isPlaceholder?: boolean;
};

export function LegalPage({
  title,
  titleZh,
  intro,
  sections,
  children,
  effectiveDate,
  isPlaceholder = true,
}: LegalPageProps) {
  return (
    <main className="legal-shell">
      <header className="legal-header">
        <Link className="legal-brand" href="/" aria-label="Back to 大笨鳥華語 home">
          <Image src="/logo.png" alt="" width={72} height={41} />
          <span>
            <strong lang="zh-Hant">大笨鳥華語</strong>
            <small>Big Dumb Bird Mandarin</small>
          </span>
        </Link>
        <Link className="legal-back" href="/">
          <span aria-hidden="true">←</span> Back home
        </Link>
      </header>

      <article className="legal-document">
        <p className="legal-eyebrow">{isPlaceholder ? "Temporary legal page" : "Legal"}</p>
        <h1>
          <span lang="zh-Hant">{titleZh}</span>
          <span>{title}</span>
        </h1>

        {effectiveDate ? (
          <p className="legal-effective-date">
            <strong>Effective date:</strong> {effectiveDate}
          </p>
        ) : null}

        {isPlaceholder ? (
          <aside className="legal-placeholder" aria-label="Placeholder notice">
            <strong>Placeholder only.</strong> This is not the final policy and does not state the
            app&apos;s complete legal terms. Final language will replace this page before launch.
          </aside>
        ) : null}

        {intro ? <p className="legal-intro">{intro}</p> : null}

        {children ? <div className="legal-prose">{children}</div> : null}

        {sections ? (
          <div className="legal-sections">
            {sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
        ) : null}

        <footer className="legal-document-footer">
          <p>
            {isPlaceholder
              ? "Draft status: awaiting final legal copy"
              : `Effective ${effectiveDate ?? "as published"}`}
          </p>
          <nav aria-label="Legal pages">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </nav>
        </footer>
      </article>
    </main>
  );
}
