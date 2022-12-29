import 'bootstrap/dist/css/bootstrap.min.css'
import MusicHome from './music/MusicHome'
import Home from './Home.js'
import RSHome from './runescape/RSHome'
import Navbar from './reusable_components/Navbar.js'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musichome" element={<MusicHome />} />
          <Route path="/rshome" element={<RSHome />}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
