'use client';

import Image from "next/image";
import Link from "next/link";


export default function Login() {
  return (
     <main className="bg-bege h-screen px-60 justify-center flex items-center">
        <div className="flex flex-row border-3 border-mescuro rounded-2xl w-full shadow-[4px_4px_4px_rgba(166,126,126,1)]">
            <Image width = {1000} height = {1000} src="/assets/login3.png" alt="" className="py-24 px-12 w-1/2 border-mescuro border-r-3  rounded-2xl"/>
            <div className="flex flex-col items-center justify-start gap-5 text-mescuro w-full px-6">
                <Link href="/" className="pb-16 pt-2 self-end">
                    <i className="text-3xl bi bi-house-heart"></i>
                </Link>
                <i className="text-6xl bi bi-person-bounding-box"></i>
                <h1 className="text-mescuro font-logo font-semibold text-2xl ">
                    LOGIN
                </h1>
                <div className="flex flex-col gap-2 w-full font-texto font-semibold">
                    <div className="relative flex flex-row items-center  w-full">
                        <i className="absolute left-3 bi bi-emoji-wink"></i>
                        <input className=" w-full focus:outline-none text-sm rounded-lg py-2 text-mescuro pl-8 border-mescuro border-2 pr-28 " placeholder="Nome"/>
                    </div>
                    <div className="relative flex flex-row items-center w-full">
                        <i className="absolute left-3 bi bi-envelope-heart"></i>
                        <input className="w-full focus:outline-none text-sm rounded-lg py-2 text-mescuro pl-8 border-mescuro border-2 pr-28 " placeholder="Email"/>
                    </div>                
                    <div className="relative flex flex-row items-center w-full">
                        <i className="absolute left-3 bi bi-shield-lock"></i>
                        <input className="w-full focus:outline-none text-sm rounded-lg py-2 text-mescuro pl-8 border-mescuro border-2 pr-28" placeholder="Senha"/>
                    </div>                
                </div>
                <button className="focus:outline-none text-sm rounded-lg py-2 px-10 text-bege bg-mescuro border-mescuro border-2 font-texto">
                        Login
                </button>

            </div>
        </div>        
     </main>
  );
}
