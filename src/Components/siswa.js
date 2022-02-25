import React from "react";

class Siswa extends React.Component {
  render() {
    return (
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Data Siswa</h4>
                  <p class="card-description">Halaman Data Siswa</p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>NISN</th>
                          <th>NIS</th>
                          <th>NAMA</th>
                          <th>KELAS</th>
                          <th>ALAMAT</th>
                          <th>NO. TELP</th>
                          <th>AKSI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>123456789</td>
                          <td>123456789</td>
                          <td>Arthur</td>
                          <td>XI A</td>
                          <td>Malang</td>
                          <td>082335367283</td>
                          <td>
                            <button class="btn btn-success btn-sm">Ubah</button>
                            |
                            <button class="btn btn-danger btn-sm">Hapus</button>
                          </td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>213456789</td>
                          <td>213456789</td>
                          <td>Raka</td>
                          <td>XI B</td>
                          <td>Batu</td>
                          <td>081226382932</td>
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

export default Siswa;
