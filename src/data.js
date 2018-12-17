//Construyendo función para copiar la data
const arrpokemon = POKEMON.pokemon;
const datacopy = (arr) => {
 const cloneArrPokemon = [];
 for(let i = 0; i < arr.length; i++){
   cloneArrPokemon.push(Object.assign({}, arr[i]));
 }
 return cloneArrPokemon;
};
//Nuevo array : console.log(datacopy(arrpokemon));
//Array original : console.log(arrpokemon);

//Array copia de la data original ---> Aqui iniciamos la funcionalidad.
const dataPokemon = datacopy(arrpokemon);

//Funcion para pintar tarjetas con datos pokemon
const crearTemplateDeCard = (data) => {
  let templateListOfCards = '';
  // recorremos nuestro array con forEach
  data.forEach((pokemon) => {
    // creamos un template(string) por cada elemento del array
    const card = `
      <div class="card-link">
        <article class="blog-card">
          <img class="post-image" src="${ pokemon.img }" />
          <h3 class="post-title">${ pokemon.name }</h3>
          <div class="article-details">
            <h4 class="post-category">${ pokemon.type }</h4>
            <p class="post-description">Altura: ${ pokemon.height }</p>
          </div>
        </article>
      </div>
    `;
    templateListOfCards += card;
  })
  return templateListOfCards
};


//Obteniendo objetos con pokemons mas evolucionados

const mostEvolutionPokemon = dataPokemon.filter(evolucion => (evolucion.candy_count === undefined));

//Filtrando pokemones según tipo
const filterData = (data, condition)=>{
  let arrType = [];
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].type.length; j++) {
      if(data [i].type[j] == condition){
        arrType.push(data[i])
      }
    }
  }
  return arrType;
};
