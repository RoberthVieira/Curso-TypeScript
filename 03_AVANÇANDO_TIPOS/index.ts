
// 01 - Tipo Array
let numbers: number[]= [1, 2, 3];
numbers.push(5);
//numbers = 'teste' vai dar erro pois nesse array só aceita numeros
console.log(numbers);
console.log(numbers[2])

let nomes: string[] = ["Roberth", "Vieira"];
//nomes = 2 vai dar erro pois o valor é numerico e nesse array só pode string
console.log(nomes);




// 02 - Outras Sintaxes de Array
let nums: Array<Number> = [100, 200];
nums.push(300);
console.log(nums);
//nums.push("teste") erro pois o tipo não aceita numeros
console.log(nums[5]); //o ts não impede que seja imprimido no console o undefined




// 03 - Tipo Any
const arr1: any = [1 , 'teste', true, {nome: "Roberth"}];
arr1.push(2);
arr1.push('teste 2')
arr1.push(false);
console.log(arr1)




// 4 - Tipos em parâmetros de funçoes 
function myFunction (a: number, b:number) {
    console.log(a + b);
}
myFunction(4 , 5);
//myFunction('a' + 'b') vai dar erro pois foi passado dois parametro na função definidos com tipo number logo a chamada da função só vai aceitar numeros





// 05 - Tipos em retorno de funções
function greeting(name:string): string {
    //return 5 erro por o retorno vai ser string 
    return `Olá ${name}`;
}
console.log(greeting('Roberth'));
//console.log(greeting(123)); vai impedir por inferencia 





// 06 - Funções anônimas em TS
setTimeout(function() {

    const sallary: number = 1000;

    //console.log(parseFloat(sallary)) Erro pois o parseFloat é um metodo para string 

    //console.log(sallary);

}, 2000)





// 7 - Tipos Objeto
function passaCoordenadas(coord: {x: number, y:number}){
    console.log("Coordenada x" + coord.x)
    console.log("Coordenada x" + coord.y)
}
const objCoord = {x: 328, y: 297};
passaCoordenadas(objCoord);

const pessoaObj:{nome: string, sobrenome: string}={nome: 'Roberth', sobrenome: 'Vieira'};
console.log(pessoaObj);