"use client";

import Image from "next/image";
import Link from "next/link";
import Card from "../home/carrossel/cards";

export default function Products() {
    const cards = [ 
        {
            name:"Home",
            url: "/",
        },
                {
            name:"Home",
            url: "/",
        },
                {
            name:"Home",
            url: "/",
        },
                {
            name:"Home",
            url: "/",
        },
        {
            name:"Home",
            url: "/",
        },
                {
            name:"Home",
            url: "/",
        },
                {
            name:"Home",
            url: "/",
        },
                {
            name:"Home",
            url: "/",
        },
    ]
  return (
    <section className=" grid grid-cols-4 w-full px-36 py-16 gap-x-6 gap-y-12">
        {cards.map((card, index) => (
            <Card key={index}/>             
        ))}
    </section>
  );
}
