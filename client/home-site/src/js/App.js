import './app.css';
import thock from './../images/thock.png';
import rose from './../images/rose.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faEnvelope, faPlay, faMusic, faCalendar } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className='container'>
      <div className='info'>
        <div className='time'>
          24:00 AM
        </div>

        <div className='icon'>
          <FontAwesomeIcon icon={faSun} size='2xl' />
        </div>

      </div>



      <div className='buttons'>
        <a className='button'>
          <FontAwesomeIcon icon={faEnvelope} size='l' />
        </a>
        <a className='button'>
          <FontAwesomeIcon icon={faPlay} size='l' />
        </a>
        <a className='button'>
          <FontAwesomeIcon icon={faMusic} size='l' />
        </a>
        <a className='button'>
          <FontAwesomeIcon icon={faCalendar} size='l' />
        </a>
        <a className='button'>
          <FontAwesomeIcon icon={faEnvelope} size='l' />
        </a>
        <a className='button'>
          <FontAwesomeIcon icon={faEnvelope} size='l' />
        </a>
      </div>

      <div className='graphicOne'>
        <img src={thock}></img>
      </div>

      <div className='line'></div>

      <div className='graphicTwo'>
        <img src={rose}></img>
      </div>
    </div>
  );
}

export default App;
