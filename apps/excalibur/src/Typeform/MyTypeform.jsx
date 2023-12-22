import './MyTypeform.css'

import React, { useEffect } from 'react';

export default function Typeform(){
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    
    // Set the script source to the Typeform embed script
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className='typeform_button' data-tf-live="01HHRM3NH9FG268WFQ9BYBM1Y0"></div>
      {/* <script src="//embed.typeform.com/next/embed.js"></script> */}
    </>
  )
}
