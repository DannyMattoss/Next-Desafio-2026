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
    <section>
        <div className="flex flex-row justify-between px-36 pt-16">
            <h1 className="text-3xl font-titulo text-mescuro font-black">
            ÚLTIMOS ÁLBUNS
            </h1>
            <div className="relative text-mescuro flex items-center">     
                <i className="left-3 absolute bi bi-search-heart"></i> 
                <input className=" h-full text-sm rounded-4xl text-mescuro border-mescuro border-2 pr-28 pl-8" placeholder="Pesquise por título..."/>
            </div>
        </div>
        <div className=" grid grid-cols-4 w-full px-36 py-16 gap-x-6 gap-y-12">
            {cards.map((card, index) => (
                <Card key={index}/>             
            ))}
        </div>
    </section>
  );
}
