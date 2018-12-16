// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window
/*const example = () => {
  return 'example';
};
window.example = example;*/
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

//Obteniendo objetos con pokemons mas evolucionados
const mostEvolutionPokemon = dataPokemon.filter(evolucion => (evolucion.candy_count === undefined));
console.log(mostEvolutionPokemon);
//pintando resultados de filtrar mas evolucionados.
const containerList = document.getElementById('container-list');
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
    // vamos concatenando cada li
    templateListOfCards += card;
  })
  containerList.innerHTML = templateListOfCards;
}
// ejecuntado funciona para pintar la data en mi html
crearTemplateDeCard(mostEvolutionPokemon);
