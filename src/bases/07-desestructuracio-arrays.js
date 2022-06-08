// Desestructuració d'arrays

const panteon = ['Zeus', 'Ares', 'Atenea', 'Afrodita']

const [ , , atenas, ] = panteon;
console.log(atenas);






const retornarArreglo = () => {
  return ['abc', 123]
}

const [letras, numeros] = retornarArreglo();
console.log(`Les lletres son ${letras} i els numeros son ${numeros}`);





// simulacio del hook  useState
const retornarPanteo = ( valor ) => {
  return [valor, () => { console.log('Hola Panteo') }]
}

const [valor, funcio ] = retornarPanteo('Atenea');
console.log(valor);
funcio();