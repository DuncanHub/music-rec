import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup(props) {
  const {
    overlapGroup,
    signUp,
    inputType,
    inputPlaceholder,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    signUp2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="signup screen">
        <div className="overlap-group-4" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="flex-col">
            <div className="overlap-group5">
              <div className="signup-box"></div>
              <img className="sign-up" src={signUp} />
            </div>
            <div className="overlap-group-3 border-1px-romance">
              <textarea
                className="username segoeui-regular-normal-dove-gray-40px"
                name="username-8"
                placeholder={inputPlaceholder}
                type={inputType}
                required
              ></textarea>
            </div>
            <div className="overlap-group-3 border-1px-romance">
              <textarea
                className="password segoeui-regular-normal-dove-gray-40px"
                name="password-9"
                placeholder={inputPlaceholder2}
                type={inputType2}
                required
              ></textarea>
            </div>
            <div className="overlap-group-3 border-1px-romance">
              <textarea
                className="re-type-password segoeui-regular-normal-dove-gray-40px"
                name="re-type-password-10"
                placeholder={inputPlaceholder3}
                type={inputType3}
                required
              ></textarea>
            </div>
          </div>
          <div className="overlap-group2-2">
            <Link to="/authorize">
              <div className="sign-up-button smart-layers-pointers border-1px-fair-pink"></div>
            </Link>
            <div className="sign-up-1 centurygothic-regular-normal-white-45px">{signUp2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
