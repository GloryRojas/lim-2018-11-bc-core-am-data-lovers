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

const output3 = [
  {'num': '004', 'name': 'Charmander', 'type': ['Fire'], 'avg_spawns': 25.3}
];

const output4 = `
      <div class='card-link'>
        <article class='blog-card'>
          <img class='post-image' src='undefined' />
          <div class='article-details'>
            <h3 class='post-title'>Charmander</h3>
            <h4 class='post-category'>Tipo: Fire</h4>
            <p class='post-description'> undefined</p>
          </div>
        </article>
      </div>
    `;

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
  describe('pokeLover.computeStats', () => {
    it('Debería ser una funcion', () => {
      expect(typeof pokeLover.computeStats).toBe('function');
    });
    it('debería retornar un array con un objeto con valor 69 para avg_spawns', () => {
      expect(pokeLover.computeStats(input)).toEqual(output2);
    });
  });
  describe('pokeLover.datacopy', () => {
    it('Debería ser una funcion', () => {
      expect(typeof pokeLover.datacopy).toBe('function');
    });
    it('debería retornar un array copia del original', () => {
      expect(pokeLover.datacopy(output)).toEqual(output3);
    });
  });
  describe('pokeLover.crearTemplateDeCard', () => {
    it('Debería ser una funcion', () => {
      expect(typeof pokeLover.crearTemplateDeCard).toBe('function');
    });
    it('debería retornar un string', () => {
      expect(pokeLover.crearTemplateDeCard(output)).toEqual(output4);
    });
  });
});