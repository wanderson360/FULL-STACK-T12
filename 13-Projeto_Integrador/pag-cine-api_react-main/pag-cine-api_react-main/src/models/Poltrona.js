module.exports = (sequelize, DataType) => {
  const Poltrona = sequelize.define('Poltrona', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fileira: {
      type: DataType.STRING,
      allowNull: false
    },
    numerocaoPoltrona: {
      type: DataType.INTEGER
    },
    tipoPoltrona_id: {
      type: DataType.INTEGER,
    }

  }, {
    tableName: 'poltrona',
    timestamps: false
  })

  Poltrona.associate =(listaDeModelos)=>{
    Poltrona.belongsTo(listaDeModelos.TipoPoltrona,{
      foreingKey: "tipoPoltrona_id",
      as: "tipoPoltrona"
    });
  }

  return Poltrona;
}

