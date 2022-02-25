import React from "react";

class Beranda extends React.Component {
  render() {
    return (
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Selamat Datang, Admin</h4>
                <p class="card-description">Halaman Beranda Pembayaran SPP</p>
                <div class="row">
                  <div class="col-md-3">
                    <div class="card text-white bg-dark mb-3">
                      <div class="card-body">
                        <h4 class="mb-4">Angkatan 28</h4>
                        <p class="fs-30 mb-2">580 Siswa</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card text-white bg-dark mb-3">
                      <div class="card-body">
                        <h4 class="mb-4">Angkatan 29</h4>
                        <p class="fs-30 mb-2">600 Siswa</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card text-white bg-dark mb-3">
                      <div class="card-body">
                        <h4 class="mb-4">Angkatan 30</h4>
                        <p class="fs-30 mb-2">550 Siswa</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card text-white bg-dark mb-3">
                      <div class="card-body">
                        <h4 class="mb-4">Total Keseluruhan</h4>
                        <p class="fs-30 mb-2">1730 Siswa</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Beranda;
