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

    test("Diferencia de pocos minutos en la misma hora", () => {
        expect(calcularMinutos("08:00", "08:10")).toBe(10);
    });

    test("calcular correctamente el tiempo cruzando horas", () => {
        expect(calcularMinutos("07:45", "09:10")).toBe(85);
    });

    test("debe devolver 0 si la hora de entrada y salida son iguales", () => {
        expect(calcularMinutos("10:30", "10:30")).toBe(0);
    });

    test("debe calcular correctamente un rango largo dentro del mismo día", () => {
        expect(calcularMinutos("08:00", "17:30")).toBe(570);
    });
});

// ===== Ejercicio 04 · Escribe tú las pruebas (mínimo 4, con carros y motos) =====
describe("aplicarTope", () => {

    test("debe limitar el cobro al tope máximo diario para un carro ($24000)", () => {
        expect(aplicarTope(39000, "carro")).toBe(24000);
    });

    test("debe mantener el cobro original si está por debajo del tope para un carro", () => {
        expect(aplicarTope(6000, "carro")).toBe(6000);
    });

    test("debe limitar el cobro al tope máximo diario para una moto ($12000)", () => {
        expect(aplicarTope(18000, "moto")).toBe(12000);
    });

    test("debe mantener el cobro original si está por debajo del tope para una moto", () => {
        expect(aplicarTope(3000, "moto")).toBe(3000);
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
    test("debe descontar 1 hora de carro ($3000) a un cobro existente", () => {
        expect(aplicarSello(6000, "carro")).toBe(3000);
    });

    test("debe descontar 1 hora de moto ($1500) a un cobro existente", () => {
        expect(aplicarSello(4500, "moto")).toBe(3000);
    });

    test("debe dejar el cobro en 0 si el descuento es igual al monto acumulado", () => {
        expect(aplicarSello(3000, "carro")).toBe(0);
    });

    test("debe garantizar que el cobro nunca sea negativo (monto menor que el descuento)", () => {
        expect(aplicarSello(0, "carro")).toBe(0);
    });
});
