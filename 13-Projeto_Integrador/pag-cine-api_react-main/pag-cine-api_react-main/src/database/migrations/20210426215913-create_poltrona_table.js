'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('poltrona', {
       id:{
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true
       },
       fileira:{
         type: Sequelize.STRING,
         allowNull: false
       },
       numeracaoPoltrona:{
         type: Sequelize.INTEGER,
         allowNull: false,
       },
       tipoPoltrona_id:{
         type:Sequelize.INTEGER,
         references:{
           model:"tipoPoltrona",
           key: "id"
         }
       } 
       
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.dropTable('poltrona');
     
  }
};
