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
    }} className={`snap-center w-full min-w-full p-10 flex flex-col justify-center items-center`}>
        <Image src={image} alt="" className='max-w-[60%] max-h-[80%]'/>
        <h1 className='relative mt-[-90px] ml-[-250px] text-5xl font-bold'>Papyrus-Vitae</h1>
    </div>
  )
}

export default EventsCard;
