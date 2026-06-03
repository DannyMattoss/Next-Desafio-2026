"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import Card from "./cards";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carrossel() {
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
    <section className=" relative w-full px-36 py-16">
      <Swiper className= "" modules={[Navigation]}
        spaceBetween={24}
        loop={true}
        slidesPerView={4}
        navigation={{
          prevEl: ".custom-swiper-button-prev",
          nextEl: ".custom-swiper-button-next",
        }}>
        {cards.map((card, index) => (
            <SwiperSlide key={index}>
               <Card/>
            </SwiperSlide>
        ))}

      </Swiper>
        {/* //esquerda */}
      <button className="text-5xl custom-swiper-button-prev absolute left-22 top-1/2 -translate-y-1/2 z-10 text-mescuro hover:text-mclaro transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
        <i className="bi bi-caret-left-fill"></i>
      </button>
        {/* //direita */}
      <button className="text-5xl custom-swiper-button-next absolute right-22 top-1/2 -translate-y-1/2 z-10 text-mescuro hover:text-mclaro transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
        <i className="bi bi-caret-right-fill"></i>
      </button>
    </section>
  );
}
