import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Prototype1 from './components/prototypes/Prototype1';
import Prototype2 from './components/prototypes/Prototype2';
import Prototype3 from './components/prototypes/Prototype3';
import Prototype4 from './components/prototypes/Prototype4';
import Prototype5 from './components/prototypes/Prototype5';
import Prototype6 from './components/prototypes/Prototype6';
import Prototype7 from './components/prototypes/Prototype7';
import Prototype8 from './components/prototypes/Prototype8';
import Prototype9 from './components/prototypes/Prototype9';
import Prototype10 from './components/prototypes/Prototype10';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prototype1" element={<Prototype1 />} />
        <Route path="/prototype2" element={<Prototype2 />} />
        <Route path="/prototype3" element={<Prototype3 />} />
        <Route path="/prototype4" element={<Prototype4 />} />
        <Route path="/prototype5" element={<Prototype5 />} />
        <Route path="/prototype6" element={<Prototype6 />} />
        <Route path="/prototype7" element={<Prototype7 />} />
        <Route path="/prototype8" element={<Prototype8 />} />
        <Route path="/prototype9" element={<Prototype9 />} />
        <Route path="/prototype10" element={<Prototype10 />} />
      </Routes>
    </Router>
  );
}

export default App;
