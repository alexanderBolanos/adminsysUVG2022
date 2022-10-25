const operations = require("../operations");


const sumar = (req, res, next) => {
    const { a, b} = req.params;
    const suma = operations.sumar(1*a,1*b);
    console.log("sumar:",a,b,suma);
    res.json({suma: suma});
}


const restar = (req, res, next) => {
    const { a, b} = req.params;
    res.json({resta: a-b});
}


const multiplicar = (req, res, next) => {
    const { a, b} = req.params;
    res.json({multiplicacion: a*b});
}

const dividir = (req, res, next) => {
    const {a, b} = req.params;
    res.json({divicion: a/b});
}

exports.sumar = sumar;
exports.dividir = dividir;
exports.restar = restar;
exports.multiplicar = multiplicar;
