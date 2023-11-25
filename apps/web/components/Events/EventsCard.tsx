import React from 'react'
// import {useRef,useEffect,useState} from 'react'
import Image from 'next/image'
import Panel from '../../public/assets/PANEL.png'

const EventsCard: React.FC<any> = ({ image }) => {  // Define other type from any ?? 

  return (
    <div
      className='snap-center w-full min-w-full pb-10 flex flex-col justify-center items-center'
      style={{
        backgroundImage: `url(${Panel.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}>
      <Image alt="" className='eventimg max-w-[80%] max-h-[70%]' src={image as string} />
      <h1 className='relative mt-[-90px] text-5xl font-bold'>Papyrus-Vitae</h1>
    </div>
  )
}

export default EventsCard;
