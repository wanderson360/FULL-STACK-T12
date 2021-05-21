import { Link } from 'react-router-dom' // Link to
import User from './status';

const Navbar = () => {

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    console.log(position.coords.latitude +
      "<br>Longitude: " + position.coords.longitude);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">PagCine</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link localiza" href="#" onClick={getLocation()}><i className="fas fa-map-marker-alt fa-lg" />São Paulo
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i className="fas fa-film" />Programação</a>
            <div className="dropdown-menu">
              <Link className="dropdown-item" to="/em-cartaz">Em cartaz</Link>
              <a className="dropdown-item" href="#">Em breve</a>
              <div class="dropdown-divider"></div>
              <Link className="dropdown-item" to="/em-cartaz">Lista de filmes</Link>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/trailers"><i className="fas fa-video" />Trailers</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0" method="GET" action="/busca">
          <input className="form-control mr-sm-2" type="text" placeholder="Cinemas, Filmes e Gêneros..." />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit"><i className="fas fa-search" /></button>
        </form>
        <li className="nav-item">
          <Link className="nav-link" id="loginHref" to="/login"><i className="fas fa-user" id='trocalink' /><span id='login'>{User.usuario}</span> </Link>
          {/* <Link className="nav-link" id="loginHref" to="/minhaConta"><i className="fas fa-user" id='trocalink' /><span id='login'>João Pedro</span> </Link> */}
        </li>
      </div>
    </nav>
  );
}

export default Navbar;