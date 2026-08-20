"use client";

import React from "react";

export default function TheIdea() {
  const gitConcepts = [
    { label: "REPOSITORY", title: "Recipe book" },
    { label: "FORK", title: "Your version" },
    { label: "COMMIT", title: "New improvement" },
    { label: "MERGE", title: "New flavor" },
    { label: "OPEN SOURCE", title: "Shared knowledge" },
  ];

  return (
    <section id="idea" className="border-y border-border bg-card">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-[10px] font-bold tracking-[0.2em] text-primary">
            01 / THE IDEA
          </p>
          <h2 className="mt-5 font-heading text-5xl font-bold leading-[0.95] sm:text-6xl">
            WHAT IF RECIPES<br />
            WORKED LIKE CODE?
          </h2>
        </div>
        <div className="lg:col-span-7">
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            Recipes are living things. They change with every baker, every kitchen, every experiment. GitBake gives every good bake a place to keep becoming.
          </p>
          <div className="mt-12 grid grid-cols-1 border-t border-border sm:grid-cols-2">
            {gitConcepts.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isLast = idx === gitConcepts.length - 1;
              return (
                <div
                  key={item.label}
                  className={`border-b border-border py-5 ${
                    isEven ? "sm:pr-8" : "sm:pl-8"
                  } ${isLast && isEven ? "border-b-0" : ""}`}
                >
                  <p className="text-[10px] font-bold tracking-[0.16em] text-primary">
                    {item.label}
                  </p>
                  <p className="mt-1 font-heading text-2xl">{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
