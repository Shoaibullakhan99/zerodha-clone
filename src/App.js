import React from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Zerodha from "./component/Zerodha";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Zerodha} />
      </Routes>
    </div>
  );
}
