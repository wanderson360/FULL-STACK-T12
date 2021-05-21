module.exports = (sequelize, DataType) => {
  const Cinema = sequelize.define('Cinema', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    bairro: {
      type: DataType.STRING,
    },
    CEP: {
      type: DataType.INTEGER,
    },
    lougradoro: {
      type: DataType.STRING,
    },
    cidade_id: {
      type: DataType.INTEGER,
    }
  }, {
    tableName: 'filme',
    timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
  })

  Cinema.associate = (listaDeModelos) => {

    Cinema.belongsTo(listaDeModelos.Cidade, {
      foreignKey: 'cidade_id',
      as: 'cidades'
    });

  }


  return Cinema
}