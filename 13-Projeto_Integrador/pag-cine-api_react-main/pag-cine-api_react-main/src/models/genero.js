module.exports = (sequelize, DataType) => {
  const Genero = sequelize.define('Genero', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomeGenero: DataType.STRING,
  },
  {
    tableName: 'genero',
    timestamps: false
  })

  Genero.associate = (listaDeModelos) => {
    Genero.hasMany(listaDeModelos.Filme,{
      foreignKey: 'id',
      as: 'filmes'
    })
  }
  return Genero
}