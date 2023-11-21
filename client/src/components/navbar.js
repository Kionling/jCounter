import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
function Navbar() {
  return(
    <div>
    <nav>
      <div class="nav-wrapper #37474f blue-grey darken-3 ">
        <Link to="/" className="brand-logo center">
          Job Application Counter
        </Link>
      </div>
    </nav>
  </div>
  )
}

export default Navbar; 