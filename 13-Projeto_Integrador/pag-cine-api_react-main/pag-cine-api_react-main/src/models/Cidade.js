module.exports = (sequelize, DataType) => {
  const Cidade = sequelize.define('Cidade', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataType.STRING,
      allowNull: false
    }
  }, {
    tableName: 'cidade',
    timestamps: false
  })

  Cidade.associate = (listaDeModelos) => {

    Cidade.hasMany(listaDeModelos.Cinema, {
      foreignKey: 'cinema_id',
      as: 'cinemas'
    });
  }
  return Cidade;
}