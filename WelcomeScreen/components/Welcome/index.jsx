import React from "react";
import "./Welcome.css";

function Welcome(props) {
  const { x2_Vi_Design_Ribbon_10, x1r9uD, place, text1, rpi_Xxxxxx, polygon1, logo } = props;

  return (
    <div class="container-center-horizontal">
      <div className="welcome-1 screen">
        <div className="overlap-group-1">
          <img className="x2vi-design-ribbon10" src={x2_Vi_Design_Ribbon_10} />
          <div className="x1 segoeui-regular-normal-dove-gray-20px">{x1r9uD}</div>
          <h1 className="place">{place}</h1>
          <div className="text-2">{text1}</div>
          <div className="rectangle-1 border-1px-dove-gray"></div>
          <div className="rpixxxxxx">{rpi_Xxxxxx}</div>
          <div className="rectangle-2-1 border-1px-dove-gray"></div>
          <img className="polygon-1" src={polygon1} />
          <img className="logo" src={logo} />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
