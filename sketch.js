const listItems = document.querySelectorAll('ul#monsters li')
const name = document.querySelector('#name')
const type = document.querySelector('#info')
const picture = document.querySelector('#picture')

for (let listItem of listItems) {
  listItem.addEventListener('click', getPokemon)
}

async function getPokemon(event) {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + ((event.target.textContent).substring(1)).toLowerCase())
  const data = await response.json()
  picture.src = data.sprites.front_shiny
  type.textContent = "Pokémon Type: " + (data.types[0].type.name).toUpperCase()
  name.textContent = "Pokémon Selected: " + ((event.target.textContent).substring(1)).toUpperCase()
}