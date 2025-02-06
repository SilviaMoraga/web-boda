import './App.css';

function App() {

  return (
    <div className="container-fluid p-0">
      {/*NAVBAR*/}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-end" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Asistencia</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Lugar</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Playlist</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="card border border-0 container-fluid p-0">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="text-container">
            <p className="card-title">Lugar</p>
            <h2 className="card-text">La harinera Zamora</h2>
            <h3 className="card-text">Fecha</h3>
            <a href="#" className="btn btn-primary">Confirmar asistencia</a>
          </div>
          <div className="ms-3">
            <img src="https://img.freepik.com/foto-gratis/novio-poniendo-anillo-dedo-novia_1157-338.jpg" className="card-img-top" alt="..." style={{ width: '250px', height: 'auto' }} />
          </div>
        </div>
      </div>
      <div className="card border border-0 container-fluid p-0">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="text-container">
            <p className="card-title">Lugar</p>
            <h2 className="card-text">Confirma tu asistencia</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nisi
              at risus dictum sagittis...</p>
            <h5>Responde a esta encuesta</h5>
            <a href="#" className="btn btn-primary">Link al formulario</a>
          </div>
          <div className="ms-3">
            <img src="https://img.freepik.com/foto-gratis/novio-poniendo-anillo-dedo-novia_1157-338.jpg" className="card-img-top" alt="..." style={{ width: '250px', height: 'auto' }} />
          </div>
        </div>
      </div>
      <div className="card border border-0 container-fluid p-0">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="ms-3">
            <img src="https://img.freepik.com/foto-gratis/novio-poniendo-anillo-dedo-novia_1157-338.jpg" className="card-img-top" alt="..." style={{ width: '250px', height: 'auto' }} />
          </div>
          <div className="text-container">
            <p className="card-title">Lugar</p>
            <h2 className="card-text">La Harinera</h2>
            <p>DIRECCIÓN</p>
            <p>Lorem ipsum dolor sit amet <br />
              Lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>

      <div className="card border border-0 container-fluid p-0">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="text-container">
            <p className="card-title">PLAYLIST</p>
            <h2 className="card-text">Añade tu canción a la playlist</h2>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel nisi
              at risus dictum sagittis...</p>
            <a href="#" className="btn btn-primary">Link a Spotify</a>
          </div>
          <div className="ms-3">
            <img src="https://img.freepik.com/foto-gratis/novio-poniendo-anillo-dedo-novia_1157-338.jpg" className="card-img-top" alt="..." style={{ width: '250px', height: 'auto' }} />
          </div>
        </div>
      </div>

      <div className="card border border-0 container-fluid p-0">
        <div className="card-body d-flex align-items-center justify-content-between">
          <div className="text-container">
            <p className="card-title">CONTACTO</p>
            <h2 className="card-text">¿Quieres contarnos algo importante?</h2>
            <div>
              <form>
                <div className="form-floating mb-3">
                  <label for="exampleInputEmail1" className="form-label">Nombre y apellido</label>
                  <input type="email" className="form-control" id="name" />
                </div>
                <div className="form-floating mb-3">
                  <label for="exampleInputEmail1" className="form-label">Mail</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-floating mb-3">
                  <label for="exampleInputPassword1" className="form-label">Teléfono</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-floating mb-3">
                  <label for="exampleInputPassword1" className="form-label">Cuéntanos</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </form>
            </div>
          </div>
          <div className="ms-3">
            <img src="https://img.freepik.com/foto-gratis/novio-poniendo-anillo-dedo-novia_1157-338.jpg" className="card-img-top" alt="..." style={{ width: '250px', height: 'auto' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
