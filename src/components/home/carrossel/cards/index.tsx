"use client";

import Image from "next/image";
import Link from "next/link";
type CardProps = {
  imagem:string;
  titulo:string;
  descricao:string;
  preco:string;  
}

export default function Card({imagem, titulo, descricao, preco}: CardProps) {
  return (
    <div className="flex flex-col bg-rosasujo rounded-2xl p-2.5 shadow-[4px_4px_4px_rgba(135,98,100,1)]">
      <Image
        width={1000}
        height={1000}
        alt=""
        src={imagem}
        className="rounded-2xl  w-full h-48"/>
      <div className="flex flex-col gap-3 py-2">
        <h1 className="font-subtitulo font-bold text-mescuro text-lg">
            {titulo}
        </h1>
        <p className="font-texto font-semibold text-mescuro text-sm">
            {descricao}
            </p>
        <p className="font-texto font-bold text-mescuro text-2xl text-center">
            {preco}
        </p>
      </div>
    </div>
    
  );
}
