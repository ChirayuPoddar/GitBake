import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TheIdea from "@/components/TheIdea";
import TheBake from "@/components/TheBake";
import TheRepository from "@/components/TheRepository";
import ForkRecipeBuilder from "@/components/ForkRecipeBuilder";
import HowItWorks from "@/components/HowItWorks";
import Community from "@/components/Community";
import WhyWeExist from "@/components/WhyWeExist";
import CtaBanner from "@/components/CtaBanner";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col relative overflow-hidden">
      <Header />
      <main id="top" className="flex flex-col">
        <Hero />
        <TheIdea />
        <TheBake />
        <TheRepository />
        <ForkRecipeBuilder />
        <HowItWorks />
        <Community />
        <WhyWeExist />
        <CtaBanner />
      </main>
    </div>
  );
}
