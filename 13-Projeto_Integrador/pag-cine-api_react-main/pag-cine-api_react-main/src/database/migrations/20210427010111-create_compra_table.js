'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('compra', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      preco:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      formaPagamento:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      ingresso_id:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      filme_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'filme',
          key:'id'
        }
      },
      idioma_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'idioma',
          key:'id'
        }
      },
      tipoIngresso_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'tipoIngresso',
          key:'id'
        }
      },
      usuario_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'usuario',
          key:'id'
        }
      },
      sala_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'sala',
          key:'id'
        }
      },
      cinema_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'cinema',
          key:'id'
        }
      },
      cidade_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'cidade',
          key:'id'
        }
      },
      sessao_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'sessao',
          key:'id'
        }
      },
      poltrona_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'poltrona',
          key:'id'
        }
      }
     });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('compra');
     
  }
};
