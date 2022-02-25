import React from "react";

class Transaksi extends React.Component {
  render() {
    return (
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Transaksi</h4>
                  <p class="card-description">Halaman Transaksi</p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>ID PETUGAS</th>
                          <th>NISN</th>
                          <th>TGL BAYAR</th>
                          <th>SPP</th>
                          <th>TAHUN</th>
                          <th>JMLH BAYAR</th>
                          <th>STATUS</th>
                          <th>AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>2</td>
                          <td>123456789</td>
                          <td>2019-03-27</td>
                          <td>500000</td>
                          <td>2019</td>
                          <td>500000</td>
                          <td>
                            <button class="btn btn-success btn-sm">
                              Lunas
                            </button>
                          </td>
                          <td>
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>2</td>
                          <td>123456789</td>
                          <td>0000-00-00</td>
                          <td>600000</td>
                          <td>2020</td>
                          <td>0</td>
                          <td>
                            <button class="btn btn-secondary btn-sm">
                              Bayar
                            </button>
                          </td>
                          <td>
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button class="btn btn-outline-primary btn-sm">
                      Tambah Transaksi
                    </button>
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

export default Transaksi;
