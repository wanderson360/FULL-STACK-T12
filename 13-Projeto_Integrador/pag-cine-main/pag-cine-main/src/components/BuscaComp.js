import { Link } from "react-router-dom";
const BuscaComp = () => {
  const style = {
    marginTop: '40px'
  };
  return (
    <>
      <div className="row no-gutters" style={style}>
        <div className="col-auto">
          <img src={'./img/posters/trolls-2-poster-desktop.jpg'} className="img-fluid" alt="" />
        </div>
        <div className="col ml-2 mb-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className="card-block px-2 d-flex align-items-start flex-column">

            <h4 className="card-title mt-2">Trolls 2</h4>
            <p className="card-text"><i className="fas fa-map-marker-alt fa-lg" />Cine Belas Artes, São Paulo</p>
            <p className="card-text"><i class="fas fa-video fa-lg"></i>Sala 1</p>
            <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>04/05/2021 - 12h30</p>
            <p className="card-text"><i class="far fa-id-card fa-lg"></i>  Livre</p>
            <p className="card-text"><i class="fas fa-language fa-lg"></i> Português (dublado)</p>
            <Link to={"/ingressos/"} className="btn btn-primary mt-3">Ingressos</Link>

          </div>
        </div>
        <div className="col-6">
          <div className="card-block px-2 d-flex align-items-start flex-column">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/gaNXC9VAtSc?rel=0" allowfullscreen></iframe>
            </div>

          </div>
        </div>
      </div>

      <div className="row no-gutters" style={style}>
        <div className="col-auto">
          <img src={'./img/posters/um-tio-quase-perfeito-2-poster-desktop.jpg'} className="img-fluid" alt="" />
        </div>
        <div className="col ml-2 mb-2" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
          <div className="card-block px-2 d-flex align-items-start flex-column">

            <h4 className="card-title mt-2">Um tio quase perfeito 2</h4>
            <p className="card-text"><i className="fas fa-map-marker-alt fa-lg" />Cine Belas Artes, São Paulo</p>
            <p className="card-text"><i class="fas fa-video fa-lg"></i>Sala 2</p>
            <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>04/05/2021 - 13h30</p>
            <p className="card-text"><i class="far fa-id-card fa-lg"></i>  Livre</p>
            <p className="card-text"><i class="fas fa-language fa-lg"></i> Português (nacional)</p>
            <Link to={"/ingressos/"} className="btn btn-primary mt-3">Ingressos</Link>
          </div>
        </div>
        <div className="col-6">
          <div className="card-block px-2 d-flex align-items-start flex-column">
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/eZuaNroj4aE?rel=0" allowfullscreen></iframe>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default BuscaComp;