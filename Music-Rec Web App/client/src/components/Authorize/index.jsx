import React from "react";
import "./Authorize.css";

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=73f2fc893d5e420c8abe31fe1f9a3696&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

function Authorize(props) {
  const { overlapGroup, spotifyLogIn, authorize } = props;

  return (
    <div className="container-center-horizontal">
      <div className="authorize screen">
        <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="overlap-group2-1">
            <div className="log-in-name"></div>
            <img className="spotify-log-in" src={spotifyLogIn} />
          </div>
          <div className="overlap-group1-1">
            <div className="authorize-button smart-layers-pointers border-1px-ebb"></div>
            <div className="authorize-1 centurygothic-regular-normal-white-55px" href={AUTH_URL}>{authorize}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorize;
