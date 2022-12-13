import 'bootstrap/dist/css/bootstrap.min.css'
import MusicHome from './MusicHome'
import Home from './Home.js'
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
        </Routes>
      </div>
    </>
  );
}

export default App;
