import React from 'react'
// import {useRef,useEffect,useState} from 'react'
import Image from 'next/image'
import Panel from '../../public/assets/PANEL.png'

interface EventCardProps {
  image: string,
  eventName: string
}

const EventsCard: React.FC<EventCardProps> = ({ image,eventName }) => {  // Define other type from any ?? 
  return (
    <div
      className='h-full w-full flex justify-items-center items-center card transition ease-in-out duration-1000 absolute cursor-pointer cardHover'
      style={{
        backgroundImage: `url(${Panel.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
      }}>
      <Image alt="" className='absolute w-2/3 h-[max(25%,150px)] sm:h-2/5 md:h-[54%] lg:h-2/3 lg:w-[max(50%,600px)] xl:h-[65%] top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2' style={{clipPath: 'polygon( 0 25%,12% 0,100% 0,100% 100%,100% 100%,100% 100%,10% 100%,0% 100%,0% 100%)'}} height={450} src={image} width={450} />
      <h1 className='absolute bottom-[38%] sm:bottom-1/3 md:bottom-1/4 lg:bottom-[20%] left-[max(3rem,20%)] md:left-[18%] lg:left-[26%] text-xl sm:text-3xl md:text-5xl font-bold  text-black'>{eventName}</h1>
    </div>
  )
}

export default EventsCard;
