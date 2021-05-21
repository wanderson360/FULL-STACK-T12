/* Minhas respostas do Desafio Online p/ Admissão ao Curso da DH
Obs.: No curso de Nivelamento usei Function ao invés de Arrow Function, porque a parte conceitual era introdutória.
*/

/* (1) Árvores Utópica ****/
/*As árvores utópicas  crescem de uma forma particular, em dois ciclos:
  cada primavera dobram seu tamanho
  cada verão crescem um metro
  Se Laura planta uma árvore utópica com um metro, no final do outono, qual 
  seria sua altura depois de N ciclos?

  Alguns exemplos:

  si N = 0, sua altura será 1 metro (não cresceu nada)
  si N = 1, sua altura será de 2 metros (dobrou a altura na primavera)
  si N = 2, sua altura será de 3 metros (cresceu um metro mais no verão)
  si N = 3, sua altura será de 6 metros (dobrou a altura na primavera seguinte)
  E assim ...
  Escreva a função alturaArvoreUtopica, que utilize uma quantidade de ciclos de 
  crescimento, e retorne a altura resultante da árvore de Laura. */
  
function alturaArvoreUtopica(ciclo) {
  var altura = 1;
	for (let i = 1; i <= ciclo; i++) {
		 (i % 2 == 0) ? (altura += 1) : (altura *=2);
	}
  return altura;
}


/* (2) Fatorial ****/
/* Escreva uma função fatorial, que calcule o fatorial de um número */

function fatorial(num){
   return (num > 1) ? (num * fatorial(num - 1)) : (1);
}


/* (3) Produto ****/
/* Necessitamos uma função produto que receba um array de números e 
   retorne o produto: o resultado de multiplicar todos os elementos entre si.
   Por exemplo, produto([1, 4, 7]) deve retornar 28, que é 1 * 4 * 7. */
   
function produto(array){
 var multiplicar = 1;
   for (let i = 0; i < array.length; i++){
        multiplicar *= array[i];    
   }
 return multiplicar;
}


/*(4) maisMenos ****/
function maisMenos(vetor) {
var numPositivos = 0, 
    numZero      = 0,
    numNegativos = 0,
    fracao       = [];    
for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 0) {
         numPositivos++;
    } else if (vetor[i] == 0) {
         numZero++;
    } else {
         numNegativos++;
    }    
}
  fracao.push(numPositivos / vetor.length,
              numZero / vetor.length,
              numNegativos / vetor.length);
return fracao;
}


/* (5) Professora furiosa ****/
/* Uma professora de programação, cansada de que os estudantes cheguem tarde, decidiu 
   que vai cancelar a aula se há poucos presentes.

   Ela representa a entrada dos estudantes como um array de tempos de chegada tarde, em minutos. 
   Por exemplo, se um estudante chegou 10 minutos atrasado, outro 5 minutos antes da hora, outro 
   com 3 minutos de atraso, e outro pontual, poderá representar assim:

   var alunosDaSegunda = [10, -5, 3, 0];
   Com essa informação e a quantidade mínima de estudantes para que suceda o curso, a professora 
   quer saber se a aula acontecerá. Por exemplo, supondo que a quantidade mínima de estudantes para 
   que a aula aconteça é de 2 alunos, então o curso da segunda-feira se realizará, porque houve um 
   estudante que foi pontual e um estudante que chegou cedo.

   acontece(alunosDaSegunda, 2)
   true
   Mas se a quantidade mínima fosse 3, a aula não aconteceria:

   acontece(alunosDaSegunda, 3)
   false
   Escreva as seguintes funções: 1. acontece, que diz se a aula sucederá de acordo com o array dos 
   estudantes que entraram. 2. aberturas, que utiliza um array com os arrays dos estudantes que 
   entraram nos outros dias, e a quantidade mínima de estudantes, e diga quais os dias em que as 
   aulas aconteceram e quais não. Por exemplo:

   aberturas([alunosDaSegunda, alunosDaTerça, alunosDaQuarta], 2)
   [true, false, false] */
   
function acontece(diasAulas,qtMinAlunos) {
  var alunosPontuais = [];
    for (let i = 0; i < diasAulas.length; i++) {
       if (diasAulas[i] <= 0) {
          alunosPontuais.push(diasAulas[i]);
       }
    }
  return alunosPontuais.length >= qtMinAlunos; 
}    
function aberturas(diasAulas, qtMinAlunos) {
  var estudantes = [];
    for (let i = 0; i < diasAulas.length; i++) {
          estudantes.push(acontece(diasAulas[i], qtMinAlunos));
    }
  return estudantes;
}    


/* (6) Escada ****/
/* Queremos representar uma escada com altura variável, utilizando um array de strings.
   Por exemplo, uma escada com altura 3, representaremos com o seguinte array:

  var escada3 = [
  "  #",
  " ##",
  "###"
  ]
  E uma escada com altura 5, da seguinte forma:

  var escada5 = [
  "    #",
  "   ##",
  "  ###",
  " ####",
  "#####"
  ]
  Escreva uma função escada que utilize uma altura (um número) e retorne um array que 
  represente a escada correspondente. */
  
function escada(altura) {
  var degrauEscada = [];  
  for(let i = 1; i<= altura; i++){
    degrauEscada.push(" ".repeat(altura - i) + "#".repeat(i));     
      }    
   return degrauEscada;
 }























