import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import usflag from "../images/us-flag.png";
import euflag from "../images/eu-flag.png";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      na: "North America",
      eu: "Europe",
    };
  }
  render() {
    return (
      <>
        <header className="header-container">
          <div className="na-wrapper">
            <Link to="/" className="links">
              {this.state.na}{" "}
              <span>
                <img src={usflag} alt="usflag" className="icons" />
              </span>
            </Link>
          </div>
          <div className="eu-wrapper">
            <Link to="/" className="links">
              {this.state.eu}{" "}
              <span>
                <img src={euflag} alt="euflag" className="icons" />
              </span>
            </Link>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
