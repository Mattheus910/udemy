// 1 - Number
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

// 2 - Ops. aritméticas
console.log(2 + 4);
console.log(10 - 5);
console.log(2 * 50);
console.log(20 / 2);

console.log(5 + (4 * 2));

// 3 - Special numbers
console.log(typeof Infinity);

console.log(typeof -Infinity);

console.log(12 * "assd");

console.log(typeof NaN);

// 4 - Strings

console.log("Um texto");
console.log('Mais um texto');
console.log('Mais um texto');
console.log('13');

console.log(typeof "Um texto");
console.log(typeof 'Mais um texto');

// 5 - Simbolos especiais em string
console.log('Testando a \nquebra de linha');

console.log('Espaçamento \t de tab');

// 6 - Concatenação
console.log("Oi, " + "tudo " + "bem?");

console.log(`Testando ` + `com ` + `crase!`);

// 7 - Template Strings
console.log(`A soma de 2 + 2 é : ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// 8 - Boolean
console.log(true); 
 
console.log(6 > 20); 

console.log(30 > 10)

console.log(typeof false); 

// 9 - Comparações
console.log(5 <= 5);

console.log(5 < 5);

console.log(10 == 10);

console.log(10 == 9);

console.log(10 != 9);

// 10 - Idêntico
console.log(9 == "9");

console.log(9 === "9");

console.log(9 != "9");

console.log(9 !== "9");

// 11 - op logico na prática
console.log(true && true);

console.log(true && false);

console.log(5 > 2 && 2 < 10);

console.log(5 > 2 && "Matheus" === 1);

console.log(10 > 2 || 5 > 100);

console.log(!50 > 10);

// 12 - empty values
console.log(typeof null, typeof undefined);

console.log(null === undefined);

console.log(null == undefined);

console.log(null == false);

console.log(undefined == false);

// 13 - mudança de tipos
console.log(5 * null);

console.log("teste" * "opa");

console.log("10" + 1);

console.log("10" - 1);