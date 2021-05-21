module.exports = (sequelize, DataType) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userName: {
      type: DataType.STRING,
      allowNull: false
    },
    userTelefone: {
      type: DataType.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataType.STRING,
      allowNull: false
    },
    userPassword: {
      type: DataType.STRING,
      allowNull: false
    }
  }, {
    tableName: 'usuario',
    timestamps: false
  });

  return Usuario;
}