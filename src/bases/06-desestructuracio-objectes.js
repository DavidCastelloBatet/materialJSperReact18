// Desestructuracion de objetos

const persona = {
  nombre: 'David',
  edat: 49,
  clau: 'Hedera Helix'
};

const persona2 = {
  nombre: 'Lurdes',
  edat: 43,
  clau: 'Lurdix'
}

// extraiem de l'objecte persona les propietats i les
// asigno a noves constants respectivament.
// podem renombrar les propietats:  nombre:nom
const {nombre:nom, edat, clau} = persona;

console.log(nom);
console.log(edat);
console.log(clau)

// Puc desestructurar a una funcio,un objecte pasat com
// argument. 
const retornaPersona = ({nombre, edat, clau, rango = 'soldado'}) => {
  console.log(nombre);
  console.log(edat);
  console.log(clau);
  console.log(rango);
}

retornaPersona(persona2);


// Puc desestructurar a una funcio,un objecte pasat com
// argument i retornar les propietats que m'interessin.
const ferServir = ({nombre, edat, clau, rango = 'soldado'}) => {
  return {
    nombreClave: clau,
    anys: edat,
    latlng: {
      lat: 14,
      lng: 15
    }
  }
}

const {nombreClave, anys, latlng} = ferServir(persona2);
console.log(nombreClave, anys);

const {lat, lng} = latlng;
console.log(lat, lng);