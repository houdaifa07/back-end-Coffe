import './App.css';
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Navbare from './ComponentGlobal/Navbare';
import Footer from './ComponentGlobal/Footer';
import Home from './Page/home';
import Shop from './Page/shop'
import { Contacte } from './Page/contact';
import { useState } from 'react';
import Addproduct from './Page/add_produit_admin';
import Testapi from './Page/apitest';
import { Details } from './Page/detaillCoffe';


function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div >
      <Navbare onSearch={setSearchTerm} />
      <Routes>
        <Route path="/test" element={<Testapi />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop searchTerm={searchTerm} />} />
        <Route path="/detaillCoffe" element={<Details />} />
        <Route path="/contacte" element={<Contacte />} />
        <Route path="/Add_product" element={<Addproduct />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
