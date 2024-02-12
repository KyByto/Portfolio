"use client"
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import { useState , useRef ,  useEffect} from "react";
import MyWork from "./pages/MyWork";
import Speciality from "./pages/Speciality";
import { Swiper , SwiperSlide} from "swiper/react";
import 'swiper/css';
import "swiper/css/autoplay"
import SwiperCore from "swiper";


import { Mousewheel , Keyboard , Autoplay, Navigation} from "swiper/modules";
import Slider from "@/components/Slider";
export default function Page() {
  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    setWindowHeight(window.innerHeight);
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Run only once on component mount  

  

  return (
    <main className="h-[400px]  w-screen">
      <Swiper
        modules={[Mousewheel , Keyboard , Autoplay , Navigation]}
      keyboard={true}
      direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        height={windowHeight}
        mousewheel={true}
          autoplay={{ disableOnInteraction:true , delay:2000 }}
          navigation={true}
        >
        <Slider >
             <SwiperSlide>
            
            
              
                              <Home/>
                
             
             </SwiperSlide>


            <SwiperSlide>
            
            
          
                          <Speciality/>   
           
                       </SwiperSlide>
          <SwiperSlide>
          
            
        
            <MyWork/>    </SwiperSlide>
         
           
            
      <SwiperSlide>
            <ContactMe/>
            </SwiperSlide>
          
            </Slider>
        </Swiper>
    </main>
  );
}
