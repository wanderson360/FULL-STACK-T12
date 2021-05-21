'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cidade', { 
      id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })

  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('cidade');
     
  }
};
