import listaCarrousel from './filmes/listaCarrousel'

// Alguma coisa no js do bootstrap impede essa função e o
// const ehActive = (prop) => {
// if (prop['id'] == 1) {
// return 'active'
// } else {
// return ''
// }
// }

const Carrousel = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">

        {/* { listaCarrousel.map( filme => (
        <div className={`carousel-item ${ehActive(filme)}`}>
          <img src={ filme['img'] } className="d-block w-100" className="nada" alt={ filme['alt']} />
        </div>
        )) } */}

        {
          listaCarrousel.map((filme,index)=>{
            return index==0 ? (
              <div className={`carousel-item active`} key={filme.id}>
                <img src={filme.img} className="d-block w-100" alt={ filme.alt} />
              </div>
            ) : ( 
              <div className="carousel-item" key={filme.id}>
                <img src={filme.img} className="d-block w-100" alt={ filme.alt} />
              </div> 
            )
          })
        }

        {/* <div className={`carousel-item active`}>
          <img src={ listaCarrousel[0]['img'] } className="d-block w-100" alt={ listaCarrousel[0]['alt']} />
        </div>
        
        <div className="carousel-item">
          <img src={ listaCarrousel[2]['img'] } className="d-block w-100" alt={ listaCarrousel[2]['alt']} />
        </div>*/}
        
      </div> 
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carrousel;