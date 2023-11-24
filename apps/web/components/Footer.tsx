import React from 'react'
import logo from '../public/assets/logo.png'
import Image from 'next/image'
import I from '../public/instagram.svg'
import F from '../public/facebook.svg'
import L from '../public/linkedin.svg'
import T from '../public/twitter.svg'
import OurSponsors from './OurSponsors/OurSponsors'
const Footer = () => {
  return (
    <>
    <div className='text-white bg-black h-3/5 flex flex-row text-md justify-center items-center gap-20' >
            <div className='flex flex-row text-2xl'>
                <div><Image src={logo} alt='logo' width={30} height={30}/></div>
             <div >Techspardha</div>
            </div>
            
             <div>Developed with ❤️ by Technobyte</div>

    </div>
    <div className='text-white bg-[#161B22] h-2/5 flex flex-row items-center justify-center gap-10'>
            <div><a href="https://www.facebook.com/techn0byte/" target='_blank'><Image src={F} alt='F' width={20} height={20}/></a></div>
            <div><a href="https://www.instagram.com/technobyte_nitkkr/" target='_blank'><Image src={I} alt='I' width={20} height={20}/></a></div>
            <div><a href="https://twitter.com/tsnitkkr" target='_blank'><Image src={T} alt='T' width={20} height={20}/></a></div>
            <div><a href="https://www.linkedin.com/company/technobyte-nitkkr/" target='_blank'><Image src={L} alt='L' width={20} height={20}/></a></div>
            
    </div>
    </>
  )
}

export default Footer
