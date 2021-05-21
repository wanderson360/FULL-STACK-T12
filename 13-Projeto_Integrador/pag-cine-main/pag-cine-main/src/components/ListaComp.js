import { Link } from "react-router-dom";

const ListaComp = ({ filmes }) => {
  return (
    <>
      { filmes.map((filme) =>
      (
        <div class="card mt-3" key={filme.id}>
          <div className="row no-gutters">
            <div className="col-auto">
              <img src={filme.poster_url} className="img-fluid" alt="" />
            </div>
            <div className="col ml-2">
              <div className="card-block px-2 d-flex align-items-start flex-column">
                <div className="row mt-3">
                  <div className="col">
                    <Link to={"/ingressos/" + filme.id} className="btn btn-primary">Ingressos</Link>
                  </div>
                  <div className="col">
                    <Link to={"/trailers/" + filme.id} className="btn btn-primary">Trailer</Link>
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
                  <p>Classificação indicativa: {filme['classificacao']}</p>


                </span></p>
              </div>
            </div>
          </div>
        </div>
      )
      )}
    </>
  );
}

export default ListaComp;