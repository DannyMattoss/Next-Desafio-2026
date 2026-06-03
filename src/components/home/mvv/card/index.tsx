'use client';

import Image from "next/image";
import Link from "next/link";
export default function Card() {

    return (
            <div className="w-3/10 flex flex-col gap-5 bg-branco px-4 items-center py-8 rounded-2xl border-1 border-rosa  bg-preto/80">
                <div className="">
                    <p className="text-3xl"> 
                        Missão
                    </p>
                </div>
                <div id="descmis" className="">
                    <p className="text-2xl">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            
    );
}