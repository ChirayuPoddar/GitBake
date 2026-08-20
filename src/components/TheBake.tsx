"use client";

import React from "react";
import Image from "next/image";

export default function TheBake() {
  return (
    <section id="bake" className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-10 lg:py-28">
      <div className="flex flex-col justify-between gap-8 border-b border-border pb-8 sm:flex-row">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary">
            02 / THE BAKE
          </p>
          <h2 className="mt-4 font-heading text-5xl font-bold leading-[0.95] sm:text-6xl">
            THREE RECIPES,<br />
            EACH WITH ROOM TO EVOLVE.
          </h2>
        </div>
        <p className="max-w-xs self-end text-sm leading-6 text-muted-foreground">
          A living collection of recipes made to leave the kitchen they started in.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-12">
        <article className="md:col-span-7">
          <div className="relative h-80 w-full overflow-hidden sm:h-[430px]">
            <Image
              src="https://uxmagic.blob.core.windows.net/public/agent-images/gitbake-pastries-1787153721744-ge8e8b3vg2o.png"
              alt="Chocolate croissant, pistachio babka and sourdough arranged on a bakery table"
              fill
              className="object-cover object-[25%_88%]"
            />
          </div>
          <div className="mt-4 flex justify-between border-t border-border pt-3">
            <div>
              <p className="text-[10px] font-bold tracking-[0.16em] text-primary">
                01 / THE MAIN BRANCH
              </p>
              <h3 className="mt-2 font-heading text-3xl font-bold">Classic Sourdough</h3>
            </div>
            <p className="text-right text-[10px] font-bold leading-5 tracking-[0.14em] text-muted-foreground">
              VERSION 04<br />
              12 COMMITS
            </p>
          </div>
        </article>

        <article className="flex flex-col justify-end border-l border-border pl-0 md:col-span-5 md:pl-8">
          <div className="border-y border-border py-7">
            <p className="text-[10px] font-bold tracking-[0.16em] text-primary">
              02 / THE FORK
            </p>
            <h3 className="mt-3 font-heading text-4xl font-bold leading-none">
              Ready to<br />
              remix.
            </h3>
            <p className="mt-5 max-w-xs text-sm leading-6 text-muted-foreground">
              A laminated dough that happily takes on citrus, spice or your midnight idea.
            </p>
            <p className="mt-8 text-[10px] font-bold tracking-[0.14em]">
              VERSION 02 · 8 FORKS
            </p>
          </div>
          <div className="pt-7">
            <p className="text-[10px] font-bold tracking-[0.16em] text-primary">
              03 / THE MERGE
            </p>
            <h3 className="mt-3 font-heading text-3xl font-bold">Unexpected pairing</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Three contributors. One very good question: why not?
            </p>
            <p className="mt-4 text-[10px] font-bold tracking-[0.14em]">
              3 CONTRIBUTORS
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
