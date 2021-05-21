module.exports = (sequelize, DataType) => {
  const TipoIngresso = sequelize.define('TipoIngresso', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tipo: {
      type: DataType.STRING,
    }
  }, {
    tableName: 'tipoIngresso',
    timestamps: false
  });

  return TipoIngresso;
}