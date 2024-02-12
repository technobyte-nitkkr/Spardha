import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "public/assets/logo.png";
import menu from "public/menu.svg";
import Link from "next/link";
import "./navbar.css";
const Drawer = ({
  onClose,
  isDrawerOpen,
}: {
  onClose: () => void;
  isDrawerOpen: boolean;
}) => (
  <AnimatePresence>
    {isDrawerOpen && (
      <motion.div
        className="drawer fixed top-0 left-0 w-full bg-[#1A2487bf] p-8 text-center font-orbitron md:text-xl rounded-md backdrop-blur-md"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        style={{ opacity: 0.9, transition: "opacity 0.1s ease-in-out" }}
      >
        <button
          className="close-btn absolute top-4 right-4 text-4xl text-white"
          onClick={onClose}
        >
          &times;
        </button>

        <Link
          className="block mb-4 text-lg text-white hover:text-gray-300"
          href="/#Events"
          onClick={onClose}
        >
          Events
        </Link>
        <Link
          className="block mb-4 text-lg text-white hover:text-gray-300"
          href="/#Sponsors"
          onClick={onClose}
        >
          Sponsors
        </Link>
        <Link
          className="block mb-4 text-lg text-white hover:text-gray-300"
          href="/#GuestLectures"
          onClick={onClose}
        >
          Lectures
        </Link>
        <Link
          className="block mb-4 text-lg text-white hover:text-gray-300"
          href={"/About"}
          onClick={onClose}
        >
          About
        </Link>
        <Link
          className="block text-lg text-white hover:text-gray-300"
          href={"/Teams"}
          onClick={onClose}
        >
          Teams
        </Link>
        <div className="mt-4">
          <Link
            className="bg-[#367CFF] rounded-tl-[16px] text-center py-[8px] px-[12px] gap-8 w-full font-orbitron"
            href={"/Register"}
          >
            Register
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navtoggle = (): void => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDrawerOpen]);

  return (
    <div className="w-screen flex flex-row justify-center p-5 h-[15%]">
      <div className="nav_flex w-[80vw] flex flex-row justify-between items-center max-h-[60px]">
        <div className="logo h-full">
          <Image alt="logo" className="h-[50px] w-[50px] bgGlow" src={logo} />
        </div>
        <div
          className={`navbar links anchor_class bg-[#367cff3e] rounded-[90px] py-2 text-center border-2 border-[#367cff3e] m-2 font-orbitron md:text-xl hidden md:flex`}
        >
          <Link
            className="anchor_links px-6 text-lg text-white hover:text-gray-300"
            href="/#Events"
          >
            Events
          </Link>
          <Link
            className="anchor_links px-6 text-lg text-white hover:text-gray-300"
            href="/#Sponsors"
          >
            Sponsors
          </Link>
          <Link
            className="anchor_links px-6 text-lg text-white hover:text-gray-300"
            href="/#GuestLectures"
          >
            Lectures
          </Link>
          <Link
            className="anchor_links px-6 text-lg text-white hover:text-gray-300"
            href={"/About"}
          >
            About
          </Link>
          <Link
            className="anchor_links px-6 text-lg text-white hover:text-gray-300"
            href={"/Teams"}
          >
            Teams
          </Link>
        </div>
        {/* Register button visible only on screens larger than md */}
        <div className="hidden md:block">
          <Link
            className="bg-[#367CFF] rounded-tl-[16px] text-center py-[8px] px-[12px] gap-8 w-full font-orbitron"
            href={"/Register"}
          >
            Register
          </Link>
        </div>
        {/* Toggle button for smaller screens */}
        <button
          className={`btn p-2 md:p-6 w-14 h-14 md:w-[100px] md:h-[70px] flex items-center justify-center md:hidden bg-[#367cff3e] rounded-full border-2 border-[#367cff3e] m-2 ${isDrawerOpen ? "hidden" : ""}`}
          onClick={navtoggle}
        >
          {isDrawerOpen ? (
            <span className="text-4xl text-black">&times;</span>
          ) : (
            <Image
              alt="menu"
              className="h-[20px] w-[20px] md:h-[50px] md:w-[50px] bgGlow"
              src={menu as string}
            />
          )}
        </button>
        {/* Drawer component */}
        <Drawer onClose={navtoggle} isDrawerOpen={isDrawerOpen} />
      </div>
    </div>
  );
};

export default Navbar;
