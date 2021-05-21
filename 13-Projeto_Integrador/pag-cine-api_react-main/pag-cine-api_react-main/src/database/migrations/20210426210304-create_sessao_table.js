'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('sessao', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dataHora: {
        type: Sequelize.DATE
      }

    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sessao');

  }
};