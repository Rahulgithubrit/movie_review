import './App.css';
import Navbar from './compnents/Navbar';
import About from './compnents/About';
import Home from './compnents/Home';
import Contact from './compnents/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
