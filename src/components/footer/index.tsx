'use client';
import Image from "next/image";
import Link from "next/link";
export default function Footer() {

    return (
        <footer className="flex bg-mescuro w-full pt-2 rounded-t-2xl font-logo text-mescuro font-semibold">
            <div className="flex bg-rosasujo w-full rounded-t-2xl py-4 justify-between px-14 items-center">
                <div className="w-2/10 flex flex-col text-3xl items-center text-center">
                    <h1>
                        Contatos 
                    </h1>
                    <div className="flex flex-row text-mescuro text-5xl gap-4 pt-1.5 ">
                        <Link href="mail">
                            <i className="bi bi-envelope-open"></i>
                        </Link>
                        <Link href="wa.me/00000000">
                            <i className="bi bi-telephone"></i>
                        </Link>
                    </div>
                </div>
                <div>
                    <Image src="/assets/logogato.png" className="w-40" width = {1000} height = {1000} alt=""/>
                </div>
                <div className= "w-2/10 flex flex-col text-3xl items-center text-center">
                    <h1>
                        Siga 
                    </h1>
                    <div className="flex flex-row text-mescuro text-5xl gap-4 pt-1.5 ">
                        <Link href="x.com">
                            <i className="bi bi-twitter"></i>
                        </Link>
                        <Link href="instagram.com">
                            <i className="bi bi-instagram"></i>
                        </Link>
                        <Link href="facebook.com">
                            <i className="bi bi-facebook"></i>
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}