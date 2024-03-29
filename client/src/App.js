// App.js
import React from 'react';
import Typeofsports from './componets/sportType/Typeofsports';
import Frontpagecomponets from "./componets/Frontpagecomponets";
import LoginComponent from "./componets/Logincomponets";
import Navbarcomponets from "./componets/Header/Navbarcomponets";
import FooterComponets from './componets/footer/FooterComponets';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './componets/register/Register';
import ProductSelected from './componets/productsAccordingtoselected/ProductSelected';
import Productbuycomponets from './componets/productbuy/Productbuycomponets';
import Cartcomponets from './componets/carts/Cartcomponets';
import Historycomponets from './componets/shopinhistorydata/Historycomponets';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarcomponets />
        <Routes>
          <Route path="/primesport/login" element={<LoginComponent />} />
          <Route path="/primesport/register" element={<Register />} />

          <Route path="/primesport/productpagefirst" element={<Frontpagecomponets />} />
          <Route path="/primesport/sporttype/:type" element={<Typeofsports />} />
          
          <Route path="/primesport/producttype/:type" element={<ProductSelected />} />
          <Route path="/primesport/productbuy/:id" element={<Productbuycomponets />} />
          <Route path="/primesport/cart" element={<Cartcomponets />} />
          <Route path="/primesport/shopinghistory" element={<Historycomponets/>} />

          <Route path="*" element={<div><h2>Page Not Found</h2><p>The requested page does not exist.</p></div>} />
        </Routes>
        <FooterComponets />
      </BrowserRouter>
    </div>
  );
}

export default App;
