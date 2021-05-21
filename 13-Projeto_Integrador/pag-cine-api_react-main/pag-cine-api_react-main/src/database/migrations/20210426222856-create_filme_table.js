'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('filme', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: true
      },
      tituloOriginal: {
        type: Sequelize.STRING,
      },
      lancamento: Sequelize.DATEONLY,
      paisOrigem: Sequelize.STRING,
      duracao: Sequelize.TIME,
      sinopse: Sequelize.TEXT,
      rate: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      exibicaoInicio: Sequelize.DATEONLY,
      exibicaoFinal: Sequelize.DATEONLY,
      idioma_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "idioma",
          key: "id"
        }
      },
      genero_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "genero",
          key: "id"
        }
      },
      poster_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      trailer_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      classificacao: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('filme');
  }
};