import Input from "@/components/Input";
import { Archivo_Black } from "next/font/google";
import Link from "next/link";



const archivo_black = Archivo_Black({weight:"400",subsets:['latin']});

export default function ContactMe() {
  return (
    <main className="w-screen h-screen flex flex-col items-center p-5 md:p-10">
      <img className="absolute  w-[10%] rotate-[45deg] top-[375%] right-[6%]" src="/bouleBleu.png" alt="boule bleu" />
      <img className="absolute   w-[7%] top-[380%] left-[7%]" src="/zigzagBleu.svg" alt="zigzag bleu" />
      <img className="absolute w-[300px] right-[5%]" src="/careauBleu.png"/>
      <img src="/escalierBleu.png" className="absolute left-[3%]  w-[10%]" />
      <div className=" w-[100%] xs:w-[90%] md:w-[70%] flex flex-col gap-7">
        <h1 className={`text-customBlue text-center   text-[35px] md:text-[64px] ${archivo_black.className}`}>Contact Me</h1>
        <form className=" flex  flex-col gap-2 sm:gap-10 pr-14">
          <div className=" flex flex-col md:flex-row gap-3  justify-between">
           <Input className="w-[100%] md:w-[48%]">
<label htmlFor="name">Your Name :</label>
<input tabIndex={-1} className="md:text-base  text-sm" placeholder="Enter Your Name" id="name" type="text"/>
</Input>

<Input className="w-[100%]  md:w-[48%]">
<label className="md:text-base text-sm" htmlFor="email">Your Address :</label>
<input tabIndex={-1}  type="text" placeholder="Enter Your Email Address" id="email"/>
</Input>
</div>  

<Input className="w-[100%]   ">
<label htmlFor="message">Your Message :</label>
<textarea tabIndex={-1} className=""   placeholder="Enter Your Message" id="email"/>
</Input>
<button type="submit" className="text-customBlue text-[30px] w-[70%]   md:w-[30%] pt-3 pb-3 self-center ml-14 msg-button " tabIndex={-1}>Send</button>
            </form>
            <div className="flex  gap-10 self-center mb-4 ">
      <Link tabIndex={-1} target="_blank" href="https://github.com/KyByto"  >   <img src="/github.svg"  alt="icon github" className=" w-[50px] rounded-[50%] z-10"/></Link>
      <Link tabIndex={-1} target="_blank" href="https://www.linkedin.com/in/haddad-zakaria-90b092248/">     <img  src="/LinkedIn_icon_circle.svg" className="w-[50px]" alt="linked in icon " /></Link> 
<Link tabIndex={-1} target="_blank" href="https://discord.com/users/486171626258432008">          <img  src="/discord-round-color-icon.svg" alt="discord icon" className="w-[50px]"/></Link>  
      </div>
      </div>
    </main>
  )
}
