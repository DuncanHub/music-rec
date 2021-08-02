import React from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

function LogIn(props) {
  const {
    overlapGroup,
    logIn,
    inputType,
    inputPlaceholder,
    inputType2,
    inputPlaceholder2,
    spanText,
    spanText2,
    logIn2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="log-in screen">
        <div className="overlap-group-5" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="flex-col-1">
            <div className="overlap-group1-2">
              <div className="log-inname"></div>
              <img className="log-in-1" src={logIn} />
            </div>
            <div className="overlap-group4 border-1px-romance">
              <textarea
                className="username-1 segoeui-regular-normal-dove-gray-40px"
                name="username-8"
                placeholder={inputPlaceholder}
                type={inputType}
                required
              ></textarea>
            </div>
            <div className="overlap-group2-3 border-1px-romance">
              <textarea
                className="password-1 segoeui-regular-normal-dove-gray-40px"
                name="password-91"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              ></textarea>
            </div>
            <Link to="/signup" className="align-self-flex-center">
              <div className="new-sign-in-here">
                <span className="centurygothic-regular-normal-white-45px">{spanText}</span>
                <span className="span1 centurygothic-regular-normal-white-45px">{spanText2}</span>
              </div>
            </Link>
          </div>
          <div className="overlap-group3-1">
            <Link to="/authorize">
              <div className="log-in-button smart-layers-pointers border-1px-fair-pink"></div>
            </Link>
            <div className="log-in-2 centurygothic-regular-normal-white-45px">{logIn2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
