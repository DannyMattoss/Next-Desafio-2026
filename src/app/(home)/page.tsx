'use client';

import Carrossel from "@/src/components/home/carrossel";
import HeroSection from "@/src/components/home/herosection";
import MVV from "@/src/components/home/mvv";

export default function Home() {
  return (
     <main className="bg-bege">
        <HeroSection/>
        <Carrossel/>
        <MVV/>
     </main>
  );
}
