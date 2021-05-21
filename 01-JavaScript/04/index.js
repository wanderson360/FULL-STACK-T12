const json = require("./json");

let pets = [
  {
    id: 1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];

const listarPets = (pets) => {
  pets.forEach((pet) => {
    console.log("Nome: " + pet.nome + "\n" + "Tipo: " + pet.tipo);
  });
  console.log("Temos o total de " + pets.length + " pet(s) registrado(s) no sistema");
}

// listarPets(pets)

const validaDados = (objetoPet) => {
  return (
    typeof objetoPet.nome === 'string' &&
    typeof objetoPet.tipo === 'string' &&
    typeof objetoPet.raca === 'string' &&
    typeof objetoPet.idade === 'number' &&
    typeof objetoPet.genero === 'string' &&
    typeof objetoPet.vacinado === 'boolean'
  ) 
}

const cadastrarPet = (objetoPet) => {
  if (typeof objetoPet == "object") {  
    if(validaDados(objetoPet)){
      pets.push(objetoPet)
      console.log(pets)
    } else {
      console.log("O objeto informado não possui todas as propriedades necessárias")
    }
  } else {
    console.log("Informe um objeto para cadastrar um novo pet")
  }
}

let novoPet = {
  nome: 'Novo Pet',
  tipo: 'gato',
  raca: 'siames',
  idade: 3,
  genero: 'Fêmea',
  vacinado: false
}

// cadastrarPet(novoPet)

const servicosPrestados = (pet, servicoRealizado) => {
  servicoRealizado(pet)
}

const darBanhoNoPet = (pet) => {
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("banho na data " + data);
  console.log("O pet " + pet.nome + " tomou banho");
}

const tosarPet = (pet) => {
  let data = new Date();
  data = data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
  pet.servicos.push("tosa na data " + data);
  console.log("O pet " + pet.nome + " foi tosado");
}

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

const cadastrarPetsSpreadOperator = (pets, json) => {
  let arrayPetsJson = JSON.parse(json);
  pets.push(...arrayPetsJson)

  return pets
}

const cadastrarPetsFor = (pets, json) => {
  let arrayPetsJson = JSON.parse(json)

  for (let index = 0; index < arrayPetsJson.length; index++) {    
    pets.push(arrayPetsJson[index])
  }

  return pets
}

const filtrarPetPorNome = (lista, nomePet) => {
  let petsFiltrados = lista.filter((pet) => {
    return pet.nome == nomePet
  });

  if(petsFiltrados.length > 0){
    return petsFiltrados
  } else {
    return "Nenhum pet foi encontrado com o nome " + nomePet
  }
}

// console.log(filtrarPetPorNome(pets, 'Yoshi'))

// temos 1000 pets e nossa empresa pretende criar uma campanha de vacinacao,
// porém, precisamos atingir apenas pets que ainda não foram vacinados, para isso
// teremos que efetuar uma contagem de quantos pets ja estao vacinados e quantos pets
// ainda precisam ser vacinados.

// Por exemplo: Pense que temos 700 animais vacinados e 300 nao vacinados, logo,
// o foco da nossa campanha seria atingir apenas os 300 animais que ainda nao foram vacinados
// maaaas, fiquem tranquilos. Por enquanto, iremos apenas focar na contagem de vacinados e 
// nao vacinados.

 
function campanhaVacinacao(pets) {
  let vacinado = 0;  semVacina = 0;
  
  pets.forEach(e => {
      if (e.vacinado) {
          vacinado = vacinado + 1
      } else {
          semVacina = semVacina + 1
      }
  });
  let listaPetsVacina = [vacinado, semVacina]
  return listaPetsVacina
}


function contagemDePets(pets){
  let vacinados = 0;
  let naoVacinados = 0;

  pets.filter((pet) => {
    if(pet.vacinado){
      vacinados++
    } else {
      naoVacinados++
    }
  })
  console.log("temos " + vacinados + " pets vacinados");
  console.log("temos " + naoVacinados + " pets nao vacinados");
}

// contagemDePets(pets)

const removerPet = (id, lista) => {
  let pet = lista.filter((pet) => {
    return pet.id == id
  });

  if(pet.length > 0){
    pets.splice(id - 1, 1)
    console.log(pets)
  } else {
    console.log("Não encontramos nenhum pet com o id: " + id)
  }
}

removerPet(2, pets)