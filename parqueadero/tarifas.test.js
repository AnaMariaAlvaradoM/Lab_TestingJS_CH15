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
    test("de 07:45 a 09:10 pasan 85 minutos", () => {
        expect(calcularMinutos("07:45", "09:10")).toBe(85);
    });

    test("de 08:00 a 08:10 pasan 10 minutos", () => {
        expect(calcularMinutos("08:00", "08:10")).toBe(10);
    });

    test("dos horas exactas son 120 minutos", () => {
        expect(calcularMinutos("08:00", "10:00")).toBe(120);
    });

    test("cruzar el cambio de hora: de 09:50 a 10:05 pasan 15 minutos", () => {
        expect(calcularMinutos("09:50", "10:05")).toBe(15);
    });

    test("la misma hora de entrada y salida son 0 minutos", () => {
        expect(calcularMinutos("10:00", "10:00")).toBe(0);
    });

    test("todo el día: de 00:00 a 23:59 pasan 1439 minutos", () => {
        expect(calcularMinutos("00:00", "23:59")).toBe(1439);
    });
});

// ===== Ejercicio 04 · Escribe tú las pruebas (mínimo 4, con carros y motos) =====
describe("aplicarTope", () => {
    // Tu primera prueba aquí
    test("un carro con cobro de 39000 paga el tope de 24000", () => {
        expect(aplicarTope(39000, "carro")).toBe(24000);
    });

    test("un carro con cobro de 6000 paga 6000 (está por debajo del tope)", () => {
        expect(aplicarTope(6000, "carro")).toBe(6000);
    });

    test("un carro con cobro de 15000 paga 15000 (entre 12000 y 24000)", () => {
        expect(aplicarTope(15000, "carro")).toBe(15000);
    });

    test("una moto con cobro de 15000 paga el tope de 12000", () => {
        expect(aplicarTope(15000, "moto")).toBe(12000);
    });

    test("una moto con cobro de 4500 paga 4500 (está por debajo del tope)", () => {
        expect(aplicarTope(4500, "moto")).toBe(4500);
    });

    test("un carro con cobro exactamente igual al tope paga 24000", () => {
        expect(aplicarTope(24000, "carro")).toBe(24000);
    });

    test("una moto con cobro exactamente igual al tope paga 12000", () => {
        expect(aplicarTope(12000, "moto")).toBe(12000);
    });

    test("una moto no usa el tope del carro: 20000 baja a 12000, no a 24000", () => {
        expect(aplicarTope(20000, "moto")).toBe(12000);
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
    test("a un carro con cobro de 6000 se le descuenta 1 hora y paga 3000", () => {
        expect(aplicarSello(6000, "carro")).toBe(3000);
    });

    test("a una moto con cobro de 4500 se le descuenta 1 hora y paga 3000", () => {
        expect(aplicarSello(4500, "moto")).toBe(3000);
    });

    test("un carro con cobro de 3000 queda en 0 (la hora gratis cubre todo)", () => {
        expect(aplicarSello(3000, "carro")).toBe(0);
    });

    test("un carro con cobro de 0 sigue en 0: nunca queda negativo", () => {
        expect(aplicarSello(0, "carro")).toBe(0);
    });

    test("una moto con cobro de 1500 queda en 0", () => {
        expect(aplicarSello(1500, "moto")).toBe(0);
    });

    test("una moto con cobro de 1000 queda en 0, no en -500", () => {
        expect(aplicarSello(1000, "moto")).toBe(0);
    });
});