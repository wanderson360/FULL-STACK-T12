const ConfirmaCompra = () => {
  const style = {
    textAlign: 'center',
    marginTop: '40px'
  };
  return (
    <div style={style}>
      <h1>Obrigado!</h1>
      <br />
      <h3>
        Compra efetuada com Sucesso!
    </h3>
      <br />
      <h5>
        Você receberá em seu email a confirmação da compra com o QR-Code.
    </h5>
      <h5>Ou acesse todos os seus ingressos clicando <span><a href="/minhaConta">aqui</a></span></h5>
    </div>
  );
}

export default ConfirmaCompra;