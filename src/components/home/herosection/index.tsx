'use client';

import Image from "next/image";
import Link from "next/link";
export default function HeroSection() {

    return (
        <section className="w-full pl-8 py-16 pr-40">
            <div className="flex flex-row items-center py-8 pl-12 gap-9 rounded-2xl w-full border-4 border-mescuro shadow-[4px_6px_4px_rgba(0,0,0,0.30),_inset_4px_6px_4px_rgba(0,0,0,0.30)]">
                <h1 className="font-logo text-5xl w-80 text-mescuro font-semibold leading-12">
                    O comeback do seu grupo favorito começa aqui!
                </h1>
                <Image width = {1000} height = {1000} src="/assets/dedinhos.png" alt="" className="object-contain w-22"/>
                <p className="font-subtitulo text-mescuro text-3xl w-4/10 ml-4">
                    Garanta os lançamentos <br/>mais aguardados com <b><i><br/>cards oficiais, pôsteres <br/>e brindes</i></b> exclusivos que <br/> você só encontra aqui.
                </p>
                <Image src="/assets/disc.png" width = {1000} height = {1000} alt="" className="object-contain w-76 absolute right-3"/>
            </div>

        </section> 
    );
}