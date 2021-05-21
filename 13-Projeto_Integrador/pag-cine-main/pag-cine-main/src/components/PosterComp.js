import { Link } from "react-router-dom";
const PosterComp = ({ filmes }) => {
  return (
    <div>
      <div className="row">
        {filmes.map(filme => (
          <div className="col-md-6 col-lg-3" id={filme.id}>
            <div className="card">
              <Link to={"/trailers/" + filme.id}><img src={filme.poster_url} alt="" className="card-img-top" /></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PosterComp;