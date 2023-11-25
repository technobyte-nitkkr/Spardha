import React from 'react'
import SponsorCard from './SponsorCard'

const SponsorCategory = ({ category, sponsors }: { category: string, sponsors: number }): JSX.Element => {
  const nums = new Array(sponsors).fill(0) // never need to reassign this array, so it's fine to use const

  return (
    <div className={`flex flex-col items-center gap-2 ${(sponsors > 2) ? 'w-full' : 'w-1/2'} category`}>
      <div className='text-2xl'>{category}</div>
      <div className='flex justify-evenly w-5/6 flex-wrap h-fit gap-3'>
        {
          nums.map((i: number | undefined) => {
            return (
              <SponsorCard key={i} len={sponsors} />
            )
          })
        }
      </div>
    </div>
  )
}

export default SponsorCategory
