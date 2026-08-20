"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#top" className="font-heading text-xl font-bold tracking-tight">
          GITBAKE
        </a>
        <nav className="hidden items-center gap-7 text-[11px] font-semibold tracking-[0.16em] lg:flex">
          <a href="#idea" className="transition-colors hover:text-primary">
            THE IDEA
          </a>
          <a href="#bake" className="transition-colors hover:text-primary">
            THE BAKE
          </a>
          <a href="#repository" className="transition-colors hover:text-primary">
            THE REPOSITORY
          </a>
          <a href="#community" className="transition-colors hover:text-primary">
            COMMUNITY
          </a>
        </nav>
        <a
          href="#fork"
          className="inline-flex min-h-11 items-center bg-primary px-4 text-[11px] font-bold tracking-[0.14em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          FORK A RECIPE <ArrowUpRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
