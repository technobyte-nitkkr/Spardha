import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SponsorData{
  imageUrl: string,
  name: string,
  targetUrl: string,
  alt?: string
}
const SponsorCard = ({sponsor}: { sponsor: SponsorData}): JSX.Element => {
  return (
    <div className={`h-7 md:h-11 sm:w-2/5 sm:h-14 w-full bg-white border-2 border-blue-300 rounded-3xl`}>
      <Link className='h-full w-1/6' href={sponsor.targetUrl || ""} target='_blank'>
        <Image alt={sponsor.alt || ""} className='p-1 h-full  rounded-3xl object-contain' height={1000} src={sponsor.imageUrl} width={1000} />
      </Link>
    </div>
  )
}

export default SponsorCard
