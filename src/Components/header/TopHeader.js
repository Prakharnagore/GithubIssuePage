import React from "react";

// REACT ICONS IMPORT
import { IoMdArrowDropdown } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const TopHeader = () => {
  return (
    <header>
      <div className="left flex mouse_pointer">
        <BsGithub className="logo" />
        <p>Github Issues</p>
      </div>
      <div className="right flex mouse_pointer">
        <FaUserAlt className="user_logo" />
        <IoMdArrowDropdown />
      </div>
    </header>
  );
};

export default TopHeader;
