import { Link } from "react-router-dom";
import { useEffect } from 'react';

// useEffect() para rodar um script externo
const Registro = () => {
  useEffect(() => {
  const script = document.createElement('script');

  script.src = "/scripts/cidade-estados-brasil.min.js";
  script.async = true;

  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  }
}, []);

  return ( 

    <div className="card bg-dark">
  <article className="card-body mx-auto" style={{maxWidth: '420px'}}>
    <h4 className="card-title mt-3 text-center">Crie sua conta!</h4>
    <form action="/confirmaRegistro">
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"> <i className="fa fa-user" /> </span>
        </div>
        <input name className="form-control" placeholder="Nome completo" type="text" required/>
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
        </div>
        <input name className="form-control" placeholder="Email" type="email" required/>
      </div> 
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"> <i className="fa fa-phone" /> </span>
        </div>
        {/* <select className="custom-select" style={{maxWidth: '120px'}}>
          <option selected></option>
          <option value={1}>10</option>
          <option value={2}>11</option>
          <option value={3}>12</option>
        </select> */}
        {/* <input name className="form-control" placeholder="Celular" type="text" /> */}
        <input type="tel" class="form-control" id="tel" name="tel" maxlength="15" required/>
      </div> {/* form-group// */}


      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"> <i className="fa fa-building" /> </span>
        </div>
        {/* <select className="custom-select" style={{maxWidth: '120px'}}>
          <option selected></option>
          <option value={1}>10</option>
          <option value={2}>11</option>
          <option value={3}>12</option>
        </select> */}

          <select id="selects_estado" className="custom-select" style={{maxWidth: '75px'}}></select>
  <select id="selects_cidades" className="custom-select"></select>

      </div> {/* form-group// */}

      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"> <i className="fa fa-lock" /> </span>
        </div>
        <input className="form-control" placeholder="Senha" type="password" required/>
      </div> {/* form-group// */}
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"> <i className="fa fa-lock" /> </span>
        </div>
        <input className="form-control" placeholder="Confirmar senha" type="password" required/>
      </div> {/* form-group// */}                                      
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">Criar Conta</button>
      </div>      
      <p className="text-center">Já tem uma conta? <Link href>Logue-se</Link> </p>                                                                 
    </form>
  </article>

  
</div>


   );
}
 
export default Registro;