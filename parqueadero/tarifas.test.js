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
    test("entre 7:45 y 9:10 han pasado 85 minutos", () => {
        expect(calcularMinutos("07:45", "09:10")).toBe(85);
    });

    test("entre 8:00 y 8:10 han pasado 10 minutos", () => {
        expect(calcularMinutos("08:00", "08:10")).toBe(10);
    });

    test("entre 7:00 y 12:20 han pasado 320 minutos", () => {
        expect(calcularMinutos("07:00", "12:20")).toBe(320);
    });
});

// ===== Ejercicio 04 · Escribe tú las pruebas (mínimo 4, con carros y motos) =====
describe("aplicarTope", () => {
    test("el cobro de la moto es de 15.000 pero paga el tope", () => {
        expect(aplicarTope(15000, "moto")).toBe(12000);
    });

    test("el cobro de la moto es de 30.000 pero paga el tope", () => {
        expect(aplicarTope(30000, "moto")).toBe(12000);
    });

    test("el cobro del carro es de 28.000 pero paga el tope", () => {
        expect(aplicarTope(28000, "carro")).toBe(24000);
    });

    test("el cobro del carro es de 42.000 pero paga el tope", () => {
        expect(aplicarTope(42000, "carro")).toBe(24000);
    });

    test("el cobro de la moto es de 6.000 por lo que solo paga ese monto", () => {
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
    test("el cobro del carro era de $6.000 pero por mostrar el sello paga $3.000", () => {
        expect(aplicarSello(6000, "carro")).toBe(3000);
    });
    
    test("el cobro de la moto era de $4.500 pero por mostrar el sello paga $3.000", () => {
        expect(aplicarSello(4500, "moto")).toBe(3000);
    });

    test("el cobro del carro era de $3.000 pero por mostrar el sello paga 0", () => {
        expect(aplicarSello(3000, "carro")).toBe(0);
    });

    test("el cobro del carro era de 0 y por mostrar el sello paga 0", () => {
        expect(aplicarSello(0, "carro")).toBe(0);
    });
});
