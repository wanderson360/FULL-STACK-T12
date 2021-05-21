const PdfGerado = () => {
  const style = {
    textAlign: 'center',
    marginTop: '40px'
  };
  const style2 = {
    textAlign: 'center',
    marginTop: '40px'
  };
  return (
    <div style={style}>
      <h1>Minari - Sala 2 - 03/05/2021 - 21h45 -  3 ingressos</h1>
      <p>Atenção, cada ingresso só pode ser ativado uma vez</p>
       <div className="row no-gutters" style={style2}>
            <div className="col ml-2 mb-2" style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}>
                <div className="card-block px-2 d-flex align-items-start flex-column">

                    <h4 className="card-title mt-2">Minari</h4>
                    <p className="card-text"><i className="fas fa-map-marker-alt fa-lg" />Cine Belas Artes, São Paulo</p>
                    <p className="card-text"><i class="fas fa-video fa-lg"></i>Sala 2</p>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>03/05/2021 - 21</p>
                    <p className="card-text"><i class="fas fa-couch fa-lg"></i> E 4</p>
                    <p className="card-text"><i class="far fa-id-card fa-lg"></i>  10 anos</p>
                    <p className="card-text"><i class="fas fa-language fa-lg"></i> Inglês (legendado)</p>
                </div>
            </div>
            <div className="col">
                <div className="card-block px-2 d-flex align-items-start flex-column">
                    <h4 className="card-title mt-2">Dados do pagamento:</h4>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>03/05/2021</p>
                    <p className="card-text"><i class="fas fa-credit-card fa-lg"></i>Crédito -  MasterCard</p>
                    <p className="card-text"><i class="fas fa-dollar-sign fa-lg"></i> Valor: R$ 27,50</p>
                    <p className="card-text"><i class="far fa-sticky-note fa-lg"></i>  Pedido: 8954645</p>

                </div>
            </div>
            <div className="col-auto">
              <img src="./img/qrExample.png" alt="" srcset=""/>
            </div>
        </div>

       <div className="row no-gutters" style={style2}>
            <div className="col ml-2 mb-2" style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}>
                <div className="card-block px-2 d-flex align-items-start flex-column">

                    <h4 className="card-title mt-2">Minari</h4>
                    <p className="card-text"><i className="fas fa-map-marker-alt fa-lg" />Cine Belas Artes, São Paulo</p>
                    <p className="card-text"><i class="fas fa-video fa-lg"></i>Sala 2</p>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>03/05/2021 - 21</p>
                    <p className="card-text"><i class="fas fa-couch fa-lg"></i> E 5</p>
                    <p className="card-text"><i class="far fa-id-card fa-lg"></i>  10 anos</p>
                    <p className="card-text"><i class="fas fa-language fa-lg"></i> Inglês (legendado)</p>
                </div>
            </div>
            <div className="col">
                <div className="card-block px-2 d-flex align-items-start flex-column">
                    <h4 className="card-title mt-2">Dados do pagamento:</h4>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>03/05/2021</p>
                    <p className="card-text"><i class="fas fa-credit-card fa-lg"></i>Crédito -  MasterCard</p>
                    <p className="card-text"><i class="fas fa-dollar-sign fa-lg"></i> Valor: R$ 27,50</p>
                    <p className="card-text"><i class="far fa-sticky-note fa-lg"></i>  Pedido: 8954645</p>

                </div>
            </div>
            <div className="col-auto">
              <img src="./img/qrExample.png" alt="" srcset=""/>
            </div>
        </div>

       <div className="row no-gutters" style={style2}>
            <div className="col ml-2 mb-2" style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}>
                <div className="card-block px-2 d-flex align-items-start flex-column">

                    <h4 className="card-title mt-2">Minari</h4>
                    <p className="card-text"><i className="fas fa-map-marker-alt fa-lg" />Cine Belas Artes, São Paulo</p>
                    <p className="card-text"><i class="fas fa-video fa-lg"></i>Sala 2</p>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>03/05/2021 - 21</p>
                    <p className="card-text"><i class="fas fa-couch fa-lg"></i> E 6</p>
                    <p className="card-text"><i class="far fa-id-card fa-lg"></i>  10 anos</p>
                    <p className="card-text"><i class="fas fa-language fa-lg"></i> Inglês (legendado)</p>
                </div>
            </div>
            <div className="col">
                <div className="card-block px-2 d-flex align-items-start flex-column">
                    <h4 className="card-title mt-2">Dados do pagamento:</h4>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>03/05/2021</p>
                    <p className="card-text"><i class="fas fa-credit-card fa-lg"></i>Crédito -  MasterCard</p>
                    <p className="card-text"><i class="fas fa-dollar-sign fa-lg"></i> Valor: R$ 27,50</p>
                    <p className="card-text"><i class="far fa-sticky-note fa-lg"></i>  Pedido: 8954645</p>

                </div>
            </div>
            <div className="col-auto">
              <img src="./img/qrExample.png" alt="" srcset=""/>
            </div>
        </div>
    </div>
  );
}

export default PdfGerado;