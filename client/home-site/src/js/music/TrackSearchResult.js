import React from 'react'
import "./dashboard.css"

export default function TrackSearchResult({ track }) {
    return (
        <div className="card" style={{ cursor: "pointer" }}>
            <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
            <div className="data">
                <div>{track.title}</div>
                <div className="text-muted">{track.artist}</div>
            </div>
        </div>
    )
}