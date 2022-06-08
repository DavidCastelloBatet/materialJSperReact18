// Funcions amb JS

// Normal (no recomendada)
function saludo(nom){
  return `Hola ${nom}, des de saludo, (no recomenat)`;
}
console.log(saludo('David'));

// Normal (recomenada. s'eviten reasignacions no volugudes)
const saludo2 = function(nom){
  return `Hola ${nom}, des de saludo 2 (forma normal recomenada)`;
}
console.log(saludo2('David'));


// Arrow Function
const saludo3 = nom => `Hola ${nom}, des de saludo 3 amb arrow function`;
console.log(saludo3('David'));

const saludo4 = () => `Hola mon, des de saludo 4 amb arrow function`;
console.log(saludo4());

const user = () => {
  return ({
    clave: 'abcd',
    usuario: 'David'
  })
}
console.log(user());

// TREBALL
// 1.- Transformar la seguent funcio a Arrow Function
function getUsuarioActivo(nom){
  return {
    uid: '1234',
    username: nom
  }
}
const usuarioActivo = getUsuarioActivo('David');
console.log(usuarioActivo);
// 2.- Retornar un objecte implicit
const usuariActiu = nom => ( {uid: '1234', username: nom} );
// 3.- Proves
console.log(usuariActiu('Josep'));
console.log(usuariActiu('Pere'));
console.log(usuariActiu('Joan'));
