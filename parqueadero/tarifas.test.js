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
    test("de 07:45 a 09:10 son 85 minutos", () => {
      expect(calcularMinutos("07:45", "09:10")).toBe(85);
    });

    test("de 8:00 a 8:10 son 10 minutos", () => {
        expect(calcularMinutos("08:00", "08:10")).toBe(10);
    });

    test("de 9:00 a 13:10 son 10 minutos", () => {
        expect(calcularMinutos("9:00", "13:00")).toBe(240);
    });
});

// ===== Ejercicio 04 · Escribe tú las pruebas (mínimo 4, con carros y motos) =====
describe("aplicarTope", () => {
    test("Para carro con monto mayor al tope", () => {
        expect(aplicarTope(50000, "carro")).toBe(24000);
    });

    test("Para moto con monto mayor al tope ", () => {
        expect(aplicarTope(36000, "moto")).toBe(12000);
    });

    test("Para carro  con monto menor al tope", () => {
        expect(aplicarTope(10000, "carro")).toBe(10000);
    });

    test("Para moto con monto menor al tope", () => {
        expect(aplicarTope(6000, "moto")).toBe(6000);
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
    test("Un carro tiene un cobro de $6.000", () => {
        expect(aplicarSello(6000, "carro")).toBe(3000);
    });
   
    test("Una moto tiene un cobro de $4.500", () => {
        expect(aplicarSello(4500, "moto")).toBe(3000);
    });
    
    test("Un carro tiene un cobro de $3.000", () => {
        expect(aplicarSello(3000, "carro")).toBe(0);
    });

    test("Un carro no tiene cobro", () => {
        expect(aplicarSello(0, "carro")).toBe(0);
    });
});
