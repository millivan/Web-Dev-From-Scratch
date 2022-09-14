const nums = [1, 2, 3, 4, 5];
const squared = nums.map((x) => x ** 2);
console.log(squared);

const names = ["alice", "bob", "charlie", "danielle"];
const capitalizedNames = names.map(
  (x) => `${x.charAt(0).toUpperCase()}${x.substring(1)}`
);
console.log(capitalizedNames);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const HTMLpokemon = pokemon.map((x) => `<p>${x}</p>`);
console.log(HTMLpokemon);
