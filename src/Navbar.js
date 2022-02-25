import React from "react";
import { Link } from "react-router-dom";
import Utama from "./Components/utama";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">Pembayaran SPP</a>
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
              <li class="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  role="button"
                  aria-expanded="false"
                >
                  Data
                </Link>
                <ul class="dropdown-menu">
                  <Link to="/siswa" className="dropdown-item">
                    Siswa
                  </Link>
                  <Link to="/kelas" className="dropdown-item">
                    Kelas
                  </Link>
                  <Link to="/spp" className="dropdown-item">
                    Spp
                  </Link>
                  <Link to="/petugas" className="dropdown-item">
                    Petugas
                  </Link>
                </ul>
              </li>
              <li class="nav-item">
                <Link to="/transaksi" className="nav-link">
                  Transaksi
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/histori" className="nav-link">
                  Histori
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/logout" className="nav-link">
                  Logout
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
