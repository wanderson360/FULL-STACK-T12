module.exports = (sequelize, DataType) => {
  const Filme = sequelize.define('Filme', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataType.STRING,
      allowNull: false
    },
    tituloOriginal: {
      type: DataType.STRING,
    },
    lancamento: DataType.DATEONLY,
    paisOrigem: DataType.STRING,
    duracao: DataType.TIME,
    sinopse: DataType.TEXT,
    rate: {
      type: DataType.INTEGER,
      allowNull: false
    },
    exibicaoInicio: DataType.DATEONLY,
    exibicaoFinal: DataType.DATEONLY,
    idioma_id: {
      type: DataType.INTEGER,
    },
    genero_id: DataType.INTEGER,
    poster_url: {
      type: DataType.STRING,
      allowNull: false
    },
    trailer_url: {
      type: DataType.STRING,
      allowNull: true
    },
    classificacao: {
      type: DataType.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'filme',
    timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
  })

  Filme.associate = (listaDeModelos) => {
    Filme.belongsTo(listaDeModelos.Idioma, {
        foreignKey: 'idioma_id',
        as: 'idioma'
      }),
      Filme.belongsTo(listaDeModelos.Genero, {
        foreignKey: 'genero_id',
        as: 'genero'
      })
  }

  return Filme
}