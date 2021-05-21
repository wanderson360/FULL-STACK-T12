const ConfirmaRegistro = () => {
  const style = {
    textAlign: 'center',
    marginTop: '40px'
  };
  return (
    <div style={style}>
      <h1>Obrigado!</h1>
      <br />
      <h3>
        Registro efetuado com sucesso!
    </h3>
      <br />
      <h5>
        Você receberá em seu email a confirmação do registro.
    </h5>
      <h5>Faça o seu login clicando <span><a href="/login">aqui</a></span></h5>
    </div>
  );
}

export default ConfirmaRegistro;