import React from "react";

class Petugas extends React.Component {
  render() {
    return (
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Data Petugas</h4>
                  <p class="card-description">Halaman Data Petugas</p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>NAMA</th>
                          <th>USERNAME</th>
                          <th>LEVEL</th>
                          <th>AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Admin</td>
                          <td>admin</td>
                          <td>admin</td>
                          <td>
                            <button class="btn btn-success btn-sm">Ubah</button>
                            |
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Petugas</td>
                          <td>petugas</td>
                          <td>petugas</td>
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

export default Petugas;
