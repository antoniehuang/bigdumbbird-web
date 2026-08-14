"use client";

import Image from "next/image";
import { useState } from "react";

export function HeroReveal() {
  const [run, setRun] = useState(0);

  return (
    <main className="hero-shell">
      <div className="hero-sequence" key={run}>
        <div className="hero-background" aria-hidden="true">
          <Image
            src="/hero/taiwan-park-watercolor.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>

        <div className="hero-light" aria-hidden="true" />
        <div className="hero-mist hero-mist-one" aria-hidden="true" />
        <div className="hero-mist hero-mist-two" aria-hidden="true" />

        <header className="site-header">
          <div className="brand-lockup" aria-label="大笨鳥華語 Big Dumb Bird Mandarin">
            <span className="brand-mark" aria-hidden="true">
              <Image src="/logo.png" alt="" width={72} height={41} priority />
            </span>
            <span className="brand-name">
              <span lang="zh-Hant">大笨鳥華語</span>
              <span>Big Dumb Bird Mandarin</span>
            </span>
          </div>

          <p className="status-pill">
            <span lang="zh-Hant">即將登場</span>
            <span aria-hidden="true">·</span>
            <span>Coming soon</span>
          </p>
        </header>

        <div className="bird-stage">
          <div className="bird-idle">
            <Image
              src="/hero/night-heron.png"
              alt="黑冠麻鷺，一隻在台灣公園裡常見的鳥"
              fill
              priority
              sizes="(max-width: 700px) 82vw, 49vw"
            />
          </div>
          <span className="bird-shadow" aria-hidden="true" />
        </div>

        <section className="hero-copy" aria-labelledby="hero-title">
          <p className="hero-kicker" lang="zh-Hant">
            從台灣的日常開始
          </p>
          <h1 id="hero-title">
            <span lang="zh-Hant">大笨鳥華語</span>
            <span>Big Dumb Bird Mandarin</span>
          </h1>
          <p className="hero-description">
            <span lang="zh-Hant">跟著大笨鳥，從台灣的日常開始學華語。</span>
            <span>Learn Mandarin through the everyday language and character of Taiwan.</span>
          </p>
        </section>

        <div className="foliage-layer foliage-left" aria-hidden="true">
          <Image src="/hero/foliage.png" alt="" fill priority sizes="72vw" />
        </div>
        <div className="foliage-layer foliage-right" aria-hidden="true">
          <Image src="/hero/foliage.png" alt="" fill priority sizes="72vw" />
        </div>
        <div className="opening-shade" aria-hidden="true" />
      </div>

      <button
        className="replay-button"
        type="button"
        onClick={() => setRun((value) => value + 1)}
        aria-label="再看一次開場動畫 Replay opening animation"
      >
        <span lang="zh-Hant">再看一次</span>
        <span className="replay-divider" aria-hidden="true" />
        <span>Replay</span>
        <svg aria-hidden="true" viewBox="0 0 24 24">
          <path d="M20 11a8 8 0 1 0-2.34 5.66M20 5v6h-6" />
        </svg>
      </button>

      <p className="species-label">
        <span lang="zh-Hant">黑冠麻鷺</span>
        <span>Malayan Night-Heron</span>
      </p>
    </main>
  );
}
