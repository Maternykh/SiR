import React from "react";
import Contact from "./Contact";
import Location from "./Location";
import Navigation from "./Navigation";
const Header = () => {
  return (
    <div className="Header">
      <Location />
      <Navigation />
      <Contact />
    </div>
  );
};

export default Header;
