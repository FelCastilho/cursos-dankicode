class Animal{
    constructor(nome){
        this.nome = nome;
    }

    printNome(){
        return this.nome
    }

}

class Cachorro extends Animal{
    constructor(nome){
        super(nome);
    }
}

cachorro = new Cachorro()


animal = new Animal('Gato');

console.log(animal.nome);