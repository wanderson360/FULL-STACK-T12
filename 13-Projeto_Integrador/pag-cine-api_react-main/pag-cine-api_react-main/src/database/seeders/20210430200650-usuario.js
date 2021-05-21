'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {await queryInterface.bulkInsert('usuario', [
    {
        userName: 'João Pedro',
        userTelefone: '+55 (11) 5555-1234',
        userEmail: 'joao@exemplo.com.br',
        userPassword: 'teste123'
      },
    {
        userName: 'Maria Julia',
        userTelefone: '+55 (11) 5555-1234',
        userEmail: 'maria@exemplo.com.br',
        userPassword: 'teste123'
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
