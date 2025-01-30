import './App.css';

function App() {

  return (
    <div className="container-fluid p-0">
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
    </div>
  );
}

export default App;
