'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      userName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userTelefone: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userEmail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userPassword: {
        type: Sequelize.STRING,
        allowNull: false
      }

    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('usuario');

  }
};