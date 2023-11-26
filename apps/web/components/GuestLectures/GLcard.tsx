import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Facebook from '../../public/facebook.svg'
import Instagram from '../../public/instagram.svg'
import Linkedin from '../../public/linkedin.svg'

interface Guest { 
  name: string,
  time: string,
  desc: string,
  imageUrl: string,
  date: string,
  insta: string,
  facebook: string,
  linkedin: string;
};
const GLcard: React.FC<{ forwardedRef: React.RefObject<HTMLDivElement>,item: Guest,key:number }> = ({ forwardedRef,item }) => {

  return (
    <div className='h-full lg:w-[30%] md:w-2/5 w-full flex-shrink-0 rounded-tl-3xl flex flex-col items-center justify-between p-3 snap-start' style={{backgroundColor: 'rgb(54, 124, 255, 0.25)', border: '1px solid rgb(54, 124, 255)'}} ref={forwardedRef}>

      <div className='w-full h-[20%] flex'>
        <Image alt='abstract' className='rounded-tl-2xl mr-1 h-full w-1/3' height={1000} src={item.imageUrl} width={1000} />
        <div className='h-full flex-1 pl-3'>
          <div className='text-2xl h-1/3'>{item.name}</div>
          <div className='text-lg h-1/3 opacity-60'>{item.date} {item.time}</div>
        </div>
      </div>

      <div className='w-full h-[70%] bg-black text-white overflow-y-scroll px-2 py-1 CardScrollDiv'>
        {item.desc}
      </div>

      <div className='w-full h-[7%] flex justify-start'>
        <Link className='h-full w-1/6' href={item.insta} target='_blank'>
          <Image alt='instagram' className='h-full w-full text-left' src={Instagram as string} />
        </Link>
        <Link className='h-full w-1/6' href={item.facebook} target='_blank'>
          <Image alt='facebook' className='h-full w-full text-left' src={Facebook as string} />
        </Link>
        <Link className='h-full w-1/6' href={item.linkedin} target='_blank'>
          <Image alt='linkedin' className='h-full w-full text-left' src={Linkedin as string} />
        </Link>
      </div>
    </div>
  )
}

export default GLcard
