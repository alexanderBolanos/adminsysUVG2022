const { restar } = require('../controllers/mathControllers');
const {sumar} = require('../operations');

test("Sumando integer (1) más integer (2): ", ()=>{
    expect(sumar(1,2)).toBe(3);
});

test("Sumando real(1.5) y real(2.5):", ()=>{
    expect(sumar(1.5, 2.5)).toBe(4);
});

test("Sumando nulls:", ()=>{
    expect(sumar(null, null)).toBe(null);
});


function prueba3() {
    //estas funciones deben ser testeables: no func. asincronas
    expect(sumar('a','b')).toBe(null);
}

test("Prueba sumando caracteres:", prueba3);