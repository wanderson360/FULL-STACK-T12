'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tipoIngresso', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      tipo: {
        type: Sequelize.STRING,
      }

    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('tipoIngresso');

  }
};