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
    test("de las 7:40 a las 8:00 pasaron 20 minutos", () =>{
        expect(calcularMinutos("7:40","8:00")).toBe(20);
    })
});

describe("calcularMinutos", ()=>{
    test("un cliente deja el vehiculo de 10:36 y lo recoge a las 12:06", ()=>{ //cambié a vehiculo porq no habia caido en cuenta que no importa q vehiculo sea, solo es mins
        expect(calcularMinutos("10:36","12:06")).toBe(90);
    })
})

describe("calcularMinutos",()=>{
    test("un cliente deja su vehiculo a la 1:20 y lo recoge a la 1:20", ()=>{
        expect(calcularMinutos("1:20","1:20")).toBe(0);
    })
})
// ===== Ejercicio 04 · Escribe tú las pruebas (mínimo 4, con carros y motos) =====
describe("aplicarTope", () => {
    test("Un cliente deja su carro hasta que el cobro son 39.000, pero el cobro limite es 24.000 al dia",()=>{
        expect(aplicarTope(39000,vehiculo="carro")).toBe(24000)
    })
});

describe("aplicarTope", () => {
    test("Un cliente deja su moto hasta que el cobro son 18.000, pero el cobro limite es 12.000 al dia",()=>{
        expect(aplicarTope(18000,"moto")).toBe(12000) //pruebo lo mismo en moto, y sin tener q especificar la variable
    })
});

describe("aplicarTope", () => {
    test("Un cliente deja su carro y le cobran 6.000, como el limite es 24.000, deben pedirle los 6.000 ",()=>{
        expect(aplicarTope(6000,"carro")).toBe(6000) 
    })
});

describe("aplicarTope", () => {
    test("Un cliente deja su moto y le cobran 4.500, como el limite es 12.000, deben pedirle los 4.500 ",()=>{
        expect(aplicarTope(4500,"moto")).toBe(4500) 
    })
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
    test("una moto con un cobro de 5000 recibe un descuento por una hora", ()=>{
        expect(aplicarSello(4500,"moto")).toBe(3000)
    })   
});
describe("aplicarSello", () => {
    test("un carro con un cobro de 6000 recibe un descuento por una hora", ()=>{
        expect(aplicarSello(6000,"carro")).toBe(3000)
    }) 
});

describe("aplicarSello",() =>{
    test("un carro que no debe nada, recibe un descuento por una hora",()=>{
        expect(aplicarSello(0,"carro")).toBe(0)
    })
})
describe("aplicarSello",() =>{
    test("una moto que no debe nada, recibe un descuento por una hora",()=>{
        expect(aplicarSello(0,"moto")).toBe(0)
    })
})
