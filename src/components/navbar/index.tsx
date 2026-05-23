'use client';

import Image from "next/image";
import Link from "next/link";
export default function Navbar() {
    const links = [ 
        {
            name:"Home",
            url: "/",
        },
        {
            name: "Contato",
            url: "/",
        },
        {
            name: "Álbuns",
            url: "/",
        },
        {
            name:"Dashboard",
            url: "/",
        },
        {
            name: "Login",
            url: "/",
        },


    ]
  return (
    <header id="navbar" className="flex bg-mescuro w-full pb-2 rounded-b-2xl">
        <div className="flex bg-rosasujo w-full rounded-b-2xl pl-10 pr-20 pt-2 pb-3 justify-between">
            <Image src="/assets/logo.pata.png" className="w-32" width = {1000} height = {1000}  alt ={"logo"}/>
            <nav className="flex flex-row gap-6">
                {links.map((link)=>(
                        <Link href={link.url} key={link.url} className="text-mescuro flex items-center text-2xl font-logo font-semibold">
                            {link.name}
                        </Link>
                    ))}
            </nav>
        </div>
    </header> 
  );
}
