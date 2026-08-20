"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pb-14 pt-10 lg:px-10 lg:pb-24 lg:pt-16">
      <div className="mb-8 flex items-center justify-between border-y border-border py-3 text-[10px] font-semibold tracking-[0.16em] text-muted-foreground">
        <span>EST. 2026 / OPEN-SOURCE PATISSERIE</span>
        <span className="hidden sm:inline">PARIS · EVERYWHERE</span>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.2em] text-primary">
              THE DAILY REPOSITORY
            </p>
            <h1 className="font-heading text-6xl font-bold leading-[0.84] tracking-tight sm:text-7xl lg:text-8xl">
              BAKE.<br />
              FORK.<br />
              <span className="text-primary">SHARE.</span>
            </h1>
            <p className="mt-8 max-w-sm text-base leading-7 text-muted-foreground">
              An open-source bakery for recipes worth making, remixing, and passing on.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#bake"
              className="inline-flex min-h-11 items-center bg-foreground px-5 text-[11px] font-bold tracking-[0.14em] text-background transition-opacity hover:opacity-90"
            >
              EXPLORE THE BAKE
            </a>
            <a
              href="#fork"
              className="inline-flex min-h-11 items-center border border-foreground px-5 text-[11px] font-bold tracking-[0.14em] transition-colors hover:bg-foreground hover:text-background"
            >
              FORK A RECIPE
            </a>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="relative h-[470px] w-full overflow-hidden sm:h-[560px]">
            <Image
              src="https://uxmagic.blob.core.windows.net/public/agent-images/gitbake-hero-1787153694751-zqxctu1tv3i.png"
              alt="Sourdough and croissants on a flour-dusted bakery worktable"
              fill
              priority
              className="object-cover object-[72%_78%]"
            />
          </div>

          <div className="absolute bottom-0 right-0 bg-background p-4 sm:p-6 shadow-sm">
            <p className="text-[10px] font-bold tracking-[0.16em] text-muted-foreground">
              RECIPE #284 / MAIN BRANCH
            </p>
            <p className="mt-1 font-heading text-xl">Sourdough, version 04.2</p>
          </div>

          <div className="absolute right-4 top-4 border border-border bg-card px-3 py-2 text-[9px] font-bold tracking-[0.14em] sm:right-6 sm:top-6 shadow-sm">
            12 COMMITS · 6 FORKS<br />
            <span className="text-primary">● FRESH COMMIT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
