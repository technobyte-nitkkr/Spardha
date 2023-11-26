import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface SponsorData{
  imageUrl: string,
  name: string,
  targetUrl: string,
}
const SponsorCard = ({ len,sponsor }: { len: number,sponsor: SponsorData }): JSX.Element => {
  return (
    <div className={`${((len > 2) ? 'w-1/5' : 'w-2/5')} h-12 bg-white border-2 border-blue-300 rounded-3xl`}>
      <Link className='h-full w-1/6' href={sponsor.targetUrl} target='_blank'>
        <Image alt='abstract' className='p-1 h-full w-full rounded-3xl' height={1000} src={sponsor.imageUrl} width={1000} />
      </Link>
    </div>
  )
}

export default SponsorCard
