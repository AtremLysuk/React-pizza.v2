import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Cart from "./Pages/Cart.jsx";
import FullPizza from "./Pages/FullPizza.jsx";

import "./scss/app.scss";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
