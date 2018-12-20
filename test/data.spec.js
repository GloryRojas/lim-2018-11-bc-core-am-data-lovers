require('../src/data.js');

const input = [
  {'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'height': '0.71 m', 'weight': '6.9 kg', 'candy_count': 25, 'egg': '2 km', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'height': '0.99 m', 'weight': '13.0 kg', 'candy_count': 100, 'egg': 'Not in Eggs', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'num': '003', 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'height': '2.01 m', 'weight': '100.0 kg', 'egg': 'Not in Eggs', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'num': '004', 'name': 'Charmander', 'type': ['Fire'], 'height': '0.61 m', 'weight': '8.5 kg', 'candy_count': 25, 'egg': '2 km', 'weaknesses': ['Water', 'Ground', 'Rock']}
];

const output = [
  {'num': '004', 'name': 'Charmander', 'type': ['Fire'], 'height': '0.61 m', 'weight': '8.5 kg', 'candy_count': 25, 'egg': '2 km', 'weaknesses': ['Water', 'Ground', 'Rock']}
];

const output1 = [
  {'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'height': '0.71 m', 'weight': '6.9 kg', 'candy_count': 25, 'egg': '2 km', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'num': '004', 'name': 'Charmander', 'type': ['Fire'], 'height': '0.61 m', 'weight': '8.5 kg', 'candy_count': 25, 'egg': '2 km', 'weaknesses': ['Water', 'Ground', 'Rock']},
  {'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'height': '0.99 m', 'weight': '13.0 kg', 'candy_count': 100, 'egg': 'Not in Eggs', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
  {'num': '003', 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'height': '2.01 m', 'weight': '100.0 kg', 'egg': 'Not in Eggs', 'weaknesses': ['Fire', 'Ice', 'Flying', 'Psychic']},
];

describe('pokeLover', () => {
  it('Debería ser un objeto', () => {
    expect(typeof pokeLover).toBe('object');
  });
  describe('pokeLover.filterData', () => {
    it('Debería ser una funcion', () => {
      expect(typeof pokeLover.filterData).toBe('function');
    });
    it('debería retornar un array de objetos, filtrando tipo fuego', () => {
      expect(pokeLover.filterData(input, 'Fire')).toEqual(output);
    });
  });
  describe('pokeLover.sortData', () => {
    it('Debería ser una funcion', () => {
      expect(typeof pokeLover.sortData).toBe('function');
    });
    it('debería retornar un array de objetos, ordenando de A -Z', () => {
      expect(pokeLover.sortData(input, 'name', 0)).toEqual(output1);
    });
  });
});
