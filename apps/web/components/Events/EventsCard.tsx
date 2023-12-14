import React from 'react'
// import {useRef,useEffect,useState} from 'react'
import Image from 'next/image'
import Panel from '../../public/assets/PANEL.png'

interface EventCardProps {
  image: string,
}

const EventsCard: React.FC<EventCardProps> = ({ image }) => {  // Define other type from any ?? 
  return (
    <div
      className='h-full w-full flex justify-items-center items-center card transition ease-in-out duration-1000 absolute hidden'
      style={{
        backgroundImage: `url(${Panel.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',

      }}>
      <Image alt="" className='absolute w-2/3 h-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2' height={450} src={image} width={450} />
      <h1 className='absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 text-5xl font-bold  text-black'>Papyrus-Vitae</h1>
    </div>
  )
}

export default EventsCard;
