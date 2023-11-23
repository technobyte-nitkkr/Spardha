import React from 'react'
import Image from 'next/image'
import myImage from '../../public/assets/abstractimage.jpg'

const SponsorCard = ({ len }: { len: number }) => {
  return (
    <div className={`w-${((len > 2) ? '1/5' : '2/5')} h-12 bg-white border-2 border-blue-300 rounded-3xl`}>
      <Image src={myImage} alt='abstract' className='p-1 h-full w-full rounded-3xl' />
    </div>
  )
}

export default SponsorCard
