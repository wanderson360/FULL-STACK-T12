import { Link } from "react-router-dom";

const Esqueci = () => {
  return ( 

    <div className="card bg-dark">
  <article className="card-body mx-auto" style={{maxWidth: '400px'}}>
    <h4 className="card-title mt-3 text-center">Esqueceu a senha?</h4>
    <form>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <span className="input-group-text"> <i className="fa fa-envelope" /> </span>
        </div>
        <input name className="form-control" placeholder="Email" type="email" required/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">Recuperar conta</button>
      </div>      
      <p className="text-center">Lembrou da senha? <Link href>Logue-se</Link> </p>                                                                 
    </form>
  </article>
</div>


   );
}
 
export default Esqueci;