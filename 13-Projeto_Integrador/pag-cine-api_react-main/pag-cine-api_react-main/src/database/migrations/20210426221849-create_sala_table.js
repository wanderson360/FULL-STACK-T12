'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sala', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      tipoDeSala: {
        type: Sequelize.STRING,
        allowNull: false
      },
      capacidade: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      poltronasDisponiveis: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      poltronasOcupadas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cidade_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "cidade",
          key: "id"
        }
      },
      cinema_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "cinema",
          key: "id"
        }
      },
      sessao_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "sessao",
          key: "id"
        }
      },
      poltrona_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "poltrona",
          key: "id"
        }
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sala');

  }
};