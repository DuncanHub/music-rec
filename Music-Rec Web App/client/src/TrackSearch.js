import React from 'react'

export default function TrackSearch({ track }) {
    return (
        <div className="d-flex m-2 align-items-center">
            <img src={track.albumUrl} style={{ height: '64px', width: '64px' }} />
            <div className="ml-3">
                { track.title }
            </div>
            <div className="text-muted">
                { track.artist }
            </div>
        </div>
    )
}