
import { Caveat } from "next/font/google"
import { Archivo_Black } from "next/font/google";
import Image from "next/image";
import facePic from "../../public/photo.jpg"
import careauBleu from "../../public/careauBleu.png"
import escalierBleu from "../../public/escalierBleu.png"
import escalierJaune from "../../public/escalierJaune.png"
const archivo_black = Archivo_Black({ weight:"400" , subsets:['latin'] });
const caveat = Caveat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex w-screen h-screen   " >

<section className="bg-customBlue xs:w-[65%] pl-5 pt-2 h-screen">

<h1 className={`${caveat.className} text-[64px] text-customYellow `}>Kybyto</h1>
<div className="xl:mt-12 xl:ml-14 mt-7 ml-4  w-3/6 md:mt-5 sm:mt-1 flex gap-[20%] md:gap-[70%] ">
  <div>
  <h1 className={`${archivo_black.className} xl:text-[64px] text-customYellow leading-tight md:text-[38px] sm:text-[40px] text-[25px]  `}  >Full Stack Developer.</h1>
<p className="text-white xl:text-[18px] md:text-[10px] sm:text-[13px] sm:mt-[10px] text-[10px] md:mt-7 ">Dedicated to web development  and constantly exploring modern technologies to craft innovative solutions.</p>

  </div>


<div>
<div className=" relative   xl:w-[300px] sm:w-[200px]  w-[100px]   xs:w-[150px]   sm:rounded-sm">
<img className="xl:rounded-0  rounded-xl" src="photo.jpg" alt="facePic" width={250} height={300} />

</div>
</div>
</div>
<div className="text-customYellow flex gap-[60px]  xs:gap-10 xl:ml-14 xl:mt-7 md:text-[12px] md:mt-[21px] sm:text-[12px] text-[12px] mt-[10px] ml-4">
  <p className="w-1/3">
  I excel in problem-solving , OOP , and algorithms, passionate about crafting innovative solutions for today's complex tech challenges.
  </p>
  <p className="w-1/3">
  Computer Science Student & Software Engineer Enthusiast 

  </p>
</div>

</section>



<div className="absolute xl:text-xl lg:text-xl md:text-xl text-gray-500 left-1/2 top-9 rotate-[26deg] xs:text-[15px] text-[15px]">
  <p>&lt;<span className="text-red-600">html</span> &gt;</p>
  <p>&lt;<span className="text-customYellow">Portfolio </span>/&gt;</p>
  <p>&lt;<span className="text-red-600">html</span> /&gt;</p>
</div>
<div className="absolute xl:left-[50%] xl:top-[50%]  top-[80%] left-[40%] ">
  <Image src={escalierJaune} alt="escalier jaune" width={70} height={70} />
</div>
<section className="bg-customYellow xs:w-[35%] w-[0%]">

<div className="absolute left-3/4 xs:block  hidden">
  <Image src={careauBleu} alt="careau bleu" width={300} height={300} />
</div>
<div className="absolute left-[85%] top-2/3 xs:block hidden">
  <Image src={escalierBleu} alt="escalier bleu" width={150} height={120} />
</div>

</section>

    </main>
  )
}
