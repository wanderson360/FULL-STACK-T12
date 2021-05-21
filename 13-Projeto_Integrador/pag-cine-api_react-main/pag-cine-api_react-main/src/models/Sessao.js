module.exports = (sequelize, DataType) => {
  const Sessao = sequelize.define('Sessao', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dataHora: {
      type: DataType.DATE
    }
  }, {
    tableName: 'sessao',
    timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
  })

  return Sessao;
}