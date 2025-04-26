import React, { useState, useEffect } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaUserLock } from "react-icons/fa";
import { GiWheelbarrow } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import imagens from "../../utils/imagens";
import "./header.css";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 955);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 955);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isMobile && (
        <div className="header-dois">
          <IoMenu className="btn-menu" />

          <a href="./home" className="container-logo">
            <img
              src={imagens.logo2.src}
              alt={imagens.logo2.name}
              className="logo2"
            />
          </a>

          <div className="box-comprar-login-2">
            <button className="btn-login-2">
              <FaUserLock className="icon-card-2" />
            </button>
            <button className="btn-comprar-2">
              <div className="icon-wrapper">
                <GiWheelbarrow className="icon-compra-2" />
                <span className="notificacao">0</span>
              </div>
            </button>
          </div>
        </div>
      )}

      <div className="nav">
        <div className="nav-box">
          <img
            src={imagens.logo.src}
            alt={imagens.logo.name}
            className="logo"
          />
          <div className="barra-pesquisa">
            <input
              type="text"
              placeholder="Find everything for professional farming"
            />
            <IoMdSearch className="icon" />
          </div>
          <div className="nav-box-login-comprar">
            <button className="btn-login">
              <FaUserLock className="icon-cart" />
              Login
            </button>
            <button className="btn-comprar">
              <div className="icon-wrapper">
                <GiWheelbarrow className="icon-compra" />
                <span className="notificacao">0</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
