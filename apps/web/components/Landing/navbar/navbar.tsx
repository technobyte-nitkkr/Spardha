import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import logo from "public/assets/logo.png";
import menu from "public/menu.svg";
import Link from "next/link";
import "./navbar.css";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../firebaseconfig";

const Drawer = ({
  onClose,
  isDrawerOpen,
  handleGoogleSignInProp,
  result,
  user,
}: {
  onClose: () => void;
  isDrawerOpen: boolean;
  handleGoogleSignInProp: () => void;
  result: boolean;
  user: { name: string; photo: string };
}) => (
  <AnimatePresence>
    {isDrawerOpen && (
      <motion.div
        className="drawer fixed top-0 left-0 w-full bg-[#1A2487bf] p-8 text-center font-orbitron md:text-xl rounded-md backdrop-blur-md z-[1000]"
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
          {!result ? (
            <button
              className="bg-[#367CFF] rounded-tl-[16px] text-center py-[8px] px-[12px] gap-8 w-full font-orbitron"
              onClick={handleGoogleSignInProp}
            >
              Register
            </button>
          ) : (
            <div className="flex h-full justify-center items-center gap-2">
              <p className="h-full flex justify-end items-center text-end w-fit">
                {user.name}
              </p>
              <Image
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={user.photo}
                alt="Bordered avatar"
                width={40}
                height={40}
              />
            </div>
          )}
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
  const [result, setResult] = useState<boolean>(false);
  const [user, setUser] = useState<{ name: string; photo: string }>({
    name: "",
    photo: "",
  });
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((_) => {
        localStorage.setItem("userNameSpardha", auth.currentUser?.displayName ?? ""); //logic for user name
        localStorage.setItem("userImageSpardha", auth.currentUser?.photoURL ?? ""); //logic for user photo
        setResult(true);
        setUser({
          name: auth.currentUser?.displayName ?? "",
          photo: auth.currentUser?.photoURL ?? "",
        });
      })
      .catch((_) => {
        setResult(false);
      });
  };
  const logout = (): void => {
    localStorage.removeItem("userNameSpardha");
    localStorage.removeItem("userImageSpardha");
    window.location.reload();
  }
  useEffect(() => {
    setUser({
      name: localStorage.getItem("userNameSpardha") ?? "",
      photo: localStorage.getItem("userImageSpardha") ?? "",
    });
    setResult(
      localStorage.getItem("userNameSpardha") !== null &&
        localStorage.getItem("userImageSpardha") !== null
    );
  }, []);
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
    <div className="w-screen flex flex-row justify-center p-5 h-[15%] relative z-[1000]">
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
        <div className="hidden md:block h-full">
          {!result ? (
            <button
              className="bg-[hsl(219,100%,61%)] rounded-tl-[16px] text-center py-[8px] px-[12px] gap-8 w-full font-orbitron"
              onClick={handleGoogleSignIn}
            >
              Register
            </button>
          ) : (
            <div className="flex h-full justify-center items-center gap-2">
              <p className="h-full flex justify-end items-center">
                {user.name}
              </p>
              <Image
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={user.photo}
                alt="Bordered avatar"
                width={40}
                height={40}
                title="Logout"
                onClick={logout}
              />
            </div>
          )}
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
        <Drawer
          onClose={navtoggle}
          isDrawerOpen={isDrawerOpen}
          handleGoogleSignInProp={handleGoogleSignIn}
          result={result}
          user={user}
        />
      </div>
    </div>
  );
};

export default Navbar;
