"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <>
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start px-5 py-16 lg:px-10 lg:py-24">
          <p className="text-[10px] font-bold tracking-[0.2em]">
            THE NEXT VERSION IS WAITING
          </p>
          <h2 className="mt-6 max-w-4xl font-heading text-5xl font-bold leading-[0.9] sm:text-7xl">
            READY TO FORK<br />
            SOMETHING DELICIOUS?
          </h2>
          <p className="mt-7 max-w-md text-base leading-7">
            Start with a recipe. Make it yours. Share what you create.
          </p>
          <a
            href="#fork"
            className="mt-9 inline-flex min-h-11 items-center bg-background px-5 text-[11px] font-bold tracking-[0.15em] text-foreground transition-opacity hover:opacity-90"
          >
            START BAKING <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-end sm:justify-between lg:px-10">
          <div>
            <p className="font-heading text-3xl font-bold">GITBAKE</p>
            <p className="mt-1 text-sm text-muted-foreground">Bake. Fork. Share.</p>
          </div>
          <p className="text-[10px] font-bold tracking-[0.13em] text-muted-foreground uppercase">
            © 2026 GITBAKE / A FICTIONAL OPEN-SOURCE BAKERY
          </p>
        </div>
      </footer>
    </>
  );
}
