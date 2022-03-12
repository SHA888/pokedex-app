let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  let modalContainer = document.querySelector("#modal-container");

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
    let pokemonList = document.querySelector(".list-group");
    let listItem = document.createElement("li");
    listItem.classList.add("group-list-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("pokemon-list");
    button.classList.add("btn");
    button.classList.add("btn-outline-dark");
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);
    showPokemonDetails(button, pokemon);
  }

  // Function to show pokemon's details when the button is clicked.
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
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
    // Show list
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
    // Show details
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

  function showModal(pokemon) {
    // Clear all existing modal content
    modalContainer.innerHTML = "";

    let modal = document.createElement("div");
    modal.classList.add("modal");

    // Add the new modal content
    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let titleElement = document.createElement("h1");
    titleElement.innerText = pokemon.name;

    let heightElement = document.createElement("p");
    heightElement.innerText = "Height: " + pokemon.height + " cm";

    let weightElement = document.createElement("p");
    weightElement.innerText = "Weight: " + pokemon.weight + " kg";

    let imageElement = document.createElement("img");
    imageElement.setAttribute("src", pokemon.imageUrl);

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(heightElement);
    modal.appendChild(weightElement);
    modal.appendChild(imageElement);
    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");
  }

  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });

  modalContainer.addEventListener("click", (e) => {
    // Since this is also triggered when clicking INSIDE the modal container,
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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
pokemonRepository.loadList().then(function () {
  // Now the data should be loaded!
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
