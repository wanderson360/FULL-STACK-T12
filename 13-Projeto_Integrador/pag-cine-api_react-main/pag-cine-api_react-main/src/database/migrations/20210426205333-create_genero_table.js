'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('genero', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nomeGenero: Sequelize.STRING,
     });
     
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.dropTable('genero');
     
  }
};
