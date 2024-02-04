import React from 'react'
import SponsorCard from './SponsorCard'
import './sponsors.css'
interface SponsorData{
  imageUrl: string,
  name: string,
  targetUrl: string,
}

const SponsorCategory = ({ category, sponsors }: { category: string, sponsors: SponsorData[] }): JSX.Element => {
  //const nums = new Array(sponsors).fill(0) // never need to reassign this array, so it's fine to use const

  return (
    <div className={`${sponsors.length>2?'col-span-2':''} flex flex-col items-center gap-2 category_card md:m-5 m-2`}>
      <div className='category_title md:text-2xl text-md text-center'>{category}</div>
      <div className='flex justify-evenly w-5/6 flex-wrap h-fit gap-3 '>
        {sponsors.map((item: SponsorData,index:number) => {
          return(
            <SponsorCard key={index} sponsor={item} corrLength={sponsors.length}/>
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