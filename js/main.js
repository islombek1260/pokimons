for(let i=0; i<pokemons.length; i++){

    const div=document.createElement('div');
    div.classList.add('card');
    div.innerHTML=`<img class="card-img" src="${pokemons[i].img}" alt="${pokemons[i].name}">
    <div class="card-item">
        <h3 class="pokemonName">${pokemons[i].name}</h3>
        <p class="pokemonSelect">${pokemons[i].type}</p>
        <span class="pokemonKg">${pokemons[i].weight}</span>
        <span class="pokemonKg">${pokemons[i].egg}</span>
    </div>`;
    $('.hero').append(div);
}