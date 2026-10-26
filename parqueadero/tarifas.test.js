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
    // Tu primera prueba aquí
    test("de 1:00 a 1:30 son 30 minutos", () => {
        expect(calcularMinutos("1:00", "1:30")).toBe(30);
    });
    test("de 9:00 a 98:10 son 10 minutos", () => {
        expect(calcularMinutos("9:00", "9:10")).toBe(10);
    });
    test("de 10:00 a 11:00 son 60 minutos", () => {
        expect(calcularMinutos("10:00", "11:00")).toBe(60);
    });
});

// ===== Ejercicio 04 · Escribe tú las pruebas (mínimo 4, con carros y motos) =====
describe("aplicarTope", () => {
    // Tu primera prueba aquí
    test("un carro con cobro 30000 paga el tope de 24000", () => {
        expect(aplicarTope(30000, "carro")).toBe(24000);
    });

    test("un carro justo en el tope (24000) paga 24000", () => {
        expect(aplicarTope(24000, "carro")).toBe(24000);
    });
    test("una moto justo en el tope (12000) paga 12000", () => {
        expect(aplicarTope(12000, "moto")).toBe(12000);
    });
    test("una moto con cobro 15000 paga el tope de 12000", () => {
        expect(aplicarTope(15000, "moto")).toBe(12000);
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
    // Tu primera prueba aquí
    test("un carro con cobro 9000 paga 6000", () => {
        expect(aplicarSello(9000, "carro")).toBe(6000);
    });

    test("un carro con cobro 6000 paga 3000", () => {
        expect(aplicarSello(6000, "carro")).toBe(3000);
    });

    test("una moto con cobro 5000 paga 3500", () => {
        expect(aplicarSello(5000, "moto")).toBe(3500);
    });

    test("un cobro de 0 en moto se queda en 0", () => {
        expect(aplicarSello(0, "moto")).toBe(0);
    });
});
