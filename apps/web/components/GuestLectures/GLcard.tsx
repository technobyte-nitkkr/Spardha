import React from 'react'
import Facebook from '../../public/facebook.svg'
import Instagram from '../../public/instagram.svg'
import Linkedin from '../../public/linkedin.svg'
import Image from 'next/image'
import Link from 'next/link'

// not sure about the types of item in this case, if not correct please change else remove this comment
const GLcard: React.FC<{ forwardedRef: React.RefObject<HTMLDivElement>,item:{name:string,time:string,desc:string,imageUrl:string,date: string, insta:string,facebook:string,linkedin:string},index:Number }> = ({ forwardedRef,item,index }) => {

  return (
    <div className='h-full lg:w-1/3 md:w-1/2 w-full flex-shrink-0 rounded-tl-3xl flex flex-col items-center justify-between p-3 snap-center' style={{backgroundColor: 'rgb(54, 124, 255, 0.25)', border: '1px solid rgb(54, 124, 255)'}} ref={forwardedRef}>

      <div className='w-full h-[20%] flex'>
        <Image src={item.imageUrl} alt='abstract' className='rounded-tl-2xl mr-1 h-full w-1/3' width={1000} height={1000} />
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
        <Link href={item.insta} className='h-full w-1/6' target='_blank'>
          <Image src={Instagram} alt='instagram' className='h-full w-full text-left' />
        </Link>
        <Link href={item.facebook} className='h-full w-1/6' target='_blank'>
          <Image src={Facebook} alt='facebook' className='h-full w-full text-left' />
        </Link>
        <Link href={item.linkedin} className='h-full w-1/6' target='_blank'>
          <Image src={Linkedin} alt='linkedin' className='h-full w-full text-left' />
        </Link>
      </div>
    </div>
  )
}

export default GLcard
