function createTemplateDetailPokemonElement(pokemon) {
  return `
    <section class="content">
      <div class="description pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <h1 class="mark">${pokemon.name}</h1>
        <ol class="types">
          ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
        </ol>        
        <div class="wrap">
          <img src="${pokemon.photo}" alt="${pokemon.name}"/>
        </div>
        <div class="about">
          <h2>About</h2>
          <p>
            <span class="mark">Weight:</span>
            <span class="mark-value">${pokemon.weight} lbs</span>          
          </p>
          <p>
            <span class="mark">Height:</span>
            <span class="mark-value">${pokemon.height} cm</span>          
          </p>
          <p>
            <span class="mark">Abilities: </span>
            <span class="mark-value">${pokemon.abilities.join(', ')}</span>          
          </p>
          <p>
            <span class="mark">Types: </span>
            <span class="mark-value">${pokemon.types.join(', ')}</span>          
          </p>
        </div>
      </div>      
    </section>
  `  
}

const pokemonId = window.location.search.replace('?id=', '');
createDetailPokemonElement();

function createDetailPokemonElement() {
  pokeApi.getPokemon(pokemonId)
    .then(pokemon => {
      document.body.classList.add(pokemon.type);
      const containerElement = document.querySelector('.container');
      containerElement.innerHTML += createTemplateDetailPokemonElement(pokemon);
    });
}