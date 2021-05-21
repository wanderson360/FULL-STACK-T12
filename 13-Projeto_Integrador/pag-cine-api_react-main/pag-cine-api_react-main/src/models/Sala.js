module.exports = (sequelize, DataType) => {
    const Sala = sequelize.define('Sala', {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipoDeSala:{
        type: DataType.STRING,
        allowNull: false
      },
      capacidade:{
        type: DataType.INTEGER,
        allowNull: false
      },
      poltronasDisponiveis:{
        type: DataType.INTEGER,
        allowNull: false
      },
      poltronasOcupadas:{
        type: DataType.INTEGER,
        allowNull: false
      },
        cinema_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        cidade_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        sessao_id:{
            type: DataType.INTEGER,
            allowNull: false
        },
        poltrona_id:{
            type: DataType.INTEGER,
            allowNull: false
        }
    },
    {
      tableName: 'sala',
      timestamps: false // por padrao ele espera 'created_at'e 'updated_at', por isso colocar false nesse caso
    })
  
    Sala.associate = (listaDeModelos) => {

      Sala.belongsTo(listaDeModelos.Cinema, {
        foreignKey: 'cinema_id',
        as: 'cinema'
      });

      Sala.belongsTo(listaDeModelos.Cidade, {
        foreignKey: 'cidade_id',
        as: 'cidade'
      });

      Sala.belongsTo(listaDeModelos.Genero, {
        foreignKey: 'sessao_id',
        as: 'sessao'
      });
      
      Sala.belongsTo(listaDeModelos.Poltrona, {
        foreignKey: 'poltrona_id',
        as: 'poltrona'
      });
    }
    return Sala;
  }