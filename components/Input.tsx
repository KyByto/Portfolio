import { Archivo_Black } from "next/font/google"

import { Arapey } from "next/font/google";
const arapey = Arapey({weight:"400", subsets:["latin"]});
const archivo_black = Archivo_Black({weight:"400",subsets:['latin']});
export default function Input({children , className } : {children : React.ReactNode , className? : string} ) {
  return (
    <div tabIndex={-1} className={`  text-customInput   flex flex-col gap-2   input-class ${className}`}>

    {children}
 <div className=" border-customInput  border-b-2 -mt-2 w-[100%]  "></div>
            </div>
  )
}
