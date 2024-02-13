import { Archivo_Black } from "next/font/google";
import Image from "next/image";
import ReactIcon from "../../public/reactIcon.png"
import DataBaseIcon from "../../public/databaseIcon.png"
import careauJaune from "../../public/careauJaune.png"
import escalierJaune from "../../public/escalierJaune.png"
import zigzagJaune from "../../public/zigzagJaune.png"
const archivo_black = Archivo_Black({ weight:"400" , subsets:['latin'] });

export default function Speciality() {
  return (
    <main className=" flex w-screen h-screen  flex-col  xs:flex-row">

<section className="flex bg-customBlue xs:w-[65vw] pl-5 pt-2  h-screen xxs:pl-0 h-[50vh] xs:h-[100vh]" >
  

      <div className="w-[60%] xs:mx-10 xs:mt-7 ml-3 mt-1 ">
<h1 className={`${archivo_black.className}  text-customYellow   xl:text-[64px] md:text-[44px] sm:text-[35px] xs:text-[30px] text-[30px]`}  >Front end</h1>
<p className="text-white  xl:text-[18px] md:mt-7 xs:text-[13px] text-[12px]  ">Specializing in React.js and Next.js, I excel in crafting high-performance applications with beautiful UI using clean code practices. Leveraging JavaScript and TypeScript, along with advanced router techniques, I create seamless user experiences that elevate the web development landscape.</p>
<Image className="opacity-50 mt-10 rotate-[45deg] xl:w-[200px] md:w-[120px] sm:w-[90px] xs:w-[70px] w-[100px] absolute  top-[300px] left-[200px] xs:static xxs:left-[230px] xxs:bottom-[270px]"  src={ReactIcon} alt="react icon" width={250} height={150} />
</div>  
<div className="">

<Image className=" ml-[70%] mt-[40%] hidden md:block " src={careauJaune} alt="careau Jaune" width={100} height={100}   />
<Image className="mt-[90%] opacity-80 hidden md:block" src={escalierJaune} alt="escalier jaune" />
<Image className="mt-[100%] md:block hidden" src={zigzagJaune} alt="zig zag jaune" />
</div>
    </section>
      <section className="xs:w-[35vw] bg-customYellow w-[100vw] h-[50vh] xs:h-[100vh]">

      <div className="mr-3   mt-35 w-[100%] p-5 xxs:p-3">
      <Image className="md:mb-10 xs:ml-12 mt-5 xl:w-[150px] md:w-[120px] sm:w-[90px] xs:w-[70px] hidden xs:block " src={DataBaseIcon} alt="database" />

<h1 className={`${archivo_black.className} text-customBlue xl:text-[64px] md:text-[44px] sm:text-[35px] xs:text-[26px] text-[30px] mt-2 `}  >Back end</h1>
<p className="text-customBlue mt-2 xs:mt-8 xl:text-[18px] md:text-[12px] sm:text-[11px] xs:text-[11px] text-[12px] xxs:mt-1 ">Proficient in building robust APIs using Node.js, Express.js, and MongoDB to power seamless backend functionalities, including JWT-based authentication and authorization mechanisms. Implementing secure and efficient authentication flows, I ensure data integrity and user privacy while delivering scalable backend solutions.</p>
</div>  


      </section>
    </main>
  )
}
