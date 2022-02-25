import React from "react";

class Kelas extends React.Component {
  render() {
    return (
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Data Kelas</h4>
                  <p class="card-description">Halaman Data Kelas</p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>NAMA KELAS</th>
                          <th>KOMPETENSI KEAHLIAN</th>
                          <th>AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>XI A</td>
                          <td>Rekayasa Perangkat Lunak</td>
                          <td>
                            <button class="btn btn-success btn-sm">Ubah</button>
                            |
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>XI B</td>
                          <td>Teknik Komputer dan Jaringan</td>
                          <td>
                            <button class="btn btn-success btn-sm">Ubah</button>
                            |
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>XI C</td>
                          <td>Rekayasa Perangkat Lunak</td>
                          <td>
                            <button class="btn btn-success btn-sm">Ubah</button>
                            |
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>XI D</td>
                          <td>Teknik Komputer dan Jaringan</td>
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

export default Kelas;
