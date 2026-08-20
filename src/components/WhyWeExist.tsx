"use client";

import React from "react";
import Image from "next/image";

export default function WhyWeExist() {
  return (
    <section className="mx-auto grid w-full max-w-7xl grid-cols-1 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-28">
      <div className="lg:col-span-5">
        <p className="text-[10px] font-bold tracking-[0.2em] text-primary">
          07 / WHY WE EXIST
        </p>
        <h2 className="mt-5 font-heading text-5xl font-bold leading-[0.9] sm:text-6xl">
          GOOD RECIPES<br />
          SHOULDN'T END<br />
          WITH ONE PERSON.
        </h2>
        <p className="mt-7 max-w-md leading-7 text-muted-foreground">
          The world's best recipes were never meant to be locked away. They become richer when someone changes a spice, teaches a neighbor, or brings a new version to the table.
        </p>
      </div>

      <div className="mt-10 lg:col-span-6 lg:col-start-7 lg:mt-0">
        <div className="relative h-[530px] w-full overflow-hidden">
          <Image
            src="https://uxmagic.blob.core.windows.net/public/agent-images/gitbake-community-1787153748529-bd8p65d0mgu.png"
            alt="Two bakers sharing a handwritten recipe sheet in a warm bakery"
            fill
            className="object-cover object-[0%_0%]"
          />
        </div>
        <p className="mt-3 text-[10px] font-bold tracking-[0.14em] text-muted-foreground uppercase">
          FIELD NOTE / SHARED AT THE TABLE
        </p>
      </div>
    </section>
  );
}
