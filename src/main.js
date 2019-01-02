//  const ulContainer = document.getElementById('container-list');
//  ulContainer.innerHTML = templateList;
//  Mostrando todos los pokemones.
const arrpokemon = POKEMON.pokemon;
const dataPokemon = pokeLover.datacopy(arrpokemon);
const containerList = document.getElementById('container-list');
containerList.innerHTML = pokeLover.crearTemplateDeCard(dataPokemon);

//  Mostrando pokemones segun tipo:
const containerTypes = document.getElementById('cont-tipos');
containerTypes.addEventListener('click', (event) => {
  containerList.innerHTML = pokeLover.crearTemplateDeCard(pokeLover.filterData(dataPokemon, event.target.getAttribute('value')));
});

const pagInicio = document.getElementById('pag-inicio');
const pagFiltrar = document.getElementById('pag-filtrar');
const pagOrdenar = document.getElementById('pag-ordenar');
const pagPokecientifico = document.getElementById('pag-pokecientifico');

const butonInicio = document.getElementById('btn-inicio');
const butonFiltrar = document.getElementById('btn-filtrar');
const butonOrdenar = document.getElementById('btn-ordenar');
const butonPokecientifico = document.getElementById('btn-pokecientifico');

butonInicio.addEventListener('click', () => {
  pagInicio.style.display = 'block';
  pagFiltrar.style.display = 'none';
  pagOrdenar.style.display = 'none';
  pagPokecientifico.style.display = 'none';
});
butonFiltrar.addEventListener('click', () => {
  pagInicio.style.display = 'none';
  pagFiltrar.style.display = 'block';
  pagOrdenar.style.display = 'none';
  pagPokecientifico.style.display = 'none';
});
butonOrdenar.addEventListener('click', () => {
  pagInicio.style.display = 'none';
  pagFiltrar.style.display = 'none';
  pagOrdenar.style.display = 'block';
  pagPokecientifico.style.display = 'none';
});
butonPokecientifico.addEventListener('click', () => {
  pagInicio.style.display = 'none';
  pagFiltrar.style.display = 'none';
  pagOrdenar.style.display = 'none';
  pagPokecientifico.style.display = 'block';
});

// Funcion ORDENAR
const containerOrdenar = document.getElementById('container-ordenar');
const btnAscen = document.getElementById('btn-ascen');
const btnDescen = document.getElementById('btn-descen');

btnAscen.addEventListener('click', () => {
  containerOrdenar.innerHTML = pokeLover.crearTemplateDeCard(pokeLover.sortData(dataPokemon, 'name', 0));
});
btnDescen.addEventListener('click', () => {
  containerOrdenar.innerHTML = pokeLover.crearTemplateDeCard(pokeLover.sortData(dataPokemon, 'name', 'DESCENDENTE'));
});

// Funcion estadistica
const containerPokecientifico = document.getElementById('container-pokecientifico');
const btnProb = document.getElementById('btn-prob');
btnProb.addEventListener('click', () => {
  containerPokecientifico.innerHTML = pokeLover.crearTemplateDeCard(pokeLover.computeStats(dataPokemon));
});
