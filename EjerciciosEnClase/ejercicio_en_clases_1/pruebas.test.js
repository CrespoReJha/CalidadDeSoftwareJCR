// suma.test.js
const verificarFormacionAcademica = require("./script");

describe("verificarFormacionAcademica", () => {
  test("Caso base: sin formación académica => 0 puntos", () => {
    expect(verificarFormacionAcademica(0, 0, 0, 0)).toBe(0);
  });

  // DIPLOMADOS
  test("1 diplomado => 2 puntos", () => {
    expect(verificarFormacionAcademica(1, 0, 0, 0)).toBe(2);
  });

  test("2 diplomados => 3 puntos (2 + 1)", () => {
    expect(verificarFormacionAcademica(2, 0, 0, 0)).toBe(3);
  });

  test("3 diplomados => 4 puntos (2 + 1 + 1)", () => {
    expect(verificarFormacionAcademica(3, 0, 0, 0)).toBe(4);
  });

  test("sobrepasando el maximo de puntos para diplomados => max: 4 puntos", () => {
    expect(verificarFormacionAcademica(4, 0, 0, 0)).toBe(4);
  });

  // ESPECIALIDADES
  test("1 especialidad => 4 puntos", () => {
    expect(verificarFormacionAcademica(0, 1, 0, 0)).toBe(4);
  });

  test('2 especialidades => 6 puntos (4 + 2)', () => {
    expect(verificarFormacionAcademica(0, 2, 0, 0)).toBe(6);
  });

  test('sobrepasando el maximos de puntos para especialidad => max: 6 puntos', () => {
    expect(verificarFormacionAcademica(0, 3, 0, 0)).toBe(6);
  });
});
