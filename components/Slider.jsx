"use client"
import { useSwiper } from "swiper/react";

export default function Slider({ children }) {
const swiper = useSwiper();
  return (
 
<div>
{children}
</div>
      
    
  );
}
