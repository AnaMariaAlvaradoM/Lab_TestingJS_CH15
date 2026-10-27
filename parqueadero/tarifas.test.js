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
    test("calcula los minutos entre 07:45 y 09:10 (85 minutos)", () => {
        expect(calcularMinutos("07:45", "09:10")).toBe(85);
    });

    test("calcula un intervalo corto de 10 minutos entre 08:00 y 08:10", () => {
        expect(calcularMinutos("08:00", "08:10")).toBe(10);
    });

    test("calcula exactamente una hora completa entre 10:00 y 11:00", () => {
        expect(calcularMinutos("10:00", "11:00")).toBe(60);
    });
});

// ===== Ejercicio 04 · Escribe tú las pruebas (mínimo 4, con carros y motos) =====
describe("aplicarTope", () => {
    // Tu primera prueba aquí
    test("un carro con cobro superior al tope paga exactamente el tope de $24.000", () => {
        expect(aplicarTope(39000, "carro")).toBe(24000);
    });

    test("un carro con cobro menor al tope paga su valor original de $6.000", () => {
        expect(aplicarTope(6000, "carro")).toBe(6000);
    });

    test("una moto con cobro superior a su tope paga exactamente el tope de $12.000", () => {
        expect(aplicarTope(15000, "moto")).toBe(12000);
    });

    test("una moto con cobro menor a su tope paga su valor original de $3.000", () => {
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
    // Tu primera prueba aquí
    test("un carro con cobro de 6000 y sello paga 3000 (descuenta 1 hora de carro)", () => {
        expect(aplicarSello(6000, "carro")).toBe(3000);
    });

    test("una moto con cobro de 4500 y sello paga 3000 (descuenta 1 hora de moto)", () => {
        expect(aplicarSello(4500, "moto")).toBe(3000);
    });

    test("un carro con cobro de 3000 y sello queda en 0", () => {
        expect(aplicarSello(3000, "carro")).toBe(0);
    });

    test("el cobro nunca es negativo, si da menos de 0 retorna 0", () => {
        expect(aplicarSello(0, "carro")).toBe(0);
    });
});
