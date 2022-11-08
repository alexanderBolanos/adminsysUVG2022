const sumar = (a, b) => {

    if(typeof a !== 'number' || typeof b !== 'number') return null;
    return  parseFloat(a)+parseFloat(b);
}

const restar = (a, b) => {

    if(typeof a !== 'number' || typeof b !== 'number') return null;
    return  parseFloat(a)-parseFloat(b);
}

const a;

exports.sumar = sumar;
exports.restar = restar;