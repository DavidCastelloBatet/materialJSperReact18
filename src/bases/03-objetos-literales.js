// Objetos literales


const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 56432,
    lat: 14.43,
    lng: 23.03,
  }
}

console.table(persona)

// para copiar valores de objeto literal con el operador Spread

const persona2 = {...persona};
persona2.direccion.ciudad = 'David';
console.table(persona2)