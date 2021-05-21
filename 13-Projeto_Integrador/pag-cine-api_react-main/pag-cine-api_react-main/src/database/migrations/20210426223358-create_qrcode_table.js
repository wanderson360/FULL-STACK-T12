'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('qrcode', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      validacao:{
        type: Sequelize.DATE,
        allowNull: false
      },
      usuario_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"usuario",
          key:"id"
        }
      }
      });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('qrcode');
     
  }
};
