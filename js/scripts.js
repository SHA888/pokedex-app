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
    if (typeof pokemonList === "object") {
      pokemonList.push(pokemon);
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    // console.log(pokemonList.innerText);
    // pokemonList.innerText = "Pokemon List";
    // console.log(pokemonList.innerText);

    let listItem = document.createElement("li");
    // listItem.innerText = "List Item";
    // console.log(listItem.innerText);

    let button = document.createElement("button");
    // button.innerText = "Button";
    button.innerText = pokemon.name;
    // console.log(button.innerText);

    button.classList.add("pokemon-name");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
  };
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  // console.log(pokemon);
});

// console.log(typeof pokemonRepository.getAll());
// console.log(Object.keys(pokemonRepository.getAll()));
