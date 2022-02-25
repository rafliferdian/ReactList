import React from "react";

class Spp extends React.Component {
  render() {
    return (
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Data SPP</h4>
                  <p class="card-description">Halaman Data SPP</p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>TAHUN</th>
                          <th>NOMINAL</th>
                          <th>AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>2019</td>
                          <td>500000</td>
                          <td>
                            <button class="btn btn-success btn-sm">Ubah</button>
                            |
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>2020</td>
                          <td>600000</td>
                          <td>
                            <button class="btn btn-success btn-sm">Ubah</button>
                            |
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>2021</td>
                          <td>650000</td>
                          <td>
                            <button class="btn btn-success btn-sm">Ubah</button>
                            |
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export default Spp;
