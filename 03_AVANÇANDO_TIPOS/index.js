"use strict";
// 01 - Tipo Array
let numbers = [1, 2, 3];
numbers.push(5);
//numbers = 'teste' vai dar erro pois nesse array só aceita numeros
console.log(numbers);
console.log(numbers[2]);
let nomes = ["Roberth", "Vieira"];
//nomes = 2 vai dar erro pois o valor é numerico e nesse array só pode string
console.log(nomes);
// 02 - Outras Sintaxes de Array
let nums = [100, 200];
nums.push(300);
console.log(nums);
//nums.push("teste") erro pois o tipo não aceita numeros
console.log(nums[5]); //o ts não impede que seja imprimido no console o undefined
// 03 - Tipo Any
const arr1 = [1, 'teste', true, { nome: "Roberth" }];
arr1.push(2);
arr1.push('teste 2');
arr1.push(false);
console.log(arr1);
// 4 - Tipos em parâmetros de funçoes 
function myFunction(a, b) {
    console.log(a + b);
}
myFunction(4, 5);
//myFunction('a' + 'b') vai dar erro pois foi passado dois parametro na função definidos com tipo number logo a chamada da função só vai aceitar numeros
// 05 - Tipos em retorno de funções
function greeting(name) {
    //return 5 erro por o retorno vai ser string 
    return `Olá ${name}`;
}
console.log(greeting('Roberth'));
//console.log(greeting(123)); vai impedir por inferencia 
