'use client'
import { useRouter, usePathname, useSearchParams } from "next/navigation";
type MenuProps = {
    caption: string;
    order: string;
}
export const MenuItemsContainer = ({caption, order}: MenuProps) => {
  const router  = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const handleClick = (order:string) =>{
  console.log("router pathname=>",pathName)  
  console.log("params=>",searchParams.toString());  


  }
  return (
    <div 
      className='w-full h-15 rounded-full border border-gray-400 flex justify-start items-center pl-4 gap-2'
      onClick={()=>handleClick(order)}
    >
      <div className="w-8 h-8 border border-gray-400 rounded-full flex justify-center items-center">
        <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
      </div>
        <p>{caption}</p>
    </div>
  )
}
