import 'bootstrap/dist/css/bootstrap.min.css'
import MusicHome from './MusicHome'
import Home from './Home.js'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/musichome">Login</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path='/' element={< Home/>}></Route>
          <Route exact path='/musichome' element={< MusicHome/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
