import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import {Routes, Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

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
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
