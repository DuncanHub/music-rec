import React from 'react'

export default function TrackSearch({ track, chooseTrack }) {

    function handlePlay() {
       chooseTrack(track) 
    }

    return (
        <div className="d-flex m-2 align-items-center" style={{ cursor: "pointer" }} onClick={handlePlay}>
            <img src={track.albumUrl} style={{ height: '64px', width: '64px' }} />
            <div className="ml-3 p-2">
                <div className="text-white">{track.title}</div>
                <div className="text-white fw-bolder">{track.artist}</div>
            </div>
        </div>
    )
}
