// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*
const example = () => {
  return 'example';
};

window.example = example;
containerList.innerHTML= templateCard (arrPokemon);
*/
const arrPokemon = POKEMON.pokemon;
// funcion para rellenar tarjetas con datos de pokemones
const templateCard = (data) => {
  let templateListOfCards = '';
  // recorremos  nuestra array con forEach
  data.forEach((pokemon) => {
    const card = `
      <div class="card-link">
        <article class="blog-card">
          <img class="post-image" src="${pokemon.img}"/>
          <h3 class="post-tittle">${pokemon.name}</h3>
          <div class="article-details">
            <h4 class="post-category">${pokemon.type}</h4>
            <p class="post-description">Altura: ${pokemon.height}</p>
          </div>
        </article>
      </div>  
    ` ;
    templateListOfCards += card;
  })
  return templateListOfCards;
}

const showEvolution = arrPokemon.filter(evolution => (evolution.candy-count === undefined));

// filtro de pokemones segun tipo:
const filterData = (data, condition) => {
  let arrType = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].type.length; x++) {
      if (data[i].type[x] === condition) {
        arrType.push(data[i]);
      }
    }
  }
  return arrType;
}
// Funcion ordenar
const sortData = (data, sortBy, sortOrder) => {
  let arrAscenVar;
  if (sortBy === 'name') {
    arrAscenVar = data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name === b.name) {
        return 0;
      }
      return -1;
    });
  }
  if (sortOrder === 'descendente') {
    arrAscenVar = arrAscenVar.reverse();
  }
  return arrAscenVar;
};