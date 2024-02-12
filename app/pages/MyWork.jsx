"use client"
import { Archivo_Black } from 'next/font/google';
import { Poppins } from 'next/font/google';
import careauBleu from "../../public/careauBleu.png";
import escalierBleu from "../../public/escalierBleu.png"
import bouleBleu from "../../public/bouleBleu.png"
const poppins_title = Poppins({subsets:['latin'] , weight : "700"});
const poppins_paragraph = Poppins({subsets:['latin'] , weight : "400"});
import { useState  } from 'react';
const archivo_black = Archivo_Black({ weight:"400" , subsets:['latin'] });
import Image from 'next/image';
import works  from "@/app/models/Work";
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import {Keyboard  , Autoplay} from "swiper/modules"


import 'swiper/css';


const AllProjects = works.map(
  (work , index) => {
    return <div key={index} className=" flex-col z-3   w-[100%] xs:h-[100%]  shadow-lg">
      <div className="image-container">
  <img className="image-link w-[100%]" src={work.image} alt={`image de ${index} ${work.title}`} width="100" height="100" />
  <div className="link">
    <Link tabIndex="-1" href={work.link ? work.link : "https://www.youtube.com/watch?v=T6e_Nm6DvJM"} target='_blank' rel="noopener noreferrer" className="relative text-black text-[15px] bg-white inline p-1 rounded-lg">Go to Project Link</Link>
  </div>
</div>


    <div className="p-3">
    <h1 className={`${poppins_title.className} text-[30px]`}>{work.title}</h1>
    <p className="mt-3">{work.description} </p>
    
    <div className={`flex  gap-3 b mt-7  text-[110%] whitespace-nowrap ${poppins_paragraph.className}`}>
        {work.technologies.map( (techno)  => <h1 key={techno.indexOf(techno)}>{techno}</h1>)}
        
           <Link tabIndex="-1" className="xs:ml-10   "  href={work.githublink} target="_blank" rel="noopener noreferrer" >
    
           <img className="w-[40px] " src="/github.svg" alt="github icon" width={70} height={60}/>
           </Link>
        
    </div>
    
    
    </div>
    </div>
  }
 )   ;

export default function MyWork() {
  const [swiper, setSwiper] = useState(null);
  
 
  const breakpoints = {
    310: {
      slidesPerView: 1,
      spaceBetween:10,
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

  return (
    <main className="absolute h-screen w-screen pt-2 xs:pl-10">
        <img src="/zigzagBleu.png" alt="zigzag bleu" className="hidden md:block absolute top-[90%] left-[10%]" /> {/* Remove or reduce z-index */}
  <img src="/careauBleu.png" alt="careau bleu" className="hidden md:block absolute w-[200px] top-[83%] right-[10%]" /> {/* Remove or reduce z-index */}
  <img src="/escalierBleu.png" alt="careau bleu" className="hidden md:block absolute w-[200px] bottom-[82%] right-[40%]" /> {/* Remove or reduce z-index */}
  <img src="/bouleBleu.png" alt="careau bleu" className="hidden md:block absolute w-[200px] bottom-[65%] left-[25%]" /> {/* Remove or reduce z-index */}
 
  <h1 className="text-customBlue text-4xl font-bold xs:mb-8 mb-0 pl-2">My Work</h1>
 <section className="xs:mt-8 xs:ml-7 ml-2 z-10"> {/* Increase z-index for content */}
    <Swiper
      modules={[Keyboard , Autoplay]}
      keyboard={true}
      breakpoints={breakpoints}
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{ delay: 2000 , disableOnInteraction:true }} 
    >
      {AllProjects.map(project => (
        <SwiperSlide key={project.id}>{project}</SwiperSlide>
      ))}
    </Swiper>
  </section>
</main>

  );
};

