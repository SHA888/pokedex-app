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

for (let i = 0; i < pokemonList.length; i++) {
  document.write(
    pokemonList[i].name + " (height: " + pokemonList[i].height + ")<br>"
  );
}
