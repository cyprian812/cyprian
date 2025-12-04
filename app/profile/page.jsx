import React from 'react'
import image from "next/image";
import Topbar from '../componet/Topbar';
import Sidebar from '../componet/Sidebar/Sidebar';
import Image from 'next/image';

export default function page() {
  return (
   <>
   <Topbar/>
   <div className="flex">
   <div className="hidden sm:block md:-[25v]">
    <Sidebar/>
   </div>
   <div className="w-[100vw] md:-[75vw]">
    <div className="h-[320px] w-full relative">
<div className="w-[100vw] md:[75vw] h-[250px] relative">
  <Image src="/assets/team/avatar.jpg" layout='fill' className='object-fit' alt='pix'/>
</div>
<Image
                className="w-[160px] h-[160px] object-cover rounded-full absolute top-[160px] left-0 right-0 border-4 border-white m-auto"
                src="/assets/team/girl.png"
                width={160}
                height={160}
                alt="pix"
              />
    </div>
    <div className="flex flex-col items-center justify-center"></div>
   <h4 className='text-[24px] font-semibold'>Ada Abia</h4>
   <span className='italic font-semibold'>
Hello my friends! welcome {new Date().getFullYear()}
   </span>
   </div>
   </div>
   </>
  )
}
