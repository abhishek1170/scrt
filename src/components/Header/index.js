import React from "react";
import { Link } from "react-router-dom";

import HeaderLogo from "../../Images/logo-YTS.svg";
import QuickSearch from "./Quickbar";

class Header extends React.Component {
  render() {
    return (
      <header className="header header_postion border-bottom-light">
        <div className="header header_first">
          <div className="header_logo">
            <img src={HeaderLogo} alt="YTS" />
          </div>
          <p>HD movies at the smallest file size</p>
        </div>
        <div className="header header_second">
          <QuickSearch />
          <Link
            className="header_btn"
            to={{
              pathname: "/"
            }}
          >
            Home
          </Link>
          <Link
            className="header_btn"
            to={{
              pathname: "/Browse"
            }}
          >
            Browse Movies
          </Link>
          <div className="header_login">
            <span className="header_login--login">Login</span>
            <span className="header_login--register">Register</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
