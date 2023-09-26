/* // 1 - Arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)
console.log(typeof lista)

const itens = ["matheus", true, 4.12, []]
console.log(itens)

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d"];

console.log(arr[0]);

console.log(arr[2]);

console.log(arr[10]);

// 3 - propriedades
const numbers = [5, 12, 4, 22];

console.log(numbers.length);
console.log(numbers["length"]);

const myName = "Matheus";

console.log(myName.length);

// 4 - métodos
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

// 5 - Objetos
const person = {
    name: "Matheus",
    age: 25,
    job: "Programador",
}

console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(person.name.toUpperCase())

// 6 - criando e deletando propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};

console.log(car);

car.doors = 4;

console.log(car)

delete car.km;

console.log(car);

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true,
  };
  
  console.log(obj instanceof Object);
  
  const obj2 = {
    c: [],
  };
  
  Object.assign(obj2, obj);
  
  console.log(obj2);

// 8 - conhecendo melhor os objetos
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(person));

console.log(Object.entries(obj));

// 9 - Mutação
const a = {
    name: "Matheus",
  };
  
  const b = a;
  
  console.log(a);
  console.log(b);
  
  console.log(a === b);
  
  a.age = 31;
  
  console.log(b);
  
  delete b.age;
  
  console.log(a);
  console.log(b);
   */

// 10 - loop em array
/* const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando usuário: ${users[i]}`);
}

// 11 - PUSH e POP
const array = ["a", "b", "c", "d"];

console.log(array);

array.push("e");

console.log(array);

const itemRemovido1 = array.pop();

console.log(array);

console.log(itemRemovido1)

const itemRemovido = array.pop();

console.log(itemRemovido)

console.log(array)

// 12 - Shift e Unshift

array.unshift("f");

console.log(array);

array.shift()

console.log(array) */

// 13 - indexOf e lastIndexOf

/* const myElements = ["Maça", "Pêra", "Uva", "Banana", "Uva", "Abacate", "Uva"]

console.log(myElements.indexOf("Maça"))

console.log(myElements[5])

console.log(myElements.lastIndexOf("Uva")) */

// 14 - slice

/* const testSlice = ["a", "b", "c", "d", "e", "f"]

console.log(testSlice)

console.log(testSlice.slice(2, 4 + 1))

console.log(testSlice.slice(1))

// 15 - foreach
const nums = [1, 2, 3, 4, 5];

nums.forEach((n) => {
  console.log(`O numero é ${n}`)
})

let nomes = ["Matheus", "João", "Luan", "Samuel"];

nomes.forEach((nomes) => {
  console.log(`O nome do aluno é: ${nomes}`)
})

// 16 - includes
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));

console.log(brands.includes("Kia"));

if (brands.includes("BMW")) {
  console.log("Há carros da marca BMW!");
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest); */

// 18 - trim
/* const trimTeste = "  Testado \n"

console.log(trimTeste);

console.log(trimTeste.trim());

console.log(trimTeste.length);

console.log(trimTeste.trim().length); */

// 19 - padstart
/* const newNum = "1";

const startTest = newNum.padStart(5, 0);

const endTest = newNum.padEnd(5, 0);

console.log(startTest);

console.log(endTest);

// 20 - Split 
const frase = "O rato roeu a roupa do rei de roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

// 21 - join
const fraseDeNovo = arrayDaFrase.join(" ");

console.log(fraseDeNovo);

const items = ["Monitor", "Mouse", "Teclado"];

console.log(`Precisamos comprar ${items.join(", ")}.`);

// 22 - repeat
const palavra = "Testando ";

console.log(palavra.repeat(5)); */

// 23 - rest operator
/* const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
};

console.log(somaInfinita(1, 5, 10));

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 7, 8, 9));

// 24 - for...of
const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }

  return total;
};

console.log(somaInfinita2(1, 5, 10));

console.log(somaInfinita2(1, 2, 3, 4, 5, 6, 7, 7, 8, 9)); */

// 25 - Destructuring em objetos
/* const userDetails = {
  firstName: "Matheus",
  lastName: "Martins",
  job: "Programador"
}

const {firstName, lastName, job} = userDetails;

console.log(lastName);

// Renomeando

const {firstName : primeiroNome} = userDetails;

console.log(primeiroNome);
 */

// 26 - Destructuring em arrays
const myList = ["Avião", "Balsa", "Carro", "Drone"];

const [veiculoA, veiculoB, veiculoC, veiculoD] = myList;

console.log(veiculoD);

// 27 - json
const myJson =
  '{"name": "Matheus","age": 25, "skills": ["PHP", "JavaScript", "Python"]}';

// 28 - convertendo JSON em Objeto e Objeto em JSON

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(typeof myObject);

console.log(myObject.age);

const myNewJSON = JSON.stringify(myObject);

console.log(myNewJSON);

console.log(typeof myNewJSON);

// json invalido
const badJson =
  '{"name": Matheus,"age": 25, "skills": ["PHP", "JavaScript", "Python"]}';



