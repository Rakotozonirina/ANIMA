import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Nomatch from './actions/Nomatch';
import About from './pages/About';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Nomatch/>} />
        <Route path='/about' element={<About/>} />
        <Route path="/shop" element={<Shop/>} />
      </Routes>
    </Router>
  );
}

export default App;
