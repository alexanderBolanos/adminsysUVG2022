const sumar = (a, b) => {

    if(typeof a !== 'number' || typeof b !== 'number') return null;
    return  parseFloat(a)+parseFloat(b);
}

const restar = (a, b) => {

    if(typeof a !== 'number' || typeof b !== 'number') return null;
    return  parseFloat(a)-parseFloat(b);
}

exports.sumar = sumar;
exports.restar = restar;