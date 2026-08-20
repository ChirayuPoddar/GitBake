"use client";

import React, { useState } from "react";
import { GitCommit, GitFork, X, Check, Clock, Droplets } from "lucide-react";

interface RecipeSheet {
  id: string;
  sheetNo: string;
  name: string;
  version: string;
  commits: number;
  forks: number;
  hydration: string;
  proofingTime: string;
  ingredients: string[];
  recentCommits: { sha: string; author: string; msg: string }[];
  styleClass: string;
}

const recipes: RecipeSheet[] = [
  {
    id: "sourdough",
    sheetNo: "RECIPE SHEET / 001",
    name: "Sourdough",
    version: "v2.4",
    commits: 18,
    forks: 6,
    hydration: "78%",
    proofingTime: "18h cold proof",
    ingredients: [
      "500g Bread Flour (13% protein)",
      "390g Water (78% hydration)",
      "100g Active Starter (100% hydration)",
      "10g Fine Sea Salt (2%)",
    ],
    recentCommits: [
      { sha: "b8a1c9", author: "Maya", msg: "Increased autolyse to 45 mins for better gluten structure" },
      { sha: "f4d2e1", author: "Arlo", msg: "Adjusted bulk fermentation ambient temp to 24°C" },
      { sha: "c79a32", author: "Claire", msg: "Initial recipe commit" },
    ],
    styleClass: "rotate-[-1deg] border border-border bg-card p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1",
  },
  {
    id: "croissant",
    sheetNo: "RECIPE SHEET / 014",
    name: "Chocolate Croissant",
    version: "v1.8",
    commits: 11,
    forks: 4,
    hydration: "54%",
    proofingTime: "12h dough chill + 2.5h proof",
    ingredients: [
      "500g T55 Flour",
      "270g Whole Milk",
      "250g Tournage Butter (84% fat)",
      "60g Sugar",
      "10g Salt",
      "10g Instant Yeast",
      "Valrhona 44% Chocolate Batons",
    ],
    recentCommits: [
      { sha: "e90d1f", author: "Jean", msg: "Switched to 3-3-3 lamination fold fold technique" },
      { sha: "a3b2c1", author: "Maya", msg: "Added orange blossom water to dough baseline" },
    ],
    styleClass: "translate-y-0 border border-border bg-background p-5 shadow-md sm:translate-y-8 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1",
  },
  {
    id: "babka",
    sheetNo: "RECIPE SHEET / 032",
    name: "Pistachio Babka",
    version: "v3.1",
    commits: 27,
    forks: 9,
    hydration: "60%",
    proofingTime: "14h cold proof",
    ingredients: [
      "500g Enriched Brioche Dough",
      "200g Sicilian Pistachio Paste",
      "100g Dark Chocolate Chunks (70%)",
      "50g Cardamom Simple Syrup",
      "Flaky Salt & Roasted Pistachio Crust",
    ],
    recentCommits: [
      { sha: "7c8b9a", author: "Kenji", msg: "Added cardamom syrup soak right out of the oven" },
      { sha: "d4e5f6", author: "Elena", msg: "Twisted braid twice for tighter marble effect" },
    ],
    styleClass: "rotate-[1deg] border border-border bg-card p-5 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1",
  },
];

export default function TheRepository() {
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeSheet | null>(null);

  return (
    <section id="repository" className="border-y border-border bg-muted relative">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
        <p className="text-[10px] font-bold tracking-[0.2em] text-primary">
          03 / THE REPOSITORY
        </p>
        <div className="mt-4 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <h2 className="font-heading text-5xl font-bold leading-[0.92] sm:text-6xl lg:col-span-5">
            EVERY RECIPE<br />
            STARTS SOMEWHERE.
          </h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:col-span-7">
            {recipes.map((recipe) => (
              <article
                key={recipe.id}
                onClick={() => setSelectedRecipe(recipe)}
                className={recipe.styleClass}
              >
                <div className="flex justify-between items-center">
                  <p className="text-[10px] font-bold tracking-[0.16em] text-primary">
                    {recipe.sheetNo}
                  </p>
                  <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 font-mono rounded">
                    Inspect
                  </span>
                </div>
                <h3 className="mt-9 font-heading text-2xl font-bold whitespace-pre-line">
                  {recipe.name}
                </h3>
                <div className="mt-10 border-t border-border pt-3 text-[10px] font-bold leading-6 tracking-[0.12em] text-muted-foreground">
                  VERSION {recipe.version}<br />
                  {recipe.commits} COMMITS<br />
                  {recipe.forks} FORKS
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Modal Sheet Viewer */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/60 backdrop-blur-xs p-4">
          <div className="relative w-full max-w-2xl bg-card border border-border p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedRecipe(null)}
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground p-1"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.18em] text-primary">
              <span>{selectedRecipe.sheetNo}</span>
              <span>•</span>
              <span className="font-mono bg-accent/40 text-foreground px-2 py-0.5 rounded">
                BRANCH: main
              </span>
            </div>

            <h3 className="mt-2 font-heading text-4xl font-bold">
              {selectedRecipe.name.replace("\n", " ")}
            </h3>
            <p className="text-xs font-mono text-muted-foreground mt-1">
              Version {selectedRecipe.version} · {selectedRecipe.commits} Commits · {selectedRecipe.forks} Active Forks
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-4">
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold tracking-wider">
                  Hydration: {selectedRecipe.hydration}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-xs font-bold tracking-wider">
                  Proofing: {selectedRecipe.proofingTime}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-[11px] font-bold tracking-[0.16em] text-primary uppercase mb-3">
                Formula Ingredients
              </h4>
              <ul className="space-y-2">
                {selectedRecipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-foreground gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <h4 className="text-[11px] font-bold tracking-[0.16em] text-primary uppercase mb-3 flex items-center gap-2">
                <GitCommit className="h-4 w-4" /> Git Commit Log
              </h4>
              <div className="space-y-2 font-mono text-xs bg-background p-4 border border-border rounded">
                {selectedRecipe.recentCommits.map((c) => (
                  <div key={c.sha} className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border/50 pb-2 last:border-0 last:pb-0 gap-1">
                    <div>
                      <span className="text-primary font-bold">{c.sha}</span>{" "}
                      <span className="text-foreground">{c.msg}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">@{c.author}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex justify-end gap-3">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="px-4 py-2 border border-foreground text-[11px] font-bold tracking-[0.14em]"
              >
                CLOSE
              </button>
              <a
                href="#fork"
                onClick={() => setSelectedRecipe(null)}
                className="inline-flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground text-[11px] font-bold tracking-[0.14em]"
              >
                <GitFork className="h-4 w-4" /> FORK THIS RECIPE
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
