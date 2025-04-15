import './App.css';
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbare from './ComponentGlobal/Navbare';
import Footer from './ComponentGlobal/Footer';
import Home from './Page/home';
import Shop from './Page/shop'
import { Contacte } from './Page/contact';
import { useState } from 'react';




function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div >
      <Navbare onSearch={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop searchTerm={searchTerm} />} />
        <Route path="/contacte" element={<Contacte />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
