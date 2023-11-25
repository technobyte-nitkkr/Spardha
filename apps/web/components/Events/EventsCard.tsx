import React  , {useRef,useEffect,useState} from 'react'
import Image from 'next/image'
import Panel from '../../public/assets/PANEL.png'

const EventsCard: React.FC <any> = ({image}) => {
    
  return (
    <div style={{
        backgroundImage: `url(${Panel.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
    }} className={`snap-center w-full min-w-full pb-10 flex flex-col justify-center items-center`}>
        <Image src={image} alt="" className='eventimg max-w-[80%] max-h-[70%]'/>
        <h1 className='relative mt-[-90px] text-5xl font-bold'>Papyrus-Vitae</h1>
    </div>
  )
}

export default EventsCard;
