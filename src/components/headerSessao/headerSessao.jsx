import React from "react";
import { ChevronDown } from "lucide-react";
import { GiPriceTag } from "react-icons/gi";
import "./HeaderSessao.css";
import { RiDiscountPercentLine } from "react-icons/ri";

function HeaderSessao() {
  return (
    <div className="sessao-nav">
      <nav className="nav-menu">
        <div className="nav-list">
          <ul className="nav-list-box">
            <li className="nav-item">
              Pigs <ChevronDown className="nav-icon" />
            </li>
            <li className="nav-item">
              Cattle <ChevronDown className="nav-icon" />
            </li>
            <li className="nav-item">
              Poultry <ChevronDown className="nav-icon" />
            </li>
            <li className="nav-item">
              Other <ChevronDown className="nav-icon" />
            </li>
          </ul>
          <div className="nav-list-item">
            <a className="nav-item">
              <RiDiscountPercentLine className="nav-icon" /> Deals
            </a>
            <a className="nav-item">
              <GiPriceTag className="nav-icon" />
              New
            </a>
          </div>
        </div>
        <a className="nav-item device">Advice</a>
      </nav>
    </div>
  );
}

export default HeaderSessao;
