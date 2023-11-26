import React from 'react'
import SponsorCard from './SponsorCard'

interface SponsorData{
  imageUrl: string,
  name: string,
  targetUrl: string,
}

const SponsorCategory = ({ category, sponsors }: { category: string, sponsors: SponsorData[] }): JSX.Element => {
  //const nums = new Array(sponsors).fill(0) // never need to reassign this array, so it's fine to use const

  return (
    <div className={`flex flex-col items-center gap-2 ${(sponsors.length > 2) ? 'w-full' : 'w-1/2'} category`}>
<div className='text-2xl lg:text-1xl '>{category}</div>
<style jsx>{`
  @media (max-width: 510px) {
    .text-2xl {
      font-size: 3rem; /* Adjust the font size for 510px */
    }
    .lg\:text-1xl {
      font-size: 1rem; /* Adjust the font size for 510px for lg breakpoint */
    }
  }

  @media (max-width: 350px) {
    .text-2xl {
      font-size: 0.7rem; /* Adjust the font size for 350px */
    }
    .lg\:text-1xl {
      font-size: 0.7rem; /* Adjust the font size for 350px for lg breakpoint */
    }
  }
`}</style>

      <div className='flex justify-evenly w-5/6 flex-wrap h-fit gap-3'>
        {sponsors.map((item: SponsorData,index:number) => {
          return(
            <SponsorCard key={index} len={sponsors.length} sponsor={item} />
          );
        })}
      </div>
    </div>
  )
}

export default SponsorCategory

// {
//   nums.map((i: number | undefined) => {
//     return (
//       <SponsorCard key={i} len={sponsors} />
//     )
//   })
// }