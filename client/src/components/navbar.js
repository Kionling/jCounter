import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
function Navbar() {
  return(
    <div>
    <nav>
      <div class="nav-wrapper #000000 black">
        <Link to="/" className="brand-logo center franklin">
          Job Application Counter
        </Link>
      </div>
    </nav>
  </div>
  )
}

export default Navbar; 