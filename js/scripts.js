let pokemonRepository = (function () {
  let pokemonList = [
    // List of pokemons
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass", "poison"],
      height: 0.7,
      weight: 6.9,
    },
    {
      id: 2,
      name: "Ivysaur",
      types: ["grass", "poison"],
      height: 1,
      weight: 13,
    },
    {
      id: 3,
      name: "Venusaur",
      types: ["grass", "poison"],
      height: 2,
      weight: 100,
    },
    {
      id: 4,
      name: "Charmander",
      types: "fire",
      height: 0.6,
      weight: 8.5,
    },
    {
      id: 5,
      name: "Charmeleon",
      types: "fire",
      height: 1.1,
      weight: 19,
    },
    {
      id: 6,
      name: "Charizard",
      types: ["fire", "flying"],
      height: 1.7,
      weight: 90.5,
    },
    {
      id: 7,
      name: "Squirtle",
      types: "water",
      height: 0.5,
      weight: 9,
    },
    {
      id: 8,
      name: "Wartorle",
      types: "water",
      height: 1,
      weight: 22.5,
    },
    {
      id: 9,
      name: "Blastoise",
      types: "water",
      height: 1.6,
      weight: 85.5,
    },
    {
      id: 10,
      name: "Caterpie",
      types: "bug",
      height: 0.3,
      weight: 2.9,
    },
    {
      id: 11,
      name: "Metapod",
      types: "bug",
      height: 0.7,
      weight: 9.9,
    },
    {
      id: 12,
      name: "Butterfree",
      types: ["bug", "flying"],
      height: 1.1,
      weight: 32,
    },
  ];

  // Add function
  function add(pokemon) {
    if (typeof pokemonList === "object") {
      pokemonList.push(pokemon);
    }
  }

  // Get function
  function getAll() {
    return pokemonList;
  }

  // Function to create button list of pokemons.
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
    showPokemonDetails(button, pokemon);
  }

  // Function to show pokemon's details when the button is clicked.
  function showDetails(pokemon) {
    console.log("id: ", pokemon.id);
    console.log("name: ", pokemon.name);
    console.log("type: ", pokemon.types);
    console.log("height: ", pokemon.height);
    console.log("weight: ", pokemon.weight);
  }

  // Function of button's click event listener
  function showPokemonDetails(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
  };
})();

// Show pokemon list button on the document
pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
  // console.log(pokemon);
});

// console.log(typeof pokemonRepository.getAll());
// console.log(Object.keys(pokemonRepository.getAll()));
