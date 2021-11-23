import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Routes, Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";

const HatsPage = (props) => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
