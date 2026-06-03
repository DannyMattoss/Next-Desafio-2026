"use client";

import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="flex flex-col bg-rosasujo rounded-2xl p-2.5 shadow-[4px_4px_4px_rgba(135,98,100,1)]">
      <Image
        width={1000}
        height={1000}
        alt=""
        src="/assets/ampulheta.jpg"
        className="rounded-2xl  w-full h-48"/>
      <div className="flex flex-col gap-3 py-2">
        <h1 className="font-subtitulo font-bold text-mescuro text-lg">
            BlackPink - Deadline
        </h1>
        <p className="font-texto font-semibold text-mescuro text-sm">
            Versão MOOD LIGHT do 3º MINI ÁLBUM [DEADLINE] do BLACKPINK
            </p>
        <p className="font-texto font-bold text-mescuro text-2xl text-center">
            R$381,90
        </p>
      </div>
    </div>
    
  );
}
