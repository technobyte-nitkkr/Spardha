import "./Navbar.css";
import logo from "/public/TechnoLogo.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Navbar({ setProfileVisible }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth > 900);

  useEffect(() => {
    const updateIsMenuOpen = () => {
      setIsMenuOpen(window.innerWidth > 900);
    };
    updateIsMenuOpen();
    window.addEventListener("resize", updateIsMenuOpen);
    return () => {
      window.removeEventListener("resize", updateIsMenuOpen);
    };
  }, []);

  const login = useGoogleLogin({
    onSuccess: async (credentialResponse) => {
      //  get token id
      const TOKEN = credentialResponse.access_token;

      if (localStorage.getItem("ts20token")) {
        const data = JSON.parse(localStorage.getItem("userdata"));
        const token = localStorage.getItem("ts20token");
        return;
      }

      try {
        const response = await axios.post("/login", {
          idToken: TOKEN,
        });

        const JWT = response.data.data.token;

        // set token in local storage

        localStorage.setItem("ts20token", JWT);
        localStorage.setItem(
          "userdata",
          JSON.stringify(response.data.data.user)
        );
        setIsLoggedIn(true);
      } catch (error) {
        console.log(error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
    // flow: "auth-code",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      {/* <TimeLine show={isOpen} onClickOutside={closeOverlay} /> */}
      <Link to="/" className="logoLink">
        <img src={logo} alt="Technobyte" className="tb-logo" />
      </Link>

      <div href="#" className="toggle-button" onClick={toggleMenu}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div
        className="navbar-links"
        id="toToggle"
        onClick={toggleMenu}
        style={{ visibility: isMenuOpen ? "visible" : "hidden" }}
      >
        <ul className="navMenus">
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#events" }}>
              <span>EVENTS</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#sponsors" }}>
              <span>SPONSORS</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#lectures" }}>
              <span>LECTURES</span>
            </Link>
          </li>
          <li className="navbarItem">
            <Link to={{ pathname: "/", hash: "#about" }}>
              <span>ABOUT</span>
            </Link>
          </li>
          <li className="navbarItem">
            <a href="/team">
              <span>TEAM</span>
            </a>
          </li>
          <li className="navbarItem mr-4 nav-button">
            {localStorage.getItem("ts20token") || isLoggedIn ? (
              <span
                onClick={() => {
                  setProfileVisible(true);
                }}
                style={{ cursor: "pointer" }}
              >
                Profile
              </span>
            ) : (
              <span onClick={() => login()}>
                <Button
                  symbol={"▶️"}
                  btnText={"Login"}
                  btnHeight="100%"
                  btnWidth={"100%"}
                  onClick={() => login()}
                />
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}