module.exports = (sequelize, DataType) => {
  const QrCode = sequelize.define('QrCode', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    validacao: {
      type: DataType.DATE,
      allowNull: false
    },
    usuario_id: {
      type: DataType.INTEGER,
    }
  }, {
    tableName: 'qrCode',
    timestamps: false
  })

  QrCode.associate =(listaDeModelos)=>{
    QrCode.belongsTo(listaDeModelos.Usuario,{
      foreingKey: "usuario_id",
      as: "usuario"
    });
  }

  return QrCode;
}

