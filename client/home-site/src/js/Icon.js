import React from 'react'
import { faSun, faCloudRain, faCloudBolt, faSnowflake, faSmog, faCloud } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon(props) {
    let code;
    try {
        code = props.data.weather[0].id;
    }
    catch (e) {
        code = 800;
    }

    if (code >= 200 && code <= 299)
        return (<FontAwesomeIcon icon={faCloudBolt} size='xl' />)
    if (code >= 300 && code <= 399)
        return (<FontAwesomeIcon icon={faCloudRain} size='xl' />)
    if (code >= 500 && code <= 599)
        return (<FontAwesomeIcon icon={faCloudRain} size='xl' />)
    if (code >= 600 && code <= 699)
        return (<FontAwesomeIcon icon={faSnowflake} size='xl' />)
    if (code >= 700 && code <= 799)
        return (<FontAwesomeIcon icon={faSmog} size='xl' />)
    if (code == 800)
        return (<FontAwesomeIcon icon={faSun} size='xl' />)
    if (code > 800 && code < 899)
        return (<FontAwesomeIcon icon={faCloud} size='xl' />)

}
