import React from "react";

// REACT ICONS IMPORT
import { RiBookMarkLine } from "react-icons/ri";

const BottomHeader = () => {
  return (
    <div className="bottom_header">
      <RiBookMarkLine className="icon" />
      <p>
        facebook / <span>react</span>{" "}
        <sup>
          <small>Public</small>
        </sup>
      </p>
    </div>
  );
};

export default BottomHeader;
