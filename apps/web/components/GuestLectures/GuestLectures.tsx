import React, {useRef, useEffect} from 'react'
import GLcard from './GLcard'

const GuestLectures = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  
  const scrollNext = () => {
    if(scrollRef.current && scrollRef.current.offsetWidth - scrollRef.current.scrollLeft > 8 ){
      console.log(scrollRef.current.scrollLeft)
      scrollRef.current.scroll({
        left: scrollRef.current.scrollLeft + (cardRef.current?.offsetWidth! + 8),
        behavior: 'smooth'
      });
    }
  };

  const scrollPrev = () => {
    if(scrollRef.current && scrollRef.current.scrollLeft>=cardRef.current?.clientWidth!){
      console.log(scrollRef.current.scrollLeft)
      scrollRef.current.scroll({
        left: scrollRef.current.scrollLeft - (cardRef.current?.offsetWidth! + 8),
        behavior: 'smooth',
      });
    }
  }

  useEffect(() => {
    if(scrollRef.current)
      scrollRef.current.scrollLeft = 8;
  }, [scrollRef.current])
  

  return (
    <div className='w-full h-4/5 flex flex-col items-center justify-between'>
      <div className='text-4xl sm:text-5xl md:text-7xl xl:text-9xl'>Guest Lectures</div>

      <div className='h-4/6 w-4/5 flex overflow-x-auto gap-2 px-2 gCardResponsive' ref={scrollRef}>
        <GLcard forwardedRef={cardRef} />
        <GLcard forwardedRef={cardRef} />
        <GLcard forwardedRef={cardRef} />
        <GLcard forwardedRef={cardRef} />
        <GLcard forwardedRef={cardRef} />
        <GLcard forwardedRef={cardRef} />
      </div>

      <div className='w-1/2 pt-2 flex justify-evenly'>
        <div className='border-2 w-full md:w-2/5 sm:w-1/2 text-center py-3 text-xl border-b-4 border-blue-500 rounded-tl-2xl cursor-pointer mr-2' onClick={scrollPrev}>Prev</div>
        <div className='border-2 w-full md:w-2/5 sm:w-1/2 text-center py-3 text-xl border-b-4 border-blue-500 rounded-tr-2xl cursor-pointer' onClick={scrollNext}>Next</div>
      </div>
    </div>
  )
}

export default GuestLectures
