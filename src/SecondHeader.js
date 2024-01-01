import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./secondHeader.css";
function SecondHeader() {
  return (
    <div className="secHeader">
      <div className="options__all">
        <div className="header__MenuIcon">
          <MenuIcon />
        </div>
        <div className="allText">All</div>
      </div>

      <div className="options">Today's Deals</div>
      <div className="options">Registry</div>
      <div className="options">Customer Service</div>
      <div className="options">Gift Cards</div>
      <div className="options">Sell</div>
    </div>
  );
}

export default SecondHeader;
