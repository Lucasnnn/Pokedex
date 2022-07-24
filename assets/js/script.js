async function pokemons(x) {
  const Nome = document.querySelector("#nome");

  const Imagem = document.querySelector("#imagem");

  const Numero = document.querySelector("#numero");

  const Descrição = document.querySelector("#descricao");

  const i = x;
  const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/" + i + "/");
  const dados = await resultado.json();

  const type = dados.types.length
  tipos(type , dados);
   

  const imags = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + i + ".png"
 
  const number = "Nº " + dados.id

  const descri = await fetch ("https://pokeapi.co/api/v2/pokemon-species/" + i + "/")
  const descrit = await descri.json();

  Imagem.src = imags;
  Nome.textContent = dados.name;
  Numero.textContent = number
  Descrição.textContent = descrit.flavor_text_entries[9].flavor_text
}


async function tipos(num , dados){
 if(document.querySelectorAll(".p-sumir").length > 0){
  const y = document.querySelectorAll(".p-sumir");

  for(f = 0 ; f <= document.querySelectorAll(".p-sumir").length ; f++){
   y[f].remove();
 }}

  for(i = 0 ; i < num ; i++){
   const Tipo = document.querySelector("#tipo");
   const insert = dados.types[i].type.name ;
   Tipo.insertAdjacentHTML('afterbegin', `<p class = "p-sumir">${insert}</p>`) ;
   }
}


async function pesquisa(){
  var numero = document.querySelector("#busca").value ;
  pokemons(numero);
}