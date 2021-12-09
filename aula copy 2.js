// aritmeticos

let altura = 1.73;
let peso = 90;
let imc;
function calcula(altura,peso){
    imc = peso-- / altura ** 2;
}
function multi(valor){
    return valor ** 2
}
console.log(altura,peso);
calcula(altura,peso);
console.log(imc); 
console.log(multi(imc)); 