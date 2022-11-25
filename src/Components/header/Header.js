import React from "react";

//CSS IMPORT
import "./Header.css";

// COMPONENTS IMPORTS
import TopHeader from "./TopHeader.js";
import BottomHeader from "./BottomHeader.js";

const Header = () => {
  return (
    <>
      <TopHeader />
      <BottomHeader />
    </>
  );
};

export default Header;
