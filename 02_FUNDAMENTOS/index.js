"use strict";
// 1 - Number
let n = 10;
console.log(n);
n = 16;
console.log(typeof n);
const m = 15.458;
console.log(typeof m);
console.log(m);
console.log(m.toPrecision(3));
// 2 - String
let text = "Isso é um texto";
console.log(text.toUpperCase());
let fullName = "Vieira";
console.log(typeof fullName);
text = text + fullName;
console.log(text);
// 3 - Boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - Annotation e Inference
const ann = 'test';
let inf = 'test';
//inf = 1 vai dar erro por que através do inference o TS ja definiu o tipo de variavel
// 5 - Compilando automaticamente
console.log("Compilou automaticamente, pois foi usado comando tsc -w.");
