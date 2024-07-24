"use client";
import { Archivo_Black } from 'next/font/google';
import { Poppins } from 'next/font/google';
import careauBleu from "../../public/careauBleu.png";
import escalierBleu from "../../public/escalierBleu.png";
import bouleBleu from "../../public/bouleBleu.png";
const poppins_title = Poppins({ subsets: ['latin'], weight: "700" });
const poppins_paragraph = Poppins({ subsets: ['latin'], weight: "400" });
import { useRef } from 'react';
import Image from 'next/image';
import works from "@/app/models/Work";
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay } from "swiper/modules";

import 'swiper/css';

const AllProjects = works.map((work, index) => (
  <div key={index} className="flex-col z-3 w-[100%] xs:h-[100%] shadow-lg">
    <div className="image-container">
      <img className="image-link w-[100%]" src={work.image} alt={`image de ${index} ${work.title}`} width="100" height="100" />
      <div className="link">
        <Link tabIndex="-1" href={work.link ? work.link : "https://github.com/KyByto"} target='_blank' rel="noopener noreferrer" className="relative text-black text-[15px] bg-white inline p-1 rounded-lg">Go to Project Link</Link>
      </div>
    </div>
    <div className="p-3">
      <h1 className={`${poppins_title.className} text-[30px]`}>{work.title}</h1>
      <p className="mt-3">{work.description}</p>
      <div className={`flex gap-3 b mt-7 text-[110%] whitespace-nowrap ${poppins_paragraph.className}`}>
        {work.technologies.map((techno) => <h1 key={techno.indexOf(techno)}>{techno}</h1>)}
        <Link tabIndex="-1" className="xs:ml-10" href={work.githublink} target="_blank" rel="noopener noreferrer">
          <img className="w-[40px]" src="/github.svg" alt="github icon" width={70} height={60} />
        </Link>
      </div>
    </div>
  </div>
));

export default function MyWork() {
  const swiperRef = useRef(null);

  const breakpoints = {
    310: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <main className="absolute bg-white z-20 h-screen w-screen pt-2 xs:pl-10 p-6">
      <img src="/zigzagBleu.png" alt="zigzag bleu" className="md:block absolute top-[90%] md:left-[10%] w-[70px] right-[10%] bottom-[10%]" />
      <img src="/careauBleu.png" alt="careau bleu" className="w-[300px] right-[10px] top-[50px] md:block absolute md:w-[200px] md:top-[83%] md:right-[10%]" />
      <img src="/escalierBleu.png" alt="careau bleu" className="hidden md:block absolute w-[200px] bottom-[82%] right-[40%]" />
      <img src="/bouleBleu.png" alt="careau bleu" className="bottom-[15px] left-[40px] w-[100px] md:block absolute md:w-[200px] md:bottom-[65%] md:left-[25%]" />

      <h1 className="text-customBlue text-4xl font-bold mt-[1rem] xs:mb-8 mb-9">My Work</h1>
      <section className="xs:mt-8 xs:ml-7 ml-2 z-10">
        <Swiper
          modules={[Keyboard, Autoplay]}
          ref={swiperRef}
          keyboard={true}
          breakpoints={breakpoints}
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
        >
          {AllProjects.map((project, index) => (
            <SwiperSlide key={index}>{project}</SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className='flex items-center gap-5 justify-center'>
        <svg onClick={handlePrevSlide} className='ml-2 w-[100px]' fill='#4831d4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM116.7 244.7l112-112c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8l0 64 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 64c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-112-112c-6.2-6.2-6.2-16.4 0-22.6z" /></svg>
        <svg onClick={handleNextSlide} className='ml-3 mr-3 w-[100px]' fill='#4831d4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm395.3 11.3l-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-64-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6z" /></svg>
      </div>

    </main>
  );
}
