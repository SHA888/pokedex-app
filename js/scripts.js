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

pokemonList.forEach(function (pokemon) {
  let wow = "";
  if (pokemon.height > 60) {
    wow = " - Wow, that's huge!";
  }
  document.write(`${pokemon.name} (height: ${pokemon.height})${wow}<br>`);
});
