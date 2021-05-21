function scroll() {
  let idBotao  = $(this).attr('id'), sessao = '#slider';

  switch (idBotao) {
    case "menu-quem-somos": 
      sessao = '#sobre';  
      break;    
    case "menu-servico": 
      sessao = '#servico';
      break;
    case "menu-contato": 
      sessao = '#contato';        
  }  
  
  $([document.documentElement, document.body]).animate(
      {scrollTop: $(sessao).offset().top - 70}, 1500);
}

//Navegar no Scroll da Página
$('.nav-item').click(
  scroll
);