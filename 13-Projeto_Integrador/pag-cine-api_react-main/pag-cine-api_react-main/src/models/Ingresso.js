module.exports = (sequelize, DataType) => {
    const Ingresso = sequelize.define('Ingresso', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      filme_id: 
      {
        type: DataType.INTEGER,
        allowNull: false
      },
      idioma_id: 
      {
        type: DataType.INTEGER,
        allowNull: false
      },
      tipoIngresso_id: 
      {
        type: DataType.INTEGER,
        allowNull: false
      },
      usuario_id:
      {
        type: DataType.INTEGER,
        allowNull: false
      },
      sala_id:
      {
        type: DataType.INTEGER,
        allowNull: false
      },
      cinema_id:
      {
        type: DataType.INTEGER,
        allowNull: false
      },
       cidade_id:
      {
        type: DataType.INTEGER,
        allowNull: false
      },
      sessao_id:
      {
        type: DataType.INTEGER,
        allowNull: false
      },
      poltrona_id:{
        type: DataType.INTEGER,
        allowNull: false
      }
  },
  {
    tableName: 'ingresso',
    timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
  })
  
  return Ingresso
}