module.exports = (sequelize, DataType) => {
  const Idioma = sequelize.define('Idioma', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nomeIdioma: DataType.STRING,
  },
  {
    tableName: 'idioma',
    timestamps: false
  })

  Idioma.associate = (listaDeModelos) => {
    Idioma.hasMany(listaDeModelos.Filme,{
      foreignKey: 'idioma_id',
      as: 'filmes'
    })
  }
  return Idioma
}