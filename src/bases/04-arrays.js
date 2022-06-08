// Arrays amb JS

const arreglo = [1, 2, 3, 4];
console.log(arreglo);


// añadir valores con el Spread Operator
let arreglo2 = [...arreglo, 5];
console.log(arreglo2);


// nuevo arreglo con el metodo map
let arreglo3 = arreglo2.map((elemento) => {
  return elemento * 2;
})

console.log(arreglo3)


// trabajo con el foreach
let arreglo4 = [];
arreglo3.forEach((elemento) => {
  console.log(elemento);
  arreglo4 = [...arreglo4, elemento * 2];
  return arreglo4;
})
console.log(arreglo4)