import React from "react";
import "./SongSearch.css";

function SongSearch(props) {
  const { overlapGroup, songSearch } = props;

  return (
    <div className="container-center-horizontal">
      <div className="songsearch screen">
        <div className="overlap-group-2" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <div className="songsearch-box"></div>
          <img className="song-search" src={songSearch} />
        </div>
      </div>
    </div>
  );
}

export default SongSearch;
