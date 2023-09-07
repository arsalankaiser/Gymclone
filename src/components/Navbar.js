
import React, { useState } from "react";
import logo from "../Image/logo.png";
import { Link, NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
// ...

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const changeBackground =()=>{
  if(window.scrollY>=150){
    setNav(true)
  }
  else{
    setNav(false)
  }
}
window.addEventListener("scroll",changeBackground)
  return (
    <div>
      <nav className={nav ? "nav active" : "nav"}>
        <Link to="/" className="logo"> {/* Link to the home route */}
          <img src={logo} alt="" />
        </Link>
        {/* ... */}
        <ul className="menu">
          <li>
            <NavLink to="/" exact activeClassName="active">Headers</NavLink>
          </li>
          <li>
            <NavLink to="/features" activeClassName="active">Features</NavLink>
          </li>
          <li>
            <NavLink to="/offers" activeClassName="active">Offers</NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
