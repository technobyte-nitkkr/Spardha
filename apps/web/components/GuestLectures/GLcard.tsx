import React, {useRef} from 'react'
import Facebook from '../../public/facebook.svg'
import Instagram from '../../public/instagram.svg'
import Linkedin from '../../public/linkedin.svg'
import myImage from '../../public/assets/abstractimage.jpg'
import Image from 'next/image'

const GLcard: React.FC<{ forwardedRef: React.RefObject<HTMLDivElement> }> = ({ forwardedRef }) => {
  
  return (
    <div className='h-full lg:w-1/3 md:w-1/2 w-full flex-shrink-0 rounded-tl-3xl flex flex-col items-center justify-between p-3' style={{backgroundColor: 'rgb(54, 124, 255, 0.25)', border: '1px solid rgb(54, 124, 255)'}} ref={forwardedRef}>

      <div className='w-full h-[20%] flex'>
        <Image src={myImage} alt='abstract' className='rounded-tl-2xl mr-1 h-full w-1/3' />
        <div className='h-full flex-1'>
          <div className='text-2xl h-1/2'>Title</div>
          <div className='text-lg h-1/2'>Name</div>
        </div>
      </div>

      <div className='w-full h-[70%] bg-black text-white overflow-y-scroll px-2 py-1 CardScrollDiv'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem explicabo atque mollitia, nostrum dolore quasi optio accusamus, ad maxime neque inventore dolor perspiciatis cumque quia sequi ullam unde rerum eius quam voluptas fugiat! Odit, veniam aliquam, cumque, esse consectetur cum quae quos itaque recusandae labore reiciendis repudiandae incidunt nesciunt nam necessitatibus adipisci. Aliquam laborum minima officiis, ab adipisci nulla voluptates quidem, architecto assumenda delectus doloribus neque cumque velit nisi. Qui sint quam enim reprehenderit explicabo deleniti eaque similique neque numquam rerum. Corrupti dolorum nisi obcaecati molestiae vel consectetur aspernatur placeat dolor quo rem similique, unde, totam quos iusto laborum quas!
      </div>

      <div className='w-full h-[7%] flex justify-start'>
        <Image src={Instagram} alt='instagram' className='h-full w-1/6 text-left' />
        <Image src={Facebook} alt='facebook' className='h-full w-1/6 text-left' />
        <Image src={Linkedin} alt='linkedin' className='h-full w-1/6 text-left' />
      </div>
    </div>
  )
}

export default GLcard
