// Adicionar path pra simplificar

const idade = {
  0: 'Livre',
  10: '10 anos',
  12: '12 anos',
  14: '14 anos',
  16: '16 anos',
  18: '18 anos'
};

const idioma = {
  nac: 'Nacional',
  leg: 'Legendado',
  dub: 'Dublado'
}

const filmes = [
  {
    id: 1,
    nome: 'Mulher Maravilha, 1984',
    img: './img/posters/mulher-maravilha-1984-poster-desktop.jpg',
    sinopse: 'Mulher-Maravilha 1984 acompanha Diana Prince/Mulher-Maravilha (Gal Gadot) em 1984, durante a Guerra Fria, entrando em conflito com dois grande inimigos - o empresário de mídia Maxwell Lord (Pedro Pascal) e a amiga que virou inimiga Barbara Minerva/Cheetah (Kristen Wiig) - enquanto se reúne com seu interesse amoroso Steve Trevor (Chris Pine).',
    classificacao: idade[14],
    idioma: idioma.leg
  },
  {
    id: 2,
    nome: 'Um tio quase perfeito 2',
    img: './img/posters/um-tio-quase-perfeito-2-poster-desktop.jpg',
    sinopse: 'Em Um Tio Quase Perfeito 2, longe da vida de trambiques e vivendo em harmonia com sua família, Tony (Marcus Majella) reina soberano no coração de seus sobrinhos. Porém, quando sua irmã começa a namorar Beto (Danton Mello), um homem aparentemente exemplar, ele corre o risco de perder a atenção dos pequenos. Determinado a acabar com a "concorrência", Tony vai fazer de tudo para que Beto não entre oficialmente para a família.',
    classificacao: idade[0],
    idioma: idioma.nac
  },
  {
    id: 3,
    nome: 'O tempo com você',
    img: './img/posters/o-tempo-com-voce-poster-desktop.jpg',
    sinopse: 'Durante o verão, Hodaka (Kotaro Daigo) foge de sua casa em uma ilha periférica para chegar a Tóquio. Ele não tem dinheiro mas, depois de muitos dias, acaba encontrando trabalho como escritor freelance para uma revista duvidosa. Um dia, porém, Hodaka conhece uma garota no meio da agitação da cidade grande. Hina (Nana Mori) é uma garota alegre que vive sozinha com seu irmão mais novo, devido a uma série de circunstâncias.',
    classificacao: idade[12],
    idioma: idioma.dub
  },
  {
    id: 4,
    nome: 'Trolls 2',
    img: './img/posters/trolls-2-poster-desktop.jpg',
    sinopse: 'Em Trolls 2, a rainha Poppy (Anna Kendrick) e Branch (Justin Timberlake) fazem uma descoberta surpreendente: há outros mundos Troll além do seu, e suas diferenças criam grandes confrontos entre essas diversas tribos. Quando uma ameaça misteriosa coloca todos os Trolls do país em perigo, Poppy, Branch e seu grupo de amigos devem embarcar em uma jornada épica para criar harmonia entre os Trolls rivais e uní-los contra um mal maior.',
    classificacao: idade[0],
    idioma: idioma.dub
  }
]
// console.log(filmes[0].classificacao)
module.exports = filmes