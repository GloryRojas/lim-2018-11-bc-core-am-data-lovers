
const htmlOriginal = document.getElementById("contPokemones").innerHTML;
var arrPokemon = POKEMON.pokemon;

document.getElementById("sec3Tit1").innerHTML = arrPokemon[0].name;
document.getElementById("sec3Tit2").innerHTML = arrPokemon[1].name;
document.getElementById("sec3Tit3").innerHTML = arrPokemon[2].name;



document.getElementById("sec3Img1").src = arrPokemon[0].img;
//solo se ejecuta una vez
let pWater = [];
for (let i = 0; i < arrPokemon.length; i++) {
  for (let x = 0; x < arrPokemon[i].type.length; x++) {
    if (arrPokemon[i].type[x] === "Water") {
      pWater.push(arrPokemon[i])
    }
  }
}

function btnPokemonWater() {
  let newHtmlGeneration = "";
  document.getElementById("contTypePok").innerHTML="Tipo Agua";
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

function btnPokemonGround(){
  let newHtmlGeneration="";
  document.getElementById("contTypePok").innerHTML="Tipo Tierra";
  for (let i = 0; i < pGround.length; i++) {
    newHtmlGeneration += htmlOriginal.replace("*|img|*",pGround[i].img).replace("*|name|*", pGround[i].name);
  }
  document.getElementById("contPokemones").innerHTML = newHtmlGeneration;
}

document.getElementById("sec3Img3").src = arrPokemon[15].img;
//solo se ejecuta una vez
let pFlying=[];
for (let i = 0; i < arrPokemon.length; i++) {
  for (let x = 0; x < arrPokemon[i].type.length; x++) {
    if (arrPokemon[i].type[x]==="Flying") {
      pFlying.push(arrPokemon[i])
    }
  }
}

function btnPokemonFlying(){
  let newHtmlGeneration="";
  document.getElementById("contTypePok").innerHTML="Tipo Aire";
  for (let i = 0; i < pFlying.length; i++) {
    newHtmlGeneration += htmlOriginal.replace("*|img|*",pFlying[i].img).replace("*|name|*", pFlying[i].name);
  }
  document.getElementById("contPokemones").innerHTML = newHtmlGeneration;
}












/*for (let i = 0; i < POKEMON.pokemon.length; i++) {
    //console.log(POKEMON.pokemon[i].name + " " +POKEMON.pokemon[i].egg+" "+ POKEMON.pokemon[i].num);
     document.getElementById("contPokem").innerHTML += "<p>" + POKEMON.pokemon[i].name+ " "+ POKEMON.pokemon[i].num + "</p>";
    }
  */
 /*
var arrEvolution = [];
var arrUndef = [];
for (let i = 0; i < arrPokemon.length; i++) {
  arrEvolution.push(arrPokemon[i].candy_count);
  if (arrPokemon[i].candy_count === undefined) {
    arrUndef.push(arrPokemon[i].name)
  }
}
*/
