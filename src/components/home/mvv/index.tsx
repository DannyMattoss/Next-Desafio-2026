'use client';

import Image from "next/image";
import Link from "next/link";
import Card from "./card";
export default function MVV() {

    return (
        <section className="flex flex-row w-full gap-4 px-44 py-16 items-center justify-between">
        <Card/>
        <i className="text-6xl text-mescuro bi bi-music-note"></i>
        <Card/>
        <i className="text-6xl text-mescuro bi bi-music-note"></i>
        <Card/>
        </section> 
    );
}