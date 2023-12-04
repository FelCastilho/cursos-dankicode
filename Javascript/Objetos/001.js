function Animal(nome, peso){
    if(nome == undefined){
        nome = 'Cachorro';
    }

    this.nome = nome;
    this.peso = nome;
}

animal = new Animal('Gato');

console.log(animal.nome)