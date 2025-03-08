// suma.test.js
const {
  verificarFormacionAcademica,
  verificarActualizacionAcademica
} = require("./script");

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

  test("2 especialidades => 6 puntos (4 + 2)", () => {
    expect(verificarFormacionAcademica(0, 2, 0, 0)).toBe(6);
  });

  test("sobrepasando el maximo de puntos para especialidad => max: 6 puntos", () => {
    expect(verificarFormacionAcademica(0, 3, 0, 0)).toBe(6);
  });

  // MAESTRÍAS
  test("1 maestría => 8 puntos", () => {
    expect(verificarFormacionAcademica(0, 0, 1, 0)).toBe(8);
  });

  test("2 maestrías => 11 puntos (8 + 3)", () => {
    expect(verificarFormacionAcademica(0, 0, 2, 0)).toBe(11);
  });

  test("sobrepasando el maximo de puntos para maestria => max: 11 puntos", () => {
    expect(verificarFormacionAcademica(0, 0, 3, 0)).toBe(11);
  });

  // DOCTORADO
  test("1 doctorado => 12 puntos", () => {
    expect(verificarFormacionAcademica(0, 0, 0, 1)).toBe(12);
  });

  test("sobrepasando el maximo de puntos para doctorados => max: 12 puntos", () => {
    expect(verificarFormacionAcademica(0, 0, 0, 2)).toBe(12);
  });

  // COMBINACIONES
  test("1 diplomado + 1 especialidad => 2 + 4 = 6 puntos", () => {
    expect(verificarFormacionAcademica(1, 1, 0, 0)).toBe(6);
  });

  test("2 diplomados + 1 especialidad => 3 (diplomados) + 4 = 7 puntos", () => {
    expect(verificarFormacionAcademica(2, 1, 0, 0)).toBe(7);
  });

  test("1 diplomado + 1 especialidad + 1 maestría => 2 + 4 + 8 = 14, pero el maximo es 12", () => {
    expect(verificarFormacionAcademica(1, 1, 1, 0)).toBe(12);
  });

  test("2 diplomados + 2 especialidades + 1 maestría => 3 + 6 + 8 = 17, se capea a 12", () => {
    expect(verificarFormacionAcademica(2, 2, 1, 0)).toBe(12);
  });
});

describe('verificarActualizacionAcademica', () => {
  test('0 asistencias => 0 puntos', () => {
    expect(verificarActualizacionAcademica(0)).toBe(0);
  });
});
