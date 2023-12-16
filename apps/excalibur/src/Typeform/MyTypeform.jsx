import './MyTypeform.css'

import React, { useEffect } from 'react';

const MyTypeform = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;

    const div = document.createElement('div');
    div.className = "typeform_button"
    div.setAttribute('data-tf-live', '01HHRM3NH9FG268WFQ9BYBM1Y0');

    document.body.appendChild(div);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(div);
      document.body.removeChild(script);
    };
  }, []);

  return <div />;
};

export default MyTypeform;
