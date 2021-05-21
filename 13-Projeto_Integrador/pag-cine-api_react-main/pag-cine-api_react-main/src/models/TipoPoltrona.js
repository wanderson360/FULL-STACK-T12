module.exports = (sequelize, DataType) => {
  const TipoPoltrona = sequelize.define('TipoPoltrona', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataType.STRING,
    }
  }, {
    tableName: 'tipoPoltrona',
    timestamps: false
  })
  return TipoPoltrona;
}