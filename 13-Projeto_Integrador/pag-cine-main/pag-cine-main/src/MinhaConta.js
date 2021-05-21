import { useState, useEffect } from 'react';
// import User from './status';
import filmes from './filmes/listaFilmes'

const MinhaConta = ({ativo}) => {
 
  return ( 
    <div>
    {useEffect(() => {
      document.getElementById('login').innerText = 'João Pedro';
      document.getElementById('loginHref').href = "/minhaConta"
    })}
<div className="container mt-2">
  <div className="row">
    <div className="col d-flex justify-content-center align-items-center" style={{backgroundColor: 'coral', height: '50px'}}>
      <h5 style={{color: 'white'}}>Olá, João Pedro.
        Bem-vindo à sua conta :)</h5>
    </div>
  </div>
  <div className="row">
    <div className="col d-flex justify-content-center align-items-center bg-primary" style={{height: '40px'}}>
      <p style={{color: 'white'}} className='mt-3'><a href="">Dados pessoais</a> - <a href="">Formas de pagamento</a> - <a href="">Logout</a></p>
    </div>
  </div>


    
    <div className='listaDeFilme mt-4'>
    {ativo &&
    <div className="row no-gutters">
            <div className="col-auto">
                <img src={'/img/posters/minari.jpg'} className="img-fluid" alt=""/>
            </div>
            <div className="col ml-2 mb-2" style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}>
                <div className="card-block px-2 d-flex align-items-start flex-column">

                    <h4 className="card-title mt-2">Minari</h4>
                    <p className="card-text"><i className="fas fa-map-marker-alt fa-lg" />Cine Belas Artes, São Paulo</p>
                    <p className="card-text"><i class="fas fa-video fa-lg"></i>Sala 2</p>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>03/05/2021 - 21h45</p>
                    <p className="card-text"><i class="fas fa-couch fa-lg"></i> E 4, E 5, E 6</p>
                    <p className="card-text"><i class="far fa-id-card fa-lg"></i>  10 anos</p>
                    <p className="card-text"><i class="fas fa-language fa-lg"></i> Inglês (legendado)</p>
                </div>
            </div>
            <div className="col">
                <div className="card-block px-2 d-flex align-items-start flex-column">
                    <h4 className="card-title mt-2">Dados do pagamento:</h4>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>03/05/2021</p>
                    <p className="card-text"><i class="fas fa-credit-card fa-lg"></i>Crédito -  MasterCard</p>
                    <p className="card-text"><i class="fas fa-dollar-sign fa-lg"></i> Total: R$ 82,50</p>
                    <p className="card-text"><i class="far fa-sticky-note fa-lg"></i>  Pedido: 8954645</p>
                    <p className="card-text"><i class="fas fa-file-download"></i>  <span><a href="/pdf/ingresso_8954645.pdf" target="_blank">Baixar ingresso em PDF</a></span></p>

                </div>
            </div>
            <div className="col-auto">
              <img src="./img/qrExample.png" alt="" srcset=""/>
            </div>
        </div>
    }
    </div>
      {filmes.map( filme => (
<div class="card mt-3">
                <div className="row no-gutters">
            <div className="col-auto">
                <img src={filme['img']} className="img-fluid" alt=""/>
            </div>
            <div className="col ml-2 mb-2" style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}>
                <div className="card-block px-2 d-flex align-items-start flex-column">

                    <h4 className="card-title mt-2">{filme['nome']}</h4>
                    <p className="card-text"><i className="fas fa-map-marker-alt fa-lg" />Cine Belas Artes, São Paulo</p>
                    <p className="card-text"><i class="fas fa-video fa-lg"></i>Sala 2</p>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>22/02/2021 - 19h30</p>
                    <p className="card-text"><i class="fas fa-couch fa-lg"></i> H 13, H 14, H 15</p>
                    <p className="card-text"><i class="far fa-id-card fa-lg"></i>  {filme['classificacao']}</p>
                    <p className="card-text"><i class="fas fa-language fa-lg"></i> {filme['idioma']}</p>
                </div>
            </div>
            <div className="col">
                <div className="card-block px-2 d-flex align-items-start flex-column">
                    <h4 className="card-title mt-2">Dados do pagamento:</h4>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>03/02/2021</p>
                    <p className="card-text"><i class="fas fa-credit-card fa-lg"></i>Crédito -  MasterCard</p>
                    <p className="card-text"><i class="fas fa-dollar-sign fa-lg"></i> Total: R$ 60,50</p>
                    <p className="card-text"><i class="far fa-sticky-note fa-lg"></i>  Pedido: 654654645</p>
                    <p className="card-text"><i class="fas fa-file-download"></i>  <span><a href="/pdf/ingresso_8954645.pdf" target="_blank">Baixar ingresso em PDF</a></span></p>

                </div>
            </div>
            <div className="col-auto">
              <img src="./img/qrExample.png" alt="" srcset=""/>
            </div>
        </div>
    </div>
      )

      )}

    </div>

</div>
   );
}
 
export default MinhaConta;