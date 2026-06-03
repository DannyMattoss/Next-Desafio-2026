'use client';

import Carrossel from "@/src/components/home/carrossel";
import HeroSection from "@/src/components/home/herosection";

export default function Home() {
  return (
     <main className="bg-bege">
        <HeroSection/>
        <Carrossel/>
     </main>
  );
}
