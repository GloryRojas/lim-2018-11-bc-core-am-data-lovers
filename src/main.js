const containerList = document.getElementById('contPokemones');

//funcion monstrar tipos de pokemones
const containerType = document.getElementById('contType');
containerType.addEventListener('click', (event) => {
  containerList.innerHTML = templateCard(filterData(arrPokemon, event.target.getAttribute("value")));
});

const pageInit = document.getElementById('page-init');
const pageOrder = document.getElementById('page-order');
const pageFilter = document.getElementById('page-filter');
const pageFinal = document.getElementById('page-final');

const btnInit = document.getElementById('btn-init');
const btnFilter = document.getElementById('btn-filter');
const btnOrder = document.getElementById('btn-order');
const btnFinal = document.getElementById('btn-final');

btnInit.addEventListener('click', () => {
  pageInit.style.display = 'block';
  pageFilter.style.display = 'none';
  pageOrder.style.display = 'none';
  pageFinal.style.display = 'none';
});

btnFilter.addEventListener('click', () => {
  pageInit.style.display = 'none';
  pageFilter.style.display = 'block';
  pageOrder.style.display = 'none';
  pageFinal.style.display = 'none';
});

btnOrder.addEventListener('click', () => {
  pageInit.style.display = 'none';
  pageFilter.style.display = 'none';
  pageOrder.style.display = 'block';
  pageFinal.style.display = 'none';
});

btnFinal.addEventListener('click', () => {
  pageInit.style.display = 'none';
  pageFilter.style.display = 'none';
  pageOrder.style.display = 'none';
  pageFinal.style.display = 'block';
});





































































/*





const htmlOriginal = document.getElementById("contPokemones").innerHTML;

var arrPokemon = POKEMON.pokemon;
document.getElementById("sec3Tit1").innerHTML = arrPokemon[0].name;
document.getElementById("sec3Tit2").innerHTML = arrPokemon[104].name;
document.getElementById("sec3Tit3").innerHTML = arrPokemon[15].name;

document.getElementById("sec3Img1").src = arrPokemon[0].img;
//solo se ejecuta una vez

function btnPokemonWater() {
  let newHtmlGeneration = "";
  document.getElementById("contTypePok").innerHTML = "Tipo Agua";
  for (let i = 0; i < pWater.length; i++) {
    newHtmlGeneration += htmlOriginal.replace("*|img|*", pWater[i].img).replace("*|name|*", pWater[i].name);
  }
  document.getElementById("contPokemones").innerHTML = newHtmlGeneration;
}

document.getElementById("sec3Img2").src = arrPokemon[104].img;
//solo se ejecuta una vez
let pGround = [];
for (let i = 0; i < arrPokemon.length; i++) {
  for (let x = 0; x < arrPokemon[i].type.length; x++) {
    if (arrPokemon[i].type[x] === "Ground") {
      pGround.push(arrPokemon[i])
    }
  }
}

function btnPokemonGround() {
  let newHtmlGeneration = "";
  document.getElementById("contTypePok").innerHTML = "Tipo Tierra";
  for (let i = 0; i < pGround.length; i++) {
    newHtmlGeneration += htmlOriginal.replace("*|img|*", pGround[i].img).replace("*|name|*", pGround[i].name);
  }
  document.getElementById("contPokemones").innerHTML = newHtmlGeneration;
}

document.getElementById("sec3Img3").src = arrPokemon[15].img;
//solo se ejecuta una vez
let pFlying = [];
for (let i = 0; i < arrPokemon.length; i++) {
  for (let x = 0; x < arrPokemon[i].type.length; x++) {
    if (arrPokemon[i].type[x] === "Flying") {
      pFlying.push(arrPokemon[i])
    }
  }
}

function btnPokemonFlying() {
  let newHtmlGeneration = "";
  document.getElementById("contTypePok").innerHTML = "Tipo Aire";
  for (let i = 0; i < pFlying.length; i++) {
    newHtmlGeneration += htmlOriginal.replace("*|img|*", pFlying[i].img).replace("*|name|*", pFlying[i].name);
  }
  document.getElementById("contPokemones").innerHTML = newHtmlGeneration;
}

for (let i = 0; i < POKEMON.pokemon.length; i++) {
  console.log(POKEMON.pokemon[i].type);
  //document.getElementById("contPokem").innerHTML += "<p>" + POKEMON.pokemon[i].name+ " "+ POKEMON.pokemon[i].num + "</p>";
}


var arrEvolution = [];
var arrUndef = [];
for (let i = 0; i < arrPokemon.length; i++) {
 arrEvolution.push(arrPokemon[i].candy_count);
 if (arrPokemon[i].candy_count === undefined) {
   arrUndef.push(arrPokemon[i].name)
 }
}
*/
