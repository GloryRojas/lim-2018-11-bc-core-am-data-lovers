//const ulContainer = document.getElementById('container-list');
//ulContainer.innerHTML = templateList;
//Mostrando todos los pokemones.
const containerList = document.getElementById("container-list");
containerList.innerHTML = crearTemplateDeCard(dataPokemon);

//Mostrando los mas evolucionados
const mostEvolution = document.getElementById("most-evolution");
mostEvolution.addEventListener("click", () =>{
  containerList.innerHTML = crearTemplateDeCard(mostEvolutionPokemon);
});

const containerTypes = document.getElementById("cont-tipos");
containerTypes.addEventListener("click", (e) =>{
  containerList.innerHTML = crearTemplateDeCard(filterData(dataPokemon, e.target.getAttribute("value")))
});
