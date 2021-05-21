'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('cinema', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bairro: {
        type: Sequelize.STRING,
      },
      CEP: {
        type: Sequelize.INTEGER,
      },
      lougradoro: {
        type: Sequelize.STRING,
      },
      cidade_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "cidade",
          key: "id"
        }
      },

     });
     
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('cinema');
     
  }
};
