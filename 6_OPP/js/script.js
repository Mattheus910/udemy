/* // 1 - Métodos
const animal = {
    nome: "nina",
    latir: function() {
        console.log("Au Au");
    }
}

console.log(animal.nome);

animal.latir();

// 2 - Aprofundando em métodos
const pessoa = {
    nome: "Matheus",

    getNome: function(){
        return this.nome;
    },

    setNome: function(novoNome){
        this.nome = novoNome;
    },
}

console.log(pessoa.nome);

console.log(pessoa.getNome());

pessoa.setNome("Joaquim");

console.log(pessoa.getNome());

// 3 - prototype
const text = "asd";

console.log(Object.getPrototypeOf(text));

const bool = true;

console.log(Object.getPrototypeOf(bool));

const arr = [];

console.log(arr.length);

console.log(Object.getPrototypeOf(arr) === Array.prototype);

// 4 - mais sobre prototype
const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(Object.getPrototypeOf(mySecondObject) === myObject); */

// 5 - classes basicas
/* const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";

console.log(pastorAlemao);

const bulldog = Object.create(cachorro);

bulldog.raca = "Bulldog";

console.log(bulldog); */

// 6 - funcoes como classes
/* function criarCachorro(nome, raca){

    const cachorro = Object.create({});

    cachorro.nome = nome;
    cachorro.raca = raca;

    return cachorro;
}
const nina = criarCachorro("nina", "SRD");

console.log(nina);

const jack = criarCachorro("Jack", "Poodle");

console.log(jack);

console.log(Object.getPrototypeOf(jack));
 */

// 7 - funções construtoras
/* function Cachorro(nome, raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Ozzy", "Husky");

console.log(husky); */

// 8 - métodos na função construtora
/* Cachorro.prototype.uivar = function (){
    console.log("Auuuuu");
}

husky.uivar();

// 9 - Classes es6
class CachorroClass {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const bily = new CachorroClass("Billy", "Vira Lata");

console.log(bily); */

// 10 - mais sobre classes
/* class Caminhao{
    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    }

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}.`);
    }
}

const truck = new Caminhao(6, "Preto");

console.log(truck);

truck.descreverCaminhao();

const scania = new Caminhao(6, "Vermelha");

scania.descreverCaminhao();

Caminhao.motor = 4.0;

const c2 = new Caminhao(4, "Preta");

// Motor é undefined
console.log(c2.motor);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor); */

// 11 - override por prototype
/* class Humano{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const matheus = new Humano("Matheus", 25);

console.log(matheus)

Humano.prototype.idade = "Não definida";

const marli = new Humano("Marli", );

console.log(marli); */

// 12 - symbol
class Aviao {
    constructor(marca, turbinas) {
      this.marca = marca;
      this.turbinas = turbinas;
    }
  }
  
  const asas = Symbol();
  
  Aviao.prototype[asas] = 2;
  
  const boeing = new Aviao("Boeing", 10);
  
  console.log(boeing);
  
  console.log(boeing[asas]);
  
  console.log(Aviao.prototype[asas]);

  // 13 - getter e setter
class Post {
    constructor(titulo, descricao, tags) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.tags = tags;
    }
  
    get exibirTitulo() {
      return `Você está lendo: ${this.titulo}`;
    }
  
    set adicionarTags(tags) {
      const tagsArray = tags.split(", ");
      this.tags = tagsArray;
    }
  }
  
  const myPost = new Post("Algum post", "É um post sobre programação");
  
  console.log(myPost.exibirTitulo);
  
  myPost.adicionarTags = "programacao, javascript, js";
  
  console.log(myPost);

// 14 - Herança
class Mamifero {
    constructor(patas) {
      this.patas = patas;
    }
  }
  
  class Lobo extends Mamifero {
    constructor(patas, nome) {
      super(patas, patas);
      this.nome = nome;
    }
  }
  
  const shark = new Lobo(4, "Shark");
  
  console.log(shark);

  // 15 - instanceof
console.log(shark instanceof Lobo);

console.log(Lobo instanceof Mamifero);

console.log(new Lobo(4, "teste") instanceof Mamifero);

console.log(new Post("a", "b") instanceof Lobo);


