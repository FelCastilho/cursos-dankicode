function calcularIdade(anoNascimento){
    const data = new Date();    
    const anoAtual = data.getFullYear();
    const idade  = anoAtual - anoNascimento;

    return idade;
}

console.log(calcularIdade(2001));