import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Header = () => {

  const navigate = useNavigate();

  const logoNavigate = () => {
    navigate('/')
  }

  return (
    <div>
      <div className="navbar justify-between bg-base-100">
        <div className="flex-1">
          <img onClick={logoNavigate} className="cursor-pointer" src={logo} alt="" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-3">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donation">Donation</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
