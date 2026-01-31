import React from "react";
import "./Header.css";
import netflix from "../../assets/images/Netflix.png";
import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="header_outer_container">
        <div className="header_container">
          <div className="header_left">
            <ul>
              <li>
                <img src={netflix} alt="" />
              </li>
              <li>Home</li>
              <li>Series</li>
              <li>Films</li>
              <li>New & popular</li>
              <li>My list</li>
              <li>Browse by languages</li>
            </ul>
          </div>
          <div className="header_right">
            <ul>
              <li>
                <IoMdSearch />
              </li>
              <li>
                <CgProfile />
              </li>
              <li>
                <IoIosNotificationsOutline />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
