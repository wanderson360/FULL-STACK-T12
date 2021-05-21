import Home from './Home';
import Navbar from './Navbar';
import './css/bootstrap.min.css'
import './css/style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListaDeFilmes from './ListaDeFilmes';
import Login from './Login'
import Registro from './Registro'
import Esqueci from './Esqueci'
import MinhaConta from './MinhaConta'
import Trailer from './filmes/trailer'
import Programacao from './Programacao'
import Cinema from './components/Cinema'
import { chairs } from './utils';
import TrailersAll from './filmes/trailersAll';
import Ingresso from './components/IngressoQrCode';
import ConfirmaRegistro from './components/ConfirmaRegistro'
import ConfirmaCompra from './components/ConfirmaCompra'
import BuscaComp from './components/BuscaComp'
import PdfGerado from './components/PdfGerado'
const ativo = true;

function App() {

  return (
    <Router>
      <div>

        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/em-cartaz">
              <ListaDeFilmes />
            </Route>
            <Route exact path="/lista-de-filmes">
              <ListaDeFilmes />
            </Route>
            <Route exact path="/trailers">
              <TrailersAll />
            </Route>
            <Route exact path="/trailers/:id">
              <Trailer />
            </Route>
            <Route exact path="/ingressos/:id">
              <Cinema chairs={chairs} />
            </Route>
            <Route exact path="/programacao">
              <Programacao />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/minhaConta">
              <MinhaConta ativo={ativo}/>
            </Route>
            <Route exact path="/minhaConta1">
              <MinhaConta />
            </Route>
            <Route exact path="/registro">
              <Registro />
            </Route>
            <Route exact path="/confirmaRegistro">
              <ConfirmaRegistro />
            </Route>
            <Route exact path="/ConfirmaCompra">
              <ConfirmaCompra />
            </Route>
            <Route exact path="/busca">
              <BuscaComp />
            </Route>
            <Route exact path="/PdfGerado">
              <PdfGerado />
            </Route>
            <Route exact path="/esqueci">
              <Esqueci />
            </Route>
            <Route exact path="/Ingresso">
              <Ingresso />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
