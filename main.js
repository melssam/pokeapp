// display pokemon

//identify our div
const pokemonDiv = document.querySelector(".pokemon")
//create a base url
const POKE_URL = "https://pokeapi.co/api/v2/pokemon/"

const printPokemonName = function(name){
    let h2 = document.createElement("h2")
    h2.innerHTML = name 
    pokemonDiv.append(h2)
}

//make sure our url is a string 
console.log(POKE_URL + "ditto")


const displayPokemonPicture = function(picture){
    let img =document.createElement("img")
    img.src = picture
    pokemonDiv.append(img)
}
//start the fetch
const fetchPokemon = function(name){
fetch(POKE_URL + name)
    .then(response => response.json())
    // actually start working with the data
    .then(data => {
        console.log(data)
        printPokemonName(data.name)
        displayPokemonPicture(data.sprites.front_default)
        displayPokemonPicture(data.sprites.back_default)
        displayPokemonPicture(data.sprites.front_shiny)
        displayPokemonPicture(data.sprites.back_shiny)

    })
}

//get 100 pokemon and display them 

const fetch100Pokemon = function (){
    let pokemonURL = POKE_URL + "?limit=100"
    fetch(pokemonURL)
    .then(response => response.json())
    .then(data => {
        console.log(data.results)
        data.results.forEach(pokemon => fetchPokemon(pokemon.name))
    })
}
    fetch100Pokemon()



