'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('filme', 
    [
      {
        titulo: 'Godzilla vs. Kong',
        tituloOriginal: 'Godzilla vs. Kong',
        lancamento: '2021-04-29',
        paisOrigem: 'EUA',
        duracao: '01:52:00',
        sinopse: 'Em Godzilla vs Kong, as duas poderosas forças da natureza vão se enfrentar em batalha. Enquanto a organização científica secreta Monarch caça, investiga e estuda a origem dos Titãs, uma conspiração tem a intenção de acabar com todas as criaturas, sejam elas ameaçadoras ou não. O mundo sobreviverá ao duelo de monstros?',
        rate: '91',
        exibicaoInicio: '2021-04-29',
        exibicaoFinal: '2021-05-30',
        idioma_id: 2,
        genero_id: 1,
        poster_url: '/img/posters/godzilla.jpg',
        trailer_url: 'odM92ap8_c0',
        classificacao: 12,
      },
      {
        titulo: 'Minari',
        tituloOriginal: 'Minari - Em Busca Da Felicidade',
        lancamento: '2020-08-15',
        paisOrigem: 'EUA',
        duracao: '01:55:00',
        sinopse: 'Sinopse: Minari se passa nos anos 80. David, um menino coreano-americano de sete anos de idade, que se depara com um novo ambiente e um modo de vida diferente quando seu pai, Jacob, muda sua família da costa oeste para a zona rural do Arkansas. Entediado com a nova rotina, David só começa a se adaptar com a chegada de sua vó. Enquanto isso, Jacob, decidido a criar uma fazenda em solo inexplorado, arrisca suas finanças, seu casamento e a estabilidade da família.',
        rate: '95',
        exibicaoInicio: '2020-08-15',
        exibicaoFinal: '2020-09-15',
        idioma_id: 2,
        genero_id: 13,
        poster_url: '/img/posters/minari.jpg',
        trailer_url: 'KQ0gFidlro8',
        classificacao: 0,
      },
      {
        titulo: 'Monster Hunter',
        tituloOriginal: 'Monster Hunter',
        lancamento: '2021-02-05',
        paisOrigem: 'EUA',
        duracao: '01:55:00',
        sinopse: 'Paralelo ao nosso mundo, existe outro: um mundo de poderosos e perigoso monstros que controlam seus territórios com ferocidade mortal. Quando a Tenente Artemis (Milla Jovovich) e seu esquadrão de elite são transportados através de um portal que liga os dois mundos, eles vão ser confrontados com a experiência mais chocante de suas vidas. Em sua desesperada tentativa de voltar para casa, a corajosa tenente encontra um caçador misterioso (Tony Jaa), cujas habilidades únicas permitiram com que ele sobrevivesse nessa terra hostil. Enfrentando incansáveis e aterrorizantes ataques dos monstros, os dois guerreiros se unem para lutar contra eles e encontrar um meio de voltarem para casa.',
        rate: '95',
        exibicaoInicio: '2021-02-05',
        exibicaoFinal: '2021-03-05',
        idioma_id: 2,
        genero_id: 2,
        poster_url: '/img/posters/monster.png',
        trailer_url: '3od-kQMTZ9M',
        classificacao: 14,
      },
      {
        titulo: 'Mulher Maravilha, 1984',
        tituloOriginal: 'Wonder Woman 1984',
        lancamento: '2020-12-24',
        paisOrigem: 'EUA',
        duracao: '02:29:00',
        sinopse: 'Mulher-Maravilha 1984 acompanha Diana Prince/Mulher-Maravilha (Gal Gadot) em 1984, durante a Guerra Fria, entrando em conflito com dois grande inimigos - o empresário de mídia Maxwell Lord (Pedro Pascal) e a amiga que virou inimiga Barbara Minerva/Cheetah (Kristen Wiig) - enquanto se reúne com seu interesse amoroso Steve Trevor (Chris Pine).',
        rate: '93',
        exibicaoInicio: '2020-12-24',
        exibicaoFinal: '2021-02-24',
        idioma_id: 1,
        genero_id: 1,
        poster_url: '/img/posters/mulher-maravilha-1984-poster-desktop.jpg',
        trailer_url: 'XqcsS1azJ_g',
        classificacao: 14,
      },

    ], {}),

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
