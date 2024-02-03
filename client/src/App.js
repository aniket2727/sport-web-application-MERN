// App.js
import React from 'react';
import Frontpagecomponets from "./componets/Frontpagecomponets";
import LoginComponent from "./componets/Logincomponets";
import Navbarcomponets from "./componets/Header/Navbarcomponets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarcomponets />
        <Routes>
          <Route path="/primesport/login" element={<LoginComponent />} />
          <Route path="/primesport/productpagefirst" element={<Frontpagecomponets />} />
          <Route path="*" element={<div><h2>Page Not Found</h2><p>The requested page does not exist.</p></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
