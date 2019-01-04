require('../src/data.js');

const input = [
  {'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'avg_spawns': 69},
  {'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'avg_spawns': 4.2},
  {'num': '003', 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'avg_spawns': 1.7},
  {'num': '004', 'name': 'Charmander', 'type': ['Fire'], 'avg_spawns': 25.3}
];
const output = [
  {'num': '004', 'name': 'Charmander', 'type': ['Fire'], 'avg_spawns': 25.3}
];

const output1 = [
  {'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'avg_spawns': 69},
  {'num': '004', 'name': 'Charmander', 'type': ['Fire'], 'avg_spawns': 25.3},
  {'num': '002', 'name': 'Ivysaur', 'type': ['Grass', 'Poison'], 'avg_spawns': 4.2},
  {'num': '003', 'name': 'Venusaur', 'type': ['Grass', 'Poison'], 'avg_spawns': 1.7},
];

const output2 = [
  {'num': '001', 'name': 'Bulbasaur', 'type': ['Grass', 'Poison'], 'avg_spawns': 69},
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
