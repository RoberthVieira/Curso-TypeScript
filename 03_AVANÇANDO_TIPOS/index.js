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
// 06 - Funções anônimas em TS
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary)) Erro pois o parseFloat é um metodo para string 
    //console.log(sallary);
}, 2000);
// 7 - Tipos Objeto
function passaCoordenadas(coord) {
    console.log("Coordenada x" + coord.x);
    console.log("Coordenada x" + coord.y);
}
const objCoord = { x: 328, y: 297 };
passaCoordenadas(objCoord);
const pessoaObj = { nome: 'Roberth', sobrenome: 'Vieira' };
console.log(pessoaObj);
// 8 - Propriedades opcionais
function showNumbers(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
//showNumbers(1) não vai chamar a função pois na função foi pedido tres parametros e um é opcional portanto precisario de no minimo mais um e na chamada foi passado um, isso nãoaconteceria se tivessemos passado o sinal de parametro opcional
// 9 - Validação da propriedade opcional (maneira certa de fazer uma propriedade ser opcional)
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Roberth"));
console.log(advancedGreeting("Roberth", "Vieira"));
// 10 - Union types
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
;
showBalance(100);
showBalance("500"); //vai imprimir os dois pois o union types permite pois aceita string e numbers
// 11 - Avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return 'Usuario não aprovado!';
    }
    return `A função do usuario é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
function showCords(obj) {
    console.log(`x: ${obj.x} y: ${obj.y} z${obj.z}`);
}
const coordsObj = {
    x: 10,
    y: 15,
    z: 16
};
showCords(coordsObj);
const somePerson = { name: "Roberth", age: 27 }; //tudo que tiver tipado com interface tem que atender oque a interface esta pedindo, do catrario dara erro
console.log(somePerson);
//type personType ={
//age: number      //diferente da interface o type alias não aceita essas incrementações e como se o type fosse uma const e a interface um let
//}
// 15 - Literal Types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é ${direction}`);
}
showDirection("left");
// 16 - Non-Null Assertion Operator
const p = document.getElementById('some_p');
console.log(p.innerText);
//17 - Bigint
let n;
//n = 1 não satisfaz o bigint
n = 1000n;
console.log(n);
//18 - Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
