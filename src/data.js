// Construyendo función para copiar la data
const datacopy = (arr) => {
  const cloneArrPokemon = [];
  for (let i = 0; i < arr.length; i++) {
    cloneArrPokemon.push(Object.assign({}, arr[i]));
  }
  return cloneArrPokemon;
};
// Array copia de la data original ---> Aqui iniciamos la funcionalidad.

// Funcion para pintar tarjetas con datos pokemon
const crearTemplateDeCard = (data) => {
  let templateListOfCards = '';
  // recorremos nuestro array con forEach
  data.forEach((pokemon) => {
    // creamos un template(string) por cada elemento del array
    const card = `
      <div class='card-link'>
        <article class='blog-card'>
          <img class='post-image' src='${ pokemon.img }' />
          <div class='article-details'>
            <h3 class='post-title'>${ pokemon.name }</h3>
            <h4 class='post-category'>Tipo: ${ pokemon.type }</h4>
            <p class='post-description'> ${ pokemon.candy }</p>
          </div>
        </article>
      </div>
    `;
    templateListOfCards += card;
  });
  return templateListOfCards;
};

// Obteniendo objetos con pokemons mas evolucionados
// const mostEvolutionPokemon = dataPokemon.filter(evolucion => (evolucion.candy_count === undefined));

// Filtrando pokemones según condition  'Tipo'
const filterData = (data, condition) => {
  let arrType = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].type.length; j++) {
      if (data [i].type[j] === condition) {
        arrType.push(data[i]);
      }
    }
  }
  return arrType;
};
// Funcion ORDENAR
const sortData = (data, sortBy, sortOrder) => {
  let arrAscenVar;
  if (sortBy === 'name') {
    arrAscenVar = data.sort((compareA, compareB) => {
      if (compareA.name > compareB.name) {
        return 1;
      }
      if (compareA.name === compareB.name) {
        return 0;
      }
      return -1;
    });
  }
  if (sortOrder === 'DESCENDENTE') {
    arrAscenVar = arrAscenVar.reverse();
  }
  return arrAscenVar;
};
// Funcion Reduce para determinar el pokemon con mayor probabilidad de aparecer.
const computeStats = (data) => {
  let arrCompute = [];
  let majorSpawns = data.reduce(function(valor1, valor2) {
    return valor1['avg_spawns'] > valor2['avg_spawns'] ? valor1 : valor2;
  });
  arrCompute.push(majorSpawns);
  return arrCompute;
};

// Creando objeto para englobar todas las funciones

window.pokeLover = {
  datacopy,
  crearTemplateDeCard,
  filterData,
  sortData,
  computeStats,
};

