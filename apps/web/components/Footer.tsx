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
    <div className='text-white bg-black h-4/5 flex flex-row text-4xl' >
        <div className='w-2/5 bg-black flex flex-row justify-center align-items-center items-center'>
            <div><Image src={logo} alt='logo' width={50} height={50}/></div>
             <div >Techspardha</div>
        </div>
        <div className='w-3/5 flex flex-row p-8 justify-center align-items text-lg'>
                <div className='p-2'>
                    <div>Home</div>
                    <div>Gallery</div>
                    <div>Guest Lectures</div>
                    <div>Sponsors</div>
            
                </div>
        </div>
    </div>
    <div className='text-white bg-[#161B22] h-1/5 flex flex-row'>
        <div className='ml-10  w-1/3  flex flex-row  text-xs justify-center items-center'>
            <div>ⓒ 2024 Techspardha,NIT Kurukshetra</div>
            <div>Terms</div>
            <div>Privacy</div>
            <div>Contact</div>
        </div>
        <div className='w-2/3 flex flex-row items-center justify-end gap-10 mr-12'>
            <div><a href="https://www.facebook.com/techn0byte/" target='_blank'><Image src={F} alt='F' width={20} height={20}/></a></div>
            <div><a href="https://www.instagram.com/technobyte_nitkkr/" target='_blank'><Image src={I} alt='I' width={20} height={20}/></a></div>
            <div><a href="https://twitter.com/tsnitkkr" target='_blank'><Image src={T} alt='T' width={20} height={20}/></a></div>
            <div><a href="https://www.linkedin.com/company/technobyte-nitkkr/" target='_blank'><Image src={L} alt='L' width={20} height={20}/></a></div>
            
        </div>
    </div>
    </>
  )
}

export default Footer
