let User = {
  usuario: 'Login / Registro',
  trocaStatus() {
    console.log('usuario trocado')
    this.usuario = 'entrou'
  }
}

export default User;