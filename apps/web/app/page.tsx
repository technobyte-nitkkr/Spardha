import React from "react";
import Head from 'next/head';
import ThreeScene from "../components/Home/Home";
const Page = () => {
  <Head>
    <link
      rel="preload"
      href="public/assets/fonts/Orbitron.ttf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
    <link
      rel="preload"
      href="public/assets/fonts/Starlord.otf"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  </Head>
  return <ThreeScene />;
};

export default Page;
