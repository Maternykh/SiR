import React, { useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import Input from "./Input";
import Spis from "./Spis";
const Navigation = () => {
  const [shownnav, setIsShownnav] = useState(false);
  const [showninp, setIsShowninp] = useState(false);
  return (
    <>
      {!showninp && (
        <div
          className="nav-icon"
          onClick={() => setIsShownnav((current) => !current)}
        >
          <HiMenuAlt1 className="icon" />
        </div>
      )}
      {showninp && <Input />}
      {!shownnav && (
        <div className="logo">
          <div className="orange-text">Sweet</div>
          <div className="green-text">dreams</div>
        </div>
      )}
      {!shownnav && (
        <div
          className="icon-cont"
          onClick={() => setIsShowninp((current) => !current)}
        >
          <AiOutlineSearch className="icon" />
        </div>
      )}

      {shownnav && (
        <div className="another-list">
          <Spis />
        </div>
      )}

      <div className="ul">
        <Spis />
      </div>
    </>
  );
};

export default Navigation;
