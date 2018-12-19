require('../src/data.js');

const input = [{
  'num': '001',
  'name': 'Bulbasaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.71 m',
  'weight': '6.9 kg',
  'candy_count': 25,
  'egg': '2 km',
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}, {
  'num': '002',
  'name': 'Ivysaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '0.99 m',
  'weight': '13.0 kg',
  'candy_count': 100,
  'egg': 'Not in Eggs',
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}, {
  'num': '003',
  'name': 'Venusaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'egg': 'Not in Eggs',
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}, {
  'num': '004',
  'name': 'Charmander',
  'type': [
    'Fire'
  ],
  'height': '0.61 m',
  'weight': '8.5 kg',
  'candy_count': 25,
  'egg': '2 km',
  'weaknesses': [
    'Water',
    'Ground',
    'Rock'
  ],
}];

const output = [{
  'num': '003',
  'name': 'Venusaur',
  'type': [
    'Grass',
    'Poison'
  ],
  'height': '2.01 m',
  'weight': '100.0 kg',
  'egg': 'Not in Eggs',
  'weaknesses': [
    'Fire',
    'Ice',
    'Flying',
    'Psychic'
  ],
}];

describe('mostEvolutionPokemon', () => {
  it('is a function', () => {
    expect(typeof mostEvolutionPokemon).toBe('function');
  });

  it('returns `mostEvolutionPokemon`', () => {
    expect(mostEvolutionPokemon(input)).toBe('output');
  });
});
