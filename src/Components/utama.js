import React from "react";
import { Routes, Route } from "react-router-dom";

import Beranda from "./beranda";
import Gallery from "./gallery";

const Utama = () => (
  <Routes>
    <Route exact path="/" element={<Beranda />} />
    <Route path="/gallery" element={<Gallery />} />
  </Routes>
);

export default Utama;
