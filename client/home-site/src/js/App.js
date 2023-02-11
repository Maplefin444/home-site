import React, { useState, useEffect } from 'react';
import './app.css';
import thock from './../images/thock.png';
import rose from './../images/rose.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPlay, faMusic, faCalendar, faComputer, faGamepad } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon.js'
import Weather from './Weather.js'

function App() {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [date, setDate] = useState(new Date());
  const [weather, setWeather] = useState();
  useEffect(() => {
    const refreshTimer = setInterval(() => {
      setDate(new Date());
    }, 10 * 1000);
    return () => {
      clearInterval(refreshTimer);
    }
  }, []);
  const time = date.toLocaleTimeString('en', { hour: 'numeric', hour12: true, minute: 'numeric' });
  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const apiLink = 'https://api.openweathermap.org/data/2.5/weather?lat=43.6532&lon=-79.3832&appid=d54a2e1f91d2f1e44d6890129a09c4db&units=metric';
  useEffect(() => {
    fetch(apiLink).then((res) => {
      return res.json();
    }).then((data) => {
      setWeather(data);
    });
  }, []);

  return (
    <div className='container'>
      <div className='info'>
        <div className='time'>
          {time}
        </div>
        <div className='date'>
          {month + " " + day}
        </div>
      </div>

      <Weather data={weather} />

      <div className='icon'>
        <Icon data={weather} />
      </div>

      <div className='buttons'>
        <a className='button' draggable="false" target="_blank" href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>
          <FontAwesomeIcon icon={faEnvelope} size='lg' />
        </a>
        <a className='button' draggable="false" target="_blank" href='https://www.youtube.com/'>
          <FontAwesomeIcon icon={faPlay} size='lg' />
        </a>
        <a className='button' draggable="false" target="_blank" href='https://open.spotify.com/'>
          <FontAwesomeIcon icon={faMusic} size='lg' />
        </a>
        <a className='button' draggable="false" target='_blank' href='https://calendar.google.com/calendar/u/0/r'>
          <FontAwesomeIcon icon={faCalendar} size='lg' />
        </a>
        <a className='button' draggable="false" target='_blank' href='https://pcpartpicker.com/'>
          <FontAwesomeIcon icon={faComputer} size='lg' />
        </a>
        <a className='button' draggable="false" target='_blank' href='https://wiseoldman.net/players/Maplefin'>
          <FontAwesomeIcon icon={faGamepad} size='lg' />
        </a>
      </div>

      <div draggable="false" className='graphicOne'>
        <img src={thock}></img>
      </div>

      <div className='line'></div>

      <div draggable="false" className='graphicTwo'>
        <img src={rose}></img>
      </div>
    </div>
  );
}

export default App;
