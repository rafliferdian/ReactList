import React from "react";
import { Link } from "react-router-dom";
import Utama from "./Components/utama";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <p class="navbar-brand">Modul 3</p>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  Beranda
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/gallery" className="nav-link">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p>
        <Utama />
      </p>
    </div>
  );
};

export default Navbar;
