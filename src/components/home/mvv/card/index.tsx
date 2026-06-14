'use client';

import Image from "next/image";
import Link from "next/link";

interface CardProps {
    title: string;
    text: string;
}

export default function Card({title, text}: CardProps) {

    return (
            <div className="w- flex flex-col gap-5 bg-mescuro px-4 items-center py-8 rounded-2xl shadow-[4px_4px_4px_rgba(166,126,126,1)]">
                <div className="">
                    <p className="text-3xl font-titulo text-rosasujo"> 
                        {title}
                    </p>
                </div>
                <div className="">
                    <p className="text-sm font-texto text-rosasujo font-bold">
                        {text}
                    </p>
                </div>
            </div>
            
    );
}