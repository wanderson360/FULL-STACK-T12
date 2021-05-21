'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('idioma', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nomeIdioma:{
        type: Sequelize.STRING,
        allowNull: false
      }
  })
  
},

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.dropTable('idioma');
    
  }
};
