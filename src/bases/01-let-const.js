
// Variables i constantes

const nombre = 'David';
const apellido = 'Castelló';

let valorDado = 5;

console.log(nombre, apellido, valorDado)

// scope de las variables

if (true) {
  let valorDado = 3;
  const nombre = 'Peter';

  console.log(valorDado, nombre);
}

console.log(valorDado)