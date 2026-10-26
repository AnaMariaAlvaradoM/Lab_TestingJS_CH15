const {
  tarifaPorHora,
  horasACobrar,
  calcularMinutos,
  aplicarTope,
  calcularCobro,
  aplicarSello,
} = require("./tarifas");

// ===== Ejercicio 01 · Estas pruebas ya están escritas: haz que pasen =====
describe("tarifaPorHora", () => {
  test("un carro paga $3.000 por hora", () => {
    expect(tarifaPorHora("carro")).toBe(3000);
  });

  test("una moto paga $1.500 por hora", () => {
    expect(tarifaPorHora("moto")).toBe(1500);
  });

  test("una bicicleta parquea gratis", () => {
    expect(tarifaPorHora("bicicleta")).toBe(0);
  });
});

// ===== Ejercicio 02 · NO cambies estas pruebas: el error está en el código =====
describe("horasACobrar", () => {
  test("10 minutos son cortesía", () => {
    expect(horasACobrar(10)).toBe(0);
  });

  test("15 minutos exactos también son cortesía", () => {
    expect(horasACobrar(15)).toBe(0);
  });

  test("16 minutos ya se cobran como 1 hora", () => {
    expect(horasACobrar(16)).toBe(1);
  });

  test("61 minutos se cobran como 2 horas", () => {
    expect(horasACobrar(61)).toBe(2);
  });

  test("150 minutos se cobran como 3 horas", () => {
    expect(horasACobrar(150)).toBe(3);
  });
});

// ===== Ejercicio 03 · Escribe tú las pruebas (mínimo 3) =====
describe("calcularMinutos", () => {
  test("10:15 a 10:31 son 16 minutos", () => {
    expect(calcularMinutos("10:15", "10:31")).toBe(16);
  });
  test("10:15 a 10:30 son 15 minutos", () => {
    expect(calcularMinutos("10:15", "10:30")).toBe(15);
  });
  test("07:45 a 09:10 son 85 minutos", () => {
    expect(calcularMinutos("07:45", "09:10")).toBe(85);
  });
});

// ===== Ejercicio 04 · Escribe tú las pruebas (mínimo 4, con carros y motos) =====
describe("aplicarTope", () => {
  test("Carro que debe 34000, pasa a deber 24000", () => {
    expect(aplicarTope(34000, "carro")).toBe(24000);
  });
  test("Moto que debe 20000, pasa a deber 12000", () => {
    expect(aplicarTope(20000, "moto")).toBe(12000);
  });
  test("Moto que debe 11999, pago lo que debe", () => {
    expect(aplicarTope(11999, "moto")).toBe(11999);
  });
  test("Carro que debe 2399, paga lo que debe", () =>{
    expect(aplicarTope(2399, "carro")).toBe(2399);
  });
});

// ===== Ejercicio 05 · Estas pruebas ya están escritas: haz que pasen =====
describe("calcularCobro", () => {
  test("un carro de 7:45 a 9:10 (85 minutos) paga $6.000", () => {
    expect(calcularCobro("carro", "07:45", "09:10")).toBe(6000);
  });

  test("una moto de 8:00 a 8:10 no paga: es cortesía", () => {
    expect(calcularCobro("moto", "08:00", "08:10")).toBe(0);
  });

  test("un carro todo el día (6:00 a 18:30) paga el tope de $24.000", () => {
    expect(calcularCobro("carro", "06:00", "18:30")).toBe(24000);
  });

  test("una moto de 7:00 a 12:20 paga $9.000", () => {
    expect(calcularCobro("moto", "07:00", "12:20")).toBe(9000);
  });
});

// ===== Ejercicio 06 · TDD: escribe PRIMERO estas pruebas (mínimo 4) =====
// Usa la tabla de criterios que está en tarifas.js, encima de aplicarSello.
describe("aplicarSello", () => {
    test("un carro con cobro cero, no paga nada", () => {
    expect(aplicarSello(0,"carro")).toBe(0);
  });

  test("una moto con cobro cero, no paga nada", () => {
    expect(aplicarSello(0,"moto")).toBe(0);
  });

  test("un carro con cobro 24000, paga 21000", () => {
    expect(aplicarSello(24000,"carro")).toBe(21000);
  });

  test("una moto con cobro 1500, paga 0", () => {
    expect(aplicarSello(1500,"moto")).toBe(0);
  });
});
