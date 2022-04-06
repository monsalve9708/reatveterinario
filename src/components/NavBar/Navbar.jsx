import {NavLink} from "react-router-dom";
import "./Navbar.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark menu">
          <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                      data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
                      aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                  <NavLink className="navbar-brand" to="/">Logo</NavLink>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                          <NavLink className="nav-link active" aria-current="page" to="/mascota">Mascotas</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/">Registrar Personas</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/">Cambio contraseña</NavLink>
                      </li>
                      <li className="nav-item">
                          <NavLink className="nav-link" to="/">Clientes</NavLink>
                      </li>
                  </ul>
                  <div className="nav-item dropdown drop">
                      <button className="btn dropdown-toggle" to="/" id="navbarScrollingDropdown" role="button"
                                 data-bs-toggle="dropdown" aria-expanded="false">
                      <span className="droptext">User</span>
                  </button>
                      <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                          <li><NavLink className="dropdown-item" to="#">Cerrar sesion</NavLink></li>
                      </ul>
                  </div>

              </div>
          </div>
      </nav>
      );
}
export default Navbar;