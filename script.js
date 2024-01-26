// "https://pokeapi.co/api/v2/pokemon/1";
//  "https://pokeapi.co/api/v2/type/";

// Function to fetch Pokemon data onLoad

// Async Await
let inp = document.querySelector("input");
let pokeContainer = document.querySelector(".pokeContainer");
let allCards = [];

// Execute only when Ui Loads
async function onLoad() {
  for (let i = 1; i <= 200; i++) {
    allCards.push(await getPokeData(i));
  }
  allCards.sort((a, b) => {
    return a.id - b.id;
  });
  showData(allCards);
}
onLoad();

// ----------------------Fetch poke data from API--------------------------------
async function getPokeData(id) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  let result = await response.json();
  return result;
}

inp.addEventListener("input", () => {
  console.log(inp.value);
  console.log(allCards[0].card);
  let filteredarr = allCards.filter((card) => {
    return card.name.includes(inp.value);
  });
  showData(filteredarr);
});

// ----------------------------Show Pokemon data in Ui------------------------

function showData(dataArray) {
  pokeContainer.innerText = "";
  dataArray.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("pokeCard");
    card.innerHTML = `
  <p class="pokeId">${element.id}</p>
  <img src=${element.sprites.back_default} alt="pokeImg">
  <h3>${element.name}</h3>
  <span>${element.types[0].type.name}</span>
    `;
    pokeContainer.appendChild(card);
  });
}
// -----------------------------------------------------------------------------------

//------------------------ Reset--------------------------------
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  showData(allCards);
});

// ----------------------------------Type------------------------------------------------
async function fetchType() {
  try {
    let response = await fetch("https://pokeapi.co/api/v2/type/");
    let result = await response.json();
    appendType(result.results);
  } catch (error) {
    console.log(error);
  }
}
let selectedType = document.querySelector("#selectType");
function appendType(typeArray) {
  typeArray.forEach((element) => {
    let opt = document.createElement("option");
    // opt.setAttribute("value", )
    opt.innerText = element.name;
   selectedType.appendChild(opt);
  });
}
fetchType();

// -----------------------------------------------------------------------------------------


// ----------------------------Filter By Type -----------------------------------------------

let filter = document.querySelector(".filter");

filter.addEventListener("click", () => {
  console.log(selectedType.value, allCards[0].types);
  let mappedArr=allCards.map((card) => {
    return card.types;
  })

  // mappedArr.
})

function filterByType() {
  
}
