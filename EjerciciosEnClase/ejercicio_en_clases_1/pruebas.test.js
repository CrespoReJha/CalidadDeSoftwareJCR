// suma.test.js
const verificarFormacionAcademica = require('./script');

describe('verificarFormacionAcademica', () => {

  test('Caso base: sin formación académica => 0 puntos', () => {
    expect(verificarFormacionAcademica(0, 0, 0, 0)).toBe(0);
  });
});

