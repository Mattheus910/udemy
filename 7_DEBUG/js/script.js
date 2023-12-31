// 1 - Strict
"use strict";

// opa = "teste";
const opa = "teste";

// const undefined = 10;

// delete [].lenght;

// 2 - console.log
let a = 1;
let b = 2;

if (a == 1) {
  a = b + 2;
}

console.log(a, b);

for (let i = 0; i < b; i++) {
  a = a + 2;
  console.log(a);
}

if (a > 5) {
  a = 25;
}

console.log(a);

// 3 - debugger
let c = 1;
let d = 2;

if (c == 1) {
  c = d + 2;
}

//debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
}

//debugger;

if (c > 5) {
  c = 25;
}

//debugger;

// - 4 tratamento de dados
function checkNumber(n){
    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Valor invalido");
        return;
    }
    console.log("Valor Correto");
    return result;
}

checkNumber(5);
checkNumber("45");
checkNumber({});
checkNumber("Teste");

// 5 - Excepitions
let x = 10;

if(x != 11) {
   // throw new Error("O valor de x não pode ser diferente de 11!");
}

// 6 try catch

try{
    const soma = x + y;
} catch(error){
    console.log(`Erro no codigo ${error}`);
}

// 7 - finally

try {
    const value = checkNumber("1");
  
    if (!value) {
      throw new Error("Valores inválidos!");
    }
  } catch (error) {
    console.log(`Opa, aconteceu um problema: ${error}`);
  } finally {
    console.log("O Código foi executado!");
  }
// 8 - Assertions

function checkArray(arr){
    if(arr.length === 0) {
        throw new Error("O arrray precisa ter elementos.");
    } else {
        console.log(`O array possui ${arr.length} elementos.`);
    }
}

checkArray([4, 5, 7, 6, 9, 3, 4, 5, 6, 8]);

