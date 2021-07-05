import React from "react";
import "./Web13661.css";

function Web13661(props) {
  const { overlapGroup, welcome, text1 } = props;

  return (
    <div class="container-center-horizontal">
      <div className="web-1366-1 screen">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="overlap-group1">
            <div className="rectangle-2"></div>
            <img className="welcome" src={welcome} />
          </div>
          <div className="rectangle-3 border-1px-dove-gray"></div>
          <div className="overlap-group2 border-1px-dove-gray">
            <div className="text-1 segoeui-regular-normal-dove-gray-20px">{text1}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web13661;
