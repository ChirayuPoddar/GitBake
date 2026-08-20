"use client";

import React from "react";
import Image from "next/image";

export default function Community() {
  return (
    <section id="community" className="border-y border-border bg-card">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-4">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary">
            06 / COMMUNITY
          </p>
          <h2 className="mt-5 font-heading text-5xl font-bold leading-[0.94]">
            BUILT BY BAKERS.<br />
            IMPROVED BY EVERYONE.
          </h2>
          <p className="mt-6 text-sm leading-6 text-muted-foreground">
            No gatekeeping. Just generous cooks, better versions and more reasons to gather.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:col-span-8">
          <article className="border-t border-border pt-4">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full shrink-0">
                <Image
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Maya, GitBake contributor"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold">Maya</h3>
                <p className="text-[10px] font-bold tracking-[0.14em] text-primary">v2.1</p>
              </div>
            </div>
            <p className="mt-5 text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
              FORKED CLASSIC CROISSANT
            </p>
            <p className="mt-1 text-sm">Added pistachio and orange blossom.</p>
            <p className="mt-5 font-heading text-lg italic">
              “The best recipes should travel.”
            </p>
          </article>

          <article className="border-t border-border pt-4">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full shrink-0">
                <Image
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Arlo, GitBake contributor"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold">Arlo</h3>
                <p className="text-[10px] font-bold tracking-[0.14em] text-primary">v1.6</p>
              </div>
            </div>
            <p className="mt-5 text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
              FORKED COUNTRY LOAF
            </p>
            <p className="mt-1 text-sm">Committed a longer cold proof.</p>
            <p className="mt-5 font-heading text-lg italic">
              “Patience was the missing ingredient.”
            </p>
          </article>

          <article className="border-t border-border pt-4 sm:col-span-2">
            <p className="text-[10px] font-bold tracking-[0.16em] text-primary uppercase">
              CONTRIBUTOR NOTE / 48 BAKERS THIS MONTH
            </p>
            <p className="mt-3 max-w-xl font-heading text-2xl leading-snug">
              Every loaf carries the hands that made it—and the hands that helped it become better.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
