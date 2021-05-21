'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('genero', [
      {
        nomeGenero: 'Ação',
      },
      {
        nomeGenero: 'Aventura',
      },
      {
        nomeGenero: 'Cinema de arte',
      },
      {
        nomeGenero: 'Chanchada',
      },
      {
        nomeGenero: 'Comédia',
      },
      {
        nomeGenero: 'Comédia de ação',
      },
      {
        nomeGenero: 'Comédia de terror',
      },
      {
        nomeGenero: 'Comédia dramática',
      },
      {
        nomeGenero: 'Comédia romântica',
      },
      {
        nomeGenero: 'Dança',
      },
      {
        nomeGenero: 'Documentário',
      },
      {
        nomeGenero: 'Docuficção',
      },
      {
        nomeGenero: 'Drama',
      },
      {
        nomeGenero: 'Espionagem',
      },
      {
        nomeGenero: 'Faroeste',
      },
      {
        nomeGenero: 'Fantasia',
      },
      {
        nomeGenero: 'Fantasia científica',
      },
      {
        nomeGenero: 'Ficção científica',
      },
      {
        nomeGenero: 'Filmes com truques',
      },
      {
        nomeGenero: 'Filmes de guerra',
      },
      {
        nomeGenero: 'Musical',
      },
      {
        nomeGenero: 'Filme policial',
      },
      {
        nomeGenero: 'Romance',
      },
      {
        nomeGenero: 'Seriado',
      },
      {
        nomeGenero: 'Suspense',
      },
      {
        nomeGenero: 'Terror',
      },
      {
        nomeGenero: 'Thriller',
      },
      {
        nomeGenero: 'Pornográfico',
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
