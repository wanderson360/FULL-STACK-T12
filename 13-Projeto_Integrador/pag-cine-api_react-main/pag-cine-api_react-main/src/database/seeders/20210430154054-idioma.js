'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('idioma', [
       {
        nomeIdioma: 'Português',
      },
       {
        nomeIdioma: 'Inglês',
      },
       {
        nomeIdioma: 'Espanhol',
      },
       {
        nomeIdioma: 'Francês',
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
