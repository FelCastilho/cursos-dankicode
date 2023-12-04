let type = 'x';

function calculadora(n1, n2){

    if(type === '+'){
        return n1 + n2;
    }else if(type === '-'){
        return n1 - n2;
    }else if(type === 'x'){
        return n1 * n2;
    }
}

console.log(calculadora(1, 3))