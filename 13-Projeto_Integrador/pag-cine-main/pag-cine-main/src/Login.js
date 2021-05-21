import { Link } from "react-router-dom";

const Login = () => {
  return ( 
  <div className="row justify-content-center">
  <div className="col-md-8">
    <div className="card">
      <div className="card-header">Logar</div>
      <div className="card-body">
        <form>
          <div className="form-group row justify-content-center">
            <div className="col-md-6">
              <input type="text" id="email_address" className="form-control" name="email-address" required autofocus placeholder="E-Mail"/>
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-md-6">
              <input type="password" id="password" className="form-control" name="password" required placeholder="Senha" />
              
            </div>
          </div>
          <div className="form-group row">
            <div className="col-md-6 offset-md-3">
              <div className="checkbox">
                <label>
                  <input type="checkbox" name="remember" /> Lembrar de mim
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6 offset-md-3">
            <Link to="./minhaConta1"><button className="btn btn-primary">Logar</button></Link>
            <Link to="/esqueci" className="btn btn-link">
              Esqueci a senha
            </Link>
          </div>

          <div className="col-md-6 offset-md-3">
            Não tem conta? <span><Link to="/registro">Registre-se</Link></span>
          </div>
          
        </form>
        </div>
    </div>
  </div>
</div>


   );
}
 
export default Login;