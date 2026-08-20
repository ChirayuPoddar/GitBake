"use client";

import React, { useState } from "react";
import { GitFork, Check, Sparkles } from "lucide-react";

const BASE_OPTIONS = ["Sourdough", "Croissant", "Babka", "Brioche"];
const FLAVOR_OPTIONS = ["Dark Chocolate", "Citrus Zest", "Cinnamon Spice", "Vanilla Bean"];
const FILLING_OPTIONS = ["Pistachio", "Almond Paste", "Hazelnut Praline", "Berry Jam"];
const TOPPING_OPTIONS = ["Sea Salt", "Sesame Seeds", "Powdered Sugar", "Caramel Drizzle"];

interface CustomFork {
  id: string;
  sha: string;
  name: string;
  base: string;
  flavor: string;
  filling: string;
  topping: string;
  timestamp: string;
}

export default function ForkRecipeBuilder() {
  const [base, setBase] = useState("Sourdough");
  const [flavor, setFlavor] = useState("Dark Chocolate");
  const [filling, setFilling] = useState("Pistachio");
  const [topping, setTopping] = useState("Sea Salt");

  const [forkList, setForkList] = useState<CustomFork[]>([]);
  const [lastCommitted, setLastCommitted] = useState<CustomFork | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  const forkTitle = `${filling} ${flavor.replace("Dark ", "")} ${base}`;

  const handleCreateFork = () => {
    const sha = Math.random().toString(36).substring(2, 8);
    const newFork: CustomFork = {
      id: Date.now().toString(),
      sha,
      name: forkTitle,
      base,
      flavor,
      filling,
      topping,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setForkList((prev) => [newFork, ...prev]);
    setLastCommitted(newFork);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 4000);
  };

  return (
    <section id="fork" className="bg-foreground text-background relative">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-5 py-16 lg:grid-cols-12 lg:px-10 lg:py-28">
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[0.2em] text-secondary">
              04 / FORK A RECIPE
            </p>
            <h2 className="mt-5 font-heading text-5xl font-bold leading-[0.92] sm:text-6xl">
              DON'T JUST FOLLOW<br />
              THE RECIPE.<br />
              <span className="text-secondary">FORK IT.</span>
            </h2>
            <p className="mt-7 max-w-md leading-7 text-background/70">
              Pick your ingredients. Keep the good parts. Make the next version yours.
            </p>
          </div>

          {/* User's Created Forks List */}
          {forkList.length > 0 && (
            <div className="mt-10 border-t border-background/20 pt-6">
              <h4 className="text-[10px] font-bold tracking-[0.18em] text-secondary uppercase mb-3 flex items-center gap-2">
                <GitFork className="h-4 w-4" /> YOUR CREATED FORKS ({forkList.length})
              </h4>
              <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                {forkList.map((fork) => (
                  <div
                    key={fork.id}
                    className="border border-background/20 bg-background/5 p-3 rounded text-xs flex justify-between items-center"
                  >
                    <div>
                      <p className="font-heading font-bold text-sm text-background">{fork.name}</p>
                      <p className="text-[10px] text-background/60 font-mono">
                        commit <span className="text-secondary font-bold">{fork.sha}</span> · Base: {fork.base} + {fork.filling}
                      </p>
                    </div>
                    <span className="text-[9px] bg-secondary/20 text-secondary px-2 py-1 font-bold tracking-widest rounded">
                      MERGED
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Interactive Customizer Card */}
        <div className="border border-background/30 bg-card p-6 text-card-foreground lg:col-span-6 lg:p-8 relative">
          {showNotification && (
            <div className="absolute top-3 right-3 left-3 z-10 bg-primary text-primary-foreground p-3 text-xs font-bold tracking-wider flex items-center justify-between shadow-lg animate-bounce">
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> NEW FORK COMMITTED: #{lastCommitted?.sha}!
              </span>
              <Check className="h-4 w-4" />
            </div>
          )}

          <div className="flex items-center justify-between border-b border-border pb-4 text-[10px] font-bold tracking-[0.16em]">
            <span>YOUR FORK / DRAFT {lastCommitted ? `#${lastCommitted.sha}` : "01"}</span>
            {lastCommitted && lastCommitted.name === forkTitle ? (
              <span className="text-emerald-600 font-bold">● SAVED TO BRANCH</span>
            ) : (
              <span className="text-primary font-bold">● UNSAVED CHANGES</span>
            )}
          </div>

          <h3 className="mt-7 font-heading text-3xl font-bold min-h-[4rem] transition-all">
            {forkTitle}
          </h3>

          <div className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-5">
            <div>
              <p className="text-[9px] font-bold tracking-[0.16em] text-muted-foreground mb-1">BASE</p>
              <select
                value={base}
                onChange={(e) => setBase(e.target.value)}
                className="w-full bg-background border border-border px-2 py-1.5 text-xs font-semibold text-foreground focus:outline-hidden focus:ring-1 focus:ring-primary"
              >
                {BASE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.16em] text-muted-foreground mb-1">FLAVOR</p>
              <select
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
                className="w-full bg-background border border-border px-2 py-1.5 text-xs font-semibold text-foreground focus:outline-hidden focus:ring-1 focus:ring-primary"
              >
                {FLAVOR_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.16em] text-muted-foreground mb-1">FILLING</p>
              <select
                value={filling}
                onChange={(e) => setFilling(e.target.value)}
                className="w-full bg-background border border-border px-2 py-1.5 text-xs font-semibold text-foreground focus:outline-hidden focus:ring-1 focus:ring-primary"
              >
                {FILLING_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div>
              <p className="text-[9px] font-bold tracking-[0.16em] text-muted-foreground mb-1">TOPPING</p>
              <select
                value={topping}
                onChange={(e) => setTopping(e.target.value)}
                className="w-full bg-background border border-border px-2 py-1.5 text-xs font-semibold text-foreground focus:outline-hidden focus:ring-1 focus:ring-primary"
              >
                {TOPPING_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={handleCreateFork}
            className="mt-8 flex min-h-11 w-full items-center justify-center bg-primary px-5 text-[11px] font-bold tracking-[0.15em] text-primary-foreground transition-opacity hover:opacity-90 active:scale-[0.99]"
          >
            CREATE YOUR FORK <GitFork className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
