import { Link } from "react-router-dom";
import filmes from './filmes/listaFilmes'

const ListaDeFilmes = () => {
  return (
    <div className='listaDeFilme mt-4'>
      {filmes.map( filme => (
<div class="card mt-3">
                <div className="row no-gutters">
            <div className="col-auto">
                <img src={filme['img']} className="img-fluid" alt=""/>
            </div>
            <div className="col ml-2">
                <div className="card-block px-2 d-flex align-items-start flex-column">
                <div className="row mt-3">
                    <div className="col">
                    <Link to="/ingressos/54321" className="btn btn-primary">Ingressos</Link>
                    </div>
                     <div className="col">
                    <Link to="/trailers/54321" className="btn btn-primary">Trailer</Link>
                    </div>
                </div>
                    <h4 className="card-title mt-2">{filme['nome']}</h4>
                    <p className="card-text">{filme['sinopse']}</p>
                    <p><span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    <p>Classificação: {filme['classificacao']}</p>
                    
                    
                    </span></p>
                </div>
            </div>
        </div>
    </div>
      )

      )}

    </div>
    );
}
 
export default ListaDeFilmes;