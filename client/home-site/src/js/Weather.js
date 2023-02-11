import React from 'react'

export default function Weather(props) {
    let out;
    try {
        out = Math.round(props.data.main.feels_like) + "°C  " + props.data.weather[0].main;
    }
    catch (e) {
        out = 'Loading...';
    }
    return (
        <div className='weather'>
            {out}
        </div>
    )
}
