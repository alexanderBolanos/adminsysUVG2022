const operations = require("../operations");

const log = (key, payload) => {
 console.info(key, JSON.stringify(payload));
}


const sumar = (req, res, next) => {
    const { a, b} = req.params;
    const suma = operations.sumar(1*a,1*b);
    log("sumar", {operation: "sumar", valorA: a, valorB: b, resultado: suma, status:'success'});

    res.json({suma: suma});
}


const restar = (req, res, next) => {
    const { a, b} = req.params;
    const resultado = a-b;
    log("restar", {operation: "restar", valorA: a, valorB: b, resultado, status:'success'});

    res.json({resta: resultado});
}


const multiplicar = (req, res, next) => {
    const { a, b} = req.params;
    const resultado = a*b;
    log("multiplicar", {operation: "multiplicar", valorA: a, valorB: b, resultado, status:'success'});
    res.json({multiplicacion: resultado});
}

const dividir = (req, res, next) => {
    const {a, b} = req.params;
    if(b===0)
    {
        log("dividir", {operation: "dividir", valorA: a, valorB: b, resultado, status:'failed'} );
        throw new Error("Imposible dividir por 0");
    }
    const resultado = a/b;

    log("dividir", {operation: "dividir", valorA: a, valorB: b, resultado, status:'success'} );
    res.json({division: a/b});
}

exports.sumar = sumar;
exports.dividir = dividir;
exports.restar = restar;
exports.multiplicar = multiplicar;
