import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";

function Welcome(props) {
  const { overlapGroup, welcome, title, place } = props;

  return (
    <div className="container-center-horizontal">
      <div className="welcome screen">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="overlap-group1">
            <div className="welcome2"></div>
            <img className="welcome-1" src={welcome} />
          </div>
          <div className="overlap-group2">
            <Link to="/log-in">
              <div className="link smart-layers-pointers border-1px-ebb"></div>
            </Link>
            <h1 className="title centurygothic-regular-normal-white-55px">{title}</h1>
          </div>
          <div className="overlap-group3">
            <Link to="/signup">
              <div className="link smart-layers-pointers border-1px-ebb"></div>
            </Link>
            <div className="place centurygothic-regular-normal-white-55px">{place}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
