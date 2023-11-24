import React from 'react'
import SponsorCategory from './SponsorCategory'

const OurSponsors = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-evenly'>
      <div className='text-5xl font-starlord-1'>Our Sponsors</div>

      <div className='h-4/6 w-4/5 flex justify-center flex-wrap gap-y-2'>
        <SponsorCategory category='Title Sponsors' sponsors={8} />
        <SponsorCategory category='Coding Partners' sponsors={4} />
        <SponsorCategory category='Fashion Partners' sponsors={3} />
        <SponsorCategory category='Hackathon Partners' sponsors={2} />
        <SponsorCategory category='Travel Partners' sponsors={1} />
      </div>

      <div className='flex flex-col items-center gap-2'>
        <div className='text-center text-xl'>Want to Sponsor?</div>
        <div className='border-2 text-center p-3 text-xl border-b-8 border-blue-500 rounded-tl-2xl cursor-pointer'>Contact Us</div>
      </div>
    </div>
  )
}

export default OurSponsors
