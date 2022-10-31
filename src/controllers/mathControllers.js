const operations = require("../operations");

const log = (payload) => {
 console.info("adminSys2022-logs", JSON.stringify(payload));
}


const sumar = (req, res, next) => {
    const { a, b} = req.params;
    const suma = operations.sumar(1*a,1*b);
    log( {operation: "sumar", valorA: a, valorB: b, resultado: suma, status:'success'});

    res.json({suma: suma});
}


const restar = (req, res, next) => {
    const { a, b} = req.params;
    const resultado = a-b;
    log({operation: "restar", valorA: a, valorB: b, resultado, status:'success'});

    res.json({resta: resultado});
}


const multiplicar = (req, res, next) => {
    const { a, b} = req.params;
    const resultado = a*b;
    log({operation: "multiplicar", valorA: a, valorB: b, resultado, status:'success'});
    res.json({multiplicacion: resultado});
}

const dividir = (req, res, next) => {
    const {a, b} = req.params;

    if(a==="0")
    {
        log({operation: "dividir", valorA: a, valorB: b, resultado, status:'failed'} );
        throw new Error("División no definida");
    }
    if(b==="0")
    {
        log( {operation: "dividir", valorA: a, valorB: b, resultado, status:'failed'} );
        throw new Error("Imposible dividir por 0");
    }
    const resultado = a/b;

    log( {operation: "dividir", valorA: a, valorB: b, resultado, status:'success'} );
    res.json({division: a/b});
}

exports.sumar = sumar;
exports.dividir = dividir;
exports.restar = restar;
exports.multiplicar = multiplicar;
