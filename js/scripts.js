//Pokemon list
let pokemonList = [
  {
    name: 'Charmander',
    height: 0.6,
    type: ['fire']
  },
  {
    name: 'Beedrill',
    height: 1,
    type: ['bug', 'poison']
  },
  {
    name: 'Pikachu',
    height: 0.4,
    type: ['electric']
  },
  {
    name: 'Jigglypuff',
    height: 0.5,
    type: ['fairy', 'normal']
  },
  {
    name: 'Psyduck',
    height: 0.8,
    type: ['water']
  }
];

document.write('<ul>');
//Create a FOR loop to show Pokemon list
for (let i = 0; i < pokemonList.length; i++) {
  document.write('<li>' + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')');
  //Add a conditional to show big Pokemon
  if (pokemonList[i].height >= 1) {
    document.write(' - Wow! That\'s big!');
  }
  document.write('</li>');
}
document.write('</ul>');