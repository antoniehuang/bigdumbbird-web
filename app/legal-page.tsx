import Image from "next/image";
import Link from "next/link";

type LegalSection = {
  heading: string;
  body: string;
};

type LegalPageProps = {
  title: string;
  titleZh: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalPage({ title, titleZh, intro, sections }: LegalPageProps) {
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
        <p className="legal-eyebrow">Temporary legal page</p>
        <h1>
          <span lang="zh-Hant">{titleZh}</span>
          <span>{title}</span>
        </h1>

        <aside className="legal-placeholder" aria-label="Placeholder notice">
          <strong>Placeholder only.</strong> This is not the final policy and does not state the
          app&apos;s complete legal terms. Final language will replace this page before launch.
        </aside>

        <p className="legal-intro">{intro}</p>

        <div className="legal-sections">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>

        <footer className="legal-document-footer">
          <p>Draft status: awaiting final legal copy</p>
          <nav aria-label="Legal pages">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </nav>
        </footer>
      </article>
    </main>
  );
}
