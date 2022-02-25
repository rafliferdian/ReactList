import React from "react";

class Histori extends React.Component {
  render() {
    return (
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Histori Pembayaran</h4>
                  <p class="card-description">Halaman Histori Pembayaran</p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>NISN</th>
                          <th>NAMA SISWA</th>
                          <th>NOMINAL</th>
                          <th>TANGGAL BAYAR</th>
                          <th>TAHUN</th>
                          <th>KET</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>123456789</td>
                          <td>Arthur</td>
                          <td>500000</td>
                          <td>2019-01-14</td>
                          <td>2019</td>
                          <td>
                            <button class="btn btn-success btn-sm">
                              Lunas
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>123456789</td>
                          <td>Arthur</td>
                          <td>600000</td>
                          <td>0000-00-00</td>
                          <td>2020</td>
                          <td>
                            <button class="btn btn-secondary btn-sm">
                              Belum Lunas
                            </button>
                          </td>
                        </tr>
                        <tr>
                          {" "}
                          <td>3</td>
                          <td>123456789</td>
                          <td>Arthur</td>
                          <td>650000</td>
                          <td>0000-00-00</td>
                          <td>2021</td>
                          <td>
                            <button class="btn btn-secondary btn-sm">
                              Belum Lunas
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>213456789</td>
                          <td>Raka</td>
                          <td>500000</td>
                          <td>2019-01-20</td>
                          <td>2019</td>
                          <td>
                            <button class="btn btn-success btn-sm">
                              Lunas
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>213456789</td>
                          <td>Raka</td>
                          <td>600000</td>
                          <td>2020-01-21</td>
                          <td>2020</td>
                          <td>
                            <button class="btn btn-success btn-sm">
                              Lunas
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>213456789</td>
                          <td>Raka</td>
                          <td>650000</td>
                          <td>2021-01-22</td>
                          <td>2021</td>
                          <td>
                            <button class="btn btn-success btn-sm">
                              Lunas
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button class="btn btn-outline-success btn-sm">
                      Cetak Laporan
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

export default Histori;
