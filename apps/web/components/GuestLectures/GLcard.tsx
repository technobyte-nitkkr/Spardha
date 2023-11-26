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
// not sure about the types of item in this case, if not correct please change else remove this comment
const GLcard: React.FC<{ forwardedRef: React.RefObject<HTMLDivElement>,item: Guest,key:number }> = ({ forwardedRef,item }) => {

  return (
    <div className='h-full lg:w-1/3 md:w-1/2 w-full flex-shrink-0 rounded-tl-3xl flex flex-col items-center justify-between p-3 snap-center' ref={forwardedRef} style={{ backgroundColor: 'rgb(54, 124, 255, 0.25)', border: '1px solid rgb(54, 124, 255)' }}>

      <div className='w-full h-[20%] flex'>
        <Image alt='abstract' className='rounded-tl-2xl mr-1 h-full w-1/3' height={1000} src={item.imageUrl} width={1000} />
        <div className='h-full flex-1'>
          {/* put name */}
          <div className='text-2xl h-1/2'>{item.name}</div>
          {/* put title here */}
          <div className='text-lg h-1/2 opacity-60'>{item.date} {item.time}</div>
        </div>
      </div>

      <div className='w-full h-[70%] bg-black text-white overflow-y-scroll px-2 py-1 CardScrollDiv'>
        {item.desc}
      </div>

      <div className='w-full h-[7%] flex justify-start'>
        <Link className='h-full w-1/6' href={item.insta} target='_blank'>
          <Image alt='instagram' className='h-full w-full text-left' src={Instagram} />
        </Link>
        <Link className='h-full w-1/6' href={item.facebook} target='_blank'>
          <Image alt='facebook' className='h-full w-full text-left' src={Facebook} />
        </Link>
        <Link className='h-full w-1/6' href={item.linkedin} target='_blank'>
          <Image alt='linkedin' className='h-full w-full text-left' src={Linkedin} />
        </Link>
      </div>
    </div>
  )
}

export default GLcard
