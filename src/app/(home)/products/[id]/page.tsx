'use client';

import Image from "next/image";

export default function Post() {
  return (
     <main className="bg-bege flex justify-center items-center px-48 py-5">
        <section className="border-mescuro border-3 flex flex-row items-center rounded-2xl">
            <Image width = {1000} height = {1000} src="/assets/ampulheta.jpg" alt="" className="p-2 rounded-2xl w-1/2"/>
            <div className="flex flex-col items-start justify-center pl-12 gap-2">
                <h1 className="flex justify-start font-subtitulo text-4xl font-bold text-mescuro">
                    BlackPink - Deadline
                </h1>
                <p className="font-texto text-mescuro text-xl font-bold">
                    Versão MOOD LIGHT do 3º MINI ÁLBUM <br/>[DEADLINE] do BLACKPINK
                </p>
                <p className="font-texto text-mescuro text-lg font-semibold">
                    Data de lançamento: 27 Fevereiro, 2026<br/>
                    Inclusões:<br/>
                    - EMBALAGEM(134*210*105 mm)<br/>
                    - HOURGLASS MOOD LAMP (86*86*160 mm)<br/>
                    - MINI CD (80*80 mm)<br/>
                    - ENVELOPE (95*100 mm)<br/>
                    - PHOTOCARDS (4ea / 55*85 mm)<br/>
                    - USB-C to A CABO<br/>
                    - MANUAL DE USUARIO (70*90 mm)<br/>
                </p>
                <p className="w-full text-center py-2 font-texto text-mescuro text-3xl font-bold">
                    R$: 381,90 
                </p>
            </div>
        </section>
     </main>
  );
}
