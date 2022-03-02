let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

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
    loadDetails(pokemon).then(function () {
      console.log(pokemon);
    });
  }

  // Function of button's click event listener
  function showPokemonDetails(button, pokemon) {
    button.addEventListener("click", function () {
      showDetails(pokemon);
    });
  }

  // Function to show list of pokemons from PokeAPI server.
  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  // Function to show details of any selected pokemon.
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        // Add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.weight = details.weight;
        item.types = details.types;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
  };
})();

// Show pokemon list button on the document
/* pokemonRepository.getAll().forEach(function (pokemon) {
   pokemonRepository.addListItem(pokemon);
   // console.log(pokemon);
 });
*/
pokemonRepository.loadList().then(function () {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
