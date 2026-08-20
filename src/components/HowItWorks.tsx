"use client";

import React from "react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Bake",
      desc: "Start with a recipe that deserves another morning.",
      borderClass: "border-b border-border py-7 md:border-b-0 md:border-r md:pr-8",
    },
    {
      num: "02",
      title: "Fork",
      desc: "Change it. Experiment. Make it unmistakably yours.",
      borderClass: "border-b border-border py-7 md:border-b-0 md:border-r md:px-8",
    },
    {
      num: "03",
      title: "Share",
      desc: "Pass the improved version forward. That's the whole point.",
      borderClass: "py-7 md:pl-8",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
      <p className="text-[10px] font-bold tracking-[0.2em] text-primary">
        05 / HOW IT WORKS
      </p>
      <h2 className="mt-4 max-w-3xl font-heading text-5xl font-bold leading-[0.95] sm:text-6xl">
        THREE MOVES.<br />
        ENDLESS NEW RECIPES.
      </h2>
      <div className="mt-12 grid grid-cols-1 border-t border-border md:grid-cols-3">
        {steps.map((step) => (
          <article key={step.num} className={step.borderClass}>
            <p className="font-heading text-5xl text-primary">{step.num}</p>
            <h3 className="mt-5 font-heading text-3xl font-bold">{step.title}</h3>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
              {step.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
