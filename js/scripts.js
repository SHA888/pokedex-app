let pokemonRepository = (function () {
  let pokemonList = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass", "poison"],
      height: 70,
      weight: 6.9,
    },
    {
      id: 4,
      name: "Charmander",
      types: "fire",
      height: 60,
      weight: 8.5,
    },
    {
      id: 7,
      name: "Squirtle",
      types: "water",
      height: 50,
      weight: 9,
    },
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  let wow = "";
  if (pokemon.height > 60) {
    wow = " - Wow, that's huge!";
  }
  document.write(`<p>${pokemon.name} (height: ${pokemon.height})${wow}<p>`);
});
