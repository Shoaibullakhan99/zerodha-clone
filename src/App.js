import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Zerodha from "./component/Zerodha";
import Footer from "./component/Footer/Footer";
import About from "./component/About/About";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Zerodha} />
        <Route path="/component/About/About" exact Component={About} />
      </Routes>
      <Footer />
    </div>
  );
}
