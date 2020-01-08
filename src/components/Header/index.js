import React from "react";
import { Link } from "react-router-dom";

import HeaderLogo from "../../Images/logo-YTS.svg";
// import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header header_postion">
        <div className="header header_first">
          <div className="header_logo">
            <img src={HeaderLogo} alt="YTS" />
          </div>
          <p>HD movies at the smallest file size</p>
        </div>
        <div className="header header_second">
          <input className="header_quick" placeholder="Quick Search" />
          <Link
            className="header_btn"
            to={{
              pathname: "/",
            }}
          >Home</Link>
          <Link
            className="header_btn"
            to={{
              pathname: "/Browse",
            }}
          >Browse Movies</Link>
        </div>
      </header>
    );
  }
}

export default Header;
